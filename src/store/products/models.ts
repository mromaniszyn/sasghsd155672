import { CommonStateInterface } from "../common/models"

export interface ProductInfoInterface {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: { rate: number, count: number }
    title: string
}

export interface AllProductStateInterface extends CommonStateInterface {
    products: Array<ProductInfoInterface>,
}