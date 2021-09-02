import { async } from 'q'
import React,{useState} from 'react'
import LoginForm from '../componentes/Login'
import LoginUser from './LoginUser'


const LoginUserContainer = ({history}) =>{

    const [form,setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = e =>{
        setForm({
            ...form,
            [e.tartget.name]:e.tartget.value
        })
    }

    const  handleSubmit = async e => {
        e.preventDefault()
    }


    return <LoginForm
        form = {form}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />

}

export default LoginUserContainer