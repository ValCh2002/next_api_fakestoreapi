import type { Metadata } from "next";
import { ShowProducts } from "./components/ShowProductsPage";

export default function IndexPage() {
  return <ShowProducts/>
}

export const metadata: Metadata = {
  title: "Show Products",
};
