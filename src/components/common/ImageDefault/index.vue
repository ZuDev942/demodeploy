<script lang="ts" setup>
import { Avatar } from 'ant-design-vue';

const props = defineProps<{
  url?: string;
  name?: string;
  size?: number;
}>();

function getFirstLetter() {
  if (props.name) {
    return props.name.charAt(0);
  }
  return 'MO';
}
</script>

<template>
  <div class="defaultImage">
    <Avatar v-if="props.url" :size="props.size" :src="props.url"></Avatar>
    <Avatar v-else :size="props.size" style="color: #fff; background-color: #00904a">{{
      getFirstLetter()
    }}</Avatar>
  </div>
</template>
