'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { Logo } from '@/components/Logo'
import { InputField } from '@/components/form/InputTextField'
import { StaySignedInCheckBox } from './StaySignedInCheckBox'
import { SignInButton } from './SignInButton'
import { ForgotPasswordLink } from './ForgotPasswordLink'

import { SignIn } from '@/webapi/signin'
import { maxEmailLen, maxPasswordLen } from '@/models/user'

export const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isStaySignedIn, setIsStaySignedIn] = useState(false)
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

    const req = { email, password, isStaySignedIn }
    const signIn = new SignIn(req)

    const validationResult = signIn.validate()
    if (!validationResult.valid) {
      setEmailValidationResult(validationResult.email)
      setPasswordValidationResult(validationResult.password)
      return
    }

    const res = signIn.post()
    initializeValidationResult()

    if (res.hasError) {
      toast.error(res.errorMessage)
      return
    }

    toast.success('ログインしました')
    router.push('/dashboard')
  }

  return (
    <div className="w-full sm:w-[500px] sm:rounded-lg sm:p-12 sm:shadow-2xl">
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="mt-4 text-2xl">ログイン</h1>
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
        <div className="mt-6 w-full">
          <StaySignedInCheckBox
            isChecked={isStaySignedIn}
            onChange={setIsStaySignedIn}
          />
        </div>
        <div className="mt-12 w-full">
          <SignInButton onClick={execSignUp} />
        </div>
        <div className="mt-7 w-full">
          <ForgotPasswordLink />
        </div>
      </div>
    </div>
  )
}
