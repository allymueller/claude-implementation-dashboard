import Link from 'next/link'
import { ArrowRight, Users, PlayCircle, BookOpen, CheckCircle, Clock, Target, TrendingUp, Award, Video, FileText, MessageSquare } from 'lucide-react'

export default function OnboardingPage() {
  const onboardingPhases = [
    {
      phase: 1,
      title: "Foundation Phase",
      duration: "Week 1-2",
      description: "Essential setup and basic training for immediate productivity",
      status: "in_progress",
      tasks: [
        { task: "Complete SSO integration", completed: true },
        { task: "Create user accounts and assign roles", completed: true },
        { task: "Essential Claude training for all users", completed: false },
        { task: "Set up initial use case workflows", completed: false }
      ],
      deliverables: [
        "All users have Claude access",
        "Basic training completion certificates",
        "Initial use case implementations"
      ]
    },
    {
      phase: 2,
      title: "Adoption Phase", 
      duration: "Week 3-4",
      description: "Drive adoption through guided practice and success stories",
      status: "pending",
      tasks: [
        { task: "Deploy champion program", completed: false },
        { task: "Weekly office hours and Q&A sessions", completed: false },
        { task: "Track and celebrate early wins", completed: false },
        { task: "Advanced use case training", completed: false }
      ],
      deliverables: [
        "Champion network established",
        "Weekly adoption metrics",
        "Success story documentation"
      ]
    },
    {
      phase: 3,
      title: "Scale Phase",
      duration: "Week 5-8",
      description: "Expand usage across teams and optimize workflows",
      status: "pending", 
      tasks: [
        { task: "Advanced feature training", completed: false },
        { task: "Custom workflow development", completed: false },
        { task: "Integration with existing tools", completed: false },
        { task: "Performance optimization", completed: false }
      ],
      deliverables: [
        "Custom workflow documentation",
        "Tool integration setup",
        "Performance benchmarks"
      ]
    }
  ]

  const trainingModules = [
    {
      title: "Claude Fundamentals",
      description: "Core concepts and basic interaction patterns",
      duration: "30 minutes",
      type: "Interactive",
      audience: "All Users",
      status: "available",
      completion: 78
    },
    {
      title: "Prompt Engineering",
      description: "Write effective prompts for better results", 
      duration: "45 minutes",
      type: "Workshop",
      audience: "All Users",
      status: "available",
      completion: 45
    },
    {
      title: "Advanced Use Cases",
      description: "Complex workflows and specialized applications",
      duration: "60 minutes", 
      type: "Hands-on",
      audience: "Power Users",
      status: "available",
      completion: 23
    },
    {
      title: "Security & Compliance",
      description: "Best practices for secure Claude usage",
      duration: "20 minutes",
      type: "Video",
      audience: "All Users", 
      status: "available",
      completion: 89
    }
  ]

  const champions = [
    {
      name: "Sarah Chen",
      department: "Marketing",
      specialty: "Content Creation",
      impact: "3x content velocity",
      status: "active"
    },
    {
      name: "Michael Rodriguez", 
      department: "Engineering",
      specialty: "Code Review",
      impact: "50% faster reviews",
      status: "active"
    },
    {
      name: "Emily Parker",
      department: "Sales",
      specialty: "Proposal Writing",
      impact: "40% win rate increase",
      status: "active"
    },
    {
      name: "David Kim",
      department: "Legal",
      specialty: "Contract Analysis", 
      impact: "60% time savings",
      status: "recruiting"
    }
  ]

  const metrics = [
    {
      metric: "User Activation",
      current: 68,
      target: 90,
      trend: "up"
    },
    {
      metric: "Daily Active Users",
      current: 45,
      target: 70,
      trend: "up"
    },
    {
      metric: "Training Completion",
      current: 78,
      target: 95,
      trend: "stable"
    },
    {
      metric: "Time to First Value",
      current: 3.2,
      target: 2.0,
      trend: "down",
      unit: "days"
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
              <Link href="/user-management" className="text-gray-600 hover:text-gray-900">User Management</Link>
              <Link href="/onboarding" className="text-blue-600 font-medium">Team Onboarding</Link>
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
              Team Onboarding & Training
            </h1>
            <p className="text-lg text-gray-600">
              Drive successful Claude adoption across your organization with structured training programs, 
              champion networks, and measurable success metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">Onboarding Progress</h2>
              <div className="text-sm text-gray-500">8-week implementation plan</div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.current}{metric.unit || '%'}
                  </div>
                  <div className="text-sm text-gray-600">{metric.metric}</div>
                  <div className="text-xs text-gray-500">
                    Target: {metric.target}{metric.unit || '%'}
                  </div>
                  <div className={`flex items-center justify-center mt-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-gray-400'
                  }`}>
                    <TrendingUp className={`h-3 w-3 mr-1 ${
                      metric.trend === 'down' ? 'transform rotate-180' : ''
                    }`} />
                    <span className="text-xs">{metric.trend === 'stable' ? 'Stable' : 'Trending'}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {onboardingPhases.map((phase, index) => (
                <div key={phase.phase} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-4 ${
                        phase.status === 'in_progress' 
                          ? 'bg-blue-100 text-blue-800'
                          : phase.status === 'completed'
                          ? 'bg-green-100 text-green-800'  
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.phase}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{phase.title}</h3>
                        <p className="text-sm text-gray-600">{phase.duration} • {phase.description}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      phase.status === 'in_progress'
                        ? 'bg-blue-100 text-blue-800'
                        : phase.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {phase.status === 'in_progress' ? 'In Progress' : 
                       phase.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Tasks</h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center text-sm">
                            {task.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            )}
                            <span className={task.completed ? 'text-gray-700' : 'text-gray-600'}>
                              {task.task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-center text-sm text-gray-600">
                            <Target className="h-4 w-4 text-blue-500 mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Training Library
            </h2>
            <p className="text-gray-600">
              Self-paced and instructor-led training modules designed for different skill levels and roles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {trainingModules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {module.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>Duration: {module.duration}</span>
                  <span>Audience: {module.audience}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-medium">{module.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${module.completion}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Link 
                    href={`/training/${module.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Start Training
                  </Link>
                  <Link 
                    href="#"
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                  >
                    <Video className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Champion Network */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Champion Network
            </h2>
            <p className="text-gray-600">
              Identify and empower Claude champions across departments to drive adoption and share best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {champions.map((champion, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    champion.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {champion.status === 'active' ? 'Active' : 'Recruiting'}
                  </span>
                </div>
                
                <h3 className="font-medium text-gray-900">{champion.name}</h3>
                <p className="text-sm text-gray-600">{champion.department}</p>
                <p className="text-sm text-blue-600 font-medium mt-1">{champion.specialty}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm">
                    <span className="text-gray-600">Impact: </span>
                    <span className="font-medium text-green-600">{champion.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="#nominate-champion"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Users className="h-4 w-4 mr-2" />
              Nominate a Champion
            </Link>
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Quick Resources */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Quick Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/quick-start" className="text-blue-600 hover:text-blue-700 text-sm">
                    Claude Quick Start Guide →
                  </Link>
                </li>
                <li>
                  <Link href="/resources/use-cases" className="text-blue-600 hover:text-blue-700 text-sm">
                    Department Use Case Library →
                  </Link>
                </li>
                <li>
                  <Link href="/resources/templates" className="text-blue-600 hover:text-blue-700 text-sm">
                    Prompt Templates & Examples →
                  </Link>
                </li>
                <li>
                  <Link href="/resources/best-practices" className="text-blue-600 hover:text-blue-700 text-sm">
                    Best Practices Guide →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Weekly Q&A Sessions</div>
                  <div className="text-gray-600">Tuesdays 2:00 PM EST</div>
                  <div className="text-gray-600">Fridays 10:00 AM EST</div>
                </div>
                <Link 
                  href="#join-office-hours"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  Join Next Session →
                </Link>
              </div>
            </div>

            {/* Support Channels */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Support Channels
              </h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">#claude-help</div>
                  <div className="text-gray-600">Internal Slack channel</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Enterprise Support</div>
                  <div className="text-gray-600">24/7 technical support</div>
                </div>
                <Link 
                  href="/support"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}