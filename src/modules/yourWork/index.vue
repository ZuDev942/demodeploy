<script lang="ts" setup>
import { ref } from "vue";
import { Progress } from "ant-design-vue";
import draggable from "vuedraggable";
import { TaskDetailModal } from "@/components";

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

const isShowCallLog = ref<boolean>(false);

function hideModal() {
  isShowCallLog.value = false;
}

function getCallLog() {
  isShowCallLog.value = !isShowCallLog.value;
}
</script>

<template>
  <div class="project">
    <h1 class="project__title">Projects</h1>

    <!-- List project -->
    <div class="project__contain">
      <div class="project__item" v-for="item in 5" :key="item + 's'">
        <img src="@/assets/images/bar-graph.png" alt="" />
        <div class="project__name">
          <h1>MASTER_DEV</h1>
          <p>MASTER_DEV</p>
        </div>
      </div>
    </div>
  </div>

  <div class="work">
    <h1 class="project__title">Tasks</h1>

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
              <div class="task__item" @click="getCallLog()">
                <div class="task__wrap">
                  <img src="@/assets/images/task.png" alt="" />
                  <div class="task__name">{{ meal }}</div>
                </div>
                <div>
                  <Progress
                    :stroke-color="'#2BC48A'"
                    :percent="69"
                    status="active"
                  ></Progress>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <div class="task">
          <h1>PENDING</h1>
          <draggable v-model="pending" tag="ul" group="meals" :animation="300">
            <template #item="{ element: meal }">
              <div class="task__item">
                <div class="task__wrap">
                  <img src="@/assets/images/task.png" alt="" />
                  <div class="task__name">{{ meal }}</div>
                </div>
                <div>
                  <Progress
                    :stroke-color="'#2BC48A'"
                    :percent="69"
                    status="active"
                  ></Progress>
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
                  <img src="@/assets/images/task.png" alt="" />
                  <div class="task__name">{{ meal }}</div>
                </div>
                <div>
                  <Progress
                    :stroke-color="'#2BC48A'"
                    :percent="69"
                    status="active"
                  ></Progress>
                </div>
              </div>
            </template>
          </draggable>
        </div>

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
                  <img src="@/assets/images/task.png" alt="" />
                  <div class="task__name">{{ meal }}</div>
                </div>
                <div>
                  <Progress
                    :stroke-color="'#2BC48A'"
                    :percent="69"
                    status="active"
                  ></Progress>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <div class="task">
          <h1>CLOSED</h1>
          <draggable
            v-model="completed"
            tag="ul"
            group="meals"
            :animation="300"
          >
            <template #item="{ element: meal }">
              <div class="task__item">
                <div class="task__wrap">
                  <img src="@/assets/images/task.png" alt="" />
                  <div class="task__name">{{ meal }}</div>
                </div>
                <div>
                  <Progress
                    :stroke-color="'#2BC48A'"
                    :percent="69"
                    status="active"
                  ></Progress>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>

    <TaskDetailModal
      :visible="isShowCallLog"
      @call="getCallLog"
      @hide="hideModal"
    >
    </TaskDetailModal>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
