export interface EnterpriseAccount {
  id: string
  organizationName: string
  domain: string
  primaryOwnerId: string
  plan: 'enterprise' | 'team'
  contractStartDate: string
  contractValue: number
  industry: string
  employeeCount: number
  aeId: string
  status: 'active' | 'setup' | 'suspended'
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'primary_owner' | 'admin' | 'user'
  accountId: string
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
}

export interface AE {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  timezone: string
  calendlyLink?: string
  slackHandle?: string
}

export interface ImplementationStep {
  id: string
  category: string
  title: string
  description: string
  estimatedMinutes: number
  order: number
  dependencies?: string[]
  required: boolean
  helpUrl?: string
  videoUrl?: string
  resources?: {
    title: string
    url: string
    type: 'documentation' | 'tool' | 'video'
    description?: string
  }[]
}

export interface ImplementationProgress {
  id: string
  accountId: string
  stepId: string
  status: 'not_started' | 'in_progress' | 'completed' | 'skipped' | 'blocked'
  completedAt?: string
  completedBy?: string
  notes?: string
  supportTicketId?: string
  createdAt: string
  updatedAt: string
}

export interface ChecklistItem {
  id: string
  stepId: string
  title: string
  description: string
  order: number
  required: boolean
  helpText?: string
  validationUrl?: string
}

export interface ChecklistProgress {
  id: string
  accountId: string
  itemId: string
  completed: boolean
  completedAt?: string
  completedBy?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface SupportTicket {
  id: string
  accountId: string
  subject: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in_progress' | 'resolved' | 'closed'
  assignedTo?: string
  relatedStepId?: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface ImplementationStats {
  totalSteps: number
  completedSteps: number
  inProgressSteps: number
  blockedSteps: number
  overallProgress: number
  estimatedCompletionDays: number
  currentPhase: string
  nextMilestone: string
}