import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, userEvent, within, screen, waitFor } from "@storybook/test"
import DialogContainer from "./DialogContainer"
import { useDialog } from "@/stores/dialog.store"
import Button from "@/ds/components/atoms/button/Button"

const meta = {
  title: "Library/Molecules/DialogContainer",
  component: DialogContainer,
  parameters: {
    layout: "fullscreen",
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [{ id: "color-contrast", enabled: true }],
      },
    },
  },
  decorators: [
    (Story) => {
      const { showDialog } = useDialog()

      return (
        <div className="p-10">
          <Button
            onClick={() =>
              showDialog({
                message: "다이얼로그가 성공적으로 떴습니다!",
                variant: "success",
                buttons: [{ text: "닫기", onClick: () => console.log("닫힘") }],
              })
            }
          >
            다이얼로그 열기
          </Button>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof DialogContainer>

export default meta
type Story = StoryObj<typeof meta>

export const InteractionScenario: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("초기 상태 확인", async () => {
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })

    await step("다이얼로그 열기 인터랙션", async () => {
      const openButton = canvas.getByRole("button", {
        name: /다이얼로그 열기/i,
      })
      await userEvent.click(openButton)

      const dialog = await screen.findByRole("dialog")
      expect(dialog).toBeInTheDocument()
    })

    await step("다이얼로그 닫기 인터랙션 + 상태 반영 확인", async () => {
      const closeButton = await screen.findByRole("button", { name: /닫기/i })
      await userEvent.click(closeButton)

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      })
    })

    await step("배경 클릭 시 다이얼로그 닫힘 확인", async () => {
      const openButton = canvas.getByRole("button", {
        name: /다이얼로그 열기/i,
      })
      await userEvent.click(openButton)

      const backdrop = await screen.findByRole("dialog")
      await userEvent.click(backdrop)

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      })
    })
  },
}
