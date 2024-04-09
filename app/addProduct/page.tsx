import type { Metadata } from "next";
import { AddProduct } from "../components/AddProductPage";

export default function IndexPage() {
  return <AddProduct/>
}

export const metadata: Metadata = {
  title: "Add Product",
};
