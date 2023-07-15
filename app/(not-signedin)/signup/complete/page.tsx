import { SuccessIcon } from './SuccessIcon'

export default function SignUpComplete() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <SuccessIcon />
        </div>
        <span className="text-xl leading-normal sm:text-2xl">
          メールを送信しました。
          <br />
          メールに記載されているリンクから登録を完了させてください。
        </span>
      </div>
    </div>
  )
}
