'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'
import Link from 'next/link'

function MagicLinkContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading')
  const [message, setMessage] = useState('')
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const { verifyCode } = useAuth()

  useEffect(() => {
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    if (!token || !email) {
      setStatus('error')
      setMessage('Invalid or missing authentication parameters')
      return
    }

    // Verify the magic link
    const verifyMagicLink = async () => {
      try {
        // For demo purposes, accept any token that starts with 'magic_'
        if (token.startsWith('magic_')) {
          // Extract verification code from token (in production, this would be validated on backend)
          const result = await verifyCode(email, '123456')
          
          if (result.success) {
            setStatus('success')
            setMessage('Successfully authenticated! Redirecting to your dashboard...')
            
            // Redirect after a brief delay
            setTimeout(() => {
              router.push('/')
            }, 2000)
          } else {
            setStatus('error')
            setMessage(result.message || 'Authentication failed')
          }
        } else {
          setStatus('expired')
          setMessage('This magic link has expired or is invalid')
        }
      } catch (error) {
        setStatus('error')
        setMessage('An error occurred during authentication')
      }
    }

    // Simulate a brief loading delay
    setTimeout(verifyMagicLink, 1500)
  }, [searchParams, verifyCode, router])

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader className="h-16 w-16 text-clay animate-spin" />
      case 'success':
        return <CheckCircle className="h-16 w-16 text-olive" />
      case 'error':
      case 'expired':
        return <AlertCircle className="h-16 w-16 text-coral" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'loading':
        return 'text-clay'
      case 'success':
        return 'text-olive'
      case 'error':
      case 'expired':
        return 'text-red-600'
    }
  }

  const getStatusTitle = () => {
    switch (status) {
      case 'loading':
        return 'Authenticating...'
      case 'success':
        return 'Welcome back!'
      case 'error':
        return 'Authentication failed'
      case 'expired':
        return 'Link expired'
    }
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium text-slate mb-2">
            Claude for Enterprise
          </h1>
          <p className="text-gray-600 text-serif">
            Implementation Portal
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-ivory rounded-lg border border-gray-200 p-8 shadow-sm">
          <div className="text-center">
            <div className="mb-6">
              {getStatusIcon()}
            </div>
            
            <h2 className={`text-xl font-medium mb-3 ${getStatusColor()}`}>
              {getStatusTitle()}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {message}
            </p>

            {status === 'error' || status === 'expired' ? (
              <div className="space-y-3">
                <Link 
                  href="/login"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-clay text-ivory rounded-lg hover:opacity-90 font-medium"
                >
                  Try signing in again
                </Link>
                
                <Link 
                  href="/support"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Contact Support
                </Link>
              </div>
            ) : status === 'success' ? (
              <div className="text-sm text-gray-500">
                Redirecting you to your dashboard...
              </div>
            ) : (
              <div className="text-sm text-gray-500">
                Please wait while we verify your authentication...
              </div>
            )}
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

export default function MagicLinkPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
        <div className="text-center">
          <Loader className="h-12 w-12 text-clay animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <MagicLinkContent />
    </Suspense>
  )
}