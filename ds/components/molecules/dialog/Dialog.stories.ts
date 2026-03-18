import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, userEvent, within, fn } from "@storybook/test"
import Dialog from "./Dialog"
import { DIALOG_VARIANTS } from "@/ds/tokens/dialog/variants"

const meta = {
  title: "Library/Molecules/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: DIALOG_VARIANTS,
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: "기본 안내 메시지입니다.",
    variant: "default",
    buttons: [
      {
        text: "확인",
        onClick: fn(),
      },
    ],
  },
}

export const Warning: Story = {
  args: {
    message: "정말 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.",
    variant: "destructive",
    buttons: [
      {
        text: "취소",
        variant: "outline",
        onClick: fn(),
      },
      {
        text: "삭제",
        variant: "outline",
        onClick: fn(),
      },
    ],
  },
}

/**
 * 인터랙션 테스트용
 * play 메서드 -> 버튼 클릭 시나리오 자동화
 */
export const InteractionScenario: Story = {
  args: {
    message: "변경사항을 저장하시겠습니까?",
    variant: "default",
    buttons: [
      {
        text: "나중에",
        variant: "outline",
        onClick: fn(),
      },
      {
        text: "저장하기",
        variant: "outline",
        onClick: fn(),
      },
    ],
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step("메시지 표시 확인", async () => {
      await expect(
        canvas.getByText("변경사항을 저장하시겠습니까?")
      ).toBeInTheDocument()
    })

    await step("저장하기 버튼 클릭", async () => {
      const saveButton = canvas.getByRole("button", { name: /저장하기/i })
      await userEvent.click(saveButton)

      await expect(args.buttons?.[1].onClick).toHaveBeenCalled()
    })

    await step("나중에 버튼 클릭", async () => {
      const laterButton = canvas.getByRole("button", { name: /나중에/i })
      await userEvent.click(laterButton)

      await expect(args.buttons?.[0].onClick).toHaveBeenCalled()
    })
  },
}
