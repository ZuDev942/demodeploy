<script lang="ts" setup>
import { Menu, MenuItem, Button } from "ant-design-vue";
</script>

<template>
  <div class="w-full flex flex-row">
    <!-- Logo -->
    <div></div>
    <!-- Menu -->
    <Menu mode="horizontal">
      <MenuItem key="mail">
        <template #icon>
          <mail-outlined />
        </template>
        Sản phẩm
      </MenuItem>

      <MenuItem key="app">
        <template #icon>
          <appstore-outlined />
        </template>
        Giải pháp
      </MenuItem>

      <MenuItem key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Lĩnh vực
        </a>
      </MenuItem>
    </Menu>

    <!-- Login -->
    <div>
      <Button>Đăng ký tư vấn</Button>
      <Button type="primary">Đăng nhập</Button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
