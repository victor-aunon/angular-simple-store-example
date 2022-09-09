import { Product } from "src/app/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    imageUrl:
      'https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 599,
    description: 'A great phone with one of the best cameras',
    imageUrl:
      'https://images.unsplash.com/photo-1599612818023-4ddd8b6de710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 399,
    description: 'A great phone for all your needs',
    imageUrl:
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx',
  },
];
