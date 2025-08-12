'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { User, EnterpriseAccount, AE } from '@/types/implementation'
import { mockUser, mockEnterpriseAccount, mockAE } from '@/lib/implementation-data'

interface AuthContextType {
  user: User | null
  account: EnterpriseAccount | null
  ae: AE | null
  isAuthenticated: boolean
  isLoading: boolean
  sendVerificationCode: (email: string) => Promise<{ success: boolean; message?: string }>
  verifyCode: (email: string, code: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [account, setAccount] = useState<EnterpriseAccount | null>(null)
  const [ae, setAE] = useState<AE | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem('claude-enterprise-user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setAccount(mockEnterpriseAccount)
        setAE(mockAE)
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('claude-enterprise-user')
      }
    }
    setIsLoading(false)
  }, [])

  const sendVerificationCode = async (email: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true)
    
    try {
      // Mock email verification - in production this would call your auth API
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
      
      // For demo purposes, accept any email that looks like an enterprise email
      const isValidEnterpriseEmail = email.includes('@') && 
        !email.endsWith('@gmail.com') && 
        !email.endsWith('@yahoo.com') && 
        !email.endsWith('@hotmail.com')
      
      if (isValidEnterpriseEmail) {
        // Store the email temporarily for verification
        localStorage.setItem('claude-pending-email', email)
        // In production, generate and send actual verification code
        console.log(`Verification code sent to ${email}: 123456`)
        
        setIsLoading(false)
        return { success: true, message: 'Verification code sent to your email' }
      } else {
        setIsLoading(false)
        return { success: false, message: 'Please use your enterprise email address' }
      }
    } catch (error) {
      console.error('Send verification error:', error)
      setIsLoading(false)
      return { success: false, message: 'Failed to send verification code' }
    }
  }

  const verifyCode = async (email: string, code: string): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true)
    
    try {
      // Mock code verification - in production this would call your auth API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      const pendingEmail = localStorage.getItem('claude-pending-email')
      
      // For demo purposes, accept '123456' as the verification code
      if (email === pendingEmail && code === '123456') {
        const userData = { ...mockUser, email }
        setUser(userData)
        setAccount(mockEnterpriseAccount)
        setAE(mockAE)
        
        // Save to localStorage for persistence
        localStorage.setItem('claude-enterprise-user', JSON.stringify(userData))
        localStorage.removeItem('claude-pending-email')
        
        setIsLoading(false)
        return { success: true }
      } else if (email !== pendingEmail) {
        setIsLoading(false)
        return { success: false, message: 'Email does not match the one we sent the code to' }
      } else {
        setIsLoading(false)
        return { success: false, message: 'Invalid verification code' }
      }
    } catch (error) {
      console.error('Verify code error:', error)
      setIsLoading(false)
      return { success: false, message: 'Failed to verify code' }
    }
  }

  const logout = () => {
    setUser(null)
    setAccount(null)
    setAE(null)
    localStorage.removeItem('claude-enterprise-user')
    localStorage.removeItem('claude-pending-email')
  }

  return (
    <AuthContext.Provider value={{
      user,
      account,
      ae,
      isAuthenticated: !!user,
      isLoading,
      sendVerificationCode,
      verifyCode,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}