import { DetailsProduct } from "@/app/components/DetailsProductPage";
import { getProductByIdData, selectProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import type { Metadata } from "next";

export default function IndexPage({params:{id}}:{params:{id:number}}) {
  
  return <DetailsProduct id={id}/>
}

export const metadata: Metadata = {
  title: "Details Product",
};
