import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const validation = (title,text) =>{
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: title,
      footer: 'Copyright 2018',
      text: text
    })
}

export default validation