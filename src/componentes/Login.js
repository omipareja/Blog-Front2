import React from 'react'
import './styles/Login.css'
import EvaImg from '../images/eva.jpg'


const LoginForm = ({onSubmit,form,onChange}) => (
    <div className="container">
        <div className="card">
            <div className="row">
                <div className="col-md-6">
                <img src={EvaImg} className="img-fluid" alt="..."/>
                </div>
                <div className="col-md-6">
                <h3 className="card-title text-center">Login</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label className="text-left">Username</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="username"
                                name="username"
                                onChange={onChange}
                                required = "True"
                                value = {form.username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                className ="form-control"
                                placeholder = "password"
                                name="password"
                                required = "True"
                                onChange={onChange}
                                value={form.password}
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
)

export default LoginForm