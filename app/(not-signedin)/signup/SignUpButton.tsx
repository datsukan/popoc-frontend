import { SubmitButton } from '@/components/form/SubmitButton'

type Props = {
  onClick: Function
}

export const SignUpButton = ({ onClick }: Props) => {
  return <SubmitButton onClick={onClick}>アカウント登録する</SubmitButton>
}
