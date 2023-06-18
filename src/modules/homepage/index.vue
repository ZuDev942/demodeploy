<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Input, Button } from 'ant-design-vue';

import { useAuthEvent } from '@/shared';
import { RouteName } from '@/shared/constants';
import { crossSiteEvent, CROSS_SITE_EVENT_TYPE } from '@/shared';

const router = useRouter();
const tokenInput = ref<string>('');
const isShowBox = ref<boolean>(false);

onMounted(() => {
  document.addEventListener('keydown', detectedKeyPress);

  crossSiteEvent.next(CROSS_SITE_EVENT_TYPE.contentReady, { status: true });

  // set style iframe
  // crossSiteEvent.next(CROSS_SITE_EVENT_TYPE.styleIframe, {
  //   style: {
  //     width: '320px',
  //   },
  // });
});

onUnmounted(() => {
  document.removeEventListener('keydown', detectedKeyPress);
});

const detectedKeyPress = (e: KeyboardEvent) => {
  const key = e.which || e.keyCode;
  const ctrl = e.ctrlKey ? e.ctrlKey : key === 17 ? true : false;

  if (key === 81 && ctrl) {
    console.log('Ctrl + Q Pressed !');
    isShowBox.value = true;
  }

  return false;
};

const setToken = () => {
  console.log('tokenInput.value', tokenInput.value);

  localStorage.setItem(import.meta.env.VITE_ACCESS_TOKEN_NAME, tokenInput.value);
  router.push({ name: RouteName.NEW_REGISTATION });
};

useAuthEvent();
</script>

<template>
  <div v-if="isShowBox" class="p-4">
    <Input v-model:value="tokenInput" class="mb-3" type="text" />
    <Button type="primary" @click="setToken()">Set token</Button>
  </div>
</template>
