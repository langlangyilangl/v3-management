<template>
  <div>
    <Teleport to="body">
      <div class="fixed w-screen v-screen inset-0 bg-gray-900 bg-opacity-28 z-2">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 min-w-160 bg-white"
        >
          <!-- 头部 -->
          <div
            class="text-lg font-semibold w-full px-5 py-3 border-b border-b-gray-300 flex justify-between items-center"
          >
            <div> 标题 </div>
            <CloseOutlined class="cursor-pointer" @click="closeDialog" />
          </div>

          <!-- 内容 -->
          <div class="w-full min-h-100 p-5">
            <slot></slot>
          </div>

          <!-- 脚部 -->
          <div class="flex justify-end space-x-5 px-5 py-3 border-t border-t-gray-300 w-full">
            <div class="border-gray-300 border-1 py-2 px-3 cursor-pointer" @click="closeDialog"
              >取消</div
            >
            <div
              class="border-blue-300 border-1 bg-blue-500 py-2 px-3 text-white cursor-pointer"
              @click="sureButton"
              >确定</div
            >
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { CloseOutlined } from '@ant-design/icons-vue';
  import { defineEmits } from 'vue';

  const emit = defineEmits(['close-dialog', 'sure-button']);

  //关闭弹窗函数
  const closeDialog = () => {
    emit('close-dialog');
  };

  //按下确定按钮
  const sureButton = () => {
    emit('sure-button');
  };
</script>

<style lang="scss" scoped></style>
