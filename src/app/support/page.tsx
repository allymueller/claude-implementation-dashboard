import Link from 'next/link'
import { ArrowRight, MessageSquare, Phone, Book, ExternalLink } from 'lucide-react'

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