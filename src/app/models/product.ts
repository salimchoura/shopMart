export class Product
{
    id: number
    name: string
    description: string
    gender: string
    category: string
    brand:string
    discountPrice?:number
    size: number[]
    color: string[]
    price: number
    is_in_inventory: boolean
    items_left: number
    imageURL: string
    slug: string
  }