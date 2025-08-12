import { 
  EnterpriseAccount, 
  User, 
  AE, 
  ImplementationStep, 
  ImplementationProgress, 
  ChecklistItem, 
  ChecklistProgress,
  ImplementationStats 
} from '@/types/implementation'

// Mock data for demonstration - in production this would connect to your database
export const mockEnterpriseAccount: EnterpriseAccount = {
  id: 'acme-corp-001',
  organizationName: 'Acme Corporation',
  domain: 'acme.com',
  primaryOwnerId: 'user-001',
  plan: 'enterprise',
  contractStartDate: '2025-01-15',
  contractValue: 480000,
  industry: 'Technology',
  employeeCount: 1200,
  aeId: 'ae-sarah-chen',
  status: 'setup',
  createdAt: '2025-01-15T00:00:00Z',
  updatedAt: '2025-01-15T00:00:00Z'
}

export const mockUser: User = {
  id: 'user-001',
  email: 'admin@acme.com',
  firstName: 'John',
  lastName: 'Smith',
  role: 'primary_owner',
  accountId: 'acme-corp-001',
  lastLoginAt: '2025-01-20T10:30:00Z',
  createdAt: '2025-01-15T00:00:00Z',
  updatedAt: '2025-01-20T10:30:00Z'
}

export const mockAE: AE = {
  id: 'ae-sarah-chen',
  firstName: 'Sarah',
  lastName: 'Chen',
  email: 'sarah.chen@anthropic.com',
  phone: '+1-555-0123',
  timezone: 'America/Los_Angeles',
  calendlyLink: 'https://calendly.com/sarah-chen-anthropic',
  slackHandle: '@sarah.chen'
}

export const implementationSteps: ImplementationStep[] = [
  {
    id: 'step-001',
    category: 'Foundation',
    title: 'Account Setup & Verification',
    description: 'Complete account verification, domain setup, and initial configuration',
    estimatedMinutes: 10,
    order: 1,
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9184690-getting-started-with-claude-for-work',
    resources: [
      {
        title: 'Account Setup Guide',
        url: 'https://support.anthropic.com/en/articles/9184690-getting-started-with-claude-for-work',
        type: 'documentation'
      },
      {
        title: 'Domain Verification',
        url: 'https://support.anthropic.com/en/articles/9184690-getting-started-with-claude-for-work#h_01J4XKQHD4D6TGXZ8TKQY5CJQR',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-002', 
    category: 'Foundation',
    title: 'SSO Integration',
    description: 'Configure Single Sign-On with your identity provider',
    estimatedMinutes: 15,
    order: 2,
    dependencies: ['step-001'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9487931-sso-saml-setup-guide',
    resources: [
      {
        title: 'SSO/SAML Setup Guide',
        url: 'https://support.anthropic.com/en/articles/9487931-sso-saml-setup-guide',
        type: 'documentation'
      },
      {
        title: 'Okta Integration Guide',
        url: 'https://support.anthropic.com/en/articles/9487931-sso-saml-setup-guide#h_01J4XKQ8G2B3VWXR9MTJY6FPQD',
        type: 'documentation'
      },
      {
        title: 'Azure AD Setup',
        url: 'https://support.anthropic.com/en/articles/9487931-sso-saml-setup-guide#h_01J4XKQ8G2C4WYZS0NUKZ7GQRE',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-003',
    category: 'Foundation', 
    title: 'User Management & Roles',
    description: 'Configure roles, permissions, and user provisioning',
    estimatedMinutes: 60,
    order: 3,
    dependencies: ['step-002'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9520814-roles-and-permissions',
    resources: [
      {
        title: 'Roles and Permissions Guide',
        url: 'https://support.anthropic.com/en/articles/9520814-roles-and-permissions',
        type: 'documentation'
      },
      {
        title: 'User Provisioning (SCIM)',
        url: 'https://support.anthropic.com/en/articles/9520815-user-provisioning-scim',
        type: 'documentation'
      },
      {
        title: 'Bulk User Upload',
        url: 'https://claude.ai/organizations/settings/members',
        type: 'tool',
        description: 'Access bulk upload in Claude.ai console'
      }
    ]
  },
  {
    id: 'step-004',
    category: 'Foundation',
    title: 'Security Configuration',
    description: 'Set up security policies, audit logging, and compliance settings',
    estimatedMinutes: 30,
    order: 4,
    dependencies: ['step-003'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9520816-security-and-compliance',
    resources: [
      {
        title: 'Security Settings Guide',
        url: 'https://support.anthropic.com/en/articles/9520816-security-and-compliance',
        type: 'documentation'
      },
      {
        title: 'Audit Logs',
        url: 'https://claude.ai/organizations/settings/audit',
        type: 'tool',
        description: 'Configure audit logging in Claude.ai console'
      },
      {
        title: 'Data Retention Policies',
        url: 'https://support.anthropic.com/en/articles/9520817-data-retention',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-005',
    category: 'Deployment',
    title: 'Training & Onboarding',
    description: 'Deploy training materials and schedule sessions for your team',
    estimatedMinutes: 180,
    order: 5,
    dependencies: ['step-004'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9520818-team-training',
    resources: [
      {
        title: 'Training Resources',
        url: 'https://support.anthropic.com/en/articles/9520818-team-training',
        type: 'documentation'
      },
      {
        title: 'Best Practices Guide',
        url: 'https://support.anthropic.com/en/articles/9520819-claude-best-practices',
        type: 'documentation'
      },
      {
        title: 'Usage Examples',
        url: 'https://support.anthropic.com/en/articles/9520820-usage-examples',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-006',
    category: 'Scale',
    title: 'Organization Rollout',
    description: 'Deploy Claude to all users across the organization',
    estimatedMinutes: 240,
    order: 6,
    dependencies: ['step-005'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9520821-organization-rollout',
    resources: [
      {
        title: 'Rollout Strategy Guide',
        url: 'https://support.anthropic.com/en/articles/9520821-organization-rollout',
        type: 'documentation'
      },
      {
        title: 'Communication Templates',
        url: 'https://support.anthropic.com/en/articles/9520822-rollout-communications',
        type: 'documentation'
      },
      {
        title: 'User Onboarding Portal',
        url: 'https://claude.ai/organizations/onboarding',
        type: 'tool',
        description: 'Manage user invitations in Claude.ai console'
      }
    ]
  },
  {
    id: 'step-007',
    category: 'Optimization',
    title: 'Usage Analytics',
    description: 'Review usage patterns and optimize deployment',
    estimatedMinutes: 90,
    order: 7,
    dependencies: ['step-006'],
    required: false,
    helpUrl: 'https://support.anthropic.com/en/articles/9520823-usage-analytics',
    resources: [
      {
        title: 'Analytics Dashboard',
        url: 'https://claude.ai/organizations/analytics',
        type: 'tool',
        description: 'View usage metrics in Claude.ai console'
      },
      {
        title: 'Usage Optimization Guide',
        url: 'https://support.anthropic.com/en/articles/9520823-usage-analytics',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-008',
    category: 'Optimization',
    title: 'Success Review',
    description: 'Conduct success review with AE and plan future enhancements',
    estimatedMinutes: 60,
    order: 8,
    dependencies: ['step-007'],
    required: false,
    helpUrl: 'https://support.anthropic.com/en/articles/9520824-success-metrics',
    resources: [
      {
        title: 'Success Metrics Guide',
        url: 'https://support.anthropic.com/en/articles/9520824-success-metrics',
        type: 'documentation'
      }
    ]
  }
]

// Mock progress data - in production this would be fetched from database
export const mockImplementationProgress: ImplementationProgress[] = [
  {
    id: 'progress-001',
    accountId: 'acme-corp-001',
    stepId: 'step-001',
    status: 'completed',
    completedAt: '2025-01-16T14:30:00Z',
    completedBy: 'user-001',
    notes: 'Account verified successfully',
    createdAt: '2025-01-15T00:00:00Z',
    updatedAt: '2025-01-16T14:30:00Z'
  },
  {
    id: 'progress-002',
    accountId: 'acme-corp-001', 
    stepId: 'step-002',
    status: 'in_progress',
    notes: 'Working on Okta integration',
    createdAt: '2025-01-16T14:30:00Z',
    updatedAt: '2025-01-20T10:15:00Z'
  },
  {
    id: 'progress-003',
    accountId: 'acme-corp-001',
    stepId: 'step-003',
    status: 'not_started',
    createdAt: '2025-01-15T00:00:00Z',
    updatedAt: '2025-01-15T00:00:00Z'
  }
]

export const checklistItems: ChecklistItem[] = [
  // SSO Setup checklist
  {
    id: 'check-sso-001',
    stepId: 'step-002',
    title: 'Gather IdP metadata',
    description: 'Collect SAML metadata URL or certificate from your identity provider',
    order: 1,
    required: true,
    helpText: 'This is usually found in your IdP admin console under SAML applications'
  },
  {
    id: 'check-sso-002', 
    stepId: 'step-002',
    title: 'Configure SAML application',
    description: 'Create new SAML application in your identity provider',
    order: 2,
    required: true,
    validationUrl: '/api/validate-sso'
  },
  {
    id: 'check-sso-003',
    stepId: 'step-002',
    title: 'Set up attribute mappings',
    description: 'Configure user attribute mappings (email, name, groups)',
    order: 3,
    required: true
  },
  {
    id: 'check-sso-004',
    stepId: 'step-002',
    title: 'Test SSO login',
    description: 'Verify SSO works with a test user account',
    order: 4,
    required: true
  },
  // User Management checklist
  {
    id: 'check-user-001',
    stepId: 'step-003',
    title: 'Define user roles',
    description: 'Create role structure for your organization',
    order: 1,
    required: true
  },
  {
    id: 'check-user-002',
    stepId: 'step-003', 
    title: 'Set up SCIM provisioning',
    description: 'Configure automated user provisioning',
    order: 2,
    required: false,
    helpText: 'Optional but recommended for large organizations'
  }
]

// Data access functions
export async function getImplementationProgress(accountId: string): Promise<ImplementationStats> {
  // In production, this would query your database
  const progress = mockImplementationProgress.filter(p => p.accountId === accountId)
  const completed = progress.filter(p => p.status === 'completed').length
  const inProgress = progress.filter(p => p.status === 'in_progress').length
  const blocked = progress.filter(p => p.status === 'blocked').length
  
  return {
    totalSteps: implementationSteps.length,
    completedSteps: completed,
    inProgressSteps: inProgress, 
    blockedSteps: blocked,
    overallProgress: Math.round((completed / implementationSteps.length) * 100),
    estimatedCompletionDays: 14,
    currentPhase: 'Foundation',
    nextMilestone: 'SSO Integration Complete'
  }
}

export async function updateStepProgress(
  accountId: string, 
  stepId: string, 
  status: ImplementationProgress['status'],
  notes?: string
): Promise<void> {
  // In production, this would update your database
  console.log(`Updating step ${stepId} for account ${accountId} to status: ${status}`)
  if (notes) {
    console.log(`Notes: ${notes}`)
  }
}

export async function getChecklistProgress(accountId: string, stepId: string): Promise<ChecklistProgress[]> {
  // In production, this would query your database
  // For demo, return empty array (no checklist items completed yet)
  return []
}

export async function updateChecklistItem(
  accountId: string,
  itemId: string, 
  completed: boolean,
  notes?: string
): Promise<void> {
  // In production, this would update your database
  console.log(`Updating checklist item ${itemId} for account ${accountId} to completed: ${completed}`)
  if (notes) {
    console.log(`Notes: ${notes}`)
  }
}