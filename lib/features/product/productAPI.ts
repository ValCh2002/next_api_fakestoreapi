import { IProduct, SortEnum } from '@/app/type/type';
import axios from 'axios';

export const getProductsAPI = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

export const getProductByIdAPI = async (id: number) => {
  const { data } = await axios.get('https://fakestoreapi.com/products/' + id);
  return data;
};

export const getProductLimitAPI = async (x: number) => {
  const { data } = await axios.get(
    'https://fakestoreapi.com/products?limit=' + x,
  );
  return data;
};

export const getProductsSortAPI = async (text: SortEnum) => {
  const { data } = await axios.get(
    'https://fakestoreapi.com/products?sort=' + text,
  );
  return data;
};

export const getAllCategoriesAPI = async () => {
  const { data } = await axios.get(
    'https://fakestoreapi.com/products/categories',
  );
  return data;
};

export const getProductsByCategoryAPI = async (text: string) => {
  const { data } = await axios.get(
    'https://fakestoreapi.com/products/category/' + text,
  );
  return data;
};

export const createProductAPI=async(product:IProduct)=>{
    const {data}=await axios.post('https://fakestoreapi.com/products',product)
    return data
}

export const updateProductAPI=async({id,product}:{id:number,product:IProduct})=>{
    const {data}=await axios.put('https://fakestoreapi.com/products/'+id,product)
    return data
}

export const deleteProductByIdAPI = async (id: number) => {
    const { data } = await axios.delete('https://fakestoreapi.com/products/' + id);
    return data;
  };