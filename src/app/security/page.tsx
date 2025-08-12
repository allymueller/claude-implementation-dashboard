import Link from 'next/link'
import { Shield, Lock, Globe, Eye, FileText, Server, CheckCircle, Download, AlertTriangle, Building2, Key, Database } from 'lucide-react'

export default function SecurityPage() {
  const certifications = [
    {
      title: "SOC 2 Type 2",
      description: "Independent verification of security, availability, and confidentiality controls",
      status: "Certified",
      icon: Shield
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with European General Data Protection Regulation",
      status: "Compliant",
      icon: Globe
    },
    {
      title: "HIPAA Ready",
      description: "Healthcare industry data protection and privacy standards",
      status: "Ready",
      icon: FileText
    },
    {
      title: "SOX Controls",
      description: "Financial reporting and data integrity controls",
      status: "Implemented",
      icon: Building2
    }
  ]

  const securityFeatures = [
    {
      category: "Data Protection",
      icon: Lock,
      features: [
        {
          title: "Zero Data Training",
          description: "Your conversations and data are never used to train our models",
          technical: "Contractual guarantee with audit verification"
        },
        {
          title: "End-to-End Encryption",
          description: "AES-256 encryption for data at rest and TLS 1.2+ for data in transit",
          technical: "Military-grade encryption with key rotation"
        },
        {
          title: "Data Residency",
          description: "Control where your data is processed and stored geographically",
          technical: "Regional data processing within specified jurisdictions"
        },
        {
          title: "Automatic Data Deletion",
          description: "Configurable retention periods with secure deletion processes",
          technical: "NIST 800-88 compliant data sanitization"
        }
      ]
    },
    {
      category: "Access Control",
      icon: Key,
      features: [
        {
          title: "Single Sign-On (SSO)",
          description: "SAML 2.0 and OpenID Connect integration with your identity provider",
          technical: "Support for Azure AD, Okta, Google Workspace, custom SAML"
        },
        {
          title: "SCIM Provisioning",
          description: "Automated user provisioning and de-provisioning",
          technical: "Real-time sync with directory services"
        },
        {
          title: "Role-Based Access",
          description: "Granular permissions and role assignments",
          technical: "Multi-level admin controls and user hierarchies"
        },
        {
          title: "Multi-Factor Authentication",
          description: "Additional security layer for administrative functions",
          technical: "TOTP, SMS, and hardware token support"
        }
      ]
    },
    {
      category: "Monitoring & Compliance",
      icon: Eye,
      features: [
        {
          title: "Comprehensive Audit Logs",
          description: "Complete activity tracking for security and compliance monitoring",
          technical: "Immutable logs with API access and SIEM integration"
        },
        {
          title: "Real-time Monitoring",
          description: "Continuous security monitoring and threat detection",
          technical: "24/7 SOC monitoring with automated incident response"
        },
        {
          title: "Compliance Reporting",
          description: "Automated reports for regulatory requirements",
          technical: "Customizable reports for audit and compliance teams"
        },
        {
          title: "Data Loss Prevention",
          description: "Policies to prevent unauthorized data sharing",
          technical: "Content filtering and anomaly detection"
        }
      ]
    }
  ]

  const complianceFrameworks = [
    {
      framework: "SOC 2 Type 2",
      description: "Security, Availability, Processing Integrity, Confidentiality, and Privacy",
      status: "Certified",
      details: [
        "Annual independent audits",
        "Continuous monitoring",
        "Customer access to reports",
        "Third-party validation"
      ]
    },
    {
      framework: "GDPR",
      description: "European Union General Data Protection Regulation",
      status: "Compliant",
      details: [
        "Data subject rights support",
        "Privacy by design implementation",
        "Data processing agreements",
        "Breach notification procedures"
      ]
    },
    {
      framework: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Ready",
      details: [
        "Business Associate Agreements",
        "Administrative safeguards",
        "Physical safeguards",
        "Technical safeguards"
      ]
    },
    {
      framework: "ISO 27001",
      description: "International Standard for Information Security Management",
      status: "Aligned",
      details: [
        "Risk management framework",
        "Security control implementation",
        "Continuous improvement process",
        "Management system approach"
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
              <Link href="/security" className="text-blue-600 font-semibold">Security</Link>
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
              Enterprise Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Industry-leading security controls, compliance certifications, and data protection 
              measures designed for the most security-conscious enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Security Promise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Security Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that trust is earned through transparency, rigorous security practices, 
              and unwavering commitment to protecting your data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero Data Training</h3>
              <p className="text-gray-600">
                We contractually guarantee that your data will never be used to train or improve our AI models. 
                Your conversations remain completely private.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Encryption</h3>
              <p className="text-gray-600">
                All data is encrypted using AES-256 at rest and TLS 1.2+ in transit. 
                Keys are managed using industry-standard practices with regular rotation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Audit Trail</h3>
              <p className="text-gray-600">
                Comprehensive logging of all system activities with immutable audit trails 
                for compliance and forensic analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Third-party validated security controls and compliance with global regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Multi-layered security controls protecting your data at every level
            </p>
          </div>

          <div className="space-y-12">
            {securityFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-l-4 border-blue-600 pl-8">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <div className="bg-gray-50 p-3 rounded text-sm">
                        <span className="font-medium text-gray-700">Technical Details: </span>
                        <span className="text-gray-600">{feature.technical}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Meeting the strictest regulatory requirements across industries and regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{framework.framework}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    framework.status === 'Certified' ? 'bg-green-100 text-green-800' :
                    framework.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                    framework.status === 'Ready' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {framework.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{framework.description}</p>
                <ul className="space-y-2">
                  {framework.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Secure Data Architecture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our multi-tenant architecture ensures complete logical separation of customer data 
                while maintaining the performance and scalability enterprises require.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Database className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Logical Data Separation</h4>
                    <p className="text-gray-600">Complete isolation between customer workspaces with encrypted boundaries.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Server className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Infrastructure Security</h4>
                    <p className="text-gray-600">Hardened infrastructure with network segmentation and intrusion detection.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Data Residency</h4>
                    <p className="text-gray-600">Choose where your data is processed to meet regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Security Layers</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-medium text-gray-900">Application Layer</h4>
                  <p className="text-sm text-gray-600">Authentication, authorization, input validation</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-medium text-gray-900">Transport Layer</h4>
                  <p className="text-sm text-gray-600">TLS 1.2+ encryption, certificate management</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-medium text-gray-900">Network Layer</h4>
                  <p className="text-sm text-gray-600">VPC isolation, firewall rules, DDoS protection</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-medium text-gray-900">Infrastructure Layer</h4>
                  <p className="text-sm text-gray-600">Physical security, hardware security modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Documentation & Resources
            </h2>
            <p className="text-xl text-gray-600">
              Access detailed security documentation and compliance reports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Whitepaper</h3>
              <p className="text-gray-600 mb-4">Comprehensive overview of our security architecture and practices</p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SOC 2 Report</h3>
              <p className="text-gray-600 mb-4">Independent audit report of our security controls and compliance</p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <Download className="h-4 w-4 mr-2" />
                Request Access
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Incident Response</h3>
              <p className="text-gray-600 mb-4">Our procedures for handling and communicating security incidents</p>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <Download className="h-4 w-4 mr-2" />
                View Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Center CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Trust Center
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Access the latest security documentation, compliance reports, and transparency information 
            at our dedicated Trust Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://trust.anthropic.com" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50">
              Visit Trust Center
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Security Team
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