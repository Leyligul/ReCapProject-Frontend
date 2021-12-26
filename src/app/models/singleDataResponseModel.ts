import { ResponseModel } from "./responseModel";

export interface SingleDataResponseModel<T> extends ResponseModel{
    data:T
}