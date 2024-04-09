export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export enum SortEnum{
    DESC='desc',
    ASC='asc'
}
