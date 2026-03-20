import {
  DialogButton,
  DialogProps,
} from "@/ds/components/molecules/dialog/Dialog.types"
import { create } from "zustand"

export interface Dialog extends Partial<DialogProps> {
  id: number
  title?: string
  message: string
  buttons?: DialogButton[]
}

interface DialogState {
  dialogs: Dialog[]
  showDialog: (dialog: Omit<Dialog, "id">) => void
  dismissDialog: (id: number) => void
}

let dialogId = 0

export const useDialog = create<DialogState>((set) => ({
  dialogs: [],
  showDialog: (dialog) => {
    const id = dialogId++
    set((state) => ({ dialogs: [...state.dialogs, { ...dialog, id }] }))
  },
  dismissDialog: (id) => {
    set((state) => ({
      dialogs: state.dialogs.filter((d) => d.id !== id),
    }))
  },
}))
