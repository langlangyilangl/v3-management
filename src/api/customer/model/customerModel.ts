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
  promisePrice?: number;
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

export type AddCustomerResultModel = {
  code: 200;
  message: string;
  role?: any;
};

export type AddItemCustomer = {
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
};
