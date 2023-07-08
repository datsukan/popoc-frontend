import { SuccessIcon } from './SuccessIcon'

export default function SignUpComplete() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <SuccessIcon />
        </div>
        <span className="text-3xl leading-normal">
          メールを送信しました。
          <br />
          メールに記載されているリンクから登録を完了させてください。
        </span>
      </div>
    </div>
  )
}
