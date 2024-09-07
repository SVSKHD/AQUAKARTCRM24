import AquaCrmLayout from "@/components/layout/layout"
import ProductOperations from "@/services/products"
import AquaCategoryCard from "@/components/cards/categoryCard"
import { useEffect, useState } from "react"

const AquaProductComponent = () => {
  const [products, setProducts] = useState([])
  const [edit, setEdit] = useState(false)
useEffect(()=>{
  ProductOperations.getProducts().then((res)=>{
    setProducts(res.data.data)
  })
},[])
const onEdit = () =>{

}
const onDelete = () =>{

}
  return (
    <AquaCrmLayout>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-4 text-2xl font-bold p-4">
          <h1>Products</h1>
          {products.map((c,i)=>(
            <>
            <AquaCategoryCard category={c} onEdit={onEdit} onDelete={onDelete}/>
            </>
          ))}
       
        </div>
        <div className="col-span-8 text-2xl font-bold p-4">Product Form </div>
      </div>
    </AquaCrmLayout>
  )
}

export default AquaProductComponent
