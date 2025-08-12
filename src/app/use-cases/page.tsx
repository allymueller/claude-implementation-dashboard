import Link from 'next/link'
import { Building2, Heart, TrendingUp, Code, Scale, FileText, Users, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react'

export default function UseCasesPage() {
  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      description: "Transforming patient care and operational efficiency",
      color: "text-red-600",
      bgColor: "bg-red-100",
      useCases: [
        "Clinical documentation and note taking",
        "Medical research and literature review", 
        "Patient communication and education",
        "Regulatory compliance documentation"
      ]
    },
    {
      name: "Financial Services",
      icon: TrendingUp,
      description: "Enhancing analysis, compliance, and client services",
      color: "text-green-600", 
      bgColor: "bg-green-100",
      useCases: [
        "Investment research and analysis",
        "Risk assessment and reporting",
        "Regulatory compliance documentation",
        "Client communication and proposals"
      ]
    },
    {
      name: "Technology",
      icon: Code,
      description: "Accelerating development and innovation cycles",
      color: "text-blue-600",
      bgColor: "bg-blue-100", 
      useCases: [
        "Code generation and review",
        "Technical documentation",
        "Product requirements and specifications",
        "Customer support and troubleshooting"
      ]
    },
    {
      name: "Manufacturing",
      icon: Scale,
      description: "Optimizing operations and supply chain management",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      useCases: [
        "Process optimization documentation",
        "Supply chain analysis",
        "Quality assurance reporting", 
        "Safety protocol development"
      ]
    }
  ]

  const caseStudies = [
    {
      company: "CHG Healthcare",
      industry: "Healthcare",
      logo: "CHG",
      challenge: "Legal team needed to accelerate contract review and document analysis while maintaining accuracy",
      solution: "Deployed Claude Enterprise across legal department for contract redlining, document summarization, and regulatory compliance",
      results: [
        { metric: "60%", description: "Reduction in contract analysis time" },
        { metric: "95%", description: "Accuracy maintained across reviews" },
        { metric: "3x", description: "Increase in throughput capacity" }
      ],
      quote: "Claude for Enterprise transformed our legal team's document review process. We've reduced contract analysis time by 60% while maintaining accuracy.",
      useCase: "Legal document review and contract analysis"
    },
    {
      company: "Leading Financial Services Firm", 
      industry: "Financial Services",
      logo: "FS",
      challenge: "Investment team required faster market analysis and research synthesis for time-sensitive decisions",
      solution: "Implemented Claude Enterprise for investment research, risk analysis, and regulatory reporting across trading desk",
      results: [
        { metric: "$2M", description: "Cost savings identified in first quarter" },
        { metric: "4x", description: "Faster research synthesis" },
        { metric: "100%", description: "Compliance maintained across reports" }
      ],
      quote: "Claude's data analysis capabilities helped us identify $2M in cost savings opportunities within our first quarter of deployment.",
      useCase: "Investment research and financial analysis"
    },
    {
      company: "Enterprise Technology Company",
      industry: "Technology", 
      logo: "TECH",
      challenge: "Engineering organization needed to scale code review and documentation processes for 500+ developers",
      solution: "Enterprise-wide deployment with SSO integration, team workspaces, and custom development workflows",
      results: [
        { metric: "500+", description: "Developers onboarded successfully" },
        { metric: "40%", description: "Reduction in code review time" },
        { metric: "85%", description: "Developer adoption rate achieved" }
      ],
      quote: "The security features and admin controls gave us confidence to deploy AI across our entire engineering organization of 500+ developers.",
      useCase: "Software development and code review"
    }
  ]

  const functionalUseCases = [
    {
      category: "Legal & Compliance",
      icon: FileText,
      cases: [
        {
          title: "Contract Analysis",
          description: "Accelerate contract review, redlining, and risk assessment",
          benefits: ["60% faster review times", "Consistent analysis quality", "Risk identification"]
        },
        {
          title: "Regulatory Documentation",
          description: "Generate and maintain compliance documentation and reports", 
          benefits: ["Automated report generation", "Compliance consistency", "Audit trail maintenance"]
        },
        {
          title: "Legal Research",
          description: "Synthesize legal precedents and regulatory requirements",
          benefits: ["Comprehensive research", "Quick precedent identification", "Regulatory alignment"]
        }
      ]
    },
    {
      category: "Data & Analytics",
      icon: TrendingUp,
      cases: [
        {
          title: "Financial Analysis",
          description: "Process financial data, generate insights, and create reports",
          benefits: ["Faster analysis cycles", "$2M+ savings identified", "Risk assessment automation"]
        },
        {
          title: "Market Research",
          description: "Analyze market trends, competitive intelligence, and opportunities",
          benefits: ["Real-time insights", "Competitive advantage", "Market trend identification"]
        },
        {
          title: "Business Intelligence",
          description: "Transform data into actionable business insights and strategies",
          benefits: ["Data-driven decisions", "Strategic insights", "Performance optimization"]
        }
      ]
    },
    {
      category: "Engineering & Development",
      icon: Code,
      cases: [
        {
          title: "Code Generation",
          description: "Generate, review, and optimize code across multiple languages",
          benefits: ["40% faster development", "Code quality improvement", "Best practice adherence"]
        },
        {
          title: "Technical Documentation",
          description: "Create and maintain technical documentation and specifications",
          benefits: ["Consistent documentation", "Knowledge preservation", "Onboarding acceleration"]
        },
        {
          title: "System Architecture",
          description: "Design system architectures and evaluate technical decisions",
          benefits: ["Architecture optimization", "Technical risk reduction", "Scalability planning"]
        }
      ]
    },
    {
      category: "Operations & HR", 
      icon: Users,
      cases: [
        {
          title: "Process Documentation",
          description: "Document and optimize business processes and procedures",
          benefits: ["Process standardization", "Efficiency gains", "Knowledge transfer"]
        },
        {
          title: "Training Material Creation",
          description: "Develop training content and onboarding materials",
          benefits: ["Faster onboarding", "Consistent training", "Skill development"]
        },
        {
          title: "Internal Communications",
          description: "Create internal communications, policies, and announcements",
          benefits: ["Clear communication", "Policy consistency", "Employee engagement"]
        }
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
              <Link href="/use-cases" className="text-blue-600 font-semibold">Use Cases</Link>
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
              Enterprise Use Cases & Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              See how leading organizations across industries are using Claude for Enterprise 
              to drive productivity, innovation, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Claude for Enterprise delivers value across diverse industry verticals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className={`${industry.bgColor} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  <industry.icon className={`h-6 w-6 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.slice(0, 3).map((useCase, caseIndex) => (
                    <li key={caseIndex} className="text-xs text-gray-500">• {useCase}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Enterprise Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact Claude for Enterprise has delivered across organizations
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                        <p className="text-gray-600">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <p className="text-gray-700 italic">"{study.quote}"</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                          <div className="text-gray-600 text-sm">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Primary Use Case:</span>
                        <div className="mt-1">{study.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Use Cases by Function
            </h2>
            <p className="text-xl text-gray-600">
              Explore how different departments and functions leverage Claude for Enterprise
            </p>
          </div>

          <div className="space-y-12">
            {functionalUseCases.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {category.cases.map((useCase, caseIndex) => (
                    <div key={caseIndex} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h4>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Based on enterprise deployments, organizations typically see significant returns 
                within the first quarter of Claude implementation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Savings</h4>
                    <p className="text-gray-600 text-sm">Average 40-60% reduction in task completion time</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Reduction</h4>
                    <p className="text-gray-600 text-sm">$2M+ in cost savings opportunities identified</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Productivity Gains</h4>
                    <p className="text-gray-600 text-sm">3x increase in output capacity across teams</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Typical Enterprise Results</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Implementation Time</span>
                  <span className="text-blue-600 font-bold">6 weeks</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">User Adoption Rate</span>
                  <span className="text-green-600 font-bold">85%+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Productivity Increase</span>
                  <span className="text-purple-600 font-bold">3x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium text-gray-900">ROI Timeline</span>
                  <span className="text-orange-600 font-bold">Q1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Support */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the growing number of enterprises using Claude to transform their operations. 
            Our success team will help you identify the highest-impact use cases for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50">
              Schedule Strategy Session
            </Link>
            <Link href="/getting-started" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Implementation Guide
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