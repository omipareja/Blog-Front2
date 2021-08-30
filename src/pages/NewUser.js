import React from 'react'
import NewUserForm from '../componentes/NewUserForm'

const NewUser = ({form,onChange,onSubmit}) => (
   <NewUserForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
   />
)

export default NewUser