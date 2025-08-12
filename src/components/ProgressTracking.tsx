'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, Clock, AlertCircle, ChevronDown, ChevronRight, ExternalLink, MessageSquare, Phone, HelpCircle, Play } from 'lucide-react'
import { 
  ImplementationStep, 
  ImplementationProgress, 
  ImplementationStats, 
  ChecklistItem, 
  ChecklistProgress,
  AE 
} from '@/types/implementation'

interface ProgressTrackingProps {
  accountId: string
  steps: ImplementationStep[]
  progress: ImplementationProgress[]
  stats: ImplementationStats
  ae: AE
  onUpdateProgress: (stepId: string, status: ImplementationProgress['status'], notes?: string) => void
  onUpdateChecklist: (itemId: string, completed: boolean, notes?: string) => void
}

export default function ProgressTracking({ 
  accountId, 
  steps, 
  progress, 
  stats, 
  ae,
  onUpdateProgress,
  onUpdateChecklist 
}: ProgressTrackingProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())
  
  const getStepProgress = (stepId: string) => {
    return progress.find(p => p.stepId === stepId)
  }

  const getStatusIcon = (status: ImplementationProgress['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-olive" />
      case 'in_progress': return <Clock className="h-5 w-5 text-sky" />
      case 'blocked': return <AlertCircle className="h-5 w-5 text-coral" />
      default: return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
    }
  }

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId)
    } else {
      newExpanded.add(stepId)
    }
    setExpandedSteps(newExpanded)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Clean Progress Header */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-clay rounded-full mb-4">
          <span className="text-2xl text-ivory font-medium">{stats.overallProgress}%</span>
        </div>
        <h1 className="text-3xl font-medium text-slate mb-2">Implementation Progress</h1>
        <p className="text-gray-600">
          {stats.completedSteps} of {stats.totalSteps} steps completed
        </p>
      </div>

      {/* Minimal Progress Steps */}
      <div className="space-y-1">
        {steps.map((step, index) => {
          const stepProgress = getStepProgress(step.id)
          const isExpanded = expandedSteps.has(step.id)
          const isCompleted = stepProgress?.status === 'completed'
          const isInProgress = stepProgress?.status === 'in_progress'
          
          return (
            <div key={step.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Step Header - Clean and Minimal */}
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(stepProgress?.status)}
                  <div className="text-left">
                    <h3 className="font-medium text-slate">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    ~{step.estimatedMinutes}min
                  </span>
                  {isExpanded ? 
                    <ChevronDown className="h-4 w-4 text-gray-400" /> : 
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  }
                </div>
              </button>

              {/* Expanded Content - Hidden by Default */}
              {isExpanded && (
                <div className="border-t border-gray-200 bg-gray-50">
                  <div className="p-6 space-y-6">
                    
                    {/* Quick Actions */}
                    <div className="flex items-center space-x-3">
                      {!isCompleted && (
                        <button
                          onClick={() => onUpdateProgress(step.id, isInProgress ? 'completed' : 'in_progress')}
                          className="inline-flex items-center px-4 py-2 bg-clay text-ivory rounded-lg hover:opacity-90 text-sm font-medium"
                        >
                          {isInProgress ? 'Mark Complete' : 'Start Step'}
                        </button>
                      )}
                      
                      <button 
                        onClick={() => window.open(`mailto:support@anthropic.com?subject=Help with ${step.title}`, '_blank')}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white text-sm"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Get Help
                      </button>
                    </div>

                    {/* Resources Section */}
                    {step.resources && step.resources.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-gray-700">Resources & Documentation</h4>
                        <div className="grid gap-2">
                          {step.resources.map((resource, idx) => (
                            <Link
                              key={idx}
                              href={resource.url}
                              target="_blank"
                              className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 group transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  {resource.type === 'documentation' && <HelpCircle className="h-4 w-4 text-clay" />}
                                  {resource.type === 'tool' && <ExternalLink className="h-4 w-4 text-sky" />}
                                  {resource.type === 'video' && <Play className="h-4 w-4 text-olive" />}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-clay">
                                    {resource.title}
                                  </p>
                                  {resource.description && (
                                    <p className="text-xs text-gray-500">{resource.description}</p>
                                  )}
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-clay" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Status Update (only if in progress) */}
                    {isInProgress && (
                      <div className="pt-4 border-t border-gray-200">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Add notes (optional)
                        </label>
                        <textarea
                          placeholder="Any updates or notes about your progress..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-clay focus:border-clay text-sm"
                          rows={3}
                          onChange={(e) => onUpdateProgress(step.id, 'in_progress', e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Minimal Contact Section */}
      <div className="flex items-center justify-center space-x-8 py-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Your Account Executive</p>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-clay rounded-full flex items-center justify-center">
              <span className="text-ivory text-sm font-medium">
                {ae.firstName[0]}{ae.lastName[0]}
              </span>
            </div>
            <div>
              <p className="font-medium text-slate">{ae.firstName} {ae.lastName}</p>
              <button 
                onClick={() => window.open(`mailto:${ae.email}`, '_blank')}
                className="text-clay hover:opacity-80 text-sm"
              >
                {ae.email}
              </button>
            </div>
          </div>
        </div>
        
        <div className="h-12 w-px bg-gray-200" />
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Technical Support</p>
          <button 
            onClick={() => window.open(`mailto:support@anthropic.com`, '_blank')}
            className="inline-flex items-center text-clay hover:opacity-80"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            support@anthropic.com
          </button>
        </div>
      </div>
    </div>
  )
}