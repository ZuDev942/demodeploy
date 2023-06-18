<script lang="ts" setup>
import { ref, reactive } from "vue";
import { Badge, Calendar, Tabs, TabPane } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { Dayjs } from "dayjs";

const value = ref<Dayjs>();

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "1.This is warning event." },
        { type: "success", content: "2.This is usual event." },
      ];
      break;
    case 17:
      listData = [
        { type: "warning", content: "1.This is warning event." },
        { type: "success", content: "2.This is usual event." },
        { type: "error", content: "3.This is error event.", id: 1 },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "1.This is warning event" },
        { type: "success", content: "2.This is very long usual event。。...." },
        { type: "error", content: "3.This is error event 1." },
        { type: "error", content: "4.This is error event 2." },
        { type: "error", content: "5.This is error event 3." },
        { type: "error", content: "6.This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const activeKey = ref<string>("1");
</script>

<template>
  <div class="schedule">
    <Tabs v-model:activeKey="activeKey" type="card">
      <!-- Daily report -->
      <TabPane key="1" tab="Personal">
        <div class="daily">
          <Calendar v-model:value="value">
            <template #dateCellRender="{ current }">
              <ul class="events">
                <li v-for="item in getListData(current)" :key="item.content">
                  <Badge :status="item.type" :text="item.content" />
                </li>
              </ul>
            </template>
          </Calendar>
        </div> 
      </TabPane>

      <!-- List member report -->
      <TabPane key="2" tab="Branch"> 

      </TabPane>
    </Tabs>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
