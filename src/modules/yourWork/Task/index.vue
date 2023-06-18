<script lang="ts" setup>
import { ref } from "vue";
import {
  Tabs,
  TabPane,
  Tooltip,
  Button,
  InputSearch,
  Progress,
} from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";

import draggable from "vuedraggable";

const notstarted = ref([
  "Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec Chicken",
]);

const pending = ref([
  "Bat Cap nhat du an moi, tien do lam viec soup",
  "Spicy Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec from Taco Bell",
]);

const processing = ref([
  "Bat Cap nhat du an moi, tien do lam viec soup",
  "Spicy Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec from Taco Bell",
]);

const completed = ref([
  "Bat Cap nhat du an moi, tien do lam viec soup",
  "Spicy Cap nhat du an moi, tien do lam viec",
  "Cap nhat du an moi, tien do lam viec from Taco Bell",
]);

const activeKey = ref<string>("1");
const value = ref<string>("");
</script>

<template>
  <div class="tasks">
    <Tabs v-model:activeKey="activeKey" type="card">
      <!-- Profile -->
      <TabPane key="1" tab="ISSUE">
        <div class="task__scroll">
          <div class="task__contain">
            <div class="task">
              <h1>NOT STARTED</h1>
              <draggable
                v-model="notstarted"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>

                    <div class="task__des">
                      <div class="task__detail">
                        <img src="@/assets/images/bookmark.png" alt="" />
                        <p>Popup task detail</p>
                      </div>

                      <div class="task__staff">
                        <Tooltip>
                          <template #title>Nguyen Thanh A</template>
                          <img src="@/assets/images/avatar.jpeg" alt="" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="task">
              <h1>PENDING</h1>
              <draggable
                v-model="pending"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>

                    <div class="task__des">
                      <div class="task__detail">
                        <img src="@/assets/images/bookmark.png" alt="" />
                        <p>Popup task detail</p>
                      </div>

                      <div class="task__staff">
                        <Tooltip>
                          <template #title>Nguyen Thanh A</template>
                          <img src="@/assets/images/avatar.jpeg" alt="" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="task">
              <h1>PROCESSING</h1>
              <draggable
                v-model="processing"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>

                    <div class="task__des">
                      <div class="task__detail">
                        <img src="@/assets/images/bookmark.png" alt="" />
                        <p>Popup task detail</p>
                      </div>

                      <div class="task__staff">
                        <Tooltip>
                          <template #title>Nguyen Thanh A</template>
                          <img src="@/assets/images/avatar.jpeg" alt="" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="task">
              <h1>COMPLETED</h1>
              <draggable
                v-model="notstarted"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>

                    <div class="task__des">
                      <div class="task__detail">
                        <img src="@/assets/images/bookmark.png" alt="" />
                        <p>Popup task detail</p>
                      </div>

                      <div class="task__staff">
                        <Tooltip>
                          <template #title>Nguyen Thanh A</template>
                          <img src="@/assets/images/avatar.jpeg" alt="" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="task">
              <h1>CLOSED</h1>
              <draggable
                v-model="notstarted"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>

                    <div class="task__des">
                      <div class="task__detail">
                        <img src="@/assets/images/bookmark.png" alt="" />
                        <p>Popup task detail</p>
                      </div>

                      <div class="task__staff">
                        <Tooltip>
                          <template #title>Nguyen Thanh A</template>
                          <img src="@/assets/images/avatar.jpeg" alt="" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
          </div>
        </div>
      </TabPane>

      <!-- Contract -->
      <TabPane key="2" tab="TASK">
        <div class="task__scroll">
          <div class="task__contain">
            <div class="task">
              <h1>NOT STARTED</h1>
              <draggable
                v-model="notstarted"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>
                    <!-- Processing -->
                    <div>
                      <Progress
                        :stroke-color="{
                          from: '#2bc48a',
                          to: '#2bc48a',
                        }"
                        :percent="69"
                        status="active"
                      ></Progress>
                    </div>

                    <!--  -->
                    <div class="task__des2">
                      <div class="task__category">
                        <img src="@/assets/images/label.png" alt="" />
                        <p>New development</p>
                      </div>

                      <Tooltip>
                        <template #title>Actual time/ Estimate time</template>
                        <div class="task__actual">
                          <img src="@/assets/images/checked.png" alt="" />
                          <p>0/1</p>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <div class="task">
              <h1>PENDING</h1>
              <draggable
                v-model="pending"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>
                    <!-- Processing -->
                    <div>
                      <Progress
                        :stroke-color="{
                          from: '#2bc48a',
                          to: '#2bc48a',
                        }"
                        :percent="69"
                        status="active"
                      ></Progress>
                    </div>

                    <!--  -->
                    <div class="task__des2">
                      <div class="task__category">
                        <img src="@/assets/images/label.png" alt="" />
                        <p>New development</p>
                      </div>

                      <Tooltip>
                        <template #title>Actual time/ Estimate time</template>
                        <div class="task__actual">
                          <img src="@/assets/images/checked.png" alt="" />
                          <p>0/1</p>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>

            <!--  -->
            <div class="task">
              <h1>PROCESSING</h1>
              <draggable
                v-model="processing"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>
                    <!-- Processing -->
                    <div>
                      <Progress
                        :stroke-color="{
                          from: '#2bc48a',
                          to: '#2bc48a',
                        }"
                        :percent="69"
                        status="active"
                      ></Progress>
                    </div>

                    <!--  -->
                    <div class="task__des2">
                      <div class="task__category">
                        <img src="@/assets/images/label.png" alt="" />
                        <p>New development</p>
                      </div>

                      <Tooltip>
                        <template #title>Actual time/ Estimate time</template>
                        <div class="task__actual">
                          <img src="@/assets/images/checked.png" alt="" />
                          <p>0/1</p>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
            <!--  -->
            <div class="task">
              <h1>COMPLETED</h1>
              <draggable
                v-model="completed"
                tag="ul"
                group="meals"
                :animation="300"
              >
                <template #item="{ element: meal }">
                  <div class="task__item">
                    <div class="task__wrap">
                      <div class="task__name">{{ meal }}</div>
                    </div>
                    <!-- Processing -->
                    <div>
                      <Progress
                        :stroke-color="{
                          from: '#2bc48a',
                          to: '#2bc48a',
                        }"
                        :percent="69"
                        status="active"
                      ></Progress>
                    </div>

                    <!--  -->
                    <div class="task__des2">
                      <div class="task__category">
                        <img src="@/assets/images/label.png" alt="" />
                        <p>New development</p>
                      </div>

                      <Tooltip>
                        <template #title>Actual time/ Estimate time</template>
                        <div class="task__actual">
                          <img src="@/assets/images/checked.png" alt="" />
                          <p>0/1</p>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
          </div>
        </div>
      </TabPane>

      <!-- Search -->
      <template #rightExtra v-if="activeKey === '1'">
        <InputSearch
          v-model:value="value"
          placeholder="Search this board..."
          style="width: 200px"
          class="input_search mr-4"
        />
        <Button><PlusOutlined /> Create Issue</Button>
      </template>

      <template #rightExtra v-if="activeKey === '2'">
        <InputSearch
          v-model:value="value"
          placeholder="Search this board..."
          style="width: 200px"
          class="input_search mr-4"
        />
        <Button><PlusOutlined /> Create Task</Button>
      </template>
    </Tabs>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
