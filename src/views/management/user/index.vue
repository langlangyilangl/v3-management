<template>
  <div>
    <SeacrchCard @commit-opt="getCommitOpt" />
    <div class="flex flex-col m-5 p-4 bg-white">
      <div class="text-lg">用户列表</div>
      <Table
        :columns="columns"
        :data-source="data"
        :bordered="true"
        :pagination="pagination"
        @change="handleTableChange"
      >
        <!-- <template #customTitle>
          <span> Name </span>
        </template> -->
        <!-- <template #tags="{ text: tags }">
          <span></span>
        </template> -->
        <template #action="{ record }">
          <span>
            <!-- <a>Invite 一 {{ record.name }}</a> -->
            <a>Delete</a>
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </Table>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SeacrchCard from './components/SeacrchCard.vue';
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import { TableState, TableStateFilters } from 'ant-design-vue/es/table/interface';
  import { Table } from 'ant-design-vue';
  import { computed } from 'vue';

  const getCommitOpt = (data) => {
    console.log('hhh');
    console.log(data);
  };

  type Pagination = TableState['pagination'];

  const columns = [
    // {
    //   dataIndex: 'name',
    //   key: 'name',
    //   slots: { title: 'customTitle', customRender: 'name' },
    // },
    {
      title: '姓名',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: '类型',
      dataIndex: 'customerType',
      key: 'customerType',
    },
    {
      title: '注册时间',
      dataIndex: 'registerDate',
      key: 'registerDate',
    },
    {
      title: '电话',
      dataIndex: 'tel',
      key: 'tel',
    },
    {
      title: '身份证号',
      dataIndex: 'cardId',
      key: 'cardId',
    },
    {
      title: '银行卡号',
      dataIndex: 'bankNumber',
      key: 'bankNumber',
    },
    {
      title: '银行',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   slots: { customRender: 'tags' },
    // },
    {
      title: 'Action',
      key: 'action',
      slots: { customRender: 'action' },
    },
  ];

  const data = [
    {
      key: '1',
      customerName: 'John Brown',
      customerType: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '1',
      customerName: 'John Brown',
      customerType: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ];
  const pagination = computed(() => ({
    total: 200,
    current: 5,
    pageSize: 10,
  }));

  const handleTableChange = (pag: Pagination, filters: TableStateFilters, sorter: any) => {
    console.log(pag);
  };
  //接收请求
</script>

<style lang="scss" scoped></style>
