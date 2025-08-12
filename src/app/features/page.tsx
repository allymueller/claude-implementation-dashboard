import Link from 'next/link'
import { Shield, Users, BarChart3, Settings, Globe, Lock, Zap, CheckCircle, ArrowRight, Database, Code, FileText, Building2 } from 'lucide-react'

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type 2 certified with comprehensive security controls",
      features: [
        "End-to-end encryption (AES-256)",
        "Zero data retention for training",
        "GDPR, HIPAA, SOX compliance",
        "Audit logs and activity monitoring",
        "Data residency controls"
      ]
    },
    {
      icon: Users,
      title: "Advanced User Management",
      description: "Centralized control over users, permissions, and access",
      features: [
        "Single Sign-On (SAML 2.0, OIDC)",
        "SCIM automated provisioning",
        "Role-based access controls",
        "Domain capture and verification",
        "Bulk user management"
      ]
    },
    {
      icon: BarChart3,
      title: "Usage Analytics & Insights",
      description: "Comprehensive visibility into AI adoption and ROI",
      features: [
        "Real-time usage dashboards",
        "User adoption metrics",
        "Cost allocation and tracking",
        "Performance analytics",
        "Custom reporting and exports"
      ]
    },
    {
      icon: Building2,
      title: "Workspace Management",
      description: "Organized collaboration across departments and teams",
      features: [
        "Multi-workspace organization",
        "Department-level isolation",
        "Shared project libraries",
        "Knowledge base management",
        "Team collaboration tools"
      ]
    }
  ]

  const advancedCapabilities = [
    {
      title: "Model Context Protocol (MCP)",
      description: "Connect Claude to your existing tools and data sources",
      icon: Database,
      benefits: [
        "Real-time data integration",
        "Custom tool development",
        "API connectivity",
        "Workflow automation"
      ]
    },
    {
      title: "Computer Use",
      description: "AI-powered automation for complex digital workflows",
      icon: Code,
      benefits: [
        "Screen interaction automation",
        "Multi-step task execution",
        "Legacy system integration",
        "Process optimization"
      ]
    },
    {
      title: "Large Context Windows",
      description: "Process extensive documents and complex datasets",
      icon: FileText,
      benefits: [
        "200K+ token capacity",
        "Full document analysis",
        "Multi-document synthesis",
        "Long-form content generation"
      ]
    }
  ]

  const integrationFeatures = [
    {
      category: "Identity & Access",
      items: [
        "Active Directory integration",
        "Okta, Azure AD, Google Workspace",
        "Multi-factor authentication",
        "Just-in-time provisioning"
      ]
    },
    {
      category: "Development Tools",
      items: [
        "GitHub, GitLab, Bitbucket",
        "Jira, Linear, Asana",
        "Slack, Microsoft Teams",
        "Custom API integrations"
      ]
    },
    {
      category: "Business Applications",
      items: [
        "Salesforce, HubSpot",
        "Confluence, SharePoint",
        "Google Workspace, Office 365",
        "Custom enterprise systems"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">Claude for Enterprise</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-blue-600 font-semibold">Features</Link>
              <Link href="/security" className="text-gray-600 hover:text-gray-900">Security</Link>
              <Link href="/use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Sales</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade AI Features
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Advanced capabilities designed for large organizations with stringent security, 
              compliance, and collaboration requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Core Enterprise Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Enterprise Features
            </h2>
            <p className="text-xl text-gray-600">
              Essential capabilities that make Claude suitable for enterprise deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge features that extend Claude's capabilities for complex enterprise workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                  <capability.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise Security & Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Claude for Enterprise meets the most stringent security and compliance requirements, 
                giving you confidence to deploy AI across your most sensitive workflows.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">SOC 2 Type 2 Certified</h4>
                    <p className="text-gray-600">Independent verification of our security, availability, and confidentiality controls.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zero Data Training</h4>
                    <p className="text-gray-600">Your conversations and data are never used to train or improve our models.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Compliance</h4>
                    <p className="text-gray-600">GDPR, HIPAA, SOX, and other regulatory framework compliance.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/security" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
                  View Security Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Security Features</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">End-to-End Encryption</h4>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <Settings className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">Admin Controls</h4>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <BarChart3 className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">Audit Logging</h4>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <Lock className="h-8 w-8 text-orange-600 mx-auto" />
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">Data Residency</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Seamlessly connect Claude with your existing enterprise technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationFeatures.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Scale */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-gray-600">
              Performance and reliability designed for large-scale enterprise deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime SLA</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Concurrent Users</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200K+</h3>
              <p className="text-gray-600">Token Context</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global</h3>
              <p className="text-gray-600">Multi-Region</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise vs Team Plans
            </h2>
            <p className="text-xl text-gray-600">
              See what additional capabilities you get with Claude for Enterprise
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-3 text-center">
              <div className="p-6 border-r">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature</h3>
              </div>
              <div className="p-6 border-r bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team</h3>
              </div>
              <div className="p-6 bg-blue-50">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Enterprise</h3>
              </div>
            </div>
            
            <div className="divide-y">
              {[
                ['SSO Integration', false, true],
                ['SCIM Provisioning', false, true],
                ['Advanced Analytics', false, true],
                ['Audit Logs', false, true],
                ['Priority Support', false, true],
                ['Custom Integrations', false, true],
                ['SLA Guarantee', false, true],
                ['Dedicated CSM', false, true]
              ].map(([feature, team, enterprise], index) => (
                <div key={index} className="grid md:grid-cols-3 text-center py-4">
                  <div className="p-4 font-medium text-gray-900">{feature}</div>
                  <div className="p-4">
                    {team ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded mx-auto"></div>
                    )}
                  </div>
                  <div className="p-4 bg-blue-50">
                    {enterprise ? (
                      <CheckCircle className="h-5 w-5 text-blue-600 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded mx-auto"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Enterprise AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Claude's enterprise features 
            can transform your organization's productivity and capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50">
              Schedule Demo
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/use-cases" className="hover:text-white">Healthcare</Link></li>
                <li><Link href="/use-cases" className="hover:text-white">Financial Services</Link></li>
                <li><Link href="/use-cases" className="hover:text-white">Technology</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/getting-started" className="hover:text-white">Getting Started</Link></li>
                <li><Link href="/resources" className="hover:text-white">Training Materials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contact Sales</Link></li>
                <li><Link href="#" className="hover:text-white">Enterprise Support</Link></li>
                <li><Link href="#" className="hover:text-white">Status Page</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Claude for Enterprise. Built with enterprise security and trust.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}