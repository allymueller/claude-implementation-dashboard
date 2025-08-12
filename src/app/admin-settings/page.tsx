import Link from 'next/link'
import { ArrowRight, Settings, Shield, Users, Database, Bell, Globe, Key, Monitor, Clock, ChevronRight, AlertCircle, CheckCircle } from 'lucide-react'

export default function AdminSettingsPage() {
  const settingsCategories = [
    {
      title: "Organization Settings",
      description: "Core configuration for your Claude Enterprise workspace",
      icon: Settings,
      settings: [
        { name: "Organization Name", value: "Acme Corporation", status: "configured" },
        { name: "Primary Domain", value: "acme.com", status: "configured" },
        { name: "Default Language", value: "English (US)", status: "configured" },
        { name: "Time Zone", value: "UTC-8 (Pacific)", status: "configured" }
      ]
    },
    {
      title: "Security & Authentication",
      description: "Identity management and access controls",
      icon: Shield,
      settings: [
        { name: "Single Sign-On", value: "Okta SAML 2.0", status: "configured" },
        { name: "Multi-Factor Authentication", value: "Required for all users", status: "configured" },
        { name: "Session Timeout", value: "8 hours", status: "configured" },
        { name: "IP Allowlisting", value: "Not configured", status: "warning" }
      ]
    },
    {
      title: "User Management", 
      description: "Default settings for user provisioning and roles",
      icon: Users,
      settings: [
        { name: "Auto-provisioning", value: "SCIM enabled", status: "configured" },
        { name: "Default Role", value: "User", status: "configured" },
        { name: "Group Sync", value: "Active Directory groups", status: "configured" },
        { name: "Deprovisioning", value: "Automatic on user removal", status: "configured" }
      ]
    },
    {
      title: "Data & Privacy",
      description: "Data handling and privacy controls",
      icon: Database,
      settings: [
        { name: "Data Residency", value: "US East (N. Virginia)", status: "configured" },
        { name: "Conversation Retention", value: "90 days", status: "configured" },
        { name: "Data Export", value: "Enabled for admins", status: "configured" },
        { name: "Training Data Opt-out", value: "Enabled", status: "configured" }
      ]
    },
    {
      title: "Notifications",
      description: "System alerts and communication preferences",
      icon: Bell,
      settings: [
        { name: "Security Alerts", value: "All admins", status: "configured" },
        { name: "Usage Reports", value: "Weekly to admin-team@acme.com", status: "configured" },
        { name: "Maintenance Notices", value: "48 hours advance notice", status: "configured" },
        { name: "Billing Notifications", value: "finance@acme.com", status: "configured" }
      ]
    },
    {
      title: "Integration & APIs",
      description: "External integrations and API configurations",
      icon: Globe,
      settings: [
        { name: "API Access", value: "Restricted to admin users", status: "configured" },
        { name: "Webhooks", value: "2 active endpoints", status: "configured" },
        { name: "Third-party Integrations", value: "Slack, Microsoft Teams", status: "configured" },
        { name: "Rate Limiting", value: "Standard enterprise limits", status: "configured" }
      ]
    }
  ]

  const recentActivity = [
    {
      action: "SSO configuration updated",
      user: "Sarah Chen",
      timestamp: "2 hours ago",
      type: "security"
    },
    {
      action: "New user role created: Data Analyst", 
      user: "Michael Rodriguez",
      timestamp: "1 day ago",
      type: "users"
    },
    {
      action: "API rate limits adjusted",
      user: "Emily Parker",
      timestamp: "2 days ago", 
      type: "integration"
    },
    {
      action: "Data retention policy updated",
      user: "David Kim",
      timestamp: "3 days ago",
      type: "privacy"
    }
  ]

  const quickActions = [
    {
      title: "Create API Key",
      description: "Generate new API key for integrations",
      icon: Key,
      href: "/admin-settings/api-keys"
    },
    {
      title: "Audit Logs", 
      description: "View detailed system activity logs",
      icon: Monitor,
      href: "/admin-settings/audit-logs"
    },
    {
      title: "Usage Analytics",
      description: "Organization-wide usage metrics",
      icon: Clock,
      href: "/admin-settings/analytics"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-medium text-gray-900">Claude for Enterprise</Link>
              <div className="ml-4 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Implementation Portal</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/sso-setup" className="text-gray-600 hover:text-gray-900">SSO Setup</Link>
              <Link href="/user-management" className="text-gray-600 hover:text-gray-900">User Management</Link>
              <Link href="/onboarding" className="text-gray-600 hover:text-gray-900">Team Onboarding</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Link href="/" className="text-blue-600 hover:text-blue-700 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
                Back to Implementation
              </Link>
            </div>
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              Admin Controls & Configuration
            </h1>
            <p className="text-lg text-gray-600">
              Centralized administration for your Claude Enterprise deployment. 
              Fine-tune security, privacy, and operational settings to align with your organizational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-sm">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <action.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Settings Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {settingsCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <category.icon className="h-6 w-6 text-gray-700 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="p-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900">{setting.name}</h4>
                            <div className="ml-2">
                              {setting.status === 'configured' ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-yellow-500" />
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{setting.value}</p>
                        </div>
                        <Link 
                          href="#" 
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Recent Administrative Activity
            </h2>
            <p className="text-gray-600">
              Track changes and modifications to your Claude Enterprise configuration
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200">
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg mr-4 ${
                        activity.type === 'security' 
                          ? 'bg-red-100' 
                          : activity.type === 'users'
                          ? 'bg-blue-100'
                          : activity.type === 'integration'
                          ? 'bg-purple-100'
                          : 'bg-green-100'
                      }`}>
                        {activity.type === 'security' && <Shield className="h-4 w-4 text-red-600" />}
                        {activity.type === 'users' && <Users className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'integration' && <Globe className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'privacy' && <Database className="h-4 w-4 text-green-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{activity.action}</h4>
                        <p className="text-sm text-gray-600">by {activity.user}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <Link href="/admin-settings/audit-logs" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View full audit log →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">System Status</h3>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-700">All Systems Operational</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">API Uptime</span>
                  <span className="font-medium">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">143ms</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Usage This Month</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Users</span>
                  <span className="font-medium">247 of 300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">API Calls</span>
                  <span className="font-medium">1.2M</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Security Score</h3>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium text-green-700">94/100</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">MFA Adoption</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SSO Active</span>
                  <span className="font-medium">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}