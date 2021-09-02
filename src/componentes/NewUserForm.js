import React from 'react'
import './styles/NewUserForm.css'
import registro from '../images/registro.jpg'

const NewUserForm = ({onChange,onSubmit,form,categorias}) =>{

        

    return(
        <div className="card">
            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                        <img src={registro} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="card-title text-center">Crea un nuevo usuario</h3>    
                        <div className='container'>
                            <form onSubmit={onSubmit} >
                                <div className="row">
                                    <div className="col-md-6">
                                        
                                        <div className="form-group">
                                        <labe>Nombres:</labe>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder = "nombre"
                                                name="name"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.nombre}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <labe>Username:</labe>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder = "username"
                                                name="username"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.username}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <labe>Email:</labe>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder = "email"
                                                name="email"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <labe>cumpleaños:</labe>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder = "cumpleaños"
                                                name="date_birth"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.cumpleaños}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <labe>Apellidos:</labe>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder = "apellidos"
                                                name="apellido"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.apellidos}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <labe>Password</labe>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder = "password"
                                                name="password"
                                                required= "True"
                                                onChange={onChange}
                                                value = {form.password}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <labe>Genero:</labe>
                                            <select className="form-select" name='genero' onChange={onChange}>
                                                <option value="M">Masculino</option>
                                                <option value="F">Femenino</option>
                                            </select>
                                        </div>
                                        <div className="form-group"> 
                                        <labe>Categoria Favorita</labe>
                                            <select className="form-select" name='categoria_favorita' onChange={onChange}>
                                                {
                                                    categorias.map(categoria=>(
                                                        <option key={categoria.id} value={categoria.id}> {categoria.name}</option>
                                                    )
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                <labe>Perfil</labe>
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder = "image"
                                        name="image"
                                        onChange={onChange}
                                        value = {form.image}
                                    />
                                </div>


                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="submit">Guardar</button>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default NewUserForm