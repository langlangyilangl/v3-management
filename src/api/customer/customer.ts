import { defHttp } from '/@/utils/http/axios';
import {
  AllCustomerParams,
  AllCustomerResultModel,
  AddItemCustomer,
  AddCustomerResultModel,
} from './model/customerModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  GetAllCustomerInfo = '/customer/getAllCustomerInfo',
  AddOneCustomer = '/customer/addOneCustomer',
}

export function getAllCustomerInfo(params: AllCustomerParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<AllCustomerResultModel>(
    {
      url: Api.GetAllCustomerInfo,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function addOneCustomer(params: AddItemCustomer, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<AddCustomerResultModel>(
    {
      url: Api.AddOneCustomer,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
