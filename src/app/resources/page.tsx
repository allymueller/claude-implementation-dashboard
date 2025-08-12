'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Download, FileText, Video, BookOpen, ArrowRight, Filter, Users, Building2, Code, Shield } from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  category: 'training' | 'security' | 'implementation' | 'use-cases' | 'documentation'
  type: 'pdf' | 'video' | 'guide' | 'presentation'
  tags: string[]
  downloadLink?: string
  audience: 'executive' | 'technical' | 'end-user' | 'champion'
  featured?: boolean
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Claude for Enterprise Security Overview',
    description: 'Comprehensive guide to enterprise security features including SOC 2 certification, SSO, audit logs, and data protection measures.',
    category: 'security',
    type: 'pdf',
    tags: ['security', 'compliance', 'soc2', 'sso'],
    audience: 'executive',
    featured: true
  },
  {
    id: '2',
    title: 'Enterprise Deployment Kickoff Guide',
    description: 'Step-by-step deployment methodology used by Fortune 500 companies, including timeline, champion selection, and success metrics.',
    category: 'implementation',
    type: 'guide',
    tags: ['deployment', 'implementation', 'best-practices'],
    audience: 'technical',
    featured: true
  },
  {
    id: '3',
    title: 'Claude 101 Training for Enterprises',
    description: 'Complete training curriculum covering prompting, projects, artifacts, and advanced features for enterprise teams.',
    category: 'training',
    type: 'presentation',
    tags: ['training', 'onboarding', 'best-practices'],
    audience: 'champion',
    featured: true
  },
  {
    id: '4',
    title: 'Healthcare Enterprise Use Cases',
    description: 'Real-world implementation examples from CHG Healthcare showing legal document review, data analysis, and workflow optimization.',
    category: 'use-cases',
    type: 'pdf',
    tags: ['healthcare', 'legal', 'document-review', 'case-study'],
    audience: 'executive'
  },
  {
    id: '5',
    title: 'Developer-Focused Claude Training',
    description: 'Technical training materials covering code generation, debugging, architecture review, and development workflow integration.',
    category: 'training',
    type: 'presentation',
    tags: ['developers', 'code', 'technical', 'integration'],
    audience: 'technical'
  },
  {
    id: '6',
    title: 'MCP & Computer Use Implementation Guide',
    description: 'Advanced guide for implementing Model Context Protocol and Computer Use features for enterprise automation workflows.',
    category: 'implementation',
    type: 'guide',
    tags: ['mcp', 'automation', 'advanced', 'computer-use'],
    audience: 'technical'
  },
  {
    id: '7',
    title: 'ROI & Success Metrics Framework',
    description: 'Framework for measuring Claude Enterprise ROI including productivity metrics, cost savings calculation, and adoption tracking.',
    category: 'documentation',
    type: 'guide',
    tags: ['roi', 'metrics', 'success', 'measurement'],
    audience: 'executive'
  },
  {
    id: '8',
    title: 'Financial Services Implementation',
    description: 'Case study from leading financial services firm showing data analysis, compliance workflows, and risk management applications.',
    category: 'use-cases',
    type: 'pdf',
    tags: ['financial-services', 'compliance', 'data-analysis', 'case-study'],
    audience: 'executive'
  },
  {
    id: '9',
    title: 'Champion Program Best Practices',
    description: 'Guide to selecting, training, and managing Claude champions across your organization for successful adoption.',
    category: 'implementation',
    type: 'guide',
    tags: ['champions', 'adoption', 'change-management', 'training'],
    audience: 'champion'
  },
  {
    id: '10',
    title: 'Enterprise Support & Escalation Process',
    description: 'Complete guide to enterprise support channels, SLAs, escalation procedures, and dedicated customer success resources.',
    category: 'documentation',
    type: 'guide',
    tags: ['support', 'sla', 'customer-success', 'escalation'],
    audience: 'technical'
  }
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedAudience, setSelectedAudience] = useState<string>('all')

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'training', label: 'Training & Onboarding' },
    { value: 'security', label: 'Security & Compliance' },
    { value: 'implementation', label: 'Implementation' },
    { value: 'use-cases', label: 'Use Cases & Case Studies' },
    { value: 'documentation', label: 'Documentation' }
  ]

  const audiences = [
    { value: 'all', label: 'All Audiences' },
    { value: 'executive', label: 'Executive Leadership' },
    { value: 'technical', label: 'Technical Teams' },
    { value: 'champion', label: 'Champions & Trainers' },
    { value: 'end-user', label: 'End Users' }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesAudience = selectedAudience === 'all' || resource.audience === selectedAudience

    return matchesSearch && matchesCategory && matchesAudience
  })

  const featuredResources = resources.filter(r => r.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5" />
      case 'video':
        return <Video className="h-5 w-5" />
      case 'guide':
        return <BookOpen className="h-5 w-5" />
      case 'presentation':
        return <FileText className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getAudienceIcon = (audience: string) => {
    switch (audience) {
      case 'executive':
        return <Building2 className="h-4 w-4" />
      case 'technical':
        return <Code className="h-4 w-4" />
      case 'champion':
        return <Users className="h-4 w-4" />
      case 'end-user':
        return <Users className="h-4 w-4" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

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
              <Link href="/resources" className="text-blue-600 font-semibold">Resources</Link>
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
              Enterprise Resource Library
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Everything you need to successfully deploy, train, and optimize Claude for Enterprise 
              across your organization. Curated from real enterprise implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map(resource => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getTypeIcon(resource.type)}
                    <span className="ml-2 text-sm text-gray-500 capitalize">{resource.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    {getAudienceIcon(resource.audience)}
                    <span className="ml-1 capitalize">{resource.audience.replace('-', ' ')}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                  Access Resource
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources, guides, and documentation..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {audiences.map(audience => (
                    <option key={audience.value} value={audience.value}>
                      {audience.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              All Resources ({filteredResources.length})
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getTypeIcon(resource.type)}
                    <span className="ml-2 text-sm text-gray-500 capitalize">{resource.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    {getAudienceIcon(resource.audience)}
                    <span className="ml-1 capitalize">{resource.audience.replace('-', ' ')}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{resource.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                    {resource.category.replace('-', ' ')}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                    <Download className="mr-1 h-4 w-4" />
                    Access
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Additional Resources or Support?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our enterprise success team is ready to provide custom training materials, 
            implementation guidance, and ongoing support for your deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-50">
              Contact Enterprise Success
            </Link>
            <Link href="/getting-started" className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Implementation
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