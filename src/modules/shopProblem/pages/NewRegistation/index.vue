<script lang="ts" setup>
import { reactive, ref, computed, watch, onMounted } from 'vue';
import { Button, Select, message } from 'ant-design-vue';
import { DownOutlined } from '@ant-design/icons-vue';

import type { IDataSource } from '@/components';
import type { SelectProps } from 'ant-design-vue';
import { map, findIndex } from 'lodash';
import { DataTable, ImageDefault, TimeOption, CallLogModal } from '@/components';
import { shopService } from '@/services';
import { useCurrentPage } from '@/store';
import { subYears, format } from 'date-fns';
import { crossSiteEvent } from '@/shared';

interface IReqParams {
  taskType?: number;
  from?: string;
  to?: string;
  limit?: number;
  isCallAgain?: any;
}

const PAGE_SIZE = 10;

const reqParams = reactive<IReqParams>({
  taskType: 0,
  from: format(subYears(new Date(), 10), 'yyyy-MM-dd'),
  to: format(new Date(), 'yyyy-MM-dd'),
  limit: PAGE_SIZE,
  isCallAgain: null,
});

const currentPage = computed(() => {
  return useCurrentPage();
});

const dataSource = reactive<IDataSource>({
  loading: false,
  noDataText: 'Không có shop nào',
  pagination: {
    totalPage: 0,
    page: 1,
  },
  data: [],
  columns: [
    {
      title: 'Thông tin shop',
      width: '32%',
      scopedSlots: 'shopInfo',
      className: 'align-top',
    },
    {
      title: 'Lịch sử hoạt động',
      width: '50%',
      scopedSlots: 'history',
      className: 'align-top',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      scopedSlots: 'shopAction',
      className: 'align-top',
    },
  ],
});

const listStatus = ref<SelectProps['options']>([
  {
    value: null,
    label: 'Trạng thái',
  },
  {
    value: 0,
    label: 'Chưa liên hệ',
  },
  {
    value: 1,
    label: 'Liên hệ lại',
  },
]);

const isShowCallLog = ref<boolean>(false);
const isStatusCallLog = ref<boolean>(false);
const options = ref<any[]>();
const taskId = ref<number>(0);
const isCallAgain = ref<number | any>(null);

const lastShop = ref<any[]>([
  {
    after: '',
  },
]);
const callLogIds = ref<any[]>([]);

onMounted(() => {
  setParamsAndFetch(currentPage.value);
});

watch(currentPage.value, (val) => {
  setParamsAndFetch(val);
});

const setParamsAndFetch = (val) => {
  if (!val.taskType) {
    return;
  }

  reqParams.taskType = val.taskType;
  getShopTaskList();
};

// Method
async function getShopTaskList() {
  dataSource.loading = true;

  const res = await shopService
    .getShopTaskList({
      ...reqParams,
      page: dataSource.pagination.page,
    })
    .finally(() => (dataSource.loading = false));

  if (res.success) {
    dataSource.data = res.data.shop_tasks;
    dataSource.pagination.totalPage = res.data.total_page;
  }
}

async function handleShowCallLog(shopCode: string, id: number) {
  taskId.value = id;

  const res = await shopService.getListCallLog({ shopCode: shopCode });

  if (res.success) {
    options.value = map(res.data, (item) => {
      return {
        value: item.id,
        label: item.desc,
      };
    });

    const index = findIndex(dataSource.data, (o) => o.id === taskId.value);
    callLogIds.value = map(dataSource.data[index].call_log, (item) => item.call_log_id);
  }

  isShowCallLog.value = true;
}

async function handleMarkCallAgain(taskId: number) {
  if (!isStatusCallLog.value) {
    message.error('Vui lòng chọn call log', 2);
    return;
  }

  const res = await shopService.postMarkCallAgain(taskId);

  if (res) {
    message.success(res.message, 1);
    getShopTaskList();
  }
}

async function handleCompleted(taskId: number) {
  if (!isStatusCallLog.value) {
    message.error('Vui lòng chọn call log', 2);
    return;
  }

  const res = await shopService.postMarkCompleted(taskId);

  if (res) {
    message.success(res.message, 1);
    getShopTaskList();
  }
}

function handleLoadPage(current: any) {
  dataSource.pagination.page = current.page;

  getShopTaskList();
}

function handleSelectStatus(value: any, option) {
  dataSource.pagination.page = 1;
  reqParams.isCallAgain = value;
  lastShop.value = [
    {
      after: '',
    },
  ];
  getShopTaskList();
}

function handeSelectTime(time: any) {
  dataSource.pagination.page = 1;
  reqParams.from = time.from;
  reqParams.to = time.to;
  lastShop.value = [
    {
      after: '',
    },
  ];
  getShopTaskList();
}

function hideModal() {
  isShowCallLog.value = false;
}

function getCallLog(event: any) {
  isStatusCallLog.value = event.isStatus;
  isShowCallLog.value = false;
  const index = findIndex(dataSource.data, (o) => o.id === taskId.value);
  dataSource.data[index].call_log = event.data;
}

function handleChatShop(shopId: string) {
  const payload = {
    shop: {
      shop_id: shopId,
    },
  };
  crossSiteEvent.next('open_chat_box_with_shop', payload);
}

function formatCallLog(callLog) {
  if (callLog) {
    return callLog[0].desc;
  }

  return 'Chọn log cuộc gọi phù hợp';
}
</script>

<template>
  <div class="page h-full">
    <div class="headline text-[20px] px-3 py-5 flex justify-between items-center">
      <h3 class="font-medium mb-0">Shop đăng ký mới</h3>

      <div class="flex items-center">
        <div class="mx-1">
          <Select
            v-model:value="isCallAgain"
            :options="listStatus"
            placeholder="Trạng thái"
            @change="handleSelectStatus"
          >
            <template #suffixIcon></template>
          </Select>
        </div>

        <div class="mx-1">
          <TimeOption @on-select-time="handeSelectTime" />
        </div>
      </div>
    </div>

    <div class="p-3 content">
      <DataTable :dataSource="dataSource" @table-change="handleLoadPage">
        <template #shopInfo="{ record }">
          <div class="shopInfo">
            <div class="headline flex mb-2">
              <div class="mr-2">
                <ImageDefault :url="record.avatar" :name="record.shop_name" :size="48"></ImageDefault>
              </div>
              <div>{{ record.shop_name }} | {{ record.shop_tel }}</div>
            </div>

            <div class="devices flex flex-wrap mb-2">
              <div class="devices__item bg-gray-300 px-3 py-[2px] rounded-2xl mr-2 mb-1"># IOS 14.3</div>
              <div class="devices__item bg-gray-300 px-3 py-[2px] rounded-2xl mr-2 mb-1"># Ver1.1.03</div>
              <Button
                v-if="!record.is_call_again"
                class="border-ghtk-light text-ghtk-light h-7 py-0 px-3 rounded-2xl mr-2 mb-1"
                @click="handleMarkCallAgain(record.id)"
              >
                Liên hệ lại
              </Button>
            </div>
          </div>
        </template>

        <template #shopAction="{ record }">
          <div class="action flex items-center flex-col">
            <Button type="primary" class="action__item" @click="handleChatShop(record.shop_id)"
              >Chat shop</Button
            >
            <a
              class="mb-2 text-inherit focus:text-inherit hover:text-inherit"
              :href="`tel:${record.shop_tel}`"
            >
              <Button type="primary" class="action__item">Gọi shop</Button>
            </a>
            <Button type="primary" class="action__item" @click="handleCompleted(record.id)">
              Hoàn thành
            </Button>
          </div>
        </template>

        <template #history="{ record }">
          <div class="align-top">
            <div class="mb-7">
              <p v-for="(event, index) in record.shop_event" :key="index" class="font-medium mb-1">
                {{ event.desc }}
              </p>
            </div>
            <div class="callLog flex justify-between items-center">
              <div class="callLog__text text-ghtk-light font-medium">Call log gọi shop/KH</div>
              <Button
                class="rounded-md text-ghtk-gray"
                @click="handleShowCallLog(record.shop_code, record.id)"
              >
                {{ formatCallLog(record.call_log) }} <DownOutlined />
              </Button>
            </div>
          </div>
        </template>
      </DataTable>

      <CallLogModal
        :visible="isShowCallLog"
        :taskId="taskId"
        :options="options"
        :callLogIds="callLogIds"
        @call="getCallLog"
        @hide="hideModal"
      >
      </CallLogModal>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
