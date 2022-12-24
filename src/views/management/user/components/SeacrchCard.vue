<template>
  <div>
    <div class="flex flex-row flex-wrap justify-start bg-white p-4 m-5">
      <div class="flex items-center">
        <span class="min-w-7 m-3">名字</span>
        <a-input
          class="h-4/5"
          size="small"
          v-model:value="opt.nameValue"
          placeholder="请输入名字"
        />
      </div>
      <div class="flex items-center">
        <span class="min-w-7 m-3">电话</span>
        <a-input class="h-4/5" size="small" v-model:value="opt.telValue" placeholder="请输入电话" />
      </div>
      <div class="flex-grow flex justify-end items-center space-x-3">
        <a-button @click="returnInit">重置</a-button>
        <a-button type="primary" @click="commitOpt">查询</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive,defineEmits } from 'vue';
  import { Input, Button } from 'ant-design-vue';
  import { Option } from './data';
  const opt = reactive<Option>({
    nameValue: '',
    telValue: '11',
  });

  //返回初始值
  const returnInit = () => {
    for (let item in opt) {
      opt[item] = '';
    }
  };

  // 查询函数
  const emit = defineEmits(['commit-opt'])
  const commitOpt = () => {
    emit('commit-opt',opt)
  };
</script>

<style lang="scss" scoped></style>
