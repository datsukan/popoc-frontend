type Props = {
  isChecked: boolean
  onChange: Function
}

export const StaySignedInCheckBox = ({ isChecked, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="stay-signed-in"
        name="stay-signed-in"
        checked={isChecked}
        onChange={() => onChange((state: boolean) => !state)}
        className="h-5 w-5 rounded-md"
      />
      <label htmlFor="stay-signed-in" className="text-sm">
        ログイン状態を保持する
      </label>
    </div>
  )
}
