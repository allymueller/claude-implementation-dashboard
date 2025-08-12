import Link from 'next/link'
import { ArrowRight, Shield, Check, AlertTriangle, ExternalLink, CheckCircle, Clock, Settings, Users, Key } from 'lucide-react'

export default function SSOSetupPage() {
  const ssoProviders = [
    {
      name: "Okta",
      logo: "/logos/okta.png",
      type: "SAML 2.0, OIDC",
      setupTime: "15-20 minutes",
      difficulty: "Easy",
      documentation: "/docs/sso/okta"
    },
    {
      name: "Azure Active Directory",
      logo: "/logos/azure-ad.png", 
      type: "SAML 2.0, OIDC",
      setupTime: "10-15 minutes",
      difficulty: "Easy",
      documentation: "/docs/sso/azure-ad"
    },
    {
      name: "Google Workspace",
      logo: "/logos/google-workspace.png",
      type: "SAML 2.0, OIDC",
      setupTime: "15-20 minutes", 
      difficulty: "Easy",
      documentation: "/docs/sso/google-workspace"
    },
    {
      name: "OneLogin",
      logo: "/logos/onelogin.png",
      type: "SAML 2.0",
      setupTime: "20-25 minutes",
      difficulty: "Medium",
      documentation: "/docs/sso/onelogin"
    },
    {
      name: "PingIdentity",
      logo: "/logos/ping.png",
      type: "SAML 2.0, OIDC",
      setupTime: "25-30 minutes",
      difficulty: "Medium", 
      documentation: "/docs/sso/ping"
    },
    {
      name: "Generic SAML",
      logo: "/logos/saml.png",
      type: "SAML 2.0",
      setupTime: "30-45 minutes",
      difficulty: "Advanced",
      documentation: "/docs/sso/generic-saml"
    }
  ]

  const setupSteps = [
    {
      step: 1,
      title: "Pre-Setup Requirements",
      description: "Gather necessary information and verify permissions",
      status: "pending",
      tasks: [
        "Verify admin access to your identity provider",
        "Collect your IdP metadata URL or certificate",
        "Confirm domain ownership and DNS access",
        "Review user attributes and group mappings"
      ]
    },
    {
      step: 2, 
      title: "Configure Identity Provider",
      description: "Set up Claude application in your IdP",
      status: "pending",
      tasks: [
        "Create new application in your IdP",
        "Configure SAML/OIDC settings with Claude URLs",
        "Set up attribute mappings for user data",
        "Configure group assignments and permissions"
      ]
    },
    {
      step: 3,
      title: "Configure Claude Enterprise",
      description: "Add SSO configuration to your Claude workspace",
      status: "pending", 
      tasks: [
        "Enter IdP metadata in Claude admin panel",
        "Map user attributes and groups",
        "Configure role assignments",
        "Set up domain restrictions"
      ]
    },
    {
      step: 4,
      title: "Test and Validate",
      description: "Verify SSO is working correctly",
      status: "pending",
      tasks: [
        "Test login with admin account",
        "Verify user attributes are mapped correctly", 
        "Test group-based role assignments",
        "Confirm logout behavior"
      ]
    }
  ]

  const troubleshooting = [
    {
      issue: "Users can't sign in",
      solutions: [
        "Check if domain is properly configured in Claude settings",
        "Verify SAML assertion URL matches Claude configuration",
        "Ensure user exists in the identity provider",
        "Check attribute mappings for required fields"
      ]
    },
    {
      issue: "Wrong roles assigned to users",
      solutions: [
        "Review group mappings in Claude admin panel",
        "Verify user is in correct groups in IdP",
        "Check default role assignment settings", 
        "Confirm role hierarchy configuration"
      ]
    },
    {
      issue: "Certificate validation errors",
      solutions: [
        "Verify certificate hasn't expired",
        "Check certificate format and encoding",
        "Ensure certificate chain is complete",
        "Test with certificate validation disabled temporarily"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="bg-ivory shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-medium text-slate">Claude for Enterprise</Link>
              <div className="ml-4 px-3 py-1 bg-oat rounded-full text-sm text-slate">Implementation Portal</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/sso-setup" className="text-clay font-medium">SSO Setup</Link>
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
              Single Sign-On (SSO) Setup
            </h1>
            <p className="text-lg text-gray-600 text-serif">
              Configure secure authentication for your organization using your existing identity provider. 
              Most SSO integrations take 15-30 minutes to complete.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Options */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Choose Your Identity Provider
            </h2>
            <p className="text-gray-600">
              Select your organization's identity provider to get started with provider-specific setup instructions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ssoProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-gray-500">{provider.type}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    provider.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-800'
                      : provider.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {provider.difficulty}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Setup time: {provider.setupTime}
                  </div>
                </div>

                <Link 
                  href={provider.documentation}
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Start Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              SSO Setup Process
            </h2>
            <p className="text-gray-600">
              Follow these steps regardless of your identity provider. Each step includes provider-specific guidance.
            </p>
          </div>

          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <div key={step.step} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <span className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
                        Pending
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start text-sm text-gray-700">
                          <Check className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                Configuration Requirements
              </h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2 text-blue-600" />
                  Required Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Identity Provider metadata URL or certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Admin access to your IdP console</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Domain ownership verification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">User attribute mappings (email, name, groups)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                Claude URLs for Configuration
              </h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-blue-600" />
                  Required URLs
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">ACS URL</label>
                    <code className="text-sm bg-gray-100 px-3 py-2 rounded block">
                      https://enterprise.claude.ai/auth/sso/callback
                    </code>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Entity ID</label>
                    <code className="text-sm bg-gray-100 px-3 py-2 rounded block">
                      https://enterprise.claude.ai
                    </code>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Start URL</label>
                    <code className="text-sm bg-gray-100 px-3 py-2 rounded block">
                      https://enterprise.claude.ai/auth/sso/start
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Troubleshooting Common Issues
            </h2>
            <p className="text-gray-600">
              Solutions to the most frequently encountered SSO configuration problems
            </p>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                  {item.issue}
                </h3>
                <ul className="space-y-2">
                  {item.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Need Help with SSO Setup?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our Customer Success team is here to help with your SSO configuration. 
              We can provide hands-on assistance or review your configuration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
              <Link href="/resources" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}