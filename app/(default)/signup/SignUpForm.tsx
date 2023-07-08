'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { Logo } from '@/components/Logo'
import { InputField } from './InputTextField'
import { SignUpButton } from './SignUpButton'

import { SignUp, maxEmailLen, maxPasswordLen } from '@/webapi/signup'

export const SignUpForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValidationResult, setEmailValidationResult] = useState({
    valid: true,
    message: '',
  })
  const [passwordValidationResult, setPasswordValidationResult] = useState({
    valid: true,
    message: '',
  })

  function initializeValidationResult() {
    setEmailValidationResult({
      valid: true,
      message: '',
    })
    setPasswordValidationResult({
      valid: true,
      message: '',
    })
  }

  function execSignUp() {
    initializeValidationResult()

    const req = { email, password }
    const signUp = new SignUp(req)

    const validationResult = signUp.validate()
    if (!validationResult.valid) {
      setEmailValidationResult(validationResult.email)
      setPasswordValidationResult(validationResult.password)
      return
    }

    const res = signUp.post()
    initializeValidationResult()

    if (res.hasError) {
      toast.error(res.errorMessage)
      return
    }

    router.push('/signup/complete')
  }

  return (
    <div className="w-[500px] rounded-lg p-12 shadow-2xl">
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="mt-4 text-2xl">アカウント登録</h1>
        <div className="mt-6 w-full">
          <InputField
            type="email"
            label="メールアドレス"
            value={email}
            id="email"
            maxlength={maxEmailLen}
            validationResult={emailValidationResult}
            onChange={setEmail}
          />
        </div>
        <div className="mt-6 w-full">
          <InputField
            type="password"
            label="パスワード"
            value={password}
            id="password"
            maxlength={maxPasswordLen}
            validationResult={passwordValidationResult}
            onChange={setPassword}
          />
        </div>
        <div className="mt-12 w-full">
          <SignUpButton onClick={execSignUp} />
        </div>
      </div>
    </div>
  )
}
