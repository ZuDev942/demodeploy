<script lang="ts" setup>
import { toRefs } from "vue";
import { Modal } from "ant-design-vue";

const props = defineProps<{
  visible?: boolean;
}>();

const { visible } = toRefs(props);
</script>

<template>
  <div>
    <Modal
      v-model:visible="visible"
      wrapClassName="newStyle"
      :bodyStyle="{ padding: 0 }"
      :closable="false"
      :maskClosable="false"
      :footer="null"
    >
      as
    </Modal>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
