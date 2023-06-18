<script lang="ts" setup>
import { toRefs, ref, watch } from 'vue';
import { size } from 'lodash';
import { Modal, Button, Select, message, RadioGroup, RadioButton } from 'ant-design-vue';
import { CloseOutlined } from '@ant-design/icons-vue';
import { shopService } from '@/services';

const props = defineProps<{
  visible?: boolean;
  taskId?: number;
  options?: any;
  callLogIds?: any;
}>();

const { visible, options, taskId, callLogIds } = toRefs(props);

watch(callLogIds?.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

const reqParams = ref({
  task_id: taskId,
  call_log_ids: [],
  call_success: 1,
});
const isStatus = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'call', params: any): void;
  (e: 'hide'): void;
}>();

async function handleAddCallLog() {
  if (!size(reqParams.value.call_log_ids)) {
    message.error('Vui lòng chọn call log', 2);
    return;
  }

  const res = await shopService.postAddCallLog(reqParams.value);

  if (res.success) {
    message.success(res.message, 2);
    isStatus.value = true;
  }

  const data = {
    data: res.data,
    isStatus: true,
  };

  emit('call', data);
}

function hide() {
  // reqParams.value.call_log_ids = [];
  emit('hide');
}
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
      <div class="modal__header bg-ghtk-light text-white font-medium p-2">
        <p class="mb-0 text-center text-base">Call log gọi</p>
        <CloseOutlined class="icon__close" @click="hide" />
      </div>
      <div class="p-3">
        <div class="flex pb-5">
          <p class="w-1/3 font-medium text-ghtk-light mb-0">Call log gọi shop/KH</p>
          <div class="w-2/3">
            <Select
              v-model:value="reqParams.call_log_ids"
              mode="multiple"
              style="width: 100%"
              placeholder="Chọn call log"
              :options="options"
            >
              <template #option="{ label: label }">
                <span>
                  {{ label }}
                </span>
              </template>
            </Select>
          </div>
        </div>

        <div class="flex justify-end">
          <RadioGroup v-model:value="reqParams.call_success" button-style="solid">
            <RadioButton :value="0">Liên hệ không thành công</RadioButton>
            <RadioButton :value="1">Liên hệ thành công</RadioButton>
          </RadioGroup>
          <Button type="primary" class="rounded-full px-5 ml-2" @click="handleAddCallLog">Lưu</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
