import B1 from "./components/B1";
import B2 from "./components/B2";
import B3 from "./components/B3";
import B4 from "./components/B4";
import B5 from "./components/B5";
import B6 from "./components/B6";

import ProductList from "./components/B7/ProductList";
const products = [
  {
    id: 1,
    name: "iphone6",
    price: 5000,
    quantity: 4,
  },
  {
    id: 2,
    name: "iphone7",
    price: 6000,
    quantity: 6,
  },
  {
    id: 3,
    name: "iphone8",
    price: 7000,
    quantity: 7,
  },
];

import UserList from "./components/B8/UserList";
const users = [
  {
    id: 1,
    userName: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Văn B",
    email: "nvb@gmail.com",
    address: "Đà Nẵng",
  },
  {
    id: 3,
    userName: "Nguyễn Văn A",
    email: "nva@gmail.com",
    address: "HCM",
  },
];

import B9 from "./components/B9";
import B10 from "./components/B10";

export default function App() {
  return (
    <>
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B6></B6>
      <ProductList products={products}></ProductList>
      <UserList users={users}></UserList>
      <B9></B9>
      <B10></B10>
    </>
  );
}
