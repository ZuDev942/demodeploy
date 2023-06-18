import { defineStore } from 'pinia';
import { ICurrentPage } from './types';

export const useCurrentPage = defineStore('currentPage', {
  state: () =>
    ({
      taskType: 0,
    } as ICurrentPage),
});
