import { defHttp } from '/@/utils/http/axios';
import { AllCustomerParams, AllCustomerResultModel } from './model/customerModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  GetAllCustomerInfo = '/customer/getAllCustomerInfo',
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
