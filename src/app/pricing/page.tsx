import Link from 'next/link'
import { Check, X, ArrowRight, Users, Building2, Crown, Shield, Zap, Phone } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: "Team",
      description: "Perfect for small teams getting started with AI",
      price: "$30",
      period: "per user/month",
      features: [
        { feature: "Claude 3.5 Sonnet access", included: true },
        { feature: "100K context window", included: true },
        { feature: "Basic team collaboration", included: true },
        { feature: "Standard support", included: true },
        { feature: "Usage analytics", included: true },
        { feature: "SSO integration", included: false },
        { feature: "SCIM provisioning", included: false },
        { feature: "Advanced analytics", included: false },
        { feature: "Audit logs", included: false },
        { feature: "Priority support", included: false },
        { feature: "Dedicated CSM", included: false },
        { feature: "SLA guarantee", included: false }
      ],
      cta: "Start Team Trial",
      popular: false,
      icon: Users
    },
    {
      name: "Enterprise",
      description: "Advanced security and controls for large organizations",
      price: "Custom",
      period: "contact for pricing",
      features: [
        { feature: "Claude 3.5 Sonnet access", included: true },
        { feature: "200K+ context window", included: true },
        { feature: "Advanced team collaboration", included: true },
        { feature: "Priority support & SLA", included: true },
        { feature: "Advanced usage analytics", included: true },
        { feature: "SSO integration", included: true },
        { feature: "SCIM provisioning", included: true },
        { feature: "Comprehensive audit logs", included: true },
        { feature: "Role-based permissions", included: true },
        { feature: "Dedicated customer success", included: true },
        { feature: "Custom integrations", included: true },
        { feature: "99.9% uptime SLA", included: true }
      ],
      cta: "Contact Sales",
      popular: true,
      icon: Building2
    }
  ]

  const enterpriseFeatures = [
    {
      category: "Security & Compliance",
      icon: Shield,
      features: [
        "SOC 2 Type 2 certification",
        "GDPR, HIPAA, SOX compliance",
        "End-to-end encryption (AES-256)",
        "Zero data training guarantee",
        "Data residency controls",
        "Advanced threat monitoring"
      ]
    },
    {
      category: "Enterprise Integration",
      icon: Zap,
      features: [
        "Single Sign-On (SSO)",
        "SCIM user provisioning", 
        "Active Directory integration",
        "Custom API integrations",
        "Webhook support",
        "Multi-workspace management"
      ]
    },
    {
      category: "Support & Success",
      icon: Phone,
      features: [
        "Dedicated Customer Success Manager",
        "Priority support with SLA",
        "24/7 enterprise support",
        "Custom training and onboarding",
        "Implementation guidance",
        "Ongoing optimization support"
      ]
    }
  ]

  const volumePricing = [
    { users: "50-199 users", discount: "10% discount", savings: "Volume pricing available" },
    { users: "200-999 users", discount: "15% discount", savings: "Significant savings" },
    { users: "1000+ users", discount: "20% discount", savings: "Maximum value pricing" }
  ]

  const faq = [
    {
      question: "What's included in the Enterprise plan?",
      answer: "The Enterprise plan includes all Team features plus advanced security controls, SSO integration, SCIM provisioning, comprehensive audit logs, priority support with SLA, dedicated customer success management, and custom integrations."
    },
    {
      question: "How does Enterprise pricing work?",
      answer: "Enterprise pricing is customized based on your specific needs including number of users, usage requirements, support level, and additional services. Contact our sales team for a personalized quote."
    },
    {
      question: "Can I upgrade from Team to Enterprise?",
      answer: "Yes, you can upgrade from Team to Enterprise at any time. Our customer success team will help ensure a smooth transition and migration of your existing data and configurations."
    },
    {
      question: "What kind of support do Enterprise customers get?",
      answer: "Enterprise customers receive priority support with guaranteed response times, a dedicated Customer Success Manager, custom training and onboarding, and 24/7 technical support for critical issues."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer tiered volume discounts for Enterprise customers. Pricing becomes more favorable as you add more users to your organization."
    },
    {
      question: "What security certifications does Claude have?",
      answer: "Claude for Enterprise is SOC 2 Type 2 certified and compliant with GDPR, HIPAA, and SOX requirements. We also maintain ISO 27001 alignment and other industry security standards."
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
              <Link href="/pricing" className="text-blue-600 font-semibold">Pricing</Link>
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
              Enterprise-Ready AI Pricing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transparent, scalable pricing designed for organizations of all sizes. 
              From small teams to global enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg border-2 ${
                plan.popular ? 'border-blue-600' : 'border-gray-200'
              } p-8`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600 ml-1">/{plan.period.replace('per user/', '')}</span>}
                    {plan.price === "Custom" && <div className="text-gray-600 mt-1">{plan.period}</div>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {item.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${item.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {item.feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link 
                    href={plan.name === 'Enterprise' ? '/contact' : '#'}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-md text-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Enterprise?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced capabilities designed specifically for large-scale organizational deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {enterpriseFeatures.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Volume Pricing Discounts
            </h2>
            <p className="text-xl text-gray-600">
              Get better value as your organization grows with Claude for Enterprise
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="grid grid-cols-3 text-center font-semibold text-gray-900">
                  <div>Organization Size</div>
                  <div>Discount</div>
                  <div>Value</div>
                </div>
              </div>
              <div className="divide-y">
                {volumePricing.map((tier, index) => (
                  <div key={index} className="px-6 py-4">
                    <div className="grid grid-cols-3 text-center">
                      <div className="text-gray-700 font-medium">{tier.users}</div>
                      <div className="text-blue-600 font-semibold">{tier.discount}</div>
                      <div className="text-gray-600">{tier.savings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 mb-4">Ready to discuss volume pricing for your organization?</p>
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Most enterprises see positive ROI within the first quarter of deployment. 
                See what Claude for Enterprise could save your organization.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Average Time Savings</h4>
                  <p className="text-blue-100">40-60% reduction in task completion time</p>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Productivity Gains</h4>
                  <p className="text-blue-100">3x increase in output capacity</p>
                </div>
                <div className="bg-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cost Savings</h4>
                  <p className="text-blue-100">$2M+ opportunities identified</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-gray-900">
              <h3 className="text-xl font-semibold mb-6">Enterprise ROI Example</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">1000 users × $30/month</span>
                  <span className="font-semibold">$30,000/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time savings (40 hours/user/month)</span>
                  <span className="font-semibold">40,000 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Value at $100/hour</span>
                  <span className="font-semibold">$4,000,000</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Monthly ROI</span>
                    <span className="text-green-600">13,233%</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Calculate Your ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using Claude for Enterprise to drive 
            productivity and innovation across their teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
              Contact Sales
            </Link>
            <Link href="/getting-started" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg font-semibold hover:border-gray-400">
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