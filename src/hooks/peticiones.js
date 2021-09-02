import { useState,useEffect } from "react"

/*
const Peticion =(url,config) =>{
    const [error,setError]= useState(false)
    const [data,setData] = useState([])
    useEffect(() =>{

        const peticionasync = async () =>{
            try {
                let response = await fetch(url,config)
                if(response.ok){
                    let json = await response.json()
                    setData(json)
                }else{
                    setError(true)
                    let res_error = response.status
                    setData(res_error)
                }
            }catch(error){
                alert(`Error-HTTP: ${error}`)
            }
        }

        peticionasync()

    },[url,config])

    return{data,error}
}
*/


const Peticion = url =>{

    const [data,setData] = useState([])
    const [error,setError] = useState(false)

    useEffect(()=>{ //remplaza el componentDidMount

        const fetchResource = async () => {

            try {

                let res = await fetch(url)
                let data = await res.json()
                
                setData(data)

            } catch (error){
                setError(true)
            }
        }

        fetchResource()

    },[url])//el url es para pasarle parametros a use Effect

    return {data,error}
}


export default Peticion