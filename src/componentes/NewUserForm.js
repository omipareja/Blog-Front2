import React from 'react'

const NewUserForm = ({onChange,onSubmit,form }) =>(
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Registro</h3>
            <div className='container'>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "username"
                            name="username"
                            onChange={onChange}
                            value = {form.username}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder = "password"
                            name="password"
                            onChange={onChange}
                            value = {form.password}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder = "email"
                            name="email"
                            onChange={onChange}
                            value = {form.email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "nombre"
                            name="name"
                            onChange={onChange}
                            value = {form.nombre}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "apellidos"
                            name="apellido"
                            onChange={onChange}
                            value = {form.apellidos}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "genero"
                            name="genero"
                            onChange={onChange}
                            value = {form.genero}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            className="form-control"
                            placeholder = "cumpleaños"
                            name="date_birth"
                            onChange={onChange}
                            value = {form.cumpleaños}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="file"
                            className="form-control"
                            placeholder = "image"
                            name="image"
                            onChange={onChange}
                            value = {form.image}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder = "categoria"
                            name="categoria_favorita"
                            onChange={onChange}
                            value = {form.categoria}
                        />
                    </div>
                    <button 
                    
                    type="submit"
                    className = "btn btn-primary float-right"
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    </div>
)

export default NewUserForm