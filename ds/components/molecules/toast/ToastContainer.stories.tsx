import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, userEvent, within } from "@storybook/test"
import ToastContainer from "./ToastContainer"
import { useToast } from "@/stores/toast.store"
import Button from "../../atoms/button/Button"
import { waitFor } from "storybook/test"

const meta = {
  title: "Library/Molecules/Toast",
  component: ToastContainer,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const { showToast } = useToast()
      return (
        <div className="p-10">
          <Button
            onClick={() => {
              showToast({
                message: "토스트가 성공적으로 떴습니다.",
                duration: 1500,
              })
            }}
          >
            토스트 열기
          </Button>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof ToastContainer>

export default meta
type Story = StoryObj<typeof meta>

export const InteractionScenario: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("초기 상태 확인", async () => {
      await expect(
        canvas.queryByText(/토스트가 성공적으로 떴습니다./i)
      ).not.toBeInTheDocument()
    })

    await step("토스트 열기 버튼 클릭", async () => {
      const openButton = canvas.getByRole("button", { name: /토스트 열기/i })
      await userEvent.click(openButton)

      await expect(
        canvas.getByText(/토스트가 성공적으로 떴습니다./i)
      ).toBeInTheDocument()
    })

    await step("토스트가 duration 시간 이후 사라지는지 확인", async () => {
      await waitFor(
        () => {
          expect(
            canvas.queryByText(/토스트가 성공적으로 떴습니다./i)
          ).not.toBeInTheDocument()
        },
        { timeout: 2000 }
      )
    })
  },
}
