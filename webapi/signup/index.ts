import { SignUpRequest } from '@/webapi/type/request/signup'
import { ValidationResult } from '@/webapi/type/validation/result'
import { ExecResult } from '@/webapi/type/exec-result'

const minEmailLen = 5
const maxEmailLen = 256
const minPasswordLen = 8
const maxPasswordLen = 128

export { minEmailLen, maxEmailLen, minPasswordLen, maxPasswordLen }

type SignUpValidationResult = {
  valid: boolean
  email: ValidationResult
  password: ValidationResult
}

export class SignUp implements SignUpRequest {
  email: string
  password: string

  constructor({ email, password }: SignUpRequest) {
    this.email = email
    this.password = password
  }

  validate(): SignUpValidationResult {
    const res = {
      valid: true,
      email: { valid: true, message: '' },
      password: { valid: true, message: '' },
    }

    if (!this.email) {
      res.valid = false
      res.email.valid = false
      res.email.message = 'メールアドレスが入力されていません。'
    } else if (
      this.email.length < minEmailLen ||
      this.email.length > maxEmailLen
    ) {
      res.valid = false
      res.email.valid = false
      res.email.message = `メールアドレスは${minEmailLen}～${maxEmailLen}文字の範囲で入力してください。`
    }

    if (!this.password) {
      res.valid = false
      res.password.valid = false
      res.password.message = 'パスワードが入力されていません。'
    } else if (
      this.password.length < minPasswordLen ||
      this.password.length > maxPasswordLen
    ) {
      res.valid = false
      res.password.valid = false
      res.password.message = `パスワードは${minPasswordLen}～${maxPasswordLen}文字の範囲で入力してください。`
    }

    return res
  }

  post(): ExecResult {
    const validationResult = this.validate()
    if (!validationResult.valid) {
      return { hasError: true, errorMessage: '入力内容が不正です。' }
    }

    // TODO: あとでWebAPIのリクエスト処理を書く

    return { hasError: false, errorMessage: '' }
  }
}
