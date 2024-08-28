import AquaCrmLayout from "@/components/layout/layout"
import SubCategoryOperations from "@/services/sub-categories"
import AquaCategoryCard from "@/components/cards/categoryCard"
import { useEffect, useState } from "react"

const AquaSubCategoriesComponent = () => {
  const [categories, setCategories] = useState([])
useEffect(()=>{
  SubCategoryOperations.getSubCategories().then((res)=>{
    console.log(res.data.data)
    setCategories(res.data.data)
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
          <h1>Sub Categories</h1>
          {categories.map((c,i)=>(
            <>
            <AquaCategoryCard category={c} onEdit={onEdit} onDelete={onDelete}/>
            </>
          ))}
       
        </div>
        <div className="col-span-8 text-2xl font-bold p-4">Categories Form </div>
      </div>
    </AquaCrmLayout>
  )
}

export default AquaSubCategoriesComponent
