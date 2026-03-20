import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { userEvent, fn, screen } from "@storybook/test"
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
    variant: "default",
    onClose: fn(),
  },
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Title> 다이얼로그 제목 </Dialog.Title>
      <Dialog.Label> 다이얼로그 내용 - label </Dialog.Label>
      <Dialog.Button buttons={[{ text: "확인", onClick: fn }]} />
    </Dialog>
  ),
}

export const Warning: Story = {
  args: {
    variant: "destructive",
    onClose: fn(),
  },
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Label>
        {" "}
        정말 삭제하시겠습니까?
        <br />이 작업은 되돌릴 수 없습니다.{" "}
      </Dialog.Label>
      <Dialog.Button
        buttons={[
          { text: "네", onClick: fn() },
          { text: "아니오", onClick: fn() },
        ]}
      />
    </Dialog>
  ),
}

/**
 * 인터랙션 테스트용
 * play 메서드 -> 버튼 클릭 시나리오 자동화
 */
export const InteractionScenario: Story = {
  args: {
    variant: "default",
    onClose: fn(),
  },
  render: (args) => {
    const onLater = fn()
    const onSave = fn()
    return (
      <Dialog {...args}>
        <Dialog.Label>변경사항을 저장하시겠습니까?</Dialog.Label>
        <Dialog.Button
          buttons={[
            { text: "저장하기", onClick: onSave },
            { text: "나중에", onClick: onLater },
          ]}
        />
      </Dialog>
    )
  },
  play: async ({ step }) => {
    await step("메시지 표시 확인", async () => {
      await screen.findByText(/변경사항을 저장하시겠습니까\?/i)
    })

    await step("저장하기 버튼 클릭", async () => {
      const saveButton = await screen.findByRole("button", {
        name: /저장하기/i,
      })
      await userEvent.click(saveButton)
    })
    await step("나중에 버튼 클릭", async () => {
      const laterButton = await screen.findByRole("button", { name: /나중에/i })
      await userEvent.click(laterButton)
    })
  },
}
