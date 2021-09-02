import React from 'react'
import NewUserForm from '../componentes/NewUserForm'

const NewUser = ({form,onChange,onSubmit,categorias}) => (
   <NewUserForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        categorias = {categorias}
   />
)

export default NewUser