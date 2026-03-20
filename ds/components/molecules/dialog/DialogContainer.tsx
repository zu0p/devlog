"use client"

import Dialog from "@/ds/components/molecules/dialog/Dialog"
import { useDialog } from "@/stores/dialog.store"

const DialogContainer = () => {
  const { dialogs, dismissDialog } = useDialog()

  return (
    <div>
      {dialogs
        .filter((dialog) => dialog.message)
        .map((dialog) => (
          <Dialog
            key={dialog.id}
            variant={dialog.variant!}
            onClose={() => dismissDialog(dialog.id)}
          >
            {dialog.title && <Dialog.Title>{dialog.title}</Dialog.Title>}
            <Dialog.Label>{dialog.message}</Dialog.Label>
            {dialog.buttons && (
              <Dialog.Button
                buttons={dialog.buttons.map((button) => ({
                  ...button,
                  onClick: () => {
                    button.onClick()
                    dismissDialog(dialog.id)
                  },
                }))}
              />
            )}
          </Dialog>
        ))}
    </div>
  )
}

export default DialogContainer
