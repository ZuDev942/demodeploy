<script lang="ts" setup>
import { ref } from "vue";
import { Tabs, Input, TabPane } from "ant-design-vue";

const value = ref<string>("account006");
const activeKey = ref<string>("1");
</script>

<template>
  <div class="tabs">
    <Tabs v-model:activeKey="activeKey">
      <!-- Profile -->
      <TabPane key="1" tab="PROFILE">
        <div class="profile">
          <div class="account">
            <h1>Account Info</h1>
            <div class="account__wrap">
              <div class="account__avatar">
                <img src="@/assets/images/avatar.jpeg" alt="" />
              </div>

              <div>
                <div class="account__box">
                  <div class="account__box--name">Employee ID</div>
                  <Input
                    v-model:value="value"
                    placeholder="Search by ID, name..."
                    style="width: 200px"
                    disabled
                  />
                </div>
                <div class="account__box">
                  <div class="account__box--name">Password</div>
                  <Input
                    v-model:value="value"
                    placeholder="Search by ID, name..."
                    style="width: 200px"
                  />
                </div>
                <div class="account__box">
                  <div class="account__box--name">Roles</div>
                  <Input
                    v-model:value="value"
                    placeholder="Search by ID, name..."
                    style="width: 200px"
                  />
                </div>
                <div class="account__box">
                  <div class="account__box--name">Permission Template</div>
                  <Input
                    v-model:value="value"
                    placeholder="Search by ID, name..."
                    style="width: 200px"
                  />
                </div>
                <div class="account__box">
                  <div class="account__box--name">Email Company</div>
                  <Input
                    v-model:value="value"
                    placeholder="Search by ID, name..."
                    style="width: 200px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="main">
            <h1>Main Info</h1>
            <div>
              <div class="account__box">
                <div class="account__box--name">Fullname</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                  disabled
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Shortname</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Gender</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Birthday</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Email Personal</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Address</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
              <div class="account__box">
                <div class="account__box--name">Signday</div>
                <Input
                  v-model:value="value"
                  placeholder="Search by ID, name..."
                  style="width: 200px"
                />
              </div>
            </div>
          </div>

          <div class="other">
            <h1>Other Info</h1>
          </div>
        </div>
      </TabPane>

      <!-- Contract -->
      <TabPane key="2" tab="CONTRACT">Content of Tab Pane 2</TabPane>
    </Tabs>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
