import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { MdCottage } from 'react-icons/md'
import { useAuth } from '../../hooks/useAuth'
import { useAuthModal } from '../../hooks/useAuthModal'
import { sendOtp, verifyOtp, login, Register } from '../../apis/user/auth'

type Step = 'email' | 'otp' | 'name'

export function AuthModal() {
  const { isOpen, closeAuthModal } = useAuthModal()
  const { setIsAuthenticated } = useAuth()

  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  function resetAndClose() {
    setStep('email')
    setEmail('')
    setOtp('')
    setFirstName('')
    setLastName('')
    setError(null)
    closeAuthModal()
  }

  async function handleSendOtp() {
    if (!email.trim()) {
      setError('Please enter your email')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      await sendOtp({ email })
      setStep('otp')
    } catch (err) {
      setError('Could not send OTP. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleVerifyOtp() {
    if (!otp.trim()) {
      setError('Please enter the OTP')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const { data } = await verifyOtp({ email, otp: Number(otp) })

      if (data.userExists) {
        await login({ email })
        setIsAuthenticated(true)
        resetAndClose()
      } else {
        setStep('name')
      }
    } catch (err) {
      setError('Verification failed. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleRegister() {
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter your name')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      await Register({ email, firstName, lastName })
      setIsAuthenticated(true)
      resetAndClose()
    } catch (err) {
      setError('Registration failed. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleGoogleLogin() {
    console.log('Google login clicked')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-surface p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-text-variant transition-colors hover:text-text"
        >
          <FiX size={22} />
        </button>

        <div className="mb-8 flex flex-col items-center text-center">
          <MdCottage fontSize={32} className="mb-2 text-primary" />
          <h2 className="m-0 font-heading text-2xl font-extrabold tracking-[-0.04em] text-primary">
            stayz<span className="text-secondary">.</span>
          </h2>
          <p className="m-0 mt-1 text-base text-text-variant">Find your next stay</p>
        </div>

        {step === 'email' ? (
          <>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="auth-email">
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
              />
              {error ? <p className="m-0 text-sm text-error">{error}</p> : null}
            </div>

            <button
              type="button"
              className="auth-button-primary mt-4"
              onClick={handleSendOtp}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Continue'}
            </button>

            <div className="my-6 flex items-center gap-3">
              <hr className="flex-1 border-outline-variant/40" />
              <span className="text-sm text-text-variant">or</span>
              <hr className="flex-1 border-outline-variant/40" />
            </div>

            <button type="button" className="auth-button-secondary" onClick={handleGoogleLogin}>
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </button>
          </>
        ) : null}

        {step === 'otp' ? (
          <>
            <p className="m-0 mb-4 text-center text-sm text-text-variant">
              Enter the code sent to <span className="font-semibold text-text">{email}</span>
            </p>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-text" htmlFor="auth-otp">
                OTP
              </label>
              <input
                id="auth-otp"
                type="text"
                inputMode="numeric"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base tracking-[0.3em] outline-none focus:border-primary"
              />
              {error ? <p className="m-0 text-sm text-error">{error}</p> : null}
            </div>

            <button
              type="button"
              className="auth-button-primary mt-4"
              onClick={handleVerifyOtp}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Verifying...' : 'Verify'}
            </button>

            <button
              type="button"
              className="mt-3 w-full text-center text-sm text-text-variant transition-colors hover:text-primary"
              onClick={() => setStep('email')}
            >
              Change email
            </button>
          </>
        ) : null}

        {step === 'name' ? (
          <>
            <p className="m-0 mb-4 text-center text-sm text-text-variant">
              Almost there — tell us your name
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-text" htmlFor="auth-first-name">
                  First name
                </label>
                <input
                  id="auth-first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-text" htmlFor="auth-last-name">
                  Last name
                </label>
                <input
                  id="auth-last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3 text-base outline-none focus:border-primary"
                />
              </div>
            </div>

            {error ? <p className="m-0 mt-2 text-sm text-error">{error}</p> : null}

            <button
              type="button"
              className="auth-button-primary mt-4"
              onClick={handleRegister}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}