import { AxiosResponse } from 'axios';

import { httpClient } from '@/core';

class ShopService {
  async getNewRegistationList(params: any) {
    const res: AxiosResponse = await httpClient.get('v1/posts', {
      params,
    });

    return res.data;
  }

  async getShopTaskList(params: any) {
    const res: AxiosResponse = await httpClient.get('v1/cs/shop-task/list', {
      params,
    });

    return res.data;
  }

  async postMarkCompleted(taskId: number) {
    const res: AxiosResponse = await httpClient.post(`v1/cs/shop-task/mark-completed/${taskId}`);

    return res.data;
  }

  async postMarkCallAgain(taskId: number) {
    const res: AxiosResponse = await httpClient.post(`v1/cs/shop-task/mark-call-again/${taskId}`);

    return res.data;
  }

  async getCountShopTask() {
    const res: AxiosResponse = await httpClient.get('v1/cs/shop-task/count');

    return res.data;
  }

  async getListCallLog(params: any) {
    const res: AxiosResponse = await httpClient.get('v1/cs/shop-task/call-log/list', {
      params,
    });

    return res.data;
  }

  async postAddCallLog(params: any) {
    const res: AxiosResponse = await httpClient.post('v1/cs/shop-task/call-log/add', params);

    return res.data;
  }
}

export const shopService = new ShopService();
