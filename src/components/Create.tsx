"use client"
import { useSession } from 'next-auth/react'
import React, { FormEvent, useEffect, useState } from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { useRouter } from "next/navigation"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot } from "firebase/storage"
import { app } from '@/utils/firebase'


type CreatePostType = {
  title: string,
  description: string,
  img: string,
  slug: string,
  catSlug: string
}

const Create = () => {
      
    const [file, setFile] = useState<File | null>(null)
    const [onUpdate, setOnUpdate] = useState<boolean>(false)
  
    const [createPost, setCreatePost] = useState<CreatePostType>({
      title: "",
      description: "",
      img: "",
      slug: "",
      catSlug: ""
    })
    
    
    const session = useSession()
    const router = useRouter()
    const { status } = session
    
    
    const handleCreatePost = (type: keyof CreatePostType, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      switch (type) {
        case "title": 
          setCreatePost({...createPost, title: e.target.value })
          break;
        case "description":
          setCreatePost({...createPost, description: e.target.value})
          break;
        case "img":
          if (e.target instanceof HTMLInputElement && e.target.files) {
            setFile(e.target.files[0])
          }
      }
    }
    
      
      const storage = getStorage(app)
      
      useEffect(() => {
        const upload = () => {
          if (file instanceof File) {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            
            
            uploadTask.on("state_changed", (snapshot: UploadTaskSnapshot) => {
              const progress = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100)
              
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused")
                  break
                case "running":
                  console.log("Upload is running")
                  break
              }
            },
            (error) => { console.log(error) },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => { 
              fetch("http://localhost:3000/api/posts", {
                method: "POST",
                body: JSON.stringify({
                  title: createPost.title,
                  description: createPost.description,
                  slug: slugify(createPost.title),
                  catSlug: "tuicaa",
                  img: downloadURL.toString(), // Use the download URL
                })
              }).then((res) => res.json())
                .then((data) => router.push(`/posts/${data.slug}`))
                .catch((err) => console.log(err))
              })
            }
            )
            
          }
          
        }
        file && upload()
        //eslint-disable-next-line
      }, [onUpdate])
          
          
    const slugify = (str: string) => {
        const slug = str
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, "")
                        .replace(/[\s_-]+/g, "-")
                        .replace(/^-+|-+$/g, "")
        return slug
      }
        
  return (
    <> 
    {status === "authenticated" 
    ? <form onSubmit={(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(),
    setOnUpdate(true) }} className="bg-white mx-auto flex flex-col max-w-[1080px] w-full my-8 py-4"> 
          <div className="max-w-[968px] mx-auto w-full flex flex-col gap-2"> 
          <p className="text-[1.5rem]"> Title </p> 
          <input className="input border-none w-full border-b-4 outline-none border-b-black rounded-none text-[1.25rem] text-white" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCreatePost("title", e)}/>
          </div>
          <div className="max-w-[968px] mx-auto w-full flex flex-col mt-4 gap-2"> 
          <p className="text-[1.5rem]"> Description </p> 
          <textarea value={createPost.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleCreatePost("description", e)} className="textarea placeholder:text-white rounded-none text-[1.25rem] text-white h-[400px]" placeholder="Description" /> 
          <p className="text-[1.25rem] font-bold mt-4 text-center"> Image </p> 
          <input type="file" className="file-input file-input-bordered file-input-primary max-w-sm mx-auto" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCreatePost("img", e)}/>
          <div className="flex justify-center gap-3 items-center border-2 border-base-100 transition-all hover:bg-base-100 p-2 hover:text-white cursor-pointer w-[200px] mt-4 mx-auto">
          <AiOutlineFileAdd className="text-[2.5rem]"/>
          <button className="text-[2rem]" type="submit"> Add </button>
          </div>
        </div>
    </form>
    :
    <div className="bg-white mx-auto flex flex-col rounded-lg max-w-[1080px] w-full my-8 py-4">
        <p className="text-[1.5rem] text-center"> You need to be logged in to create a post. </p>
        <button className="btn btn-primary flex mx-auto mt-4 p-4" onClick={() => router.push("/login")}> Click here to go to login </button>
    </div>
  }
  </>
    )
}

export default Create