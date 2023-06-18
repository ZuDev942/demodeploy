<script lang="ts" setup>
import { toRefs, computed } from "vue";
import { Table, Button } from "ant-design-vue";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons-vue";

import { IDataTable } from "./types";

interface IProps {
  dataSource: IDataTable;
}

const props = defineProps<IProps>();
const { dataSource } = toRefs(props);

const emit = defineEmits<{
  (e: "tableChange", params): void;
}>();
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
      <template #emptyText>
        {{ dataSource.noDataText || "Không có dữ liệu" }}
      </template>
    </Table>

    <!--  -->
  </div>
</template>

<style lang="scss" scoped src="./styles.scss"></style>
