export interface Employee {
    id: number,
    name: string,
    phone: string,
    address: Address;
}

export interface Address {
    city: string,
    line1: string,
    line2: string,
    postalCode: string,
}