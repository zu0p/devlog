import { GenerateResultProps } from "../types"

const GenerateResult = ({ value, onChange }: GenerateResultProps) => {
  return (
    <div>
      <textarea
        style={{
          width: "100%",
          height: "400px",
        }}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default GenerateResult
