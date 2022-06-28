interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export default interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
