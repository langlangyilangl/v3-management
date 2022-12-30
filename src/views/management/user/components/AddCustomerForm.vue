<template>
  <div>
    <Form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
      <FormItem label="姓名" name="customerName">
        <Input v-model:value="formState.customerName" />
      </FormItem>
      <FormItem label="类型">
        <RadioGroup v-model:value="formState.customerType">
          <Radio value="1">个人</Radio>
          <Radio value="2">供应商</Radio>
          <Radio value="2">工厂</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="电话" name="tel">
        <Input v-model:value="formState.tel" />
      </FormItem>
      <FormItem label="身份证号" name="cardId">
        <Input v-model:value="formState.cardId" />
      </FormItem>
      <FormItem label="银行卡号" name="bankNumber">
        <Input v-model:value="formState.bankNumber" />
      </FormItem>
      <FormItem label="银行" name="bankName">
        <Input v-model:value="formState.bankName" />
      </FormItem>
      <FormItem label="其他电话" name="otherTel">
        <Input v-model:value="formState.otherTel" />
      </FormItem>
      <FormItem label="供应商负责人" name="principalName">
        <Input v-model:value="formState.principalName" />
      </FormItem>
      <FormItem label="经手人" name="handName">
        <Input v-model:value="formState.handName" />
      </FormItem>
      <FormItem label="填报公司" name="handCompany">
        <Input v-model:value="formState.handCompany" />
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import { Form, FormItem, Input, Radio, RadioGroup } from 'ant-design-vue';
  import { Moment } from 'moment';
  import { reactive, UnwrapRef } from 'vue';
  interface FormState {
    customerName: string;
    customerType: 'factory' | 'supplier' | 'person' | undefined;
    registerDate: Moment | undefined;
    tel: string;
    cardId: string;
    bankNumber: string;
    bankName: string;
    otherTel: string;
    principalName: string;
    handName: string;
    handCompany: string;
  }
  const formState: UnwrapRef<FormState> = reactive({
    customerName: '',
    customerType: undefined,
    registerDate: undefined,
    tel: '',
    cardId: '',
    bankNumber: '',
    bankName: '',
    otherTel: '',
    principalName: '',
    handName: '喻湘宁',
    handCompany: '老喻回收',
  });

  const labelCol = { span: 4 };
  const wrapperCol = { span: 14 };

  const rules = {
    customerName: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { min: 2, max: 15, message: '长度应为两位到十五位', trigger: 'blur' },
    ],
    tel: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      {
        pattern: new RegExp(
          '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$',
        ),
        message: '请输入正确的手机号',
        trigger: 'blur',
      },
    ],
    cardId: [
      { required: true, message: '请输入身份证号', trigger: 'blur' },
      {
        pattern: new RegExp(
          '^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$',
        ),
        message: '请输入正确的身份证号',
        trigger: 'blur',
      },
    ],
    bankNumber: [{ required: true, message: '请输入银行卡号', trigger: 'blur' }],
    bankName: [
      { required: true, message: '请输入银行名', trigger: 'blur' },
      { min: 2, max: 15, message: '长度应为两位到十五位', trigger: 'blur' },
    ],
    otherTel: [
      {
        pattern: new RegExp(
          '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$',
        ),
        message: '请输入正确的手机号',
        trigger: 'blur',
      },
    ],
    handName: [
      { required: true, message: '请输入经手人', trigger: 'blur' },
      { min: 2, max: 15, message: '长度应为两位到十五位', trigger: 'blur' },
    ],
    handCompany: [
      { required: true, message: '请输入填报公司', trigger: 'blur' },
      { min: 2, max: 15, message: '长度应为两位到十五位', trigger: 'blur' },
    ],
  };

  defineExpose({
    commitForm: async (name) => {
      console.log(name);
    },
  });
</script>

<style lang="scss" scoped></style>
