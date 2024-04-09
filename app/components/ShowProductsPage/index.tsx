'use client';
import { SortEnum } from '@/app/type/type';
import {
  deleteProductByIdData,
  getAllCategoriesData,
  getProductLimitData,
  getProductsByCategoryData,
  getProductsData,
  getProductsSortData,
  selectCategories,
  selectProducts,
} from '@/lib/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export const ShowProducts = React.memo(() => {
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  console.log(products, categories);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsData(''));
    dispatch(getAllCategoriesData(''));
  }, []);
  return (
    <div>
      <h3>Show Products</h3>
      <Form.Select
        onChange={(e) => {
          dispatch(getProductsByCategoryData(e.target.value));
        }}
      >
        <option value="" hidden>
          All Categories
        </option>
        {categories.map((elm, i) => {
          return <option key={i}>{elm}</option>;
        })}
      </Form.Select>
      <Form.Select
        onChange={(e) => {
          if (e.target.value == 'asc') {
            dispatch(getProductsSortData(SortEnum.ASC));
          } else if (e.target.value == 'desc') {
            dispatch(getProductsSortData(SortEnum.DESC));
          } else {
            dispatch(getProductsData(''));
          }
        }}
      >
        <option value="">All Products</option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </Form.Select>
      <input
        type="number"
        onChange={(e) => {
          dispatch(getProductLimitData(+e.target.value));
        }}
      />
      <div>
        {products.map((elm) => {
          return (
            <Card
              style={{ width: '15rem', display: 'inline-block' }}
              key={elm.id}
            >
              <Card.Img variant="top" src={elm.image}  />
              <Card.Body>
                <Card.Title>{elm.title}</Card.Title>
                <Link href={'/details/' + elm.id}>See More</Link>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(deleteProductByIdData(elm.id))
                      .unwrap()
                      .then(console.log)
                      .catch(console.warn);
                  }}
                >
                  &times;
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
});
