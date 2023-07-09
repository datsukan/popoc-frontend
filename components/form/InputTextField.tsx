import { ValidationResult } from '@/webapi/type/validation/result'

type Props = {
  type: string
  label: string
  value: string
  id: string
  maxlength: number
  validationResult: ValidationResult
  onChange: Function
}

export const InputField = ({
  type,
  label,
  value,
  id,
  maxlength,
  validationResult,
  onChange,
}: Props) => {
  const ringColorClassName = validationResult.valid
    ? 'ring-gray-300'
    : 'ring-red-600'

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        className={`h-12 rounded-md px-3 ring-1 ${ringColorClassName}`}
        type={type}
        value={value}
        name={id}
        id={id}
        maxLength={maxlength}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="h-5">
        {!validationResult.valid && (
          <span className="text-xs text-red-600">
            {validationResult.message}
          </span>
        )}
      </div>
    </div>
  )
}
