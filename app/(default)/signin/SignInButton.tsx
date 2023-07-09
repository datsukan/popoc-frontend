import { SubmitButton } from '@/components/form/SubmitButton'

type Props = {
  onClick: Function
}

export const SignInButton = ({ onClick }: Props) => {
  return <SubmitButton onClick={onClick}>ログインする</SubmitButton>
}
