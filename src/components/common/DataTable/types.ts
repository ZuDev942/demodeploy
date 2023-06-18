import type { TableColumnType } from 'ant-design-vue';

export interface IColumn extends TableColumnType {
  scopedSlots?: string;
}

export interface IDataSource {
  loading?: boolean;
  noDataText?: string;
  data: any[];
  columns: IColumn[];
  pagination: {
    totalPage?: number;
    page: number;
  };
}
