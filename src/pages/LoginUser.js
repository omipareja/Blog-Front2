import React from 'react'
import Login from '../componentes/Login.js'

const LoginUser = ({form,onChange,onSubmit}) =>(
    <Login
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
    />
)

export default LoginUser