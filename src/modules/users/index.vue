<script lang="ts" setup>
import { reactive, ref, computed, watch, onMounted } from "vue";
import { Button, InputSearch, message } from "ant-design-vue";
import {
  DeleteOutlined,
  PlusOutlined,
  FilterOutlined,
} from "@ant-design/icons-vue";

import type { IDataSource } from "@/components";
import type { SelectProps } from "ant-design-vue";
import { map, findIndex } from "lodash";
import {
  DataTable,
  ImageDefault,
  TimeOption,
  CallLogModal,
} from "@/components";
import { shopService } from "@/services";
import { useCurrentPage } from "@/store";
import { subYears, format } from "date-fns";
import { crossSiteEvent } from "@/shared";

// interface IReqParams {
//   taskType?: number;
//   from?: string;
//   to?: string;
//   limit?: number;
//   isCallAgain?: any;
// }

// const PAGE_SIZE = 10;

// const reqParams = reactive<IReqParams>({
//   taskType: 0,
//   from: format(subYears(new Date(), 10), "yyyy-MM-dd"),
//   to: format(new Date(), "yyyy-MM-dd"),
//   limit: PAGE_SIZE,
//   isCallAgain: null,
// });

// const currentPage = computed(() => {
//   return useCurrentPage();
// });

const dataSource = reactive<IDataSource>({
  loading: false,
  noDataText: "Không có shop nào",
  pagination: {
    totalPage: 0,
    page: 1,
  },
  data: [1, 2, 3, 4, 5, 6, 7, 5, 5, 3],
  columns: [
    {
      title: "No.",
      width: "5%",
      scopedSlots: "no",
      className: "align-top",
    },
    {
      title: "ID",
      //   width: "50%",
      scopedSlots: "id",
      className: "align-top",
    },
    {
      title: "Fullname",
      dataIndex: "action",
      scopedSlots: "fullname",
      className: "align-top",
    },
    {
      title: "Role",
      dataIndex: "action",
      scopedSlots: "role",
      className: "align-top",
    },
    {
      title: "Phone",
      dataIndex: "action",
      scopedSlots: "phone",
      className: "align-top",
    },
    {
      title: "Email",
      dataIndex: "action",
      scopedSlots: "email",
      className: "align-top",
    },
    {
      title: "Signday",
      dataIndex: "action",
      scopedSlots: "signday",
      className: "align-top",
    },
    {
      title: "",
      dataIndex: "action",
      scopedSlots: "action",
      className: "align-top",
    },
  ],
});

const listStatus = ref<SelectProps["options"]>([
  {
    value: null,
    label: "Trạng thái",
  },
  {
    value: 0,
    label: "Chưa liên hệ",
  },
  {
    value: 1,
    label: "Liên hệ lại",
  },
]);

const isShowCallLog = ref<boolean>(false);
const isStatusCallLog = ref<boolean>(false);
const options = ref<any[]>();
const taskId = ref<number>(0);
const isCallAgain = ref<number | any>(null);

const lastShop = ref<any[]>([
  {
    after: "",
  },
]);
const callLogIds = ref<any[]>([]);

function handleLoadPage(current: any) {
  dataSource.pagination.page = current.page;
  console.log("a");
  //   getShopTaskList();
}

const value = ref<string>();
</script>

<template>
  <div class="page h-full">
    <div class="page__top">
      <div>
        <InputSearch
          v-model:value="value"
          placeholder="Search by ID, name..."
          style="width: 200px"
        />
      </div>

      <div>
        <Button class="btn" size="small">
          <FilterOutlined />
          Inactive
        </Button>
        <Button class="btn" size="small">
          <PlusOutlined />
          Create Account
        </Button>
      </div>
    </div>

    <div class="content">
      <DataTable :dataSource="dataSource" @table-change="handleLoadPage">
        <template #no="{ record }">
          <div class="flex items-center">1</div>
        </template>

        <template #id="{ record }"> acc006 </template>

        <template #fullname="{ record }"> Nguyen Thanh A </template>
        <template #role="{ record }"> Member </template>
        <template #phone="{ record }"> 0933422342 </template>
        <template #email="{ record }"> nta@911.com </template>
        <template #signday="{ record }"> 11/21/2299 </template>
        <template #action="{ record }">
          <DeleteOutlined />
        </template>
      </DataTable>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
