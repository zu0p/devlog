import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Toast from "./Toast"
import { TOAST_VARIANTS } from "@/ds/tokens/toast/variants"
import { TOAST_SIZES } from "@/ds/tokens/toast/sizes"

const meta = {
  title: "Library/Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: TOAST_VARIANTS,
    },
    size: {
      control: "select",
      options: TOAST_SIZES,
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: "기본 안내 메시지입니다.",
    variant: "default",
    size: "md",
    onDismiss: () => {},
  },
}

export const PositionButton: Story = {
  args: {
    message: "아래 위치한 토스트 메시지",
    position: "bottom",
    onDismiss: () => {},
  },
}
