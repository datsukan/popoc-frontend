import { SignInRequest } from '@/webapi/type/request/signin'
import { ValidationResult } from '@/webapi/type/validation/result'
import { ExecResult } from '@/webapi/type/exec-result'

import {
  minEmailLen,
  maxEmailLen,
  minPasswordLen,
  maxPasswordLen,
} from '@/models/user'

type SignInValidationResult = {
  valid: boolean
  email: ValidationResult
  password: ValidationResult
  isStaySignedIn: ValidationResult
}

export class SignIn implements SignInRequest {
  email: string
  password: string
  isStaySignedIn: boolean

  constructor({ email, password, isStaySignedIn }: SignInRequest) {
    this.email = email
    this.password = password
    this.isStaySignedIn = isStaySignedIn
  }

  validate(): SignInValidationResult {
    const res = {
      valid: true,
      email: { valid: true, message: '' },
      password: { valid: true, message: '' },
      isStaySignedIn: { valid: true, message: '' },
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
