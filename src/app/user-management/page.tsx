import Link from 'next/link'
import { ArrowRight, Users, UserPlus, Settings, Shield, Search, MoreVertical, CheckCircle, AlertCircle, ExternalLink, Download, Upload } from 'lucide-react'

export default function UserManagementPage() {
  const userRoles = [
    {
      role: "Admin",
      description: "Full access to all features and settings",
      permissions: [
        "Manage all users and roles",
        "Configure SSO and security settings", 
        "Access audit logs and analytics",
        "Manage billing and subscriptions"
      ],
      userCount: 3,
      color: "bg-red-100 text-red-800"
    },
    {
      role: "Manager", 
      description: "Manage team members and view analytics",
      permissions: [
        "Invite and remove team members",
        "View team usage analytics",
        "Manage team-level settings",
        "Access team audit logs"
      ],
      userCount: 12,
      color: "bg-blue-100 text-blue-800"
    },
    {
      role: "User",
      description: "Standard access to Claude features",
      permissions: [
        "Access Claude conversations",
        "Create and share conversations",
        "Use all Claude features",
        "View personal usage stats"
      ],
      userCount: 247,
      color: "bg-green-100 text-green-800"
    }
  ]

  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
      joinedDate: "Jan 15, 2025"
    },
    {
      name: "Michael Chen", 
      email: "michael.chen@company.com",
      role: "Manager",
      status: "Active", 
      lastActive: "5 minutes ago",
      joinedDate: "Jan 12, 2025"
    },
    {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@company.com", 
      role: "User",
      status: "Pending",
      lastActive: "Never",
      joinedDate: "Jan 10, 2025"
    },
    {
      name: "David Park",
      email: "david.park@company.com",
      role: "User", 
      status: "Active",
      lastActive: "1 day ago",
      joinedDate: "Jan 8, 2025"
    }
  ]

  const scimSteps = [
    {
      step: 1,
      title: "Generate SCIM Token",
      description: "Create a secure token for SCIM API access",
      completed: false
    },
    {
      step: 2,
      title: "Configure Identity Provider",
      description: "Set up SCIM endpoints in your IdP",
      completed: false
    },
    {
      step: 3,
      title: "Map User Attributes", 
      description: "Configure attribute mappings for users",
      completed: false
    },
    {
      step: 4,
      title: "Test Provisioning",
      description: "Verify user creation and updates work correctly",
      completed: false
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
              <Link href="/user-management" className="text-blue-600 font-medium">User Management</Link>
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
              User Management & Provisioning
            </h1>
            <p className="text-lg text-gray-600">
              Manage user accounts, roles, and permissions across your organization. 
              Set up automated provisioning with SCIM integration.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="#invite-users" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center">
                <UserPlus className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Invite Users</h3>
                  <p className="text-sm text-gray-600">Add new team members</p>
                </div>
              </div>
            </Link>
            
            <Link href="#bulk-import" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center">
                <Upload className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Bulk Import</h3>
                  <p className="text-sm text-gray-600">Upload CSV file</p>
                </div>
              </div>
            </Link>

            <Link href="#export-users" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center">
                <Download className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Export Users</h3>
                  <p className="text-sm text-gray-600">Download user list</p>
                </div>
              </div>
            </Link>

            <Link href="#scim-setup" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">SCIM Setup</h3>
                  <p className="text-sm text-gray-600">Auto provisioning</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* User Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Roles & Permissions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Roles & Permissions
                </h2>
                
                <div className="space-y-4">
                  {userRoles.map((role, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900 mr-2">{role.role}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${role.color}`}>
                            {role.userCount} users
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                      <div className="space-y-1">
                        {role.permissions.slice(0, 2).map((permission, permIndex) => (
                          <div key={permIndex} className="text-xs text-gray-500 flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            {permission}
                          </div>
                        ))}
                        {role.permissions.length > 2 && (
                          <div className="text-xs text-gray-400">
                            +{role.permissions.length - 2} more permissions
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link href="#manage-roles" className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  Manage Roles
                  <Settings className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Recent Users */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      Recent Users
                    </h2>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search users..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentUsers.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              user.role === 'Admin' 
                                ? 'bg-red-100 text-red-800'
                                : user.role === 'Manager'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {user.status === 'Active' ? (
                                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-yellow-500 mr-1" />
                              )}
                              <span className={`text-sm ${
                                user.status === 'Active' ? 'text-green-700' : 'text-yellow-700'
                              }`}>
                                {user.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastActive}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-400 hover:text-gray-600">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <Link href="#view-all-users" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View all users →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCIM Provisioning */}
      <section id="scim-setup" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Automated User Provisioning (SCIM)
              </h2>
              <p className="text-gray-600">
                Set up SCIM to automatically provision and deprovision users based on your identity provider. 
                This ensures users are automatically added or removed when they join or leave your organization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Setup Steps</h3>
                  <div className="space-y-4">
                    {scimSteps.map((step, index) => (
                      <div key={step.step} className="flex items-start">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
                          step.completed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step.completed ? <CheckCircle className="h-4 w-4" /> : step.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SCIM Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">SCIM Base URL</label>
                      <code className="text-sm bg-white px-3 py-2 rounded block border">
                        https://enterprise.claude.ai/scim/v2
                      </code>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Bearer Token</label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="password" 
                          value="••••••••••••••••" 
                          readOnly
                          className="text-sm bg-white px-3 py-2 rounded flex-1 border"
                        />
                        <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                          Generate New
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Supported Operations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Create users
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Update user attributes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Deactivate users
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        Group membership sync
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Need Help Managing Users?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you set up user provisioning, configure roles and permissions, 
              or migrate from your existing user management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
              <Link href="/resources" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View User Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}