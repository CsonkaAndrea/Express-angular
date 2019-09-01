export class Order {
    orderID: number;
    insertDate: Date = new Date();
    productID: number;
    userName: string;
    userEmail: string;
    shippingaddress: string;
    quantity: number;
}
