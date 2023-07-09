import Link from 'next/link'

export const ForgotPasswordLink = () => {
  return (
    <Link href="">
      <span className="text-sm text-popoc-info hover:underline">
        パスワードを忘れた場合はこちらから再設定
      </span>
    </Link>
  )
}
