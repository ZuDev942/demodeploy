import type { TableColumnType } from "ant-design-vue";

export interface IColumn extends TableColumnType {
  scopedSlots?: string;
}

export interface IDataTable {
  loading?: boolean;
  noDataText?: string;
  data: any[];
  columns: IColumn[];
}
