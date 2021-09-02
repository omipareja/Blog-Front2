import React,{useState} from 'react'
import NewUSer from './NewUser'
import * as moment from 'moment'
import Swealert from '../hooks/validations'
import Peticion from '../hooks/peticiones'

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

        let validation = 0
        let username = form.username
        let password = form.password
        let date = form.date_birth
        


        if(username.length < 8){
            Swealert('Error En Username','El campo debe tener mas de  8 caracteres')
        }
        else{
            validation = validation+1 
        }
        
        if(password.length <8 ){
            Swealert('Error en la Contraseña','La contraseña debe ser mayor a 8 caracteres')
        }
        else{
            validation = validation + 1
        }
        
        if(validation == 2){
            try {

                let config = {
                    method:'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form) 
                }
                let response = await fetch('http://127.0.0.1:8000/user/user/',config)
                if (response.ok) { // si el HTTP-status es 200-299
                    // obtener cuerpo de la respuesta (método debajo)
                    let json = await response.json();
                    console.log(json)
                    Swealert('Alerta',json.message)
                    history.push('/login')
                  } else {
                    Swealert('Error',`Error-HTTP: ${response.status}`);
                  }
                
            }catch(error){
                console.log('Entro al error')
                console.log(error)
            }
        }


    }


    let url = 'http://127.0.0.1:8000/category/category'
    const {data,error} = Peticion(url)
    console.log(data)
        if(error==false){
            return <NewUSer
            form ={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            categorias={data}
        />
    }


}

export default NewUserContainer