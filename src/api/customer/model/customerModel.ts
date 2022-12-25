export type AllCustomerParams = {
  page: number;
  size: number;
};

type ItemCustomer = {
  customerId: number;
  customerName: string;
  customerType: string;
  registerDate: string;
  tel: string;
  cardId: string;
  bankNumber?: any;
  bankName?: any;
  otherTel: string;
  principalName: string;
  handName: string;
  handCompany: string;
  promisePrice: number;
};

type AllCustomerData = {
  list: ItemCustomer[];
  total: number;
};

export type AllCustomerResultModel = {
  code: number;
  message: string;
  data: AllCustomerData;
  role?: any;
};
