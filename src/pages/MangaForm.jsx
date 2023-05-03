import { useState, useEffect, useRef } from "react"
import axios from "axios"
import apiUrl from "../../api"

export default function MangaForm() {
    useEffect(
        ()=>{
            axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
        },
        []
    )

    let [categories, setCategories] = useState([])
    const categoryNames = () => {
        return categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)
    }

    let title = useRef()
    let category = useRef()
    let description = useRef()
    function handleForm(e){
        e.preventDefault()
        let data = {
            title: title.current.value,
            category_id: category.current.value,
            description: description.current.value
        }
        console.log(data)
        axios.post(apiUrl+'mangas', data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div className='p-32 sm:p-10 h-screen sm:h-[88vh] flex flex-col justify-center items-center gap-12 '>
            <div className='h-full'>
                <div className='text-center pb-12'>
                    <p className='text-2xl '>New Manga</p>
                </div>
                <form onSubmit={(e) => handleForm(e)} className='flex flex-col text-left gap-y-4'>
                    <div>
                        <input className='border-b-2 border-gray-400 bg-[#EBEBEB]' type="text" placeholder='Insert title' id='title-manga' ref={title}/>
                    </div>
                    <div>
                        <select name="categories" className="bg-[#EBEBEB] border-b-2 border-gray-400 w-full text-gray-500" ref={category}>
                            <option>Insert Category</option>
                            {categoryNames()}
                        </select>
                    </div>
                    <div>
                        <input className='border-b-2 border-gray-400 bg-[#EBEBEB]' type="text" placeholder='Insert description' id='description-manga' ref={description}/>
                    </div>
                    <button className='bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] gap-y-12 h-10 mt-10 rounded-full text-white font-bold'>Send</button>
                </form>
            </div>
        </div>
    )
}