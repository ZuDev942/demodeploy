<script lang="ts" setup>
import { toRefs, computed } from "vue";
import { Table, Button } from "ant-design-vue";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons-vue";

import { IDataSource } from "./types";

interface IProps {
  dataSource: IDataSource;
}

const props = defineProps<IProps>();
const { dataSource } = toRefs(props);

const emit = defineEmits<{
  (e: "tableChange", params): void;
}>();

// const isDisabledNext = computed<boolean>(() => {
//   if (
//     dataSource.value.pagination.page === dataSource.value.pagination.totalPage ||
//     dataSource.value.pagination.totalPage === 1
//   ) {
//     return true;
//   }
//   return false;
// });

// const isDisabledPrev = computed<boolean>(() => {
//   if (dataSource.value.pagination.page === 1) {
//     return true;
//   }
//   return false;
// });

// function handleChangePage(isType: boolean) {
//   const page = isType ? dataSource.value.pagination.page + 1 : dataSource.value.pagination.page - 1;

//   emit('tableChange', {
//     isType: isType,
//     page,
//   });
// }
</script>

<template>
  <div class="h-full">
    <Table
      :dataSource="dataSource.data"
      :columns="dataSource.columns"
      bordered
      :pagination="false"
      :loading="dataSource.loading"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.scopedSlots">
          <slot
            :name="column.scopedSlots"
            :record="record"
            :column="column"
            :index="index"
          ></slot>
        </template>
      </template>
      <template #emptyText>{{
        dataSource.noDataText || "Không có dữ liệu"
      }}</template>
    </Table>

    <!-- <div class="h-10 flex items-center justify-end">
      <div class="mr-4 font-medium">
        Trang <span>{{ dataSource.pagination.page }}</span> /
        <span>{{ dataSource.pagination.totalPage !== 0 ? dataSource.pagination.totalPage : 1 }}</span>
      </div>
      <Button
        class="text-ghtk-light border-ghtk-light mr-2"
        :class="{ active: isDisabledPrev }"
        :disabled="isDisabledPrev"
        @click="handleChangePage(false)"
      >
        <DoubleLeftOutlined />
        Trang trước
      </Button>
      <Button
        class="text-ghtk-light border-ghtk-light"
        :disabled="isDisabledNext"
        :class="{ active: isDisabledNext }"
        @click="handleChangePage(true)"
      >
        Trang sau
        <DoubleRightOutlined />
      </Button>
    </div> -->
    <!--  -->
  </div>
</template>

<style lang="scss" scoped src="./styles.scss"></style>
