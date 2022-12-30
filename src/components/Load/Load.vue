<template>
  <div>
    <teleport to="body" :disabled="false">
      <div class="fixed w-screen v-screen inset-0 bg-gray-900 bg-opacity-28 z-2">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
          <Spin />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
  import { Spin } from 'ant-design-vue';
</script>

<style lang="scss" scoped></style>
