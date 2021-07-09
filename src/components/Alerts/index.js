import Swal from 'sweetalert2';
import { alertErrorStr as AE, alertInfoStr as AI, alertSuccessStr as AS, alertConfirmStr as AC } from './../../constants';

export const alertError = (text, title) => {
	Swal.fire({
    icon: 'error',
    title: title || AE.title,
    text: text || AE.text,
  })
}

export const alertSuccess = (text, title) => {
	Swal.fire({
      icon: 'success',
      title: title || AS.title,
      text: text || AS.text,
  })
}

export const alertInfo = (text, title) => {
	Swal.fire({
    icon: 'warning',
    title: title || AI.title,
    text: text || AI.text,
	})
}

export const alertConfirm = async (title, text, confirmText) => {
  return await Swal.fire({
    title: title || AC.title,
    text: text || AC.text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: confirmText || AC.confirmBtn
  })
}