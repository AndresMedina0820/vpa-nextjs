export interface CustomerResponse {
  id: number;
  customerId: number;
  typeId: number;
  name: string;
  lastName: string;
  dateBirth: Date;
  isChild: boolean;
  email: string;
  phone: string;
  city: string;
  address: string;
  customerType: number;
  inBooking: null;
  createdAt: Date;
  modifiedAt: null;
  type_id: Type;
  customer_type: Type;
  in_booking: null;
}

interface Type {
  id: number;
  name: string;
}
