'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react'

type LoginStep = 'email' | 'verification'

export default function LoginPage() {
  const [step, setStep] = useState<LoginStep>('email')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { sendVerificationCode, verifyCode } = useAuth()
  const router = useRouter()

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    try {
      const result = await sendVerificationCode(email)
      if (result.success) {
        setSuccess('Check your email for the verification code and magic link!')
        setStep('verification')
      } else {
        setError(result.message || 'Failed to send verification code')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateMagicLink = (email: string) => {
    // In production, this would be generated on the backend
    const token = `magic_${btoa(email)}_${Date.now()}`
    return `${window.location.origin}/auth/magic-link?token=${token}&email=${encodeURIComponent(email)}`
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const result = await verifyCode(email, verificationCode)
      if (result.success) {
        router.push('/')
      } else {
        setError(result.message || 'Invalid verification code')
      }
    } catch (err) {
      setError('An error occurred during verification. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendCode = async () => {
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    try {
      const result = await sendVerificationCode(email)
      if (result.success) {
        setSuccess('New verification code sent!')
      } else {
        setError(result.message || 'Failed to resend code')
      }
    } catch (err) {
      setError('Failed to resend verification code')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToEmail = () => {
    setStep('email')
    setVerificationCode('')
    setError('')
    setSuccess('')
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        {/* Minimal Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-medium text-slate mb-2">
            Claude Enterprise
          </h1>
          <p className="text-gray-600">
            Implementation Portal
          </p>
        </div>

        {/* Clean Login Form */}
        <div className="space-y-6">
          
          {step === 'email' ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-medium text-slate mb-2">
                  Sign in to your account
                </h2>
                <p className="text-gray-600 text-sm">
                  Enter your enterprise email to receive a verification code
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-coral rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-sm text-red-600">{error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSendCode} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                    Enterprise email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-clay focus:border-clay text-slate placeholder-gray-400"
                      placeholder="admin@acme.com"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    We'll send a 6-digit verification code to this email address
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-clay text-ivory py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-clay focus:ring-offset-2 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending code...' : 'Send verification code'}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="mb-6">
                <button
                  onClick={handleBackToEmail}
                  className="flex items-center text-clay hover:opacity-80 text-sm mb-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Change email
                </button>
                
                <h2 className="text-xl font-medium text-slate mb-2">
                  Choose your sign-in method
                </h2>
                <p className="text-gray-600 text-sm">
                  We sent both a 6-digit code and a magic link to <strong>{email}</strong>
                </p>
              </div>

              {success && (
                <div className="mb-6 p-4 bg-cactus rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-green-600">{success}</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-coral rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                    <span className="text-sm text-red-600">{error}</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Magic Link Option */}
                <div className="p-4 bg-sky text-ivory rounded-lg">
                  <h3 className="font-medium mb-2">✨ Magic Link (Recommended)</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Click the magic link in your email for instant access
                  </p>
                  <div className="text-xs text-blue-200">
                    <strong>Demo:</strong> 
                    <a 
                      href={generateMagicLink(email)}
                      className="ml-1 underline hover:no-underline"
                    >
                      Click here to simulate magic link
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-ivory text-gray-500">or</span>
                  </div>
                </div>

                {/* Verification Code Option */}
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div>
                    <label htmlFor="code" className="block text-sm font-medium text-slate mb-2">
                      Enter verification code
                    </label>
                    <input
                      id="code"
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      required
                      maxLength={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-clay focus:border-clay text-slate placeholder-gray-400 text-center text-2xl tracking-widest font-mono"
                      placeholder="123456"
                      autoComplete="one-time-code"
                    />
                    <p className="mt-2 text-xs text-gray-500 text-center">
                      Enter the 6-digit code from your email
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || verificationCode.length !== 6}
                    className="w-full bg-clay text-ivory py-3 px-4 rounded-lg hover:opacity-90 focus:ring-2 focus:ring-clay focus:ring-offset-2 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify and sign in'}
                  </button>
                </form>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isSubmitting}
                    className="text-clay hover:opacity-80 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Didn't receive an email? Send again
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Demo Instructions */}
          <div className="mt-8 p-4 bg-oat rounded-lg">
            <h3 className="text-sm font-medium text-slate mb-2">Demo Access</h3>
            {step === 'email' ? (
              <>
                <p className="text-xs text-gray-600 mb-2">
                  Use any enterprise email (not gmail/yahoo/hotmail)
                </p>
                <p className="text-xs text-gray-500">
                  Example: admin@acme.com
                </p>
              </>
            ) : (
              <>
                <div className="text-xs text-gray-600 mb-2">
                  <strong>Option 1:</strong> Click the "simulate magic link" above
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  <strong>Option 2:</strong> Use verification code: <code className="bg-gray-200 px-1 rounded">123456</code>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help accessing your account?{' '}
              <Link href="/support" className="text-clay hover:opacity-80">
                Contact Support
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Claude for Enterprise Implementation Portal
          </p>
          <p className="mt-1">
            Powered by Anthropic
          </p>
        </div>
      </div>
    </div>
  )
}