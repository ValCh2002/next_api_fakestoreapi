import { IProduct, SortEnum } from '@/app/type/type';
import { createAppSlice } from '@/lib/createAppSlice';
import {
  createProductAPI,
  deleteProductByIdAPI,
  getAllCategoriesAPI,
  getProductByIdAPI,
  getProductLimitAPI,
  getProductsAPI,
  getProductsByCategoryAPI,
  getProductsSortAPI,
  updateProductAPI,
} from './productAPI';

const initialState: {
  products: IProduct[];
  product: IProduct;
  categories: string[];
} = {
  product: {} as IProduct,
  products: [],
  categories: [],
};

export const productSlice = createAppSlice({
  name: 'product',
  initialState,
  reducers: (create) => ({
    getProductsData: create.asyncThunk(
      async () => {
        return await getProductsAPI();
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    getProductByIdData: create.asyncThunk(
      async (id: number) => {
        return await getProductByIdAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.product = action.payload;
        },
      },
    ),
    getAllCategoriesData: create.asyncThunk(
      async () => {
        return await getAllCategoriesAPI();
      },
      { fulfilled: (state, action) => {state.categories = action.payload}},
    ),
    getProductLimitData: create.asyncThunk(
      async (x: number) => {
        return await getProductLimitAPI(x);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    getProductsSortData: create.asyncThunk(
      async (text: SortEnum) => {
        return await getProductsSortAPI(text);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    getProductsByCategoryData: create.asyncThunk(
      async (text) => {
        return await getProductsByCategoryAPI(text);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      },
    ),
    updateProductData: create.asyncThunk(
      async ({ id, product }) => {
        return await updateProductAPI({ id, product });
      },
      {
        fulfilled: (state, action) => {
          state.product = action.payload;
        },
      },
    ),
    createProductData: create.asyncThunk(async (product) => {
      return await createProductAPI(product);
    }),
    deleteProductByIdData: create.asyncThunk(async (id: number) => {
      return await deleteProductByIdAPI(id);
    }),
  }),
  selectors:{
    selectProduct:(app)=>app.product,
    selectProducts:(app)=>app.products,
    selectCategories:(app)=>app.categories,
  }
});

export const {getAllCategoriesData,getProductByIdData,getProductLimitData,getProductsByCategoryData,getProductsData,getProductsSortData,deleteProductByIdData,updateProductData,createProductData}=productSlice.actions
export const {selectCategories,selectProduct,selectProducts}=productSlice.selectors