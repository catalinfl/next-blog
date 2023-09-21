import Create from '@/components/Create'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const CreatePost = () => {
  return (
    <> 
    <Navbar />
    <Create />
    {/* <div className="absolute w-full bottom-0">  */}
    <Footer />
    {/* </div> */}
    </>
  )
}

export default CreatePost