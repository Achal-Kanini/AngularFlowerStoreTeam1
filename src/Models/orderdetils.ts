import { Cart } from "./cart";
import { Flower } from "./flower";

export interface orderdetails{
    "flowerId": number,
    "customerId": number,
    "cartId": number,
    "totalprice": number,
    "remark": string,
    "paymentStatus": string,
}

