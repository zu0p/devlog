import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import Button from "./Button"
import { BUTTON_VARIANTS } from "../../../tokens/button/variants"
import { BUTTON_SIZES } from "../../../tokens/button/sizes"

const meta = {
  title: "Library/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: BUTTON_VARIANTS,
    },
    size: {
      options: BUTTON_SIZES,
    },
  },
  args: { onClick: fn(), children: "버튼" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "default",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const Small: Story = {
  args: { size: "sm" },
}
