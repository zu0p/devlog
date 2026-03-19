"use client"

import Toast from "@/ds/components/molecules/toast/Toast"
import { useToast } from "@/stores/toast.store"

const ToastContainer = () => {
  const { toasts, dismissToast } = useToast()

  return (
    <div>
      {toasts
        .filter((toast) => toast.message)
        .map((toast) => {
          return (
            <Toast
              key={toast.id}
              message={toast.message!}
              variant={toast?.variant}
              position={toast?.position}
              duration={toast?.duration}
              onDismiss={() => dismissToast(toast.id)}
            />
          )
        })}
    </div>
  )
}

export default ToastContainer
