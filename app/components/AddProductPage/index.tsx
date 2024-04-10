'use client'
import { IProduct } from "@/app/type/type";
import { createProductData, getAllCategoriesData, selectCategories } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Form, InputGroup } from 'react-bootstrap';

export const AddProduct = React.memo(() => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>()
  const categories = useAppSelector(selectCategories)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllCategoriesData(''))
  }, [])
  const addProduct = (data: IProduct) => {
    dispatch(createProductData(data)).unwrap().then(console.log).catch(console.warn)
    alert('Show this product in console')
    reset()

  }
  return <div>
    <h3 style={{ margin: "35px" }}>Add Product</h3>
    <Form onSubmit={handleSubmit(addProduct)}>

      <InputGroup className="mb-3">
        <Form.Control {...register('title', { required: "Enter Product Title!!" })}
          placeholder="Title"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        {errors.title && <p>{errors.title.message}</p>}

      <InputGroup className="mb-3">
        <Form.Control {...register('price', { required: "Enter Product Price" })}
          placeholder="Price"
          type="number"
        />

      </InputGroup>
        {errors.price && <p>{errors.price.message}</p>}

      <InputGroup className="mb-3">
        <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder="Description" {...register('description', { required: "Enter Product Description" })} />

      </InputGroup>
        {errors.description && <p>{errors.description.message}</p>}

      <InputGroup className="mb-3">
        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="Image URL" {...register('image', { required: "Enter Image URL" })} />
      </InputGroup>
        {errors.image && <p>{errors.image.message}</p>}

      <InputGroup>
        <Form.Select {...register('category',{required:"Choose Product Category"})}>
          <option hidden value=''>Choose Category</option>
          {categories.map((elm, i) => {
            return <option key={i}>{elm}</option>
          })}
        </Form.Select>
      </InputGroup>
      {errors.category && <p>{errors.category.message}</p>}
      <Button variant="outline-dark"style={{ marginTop: "20px" }} type="submit" className="form-control">Add Product</Button>
    </Form>
  </div>
})