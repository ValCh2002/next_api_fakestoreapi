'use client';
import { IProduct } from '@/app/type/type';
import {
  getAllCategoriesData,
  getProductByIdData,
  selectCategories,
  selectProduct,
} from '@/lib/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';
import { Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';

export const DetailsProduct = React.memo(({ id }: { id: number }) => {
  const product = useAppSelector(selectProduct);
  const categories = useAppSelector(selectCategories);
  console.log(product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductByIdData(id));
    dispatch(getAllCategoriesData(''))
  }, []);
  const save = (data: IProduct) => {
    console.log(data);
  };
  return (
    <div >
      <h3 style={{margin:"35px"}}>Details Product</h3>
      <Card style={{ width: '22rem',margin:'auto' }}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Img variant="top" src={product.image} height='350px'/>
        <Card.Body>
          <Card.Text>{product.price}$</Card.Text>
          <Card.Text>Category - {product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
      <h3 style={{margin:"35px"}}>Update This Product</h3>
      <Form onSubmit={handleSubmit(save)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={product.title}
              {...register('title')}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Last name"
              defaultValue={product.price}
              {...register('price')}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Description</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                defaultValue={product.description}
                {...register('description', {required:""})}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" defaultValue={product.image} {...register('image')}/>
          </Form.Group>
          <Form.Group>
            <Form.Select {...register('category')}  value={product.category} >
              {categories.map((elm,i)=>{
                return <option key={i} >{elm}</option> 
              })}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
});
