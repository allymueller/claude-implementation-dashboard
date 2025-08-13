import Link from 'next/link'
import { ArrowRight, MessageSquare, Phone, Book, Search, Clock, CheckCircle, AlertCircle, HelpCircle, ExternalLink, FileText, Video } from 'lucide-react'

export default function SupportPage() {
  const supportChannels = [
    {
      title: "Enterprise Support Portal",
      description: "Direct access to your dedicated support team with priority response",
      icon: MessageSquare,
      availability: "24/7 for critical issues",
      responseTime: "< 1 hour",
      best_for: "Technical issues, configuration help, urgent problems",
      action: "Open Support Ticket",
      href: "https://support.anthropic.com/enterprise"
    },
    {
      title: "Customer Success Manager",
      description: "Your dedicated CSM for strategic guidance and implementation support", 
      icon: Phone,
      availability: "Business hours",
      responseTime: "Same day",
      best_for: "Implementation planning, best practices, training coordination",
      action: "Schedule Meeting",
      href: "#schedule-csm"
    },
    {
      title: "Documentation & Guides",
      description: "Comprehensive guides, API documentation, and troubleshooting resources",
      icon: Book,
      availability: "Always available",
      responseTime: "Immediate",
      best_for: "Self-service troubleshooting, learning new features, reference",
      action: "Browse Documentation",
      href: "/resources"
    }
  ]

  const commonIssues = [
    {
      category: "SSO & Authentication",
      issues: [
        {
          issue: "Users can't sign in after SSO setup",
          solution: "Verify domain configuration and SAML assertion URL",
          link: "/sso-setup#troubleshooting"
        },
        {
          issue: "Wrong roles assigned to users",
          solution: "Check group mappings and default role settings",
          link: "/user-management#roles"
        },
        {
          issue: "Certificate validation errors",
          solution: "Ensure certificate hasn't expired and format is correct",
          link: "/sso-setup#certificates"
        }
      ]
    },
    {
      category: "User Management",
      issues: [
        {
          issue: "SCIM provisioning not working",
          solution: "Verify SCIM token and endpoint configuration",
          link: "/user-management#scim-setup"
        },
        {
          issue: "Users not receiving invitations",
          solution: "Check email domain settings and spam filters",
          link: "/user-management#invitations"
        },
        {
          issue: "Bulk user import failing",
          solution: "Validate CSV format and required fields",
          link: "/user-management#bulk-import"
        }
      ]
    },
    {
      category: "Performance & Usage",
      issues: [
        {
          issue: "Slow response times",
          solution: "Check network connectivity and API rate limits",
          link: "/admin-settings#performance"
        },
        {
          issue: "Usage limits exceeded",
          solution: "Review usage patterns and consider plan upgrade",
          link: "/admin-settings#usage"
        },
        {
          issue: "API rate limiting",
          solution: "Adjust request patterns or contact support for limit increase",
          link: "/admin-settings#api-limits"
        }
      ]
    }
  ]

  const resources = [
    {
      title: "Implementation Playbook",
      description: "Step-by-step guide for enterprise deployment",
      type: "PDF Guide",
      duration: "45 min read",
      link: "/resources/implementation-playbook.pdf"
    },
    {
      title: "Admin Training Series",
      description: "Video courses for administrators and power users",
      type: "Video Series",
      duration: "3 hours",
      link: "/resources/admin-training"
    },
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      type: "Documentation",
      duration: "Reference",
      link: "/docs/api"
    },
    {
      title: "Security Best Practices",
      description: "Guidelines for secure Claude deployment",
      type: "Guide",
      duration: "20 min read",
      link: "/resources/security-guide"
    }
  ]

  const systemStatus = {
    status: "operational",
    uptime: "99.97%",
    incidents: 0,
    lastUpdate: "2 minutes ago"
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="bg-ivory border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-medium text-slate">Claude for Enterprise</Link>
              <div className="ml-4 px-3 py-1 bg-clay/10 rounded-full text-sm text-slate">Implementation Portal</div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/sso-setup" className="text-gray-600 hover:text-slate">SSO Setup</Link>
              <Link href="/user-management" className="text-gray-600 hover:text-slate">User Management</Link>
              <Link href="/onboarding" className="text-gray-600 hover:text-slate">Team Onboarding</Link>
              <Link href="/resources" className="text-gray-600 hover:text-slate">Resources</Link>
              <Link href="/support" className="text-clay font-medium">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-ivory py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Link href="/" className="text-clay hover:text-clay/80 flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
                Back to Implementation
              </Link>
            </div>
            <h1 className="text-3xl font-medium text-slate mb-4">
              Support & Troubleshooting
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive support resources designed to help you succeed with Claude Enterprise. 
              Our team of experts is here to guide you through any implementation challenges.
            </p>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  systemStatus.status === 'operational' ? 'bg-olive' : 'bg-coral'
                }`}></div>
                <div>
                  <h3 className="font-medium text-slate">System Status: All Systems Operational</h3>
                  <p className="text-sm text-gray-600">Uptime: {systemStatus.uptime} • Last update: {systemStatus.lastUpdate}</p>
                </div>
              </div>
              <Link 
                href="https://status.anthropic.com" 
                className="text-clay hover:text-clay/80 text-sm font-medium flex items-center"
              >
                View Status Page
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-slate mb-2">
              How to Get Help
            </h2>
            <p className="text-gray-600">
              Multiple channels designed to provide the right level of support for your specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-clay/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-clay/10 rounded-lg mr-4">
                    <channel.icon className="h-6 w-6 text-clay" />
                  </div>
                  <h3 className="text-lg font-medium text-slate">{channel.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{channel.description}</p>
                
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-medium text-slate">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="font-medium text-slate">{channel.responseTime}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate mb-2">Best for:</h4>
                  <p className="text-sm text-gray-600">{channel.best_for}</p>
                </div>

                <Link 
                  href={channel.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-clay text-ivory rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  {channel.action}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-slate mb-2">
              Common Issues & Solutions
            </h2>
            <p className="text-gray-600">
              Curated solutions to the most frequently encountered implementation challenges
            </p>
          </div>

          <div className="space-y-8">
            {commonIssues.map((category, index) => (
              <div key={index} className="bg-clay/5 rounded-lg p-6 border border-clay/10">
                <h3 className="text-lg font-medium text-slate mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.issues.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-clay/30 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <h4 className="font-medium text-slate mb-2">{item.issue}</h4>
                          <p className="text-sm text-gray-600 mb-3">{item.solution}</p>
                          <Link 
                            href={item.link}
                            className="text-sm text-clay hover:text-clay/80 font-medium"
                          >
                            View detailed solution →
                          </Link>
                        </div>
                        <HelpCircle className="h-5 w-5 text-clay/60 ml-4 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-12 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-slate mb-2">
              Self-Service Resources
            </h2>
            <p className="text-gray-600">
              Comprehensive documentation and training materials for independent learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-clay/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-clay/10 rounded-lg mr-4">
                      {resource.type === 'Video Series' && <Video className="h-5 w-5 text-clay" />}
                      {resource.type === 'PDF Guide' && <FileText className="h-5 w-5 text-clay" />}
                      {resource.type === 'Documentation' && <Book className="h-5 w-5 text-clay" />}
                      {resource.type === 'Guide' && <FileText className="h-5 w-5 text-clay" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-slate">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">{resource.type}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{resource.duration}</span>
                  </div>
                  <Link 
                    href={resource.link}
                    className="text-clay hover:text-clay/80 font-medium text-sm"
                  >
                    Access →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-slate mb-3">
              Your Enterprise Support Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beyond technical assistance, we're your partners in organizational transformation. 
              Our support philosophy centers on empowering your team with deep understanding and practical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-clay/5 rounded-lg p-6 border border-clay/10">
              <h3 className="font-medium text-slate mb-4">Customer Success Manager</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-clay rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium text-ivory">SC</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate">Sarah Chen</div>
                    <div className="text-sm text-gray-600">sarah.chen@anthropic.com</div>
                  </div>
                </div>
                <Link 
                  href="#schedule-call"
                  className="inline-flex items-center text-clay hover:text-clay/80 font-medium text-sm"
                >
                  Schedule a call →
                </Link>
              </div>
            </div>

            <div className="bg-clay/5 rounded-lg p-6 border border-clay/10">
              <h3 className="font-medium text-slate mb-4">Technical Support</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Business Hours:</span>
                  <span className="font-medium text-slate">6 AM - 6 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Critical Issues:</span>
                  <span className="font-medium text-slate">24/7 Coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response SLA:</span>
                  <span className="font-medium text-slate">&lt; 1 Hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}