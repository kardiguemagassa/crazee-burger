import { toast, TypeOptions, ToastOptions } from "react-toastify"

type ToastType = Exclude<TypeOptions, "default">

export const displayToastNotification = (
  toastMessage: string,
  toastType: ToastType = "info",
  toastOptions?: ToastOptions
) => {
  const toastOptionsByDefault: ToastOptions = {
    // icon: <FaUserSecret size={30} />,
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ...toastOptions,
  }

  toast[toastType](toastMessage, toastOptionsByDefault)
}
