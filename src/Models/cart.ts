import { Flower } from "./flower";

export interface Cart
{
    cartId :number;
    customerId :number;
    flowerId :number;
    quantity :number;
    itemPrice :number;
    status:string;
    flower:Flower;
}