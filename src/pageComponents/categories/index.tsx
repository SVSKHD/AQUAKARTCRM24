import AquaCrmLayout from "@/components/layout/layout"
import CategoryOperations from "@/services/categories"
import { useEffect, useState } from "react"

const AquaCategoriesComponent = () => {
useEffect(()=>{
  CategoryOperations.getCategories().then((res)=>{
    console.log(res.data.data)
  })
},[])
  return (
    <AquaCrmLayout>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-4 text-2xl font-bold p-4">
          <h1>Categories</h1>
        </div>
        <div className="col-span-8 text-2xl font-bold p-4">Categories Form </div>
      </div>
    </AquaCrmLayout>
  )
}

export default AquaCategoriesComponent
