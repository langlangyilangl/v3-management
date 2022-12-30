<template>
  <div class="flex flex-col m-5 p-4 bg-white">
    <div class="flex flex-row justify-between items-center mb-4">
      <div class="text-lg">用户列表</div>

      <div class="flex flex-row items-center space-x-4">
        <a-button type="primary" @click="data.isDialog = true">新增用户</a-button>
        <Divider type="vertical" />
        <RedoOutlined
          :style="{ fontSize: '20px', color: '#000' }"
          class="cursor-pointer"
          @click="sendRequestTableList"
        />
      </div>
    </div>

    <Table
      :columns="columns"
      :data-source="data.customerList"
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
          <a>Invite 一 {{ record.name }}</a>
          <a>Delete</a>
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </Table>

    <Load v-if="data.isLoading" />
    <Dialog v-if="data.isDialog" @closeDialog="cancelDialog" @sureButton="commitList">
      <AddCustomerForm ref="getExposeAddCustomer" />
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { DownOutlined, RedoOutlined } from '@ant-design/icons-vue';
  // import { TableState } from 'ant-design-vue/es/table/interface';
  import { Table, Divider } from 'ant-design-vue';
  import { computed, reactive, ref } from 'vue';
  import { getAllCustomerInfo } from '/@/api/customer/customer';
  import { ItemCustomer } from './data';
  import Load from '/@/components/Load/Load.vue';
  import Dialog from '/@/components/Dialog/Dialog.vue';
  import AddCustomerForm from './AddCustomerForm.vue';

  // type Pagination = TableState['pagination'];

  //初始化页码，页数和总条数
  enum InitPageData {
    total = 10,
    page = 1,
    size = 10,
  }

  const columns = [
    // {
    //   dataIndex: 'customerId',
    //   key: 'customerId',
    //   slots: { title: 'customTitle', customRender: 'customerId' },
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

  type PaginationData = {
    total: number;
    page: number;
    size: number;
    tel: string;
    customerName: string;
  };

  type Data = {
    customerList: ItemCustomer[];
    pagination: PaginationData;
    isLoading: Boolean;
    isDialog: Boolean;
  };

  let data: Data = reactive({
    customerList: [],
    pagination: {
      page: InitPageData.page,
      size: InitPageData.size,
      total: InitPageData.total,
      tel: '',
      customerName: '',
    },
    isLoading: false,
    isDialog: false,
  });

  const pagination = computed(() => ({
    total: data.pagination.total,
    current: data.pagination.page,
    pageSize: data.pagination.size,
  }));

  // 初始化数据
  const getCustomerNumber = async () => {
    const requestData = {
      page: data.pagination.page, //初始化为第几页
      size: data.pagination.size, //每一页的大小
    };
    const resData = await getAllCustomerInfo(requestData);
    data.pagination.total = resData.data.total; //将总共有多少条数据赋值
    data.customerList = resData.data.list.map((item, index) => {
      item['key'] = index;
      return item;
    }); //将当页数据赋值
  };

  getCustomerNumber();

  // 当页数改变时的函数
  const handleTableChange = async (pag) => {
    pag['size'] = pag['pageSize'];
    pag['page'] = pag['current'];
    delete pag['pageSize'];
    delete pag['current'];

    for (let item in pag) {
      data.pagination[item] = pag[item];
    }
    sendRequestTableList();
  };

  //发送请求函数
  const sendRequestTableList = async () => {
    data.isLoading = true; //打开loading
    const resData = await getAllCustomerInfo(data.pagination);
    data.isLoading = false; // 关闭loading

    data.pagination.total = resData.data.total; //将总共有多少条数据赋值
    data.customerList = resData.data.list.map((item, index) => {
      item['key'] = index;
      return item;
    });
  };

  // 关闭弹窗
  const cancelDialog = () => {
    data.isDialog = false;
  };

  // 发送提交信息给新增用户页面
  const getExposeAddCustomer = ref<InstanceType<typeof AddCustomerForm>>();
  const commitList = () => {
    /*
     * 新增用户组件暴露方法，根据返回值看是否要关闭dialog页面
     * 存在新增错误的情况不关闭
     */
    getExposeAddCustomer.value?.commitForm('sss');
    console.log(getExposeAddCustomer.value);
  };

  // 暴露改变页数的函数给父组件（用父组件的参数）
  defineExpose({
    handleTableChangeExpose: async (pag) => {
      //注意每次模糊搜索需要将初始化页面和每页大小
      data.pagination.size = InitPageData.size;
      data.pagination.page = InitPageData.page;
      data.pagination.customerName = pag.nameValue ?? '';
      data.pagination.tel = pag.telValue ?? '';

      sendRequestTableList();
    },
  });
</script>

<style lang="scss" scoped></style>
