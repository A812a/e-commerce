export interface Product {
  imageCover: string,
  price: number,
  title: string,
  ratingsAverage: number,
  id: string,
  _id: string,
  description?: string,
  images: string[],
  category: category
}


interface category {
  name: string
}
