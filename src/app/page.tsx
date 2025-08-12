'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Settings, Users, BookOpen, Shield, CheckCircle, AlertCircle, Clock, HelpCircle, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import ProgressTracking from '@/components/ProgressTracking'
import { 
  implementationSteps, 
  mockImplementationProgress, 
  getImplementationProgress, 
  updateStepProgress, 
  updateChecklistItem 
} from '@/lib/implementation-data'
import { ImplementationStats, ImplementationProgress } from '@/types/implementation'

export default function HomePage() {
  const { user, account, ae, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState<ImplementationStats | null>(null)
  const [progress, setProgress] = useState<ImplementationProgress[]>(mockImplementationProgress)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
      return
    }

    if (account) {
      // Load implementation stats
      getImplementationProgress(account.id).then(setStats)
    }
  }, [isAuthenticated, isLoading, account, router])

  const handleUpdateProgress = async (stepId: string, status: ImplementationProgress['status'], notes?: string) => {
    if (!account) return
    
    await updateStepProgress(account.id, stepId, status, notes)
    
    // Update local state
    setProgress(prev => {
      const existing = prev.find(p => p.stepId === stepId)
      if (existing) {
        return prev.map(p => p.stepId === stepId ? { ...p, status, notes } : p)
      } else {
        return [...prev, {
          id: `progress-${stepId}`,
          accountId: account.id,
          stepId,
          status,
          notes,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }]
      }
    })
    
    // Refresh stats
    getImplementationProgress(account.id).then(setStats)
  }

  const handleUpdateChecklist = async (itemId: string, completed: boolean, notes?: string) => {
    if (!account) return
    await updateChecklistItem(account.id, itemId, completed, notes)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-clay mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your implementation dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user || !account || !ae || !stats) {
    return null
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Minimal Header */}
      <header className="border-b border-gray-200 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-medium text-slate">Claude for Enterprise</h1>
              <span className="text-sm text-gray-500">Implementation</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-slate">{user.firstName} {user.lastName}</div>
                <div className="text-xs text-gray-500">{account.organizationName}</div>
              </div>
              <button
                onClick={logout}
                className="text-gray-400 hover:text-gray-600 p-2"
                title="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Main Content */}
      <main className="py-12">
        <ProgressTracking
          accountId={account.id}
          steps={implementationSteps}
          progress={progress}
          stats={stats}
          ae={ae}
          onUpdateProgress={handleUpdateProgress}
          onUpdateChecklist={handleUpdateChecklist}
        />
      </main>
    </div>
  )
}
