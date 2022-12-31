<template>
  <div>
    <Form
      :model="formState"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :rules="rules"
      ref="formRef"
    >
      <FormItem label="姓名" name="customerName">
        <Input v-model:value="formState.customerName" />
      </FormItem>
      <FormItem label="类型">
        <RadioGroup v-model:value="formState.customerType">
          <Radio value="person">个人</Radio>
          <Radio value="supplier">供应商</Radio>
          <Radio value="factory">工厂</Radio>
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
  // import { Moment } from 'moment';
  import moment from 'moment';
  import { reactive, UnwrapRef, ref } from 'vue';
  import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
  import { addOneCustomer } from '/@/api/customer/customer';

  interface FormState {
    customerName: string;
    customerType: 'factory' | 'supplier' | 'person' | undefined;
    registerDate: string | undefined;
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
    customerName: '喻浪',
    customerType: 'person',
    registerDate: undefined,
    tel: '17388916693',
    cardId: '43012420000304327x',
    bankNumber: '6212261904004468916',
    bankName: '工商银行',
    otherTel: '',
    principalName: '',
    // customerName: '',
    // customerType: undefined,
    // registerDate: undefined,
    // tel: '',
    // cardId: '',
    // bankNumber: '',
    // bankName: '',
    // otherTel: '',
    // principalName: '',
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

  // 判断表单是否符合规范才可以提交
  const formRef = ref();
  defineExpose({
    commitForm: async () => {
      return new Promise((resolve, reject) => {
        formRef.value
          .validate()
          .then(async () => {
            // 获取现在时间为注册时间
            formState.registerDate = moment().format();
            const res = await addOneCustomer(formState);
            resolve(res);
          })
          .catch((error: ValidateErrorEntity<FormState>) => {
            console.log('error', error);
            reject(error);
          });
      });
    },
  });
</script>

<style lang="scss" scoped></style>
