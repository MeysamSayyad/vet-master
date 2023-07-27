import { useEffect } from "react"

export const Loading=({loading,setLoading})=>{
    useEffect(()=>{
       const time=setTimeout(()=>{
          loading && setLoading(false)
          console.log('done')
       },7000)
       return ()=>{
        clearTimeout(time)
       }
    },[])
    return(
        <section className="w-screen h-screen z-50 fixed flex justify-center items-center bg-black backdrop-blur-sm bg-opacity-30 inset-0">
            <div className=" border-[5px] fixed border-[#6fff7d] border-l-transparent w-12 h-12 rounded-full animate-spin ">
            </div>
        </section>
    )
}