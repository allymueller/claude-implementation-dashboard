import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Settings, FileText, BarChart3, Clock, Shield, AlertCircle } from 'lucide-react'

export default function GettingStartedPage() {
  const deploymentPhases = [
    {
      phase: 1,
      title: "Kickoff & Planning",
      duration: "Week 1",
      description: "Align stakeholders, select champions, and establish deployment plan",
      tasks: [
        "Initial stakeholder meeting and goal alignment",
        "Champion selection (1 per 20 users recommended)",
        "Technical requirements review",
        "Timeline and milestone definition"
      ]
    },
    {
      phase: 2,
      title: "Training & Onboarding", 
      duration: "Week 2",
      description: "Deploy organization-wide Claude 101 training and champion development",
      tasks: [
        "Organization-wide Claude 101 training session",
        "Champion deep-dive workshops",
        "User invitation and account setup",
        "Initial project creation and testing"
      ]
    },
    {
      phase: 3,
      title: "Department Enablement",
      duration: "Weeks 3-4", 
      description: "Focus on specific use cases for each department",
      tasks: [
        "Department-specific training sessions",
        "Use case workshops and best practices",
        "Knowledge base uploads and project setup",
        "Initial adoption monitoring"
      ]
    },
    {
      phase: 4,
      title: "Advanced Features",
      duration: "Week 5",
      description: "Implement advanced capabilities and integrations",
      tasks: [
        "MCP and Computer Use setup (if applicable)",
        "Advanced analytics configuration", 
        "Integration with existing workflows",
        "Performance optimization"
      ]
    },
    {
      phase: 5,
      title: "Success Measurement",
      duration: "Week 6",
      description: "Measure results and plan for ongoing success",
      tasks: [
        "User feedback collection and analysis",
        "ROI measurement and reporting",
        "Success metrics review",
        "Ongoing support plan establishment"
      ]
    }
  ]

  const prerequisites = [
    {
      title: "Technical Requirements",
      items: [
        "SSO provider (SAML 2.0 or OpenID Connect)",
        "User directory for SCIM provisioning", 
        "Network access to Claude API endpoints",
        "Admin access for configuration"
      ]
    },
    {
      title: "Organizational Readiness",
      items: [
        "Executive sponsor identified",
        "Change management plan approved",
        "Champion candidates selected",
        "Use case priorities defined"
      ]
    },
    {
      title: "Security & Compliance",
      items: [
        "Data classification policies reviewed",
        "Security requirements documented",
        "Compliance team approval obtained",
        "Risk assessment completed"
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
              <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
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
              Enterprise Implementation Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A proven 6-week framework for successfully deploying Claude across your organization, 
              based on implementations at Fortune 500 companies.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pre-Deployment Checklist
            </h2>
            <p className="text-xl text-gray-600">
              Ensure your organization is ready for a successful Claude Enterprise deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prerequisites.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  {section.title === 'Technical Requirements' && <Settings className="h-5 w-5 mr-2 text-blue-600" />}
                  {section.title === 'Organizational Readiness' && <Users className="h-5 w-5 mr-2 text-green-600" />}
                  {section.title === 'Security & Compliance' && <Shield className="h-5 w-5 mr-2 text-purple-600" />}
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6-Week Deployment Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Proven methodology used by enterprise customers to achieve fast time-to-value
            </p>
          </div>

          <div className="space-y-8">
            {deploymentPhases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                {/* Timeline connector */}
                {index < deploymentPhases.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gray-300"></div>
                )}
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {phase.phase}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {phase.duration}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{phase.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champion Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Champion Program Success
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Champions are critical to successful enterprise deployment. Our data shows organizations 
                with active champion programs achieve 3x higher adoption rates.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Select 1 champion per 20 users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Focus on influence, not seniority</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Provide dedicated training and resources</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Regular check-ins and support</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/resources" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
                  Download Champion Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Champion Responsibilities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    Training & Enablement
                  </h4>
                  <p className="text-gray-600 text-sm">Lead department training sessions and onboard new users</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    Best Practice Sharing
                  </h4>
                  <p className="text-gray-600 text-sm">Document and share effective use cases within their team</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
                    Feedback Collection
                  </h4>
                  <p className="text-gray-600 text-sm">Gather user feedback and communicate with enterprise success team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Measuring Success
            </h2>
            <p className="text-xl text-gray-600">
              Key metrics to track during and after your Claude Enterprise deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Adoption</h3>
              <p className="text-gray-600 text-sm">Track active users, feature usage, and engagement levels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Productivity Gains</h3>
              <p className="text-gray-600 text-sm">Measure time savings, task completion, and workflow efficiency</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time to Value</h3>
              <p className="text-gray-600 text-sm">Track how quickly teams achieve meaningful results</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ROI Achievement</h3>
              <p className="text-gray-600 text-sm">Calculate cost savings and revenue impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Implementation Support
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our enterprise success team provides hands-on support throughout your deployment journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Dedicated Success Manager</h3>
              <p className="text-blue-100 text-sm">Personal guidance throughout your 6-week deployment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Custom Training Materials</h3>
              <p className="text-blue-100 text-sm">Tailored content for your specific use cases and industry</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Priority Support</h3>
              <p className="text-blue-100 text-sm">Escalated support channels and faster response times</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50 mr-4">
              Start Your Implementation
            </Link>
            <Link href="/resources" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Full Guide
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