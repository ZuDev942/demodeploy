<template>
    <div class="page">
      <div class="login">
        <img src="@/assets/images/hrm.png" alt="" />
        <h1>HRM</h1>
  
        <!-- Form -->
        <Form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <FormItem
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <Input v-model:value="formState.username" placeholder="Username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </Input>
          </FormItem>
  
          <FormItem
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <InputPassword
              v-model:value="formState.password"
              placeholder="Password"
            >
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </InputPassword>
          </FormItem>
  
          <FormItem class="flex justify-between">
            <FormItem name="remember" no-style>
              <Checkbox v-model:checked="formState.remember"
                >Remember me
              </Checkbox>
            </FormItem>
  
            <a class="login-form-forgot" href="">Forgot password</a>
          </FormItem>
  
          <FormItem class="flex justify-center">
            <Button
              html-type="submit"
              class="login-form-button"
            >
              LOG IN
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, reactive, ref } from "vue";
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
  import {
    Form,
    FormItem,
    Button,
    Input,
    InputPassword,
    Checkbox,
  } from "ant-design-vue";
  
  // =========== //
  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
  
  const formState = reactive<FormState>({
    username: "",
    password: "",
    remember: true,
  });
  
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const disabled = computed(() => {
    return !(formState.username && formState.password);
  });
  </script>
  <style scoped lang="scss" src="./styles.scss"></style>
  