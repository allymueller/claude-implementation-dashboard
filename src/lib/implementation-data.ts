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
    helpUrl: 'https://support.anthropic.com/en/articles/9797531-what-is-the-claude-enterprise-plan',
    resources: [
      {
        title: 'What is the Claude Enterprise plan?',
        url: 'https://support.anthropic.com/en/articles/9797531-what-is-the-claude-enterprise-plan',
        type: 'documentation'
      },
      {
        title: 'Claude for Work Overview',
        url: 'https://support.anthropic.com/en/collections/9387370-claude-for-work-team-and-enterprise-plans',
        type: 'documentation'
      },
      {
        title: 'Enterprise Plan Features Overview',
        url: 'https://support.anthropic.com/en/articles/9797531-what-is-the-claude-enterprise-plan',
        type: 'documentation'
      }
    ]
  },
  {
    id: 'step-002', 
    category: 'Foundation',
    title: 'SSO & SCIM Integration',
    description: 'Configure Single Sign-On and SCIM user provisioning with your identity provider',
    estimatedMinutes: 15,
    order: 2,
    dependencies: ['step-001'],
    required: true,
    helpUrl: 'https://support.anthropic.com/en/articles/9797544-setting-up-single-sign-on-on-the-enterprise-plan',
    resources: [
      {
        title: 'Setting up Single Sign-On on the Enterprise plan',
        url: 'https://support.anthropic.com/en/articles/9797544-setting-up-single-sign-on-on-the-enterprise-plan',
        type: 'documentation'
      },
      {
        title: 'Important Considerations Before Enabling SSO',
        url: 'https://support.anthropic.com/en/articles/10276682-important-considerations-before-enabling-sso',
        type: 'documentation'
      },
      {
        title: 'Setting up SCIM on the Enterprise plan',
        url: 'https://support.anthropic.com/en/articles/9970869-setting-up-scim-on-the-enterprise-plan',
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
    helpUrl: 'https://support.anthropic.com/en/articles/10543488-managing-seats-on-claude-for-enterprise',
    resources: [
      {
        title: 'Managing Seats on Claude for Enterprise',
        url: 'https://support.anthropic.com/en/articles/10543488-managing-seats-on-claude-for-enterprise',
        type: 'documentation'
      },
      {
        title: 'Managing Seats Without SSO',
        url: 'https://support.anthropic.com/en/articles/9778024-managing-seats-on-claude-for-teams-and-enterprise-without-sso-enabled',
        type: 'documentation'
      },
      {
        title: 'User Management Console',
        url: 'https://claude.ai/organizations/settings/members',
        type: 'tool',
        description: 'Access user management in Claude.ai console'
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
    helpUrl: 'https://support.anthropic.com/en/articles/10440198-custom-data-retention-controls-for-claude-enterprise',
    resources: [
      {
        title: 'Custom Data Retention Controls for Claude Enterprise',
        url: 'https://support.anthropic.com/en/articles/10440198-custom-data-retention-controls-for-claude-enterprise',
        type: 'documentation'
      },
      {
        title: 'Security and Compliance Documentation',
        url: 'https://docs.anthropic.com/en/docs/legal-center/security-compliance',
        type: 'documentation'
      },
      {
        title: 'Privacy Policies',
        url: 'https://docs.anthropic.com/en/docs/legal-center/privacy',
        type: 'documentation'
      },
      {
        title: 'Organization Settings Console',
        url: 'https://claude.ai/organizations/settings',
        type: 'tool',
        description: 'Configure security settings in Claude.ai console'
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
    helpUrl: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices',
    resources: [
      {
        title: 'Usage Limit Best Practices',
        url: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices',
        type: 'documentation'
      },
      {
        title: 'Claude for Work Best Practices',
        url: 'https://support.anthropic.com/en/collections/9387370-claude-for-work-team-and-enterprise-plans',
        type: 'documentation'
      },
      {
        title: 'Enterprise User Training Resources',
        url: 'https://support.anthropic.com/en/articles/9797531-what-is-the-claude-enterprise-plan',
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
    helpUrl: 'https://support.anthropic.com/en/collections/9387370-claude-for-work-team-and-enterprise-plans',
    resources: [
      {
        title: 'Claude for Work Best Practices',
        url: 'https://support.anthropic.com/en/collections/9387370-claude-for-work-team-and-enterprise-plans',
        type: 'documentation'
      },
      {
        title: 'Claude.ai Organization Console',
        url: 'https://claude.ai/organizations',
        type: 'tool',
        description: 'Manage organization rollout in Claude.ai console'
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
    helpUrl: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices',
    resources: [
      {
        title: 'Usage Limit Best Practices',
        url: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices',
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
    helpUrl: 'mailto:support@anthropic.com',
    resources: [
      {
        title: 'Contact Support',
        url: 'mailto:support@anthropic.com',
        type: 'documentation',
        description: 'Get ongoing support and success consultation'
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