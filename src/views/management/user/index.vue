<template>
  <div>
    <SeacrchCard @commit-opt="getCommitOpt" />
    <TableList ref="getExposeValue" />
  </div>
</template>

<script setup lang="ts">
  import SeacrchCard from './components/SeacrchCard.vue';
  import TableList from './components/TableList.vue';
  import { ref } from 'vue';

  const getExposeValue = ref<InstanceType<typeof TableList>>();
  const getCommitOpt = (data) => {
    getExposeValue.value?.handleTableChangeExpose(data);
  };
</script>

<style lang="scss" scoped></style>
