<script lang="ts" setup>
import { ref } from 'vue';
import { Button, Dropdown, Menu, MenuItem, Modal, RangePicker } from 'ant-design-vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import { format, endOfDay, endOfYesterday, subYears } from 'date-fns';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];

const sevenDaysBeforeDate = new Date(new Date().setDate(new Date().getDate() - 7));
const timeSelect = ref('Thời gian');
const visible = ref<boolean>(false);
const dateOption = ref<RangeValue>();
const dateFormat = 'YYYY/MM/DD';

const TIMES = [
  {
    id: 0,
    name: 'Thời gian',
    time: fromToDateFormat(subYears(new Date(), 10), new Date()),
    isActive: false,
  },
  {
    id: 1,
    name: 'Hôm nay',
    time: fromToDateFormat(new Date(), new Date()),
    isActive: false,
  },
  {
    id: 2,
    name: 'Hôm qua',
    time: fromToDateFormat(endOfYesterday(), new Date()),
    isActive: true,
  },
  {
    id: 3,
    name: '1 tuần',
    time: fromToDateFormat(sevenDaysBeforeDate, endOfDay(new Date())),
    isActive: false,
  },
  { id: 4, name: 'Tùy chọn', time: {}, isActive: false },
];

const emit = defineEmits<{
  (e: 'onSelectTime', params): void;
}>();

function fromToDateFormat(date1: any, date2: any) {
  return {
    from: format(date1, 'yyyy-MM-dd'),
    to: format(date2, 'yyyy-MM-dd'),
  };
}

function getOptionTime(time: any, id: number) {
  if (time && id !== 0) {
    return time.from;
  }
  return '';
}

function handleSelectTime(item: any) {
  if (item.id === 4) {
    visible.value = true;
  } else {
    timeSelect.value = item.name;
    emit('onSelectTime', item.time);
  }
}

function handleSelectOption() {
  TIMES[4].time = {
    from: dateOption.value?.[0].format('YYYY-MM-DD'),
    to: dateOption.value?.[1].format('YYYY-MM-DD'),
  };
  timeSelect.value = TIMES[4].name;
  emit('onSelectTime', TIMES[4].time);
  visible.value = false;
}

function handleCancel() {
  visible.value = false;
}
</script>

<template>
  <div class="timeOption">
    <Dropdown :trigger="['click']">
      <Button class="ant-dropdown-link" @click.prevent>{{ timeSelect }}</Button>
      <template #overlay>
        <Menu>
          <MenuItem
            v-for="(item, index) in TIMES"
            :key="index"
            :class="{ 'active-time': item.isActive }"
            @click="handleSelectTime(item)"
          >
            <p class="font-medium mb-0">{{ item.name }}</p>
            <p class="mb-0">{{ getOptionTime(item.time, item.id) }}</p>
          </MenuItem>
        </Menu>
      </template>
    </Dropdown>

    <!-- DatePicker -->
    <Modal
      v-model:visible="visible"
      :bodyStyle="{ padding: 0 }"
      :closable="false"
      :footer="null"
      @ok="handleCancel"
    >
      <div class="modal__header bg-ghtk-light text-white font-medium p-2">
        <p class="mb-0 text-center text-base">Tùy chọn hiển thị</p>
        <CloseOutlined class="icon__close" @click="handleCancel" />
      </div>
      <div class="p-4">
        <div class="flex justify-center mb-5">
          <RangePicker
            v-model:value="dateOption"
            :format="dateFormat"
            :placeholder="['Ngày bắt đầu', 'Ngày kết thúc']"
          />
        </div>
        <div class="flex justify-center">
          <Button type="primary" class="px-10 mr-2" @click="handleSelectOption">Xác nhận</Button>
          <Button class="px-10" @click="handleCancel">Hùy bỏ</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
