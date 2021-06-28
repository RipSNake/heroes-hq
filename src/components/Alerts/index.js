import Swal from 'sweetalert2';

export const alertError = (text, title) => {
	Swal.fire({
    icon: 'error',
    title: title || 'Error',
    text: text || 'No se pudieron obtener los datos!',
  })
}

export const alertSuccess = (text, title) => {
	Swal.fire({
      icon: 'success',
      title: title || 'Éxito',
      text: text || 'Acción realizada con Éxito!',
  })
}

export const alertInfo = (text, title) => {
	Swal.fire({
    icon: 'warning',
    title: title || 'Aviso',
    text: text || 'Pudiste loguearte. Serás redirigido al home',
	})
}

export const alertConfirm = (title, text) => {
  return Swal.fire({
    title: title || 'Are you sure?',
    text: text || "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
}