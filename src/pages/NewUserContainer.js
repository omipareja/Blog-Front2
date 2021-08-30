import React,{useState} from 'react'
import NewUSer from './NewUser'

const NewUserContainer = ({history}) => {

    const [form,setForm] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        apellido: '',
        genero: '',
        date_birth: '',
        //image: '',
        //categoria_favorita: '',

    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            let config = {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form) 
            }
            let res = await fetch('http://127.0.0.1:8000/user/user/',config)
            let data = await fetch(res.json)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }



    return <NewUSer
        form ={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />

}

export default NewUserContainer