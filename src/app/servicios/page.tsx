import React from 'react'
import { CardService } from '../components/Card'



const page = () => {
  return (
    <>
    <div className=' grid xl:grid-cols-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly justify-items-center my-10 gap-8  mx-10 ' >
    <CardService />
    </div>
    </>
  )
}

export default page