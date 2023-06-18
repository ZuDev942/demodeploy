<script lang="ts" setup>
import { reactive, ref, computed, watch, onMounted } from "vue";
import { Button, Popover, MenuItem } from "ant-design-vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

import { ImageDefault } from "@/components";

const collapsed = ref<boolean>(false);

</script>

<template>
  <section>
    <!-- Logo -->
    <div class="logo">
      <h1>HRM</h1>
    </div>

    <!-- Dashboard -->
    <div class="menu">
      <router-link class="menu__item" to="/shop-lives">
        <div class="item__img">
          <img src="@/assets/images/calendar.png" alt="" />
          <div class="item__name">Schedule</div>
        </div>
        <div class="item__arrow">
          <img src="@/assets/images/arrow-down.png" alt="" />
        </div>
      </router-link>

      <router-link class="menu__item" to="/">
        <div class="item__img">
          <img src="@/assets/images/project.png" alt="" />
          <div class="item__name">Project</div>
        </div>
        <div class="item__arrow">
          <img src="@/assets/images/arrow-down.png" alt="" />
        </div>
      </router-link>

      <router-link class="menu__item" to="/your-work">
        <div class="item__img">
          <img src="@/assets/images/yourwork.png" alt="" />
          <div class="item__name">Your Work</div>
        </div>
        <div class="item__arrow">
          <img src="@/assets/images/arrow-down.png" alt="" />
        </div>
      </router-link>

      <router-link class="menu__item" to="/users">
        <div class="item__img">
          <img src="@/assets/images/customer.png" alt="" />
          <div class="item__name">Users</div>
        </div>
        <div class="item__arrow">
          <img src="@/assets/images/arrow-down.png" alt="" />
        </div>
      </router-link>
    </div>


  </section>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
