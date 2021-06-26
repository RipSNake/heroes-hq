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