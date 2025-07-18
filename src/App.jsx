import './App.css'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'

// Import images
import crmImplementationImg from './assets/crm_implementation.jpg'
import crmRoadmapImg from './assets/crm_roadmap.jpg'
import projectCharterImg from './assets/project_charter.png'
import businessCaseImg from './assets/business_case.png'
import projectLifecycleImg from './assets/project_lifecycle.png'
import implementationPlanImg from './assets/implementation_plan.jpg'
import riskMatrixImg from './assets/risk_matrix.jpg'
import communicationMatrixImg from './assets/communication_matrix.png'
import crmSuccessImg from './assets/crm_success.png'

const slides = [
  {
    id: 'introduction',
    title: 'Introduction to the CRM Implementation Project',
    subtitle: 'TechSolutions Inc.',
    content: {
      scope: 'Implementation of a comprehensive Customer Relationship Management (CRM) system to centralize customer data, streamline sales processes, and enhance customer service capabilities across all departments.',
      objectives: [
        'Implement a fully functional CRM system within 6 months',
        'Migrate all customer data from legacy systems',
        'Integrate with existing ERP and marketing automation tools',
        'Train 100% of customer-facing staff',
        'Achieve 95% user adoption within 3 months of launch'
      ],
      benefits: [
        { icon: '📈', text: '15% increase in customer retention rate' },
        { icon: '⚡', text: '20% improvement in sales productivity' },
        { icon: '👥', text: '30% reduction in customer response time' },
        { icon: '💾', text: 'Unified 360° view of customer interactions' }
      ]
    },
    image: crmImplementationImg
  },
  {
    id: 'project_charter',
    title: 'Project Charter',
    subtitle: 'CRM Implementation Project',
    content: {
      vision: '"By implementing a centralized CRM solution, TechSolutions Inc. will enable enhanced customer service, streamlined sales processes, and data-driven decision making within a unified information technology environment."',
      stakeholders: [
        { role: 'Executive Sponsor', name: 'Sarah Johnson, CEO' },
        { role: 'Project Manager', name: 'Michael Chen' },
        { role: 'Business Owner', name: 'Emily Rodriguez, Sales Director' },
        { role: 'Technical Lead', name: 'David Kim, IT Director' },
        { role: 'End Users', name: 'Sales, Marketing, Customer Service teams' }
      ],
      successCriteria: [
        'System deployed on time and within budget',
        'All customer data successfully migrated',
        '95% user adoption rate within 3 months',
        '15% increase in customer retention metrics',
        '20% improvement in sales team productivity'
      ],
      scope: {
        inScope: [
          'Core CRM functionality',
          'Customer data migration',
          'User training',
          'Standard reporting',
          'ERP system integration'
        ],
        outOfScope: [
          'Hardware procurement',
          'Third-party integrations (Phase 2)',
          'Mobile app development',
          'Custom development',
          'Legacy system maintenance'
        ]
      }
    },
    image: projectCharterImg
  },
  {
    id: 'business_case',
    title: 'Business Case Development',
    subtitle: 'CRM Implementation Project',
    content: {
      problemStatement: 'TechSolutions Inc. is experiencing declining customer retention rates and inefficient sales processes due to siloed customer data across multiple legacy systems. Sales teams lack visibility into customer history, resulting in missed opportunities and reduced customer satisfaction.',
      proposedSolution: 'Implement an enterprise-grade CRM system to centralize customer data, automate sales workflows, and provide comprehensive analytics for data-driven decision making.',
      initialInvestment: [
        { item: 'Software licensing', cost: '$120,000' },
        { item: 'Implementation services', cost: '$85,000' },
        { item: 'Training and change management', cost: '$45,000' },
        { item: 'Infrastructure upgrades', cost: '$30,000' },
        { item: 'Total Initial Cost', cost: '$280,000', isTotal: true }
      ],
      annualBenefits: [
        { item: 'Increased sales revenue', benefit: '$180,000' },
        { item: 'Reduced operational costs', benefit: '$90,000' },
        { item: 'Improved customer retention', benefit: '$120,000' },
        { item: 'Total Annual Benefits', benefit: '$390,000', isTotal: true }
      ],
      roi: {
        threeYearROI: '139%',
        paybackPeriod: '1.4 years'
      }
    },
    image: businessCaseImg
  },
  {
    id: 'methodology',
    title: 'Project Management Methodology',
    subtitle: 'Hybrid Approach for CRM Implementation',
    content: {
      selectedMethodology: 'A hybrid approach combining Waterfall and Agile methodologies to leverage the strengths of both frameworks',
      justification: [
        'Waterfall for infrastructure and system setup',
        'Agile for user interface customization and reporting',
        'Iterative approach for user feedback incorporation'
      ],
      reasons: [
        'Core CRM functionality has well-defined requirements',
        'Integration components require structured approach',
        'UI customization benefits from user feedback cycles',
        'Reporting needs evolve throughout implementation'
      ],
      phases: [
        { phase: 1, title: 'Requirements & Planning', duration: '3 weeks', approach: 'Waterfall approach with detailed documentation' },
        { phase: 2, title: 'System Setup & Configuration', duration: '6 weeks', approach: 'Waterfall with milestone-based tracking' },
        { phase: 3, title: 'UI Customization', duration: '4 weeks', approach: 'Agile with 1-week sprints and user feedback' },
        { phase: 4, title: 'Data Migration', duration: '3 weeks', approach: 'Waterfall with rigorous testing' },
        { phase: 5, title: 'Training & Deployment', duration: '4 weeks', approach: 'Phased rollout with feedback loops' }
      ]
    },
    image: projectLifecycleImg
  },
  {
    id: 'implementation',
    title: 'Implementation Strategy',
    subtitle: 'CRM Implementation Project',
    content: {
      phases: [
        {
          phase: 'Phase 1: Foundation Setup',
          duration: 'Weeks 1-4',
          description: 'Infrastructure preparation, base system installation, core configuration, initial testing'
        },
        {
          phase: 'Phase 2: Data Migration',
          duration: 'Weeks 5-8',
          description: 'Data assessment and cleansing, migration testing, production data transfer, validation'
        },
        {
          phase: 'Phase 3: User Training',
          duration: 'Weeks 9-12',
          description: 'Training program delivery, pilot user groups, feedback collection, process refinement'
        },
        {
          phase: 'Phase 4: Full Deployment',
          duration: 'Weeks 13-16',
          description: 'System go-live, legacy system retirement, post-implementation support, monitoring'
        }
      ],
      changeManagement: [
        { strategy: 'Create Urgency', description: 'Communicate business need and benefits' },
        { strategy: 'Build Coalition', description: 'Identify champions across departments' },
        { strategy: 'Generate Wins', description: 'Celebrate early adoption successes' },
        { strategy: 'Sustain Change', description: 'Ongoing training and support' }
      ],
      deploymentStrategy: {
        chosen: 'Pilot Deployment',
        advantages: 'Controlled testing, gradual rollout',
        disadvantages: 'Longer timeline, change management complexity',
        bestFor: 'Our organization size and system complexity'
      }
    },
    image: implementationPlanImg
  },
  {
    id: 'risk_management',
    title: 'Risk Management',
    subtitle: 'CRM Implementation Project',
    content: {
      keyRisks: [
        { category: 'Technical', description: 'Data migration errors', score: 'High (9)' },
        { category: 'Technical', description: 'Integration failures with ERP', score: 'Medium (6)' },
        { category: 'Business', description: 'User resistance to adoption', score: 'High (9)' },
        { category: 'Business', description: 'Process changes impact', score: 'Medium (6)' },
        { category: 'Project', description: 'Resource availability', score: 'Medium (4)' }
      ],
      mitigationStrategies: [
        { risk: 'Data Migration', strategy: 'Conduct thorough testing with sample data before full migration' },
        { risk: 'Integration', strategy: 'Develop proof of concept for critical integrations' },
        { risk: 'User Adoption', strategy: 'Implement comprehensive change management and training' },
        { risk: 'Process Impact', strategy: 'Engage business process owners early in design phase' },
        { risk: 'Resources', strategy: 'Secure dedicated team members with backup resources' }
      ]
    },
    image: riskMatrixImg
  },
  {
    id: 'communication',
    title: 'Communication & Stakeholder Management',
    subtitle: 'CRM Implementation Project',
    content: {
      stakeholderAnalysis: [
        { stakeholder: 'Executive Team', interest: 'High', influence: 'High', strategy: 'Manage Closely' },
        { stakeholder: 'Sales Team', interest: 'High', influence: 'Medium', strategy: 'Keep Satisfied' },
        { stakeholder: 'IT Department', interest: 'Medium', influence: 'High', strategy: 'Keep Informed' },
        { stakeholder: 'Customer Service', interest: 'High', influence: 'Medium', strategy: 'Keep Satisfied' },
        { stakeholder: 'External Vendors', interest: 'Low', influence: 'Medium', strategy: 'Monitor' }
      ],
      reportingStructure: [
        'Weekly Status Reports: Project team progress, issues, and upcoming activities',
        'Monthly Executive Dashboard: High-level metrics, budget status, and risk overview',
        'Bi-weekly Stakeholder Updates: Key milestones, changes, and training schedules',
        'Daily Team Standups: Task updates and blocker resolution'
      ],
      communicationPrinciples: [
        'Transparency: Open communication about project status and challenges',
        'Relevance: Tailored information for different stakeholder groups',
        'Timeliness: Regular updates at appropriate intervals',
        'Feedback: Two-way communication channels for stakeholder input'
      ]
    },
    image: communicationMatrixImg
  },
  {
    id: 'quality_assurance',
    title: 'Quality Assurance & Testing',
    subtitle: 'CRM Implementation Project',
    content: {
      testingStrategy: [
        {
          type: 'Unit Testing',
          description: 'Individual component testing by developers with 100% code coverage goal'
        },
        {
          type: 'Integration Testing',
          description: 'System component interaction, data flow validation, API testing'
        },
        {
          type: 'User Acceptance Testing',
          description: 'Business process validation with end-user scenarios and real-world data'
        },
        {
          type: 'Performance Testing',
          description: 'Load testing, stress testing, volume testing, scalability validation'
        }
      ],
      testPlanning: [
        'Test Environment: Dedicated testing servers mirroring production',
        'Test Data: Anonymized production data and synthetic test cases',
        'Test Schedule: 4-week testing window with daily regression tests',
        'Success Criteria: Zero severity 1 defects, 95% test case pass rate'
      ],
      defectManagement: [
        { severity: 'Severity 1', description: 'System down, critical functionality broken', resolution: '24 hours' },
        { severity: 'Severity 2', description: 'Major functionality impacted', resolution: '3 days' },
        { severity: 'Severity 3', description: 'Minor functionality issues', resolution: '1 week' },
        { severity: 'Severity 4', description: 'Cosmetic or enhancement requests', resolution: 'Next release' }
      ]
    },
    image: null
  },
  {
    id: 'training',
    title: 'Training & Change Management',
    subtitle: 'CRM Implementation Project',
    content: {
      trainingNeeds: [
        { audience: 'Executive Team', training: 'Dashboard navigation, high-level reporting' },
        { audience: 'Sales Team', training: 'Lead management, opportunity tracking, forecasting' },
        { audience: 'Customer Service', training: 'Case management, customer history, service workflows' },
        { audience: 'System Administrators', training: 'Configuration, user management, security settings' }
      ],
      trainingProgram: [
        { method: 'Classroom Training', description: 'Role-specific hands-on sessions (2-4 hours)' },
        { method: 'E-Learning Modules', description: 'Self-paced tutorials for basic functionality' },
        { method: 'Super User Program', description: 'Department champions for peer support' },
        { method: 'Reference Materials', description: 'Quick guides, FAQs, and process documentation' }
      ],
      adoptionFactors: [
        { factor: 'Clear Communication', description: 'Regular updates on project progress and benefits' },
        { factor: 'Executive Sponsorship', description: 'Visible leadership support and participation' },
        { factor: 'Performance Metrics', description: 'Tracking and celebrating adoption milestones' },
        { factor: 'Post-Launch Support', description: 'Dedicated help desk and ongoing training' }
      ]
    },
    image: null
  },
  {
    id: 'success_metrics',
    title: 'Success Metrics & Evaluation',
    subtitle: 'CRM Implementation Project',
    content: {
      technicalKPIs: [
        'System Availability: 99.9% uptime',
        'Average Response Time: < 2 seconds',
        'Data Accuracy: 99.5% match with source systems',
        'Security Incidents: Zero breaches'
      ],
      businessKPIs: [
        'User Adoption: 95% active users within 3 months',
        'Customer Retention: 15% increase within 1 year',
        'Sales Productivity: 20% improvement in 6 months',
        'ROI Achievement: Break-even within 18 months'
      ],
      measurementTimeline: [
        { period: 'Immediate (0-3 months)', focus: 'System functionality, user adoption rates, initial feedback' },
        { period: 'Short-term (3-12 months)', focus: 'Process improvements, efficiency gains, customer satisfaction' },
        { period: 'Long-term (12+ months)', focus: 'Strategic benefits, ROI realization, competitive advantage' }
      ],
      postImplementationReview: [
        'Objective Achievement: Evaluate goals vs. actual results',
        'Lessons Learned: Document successes and challenges',
        'Best Practices: Identify approaches for future projects',
        'Improvement Opportunities: Areas for enhancement',
        'Sustainability Plan: Ongoing support and optimization'
      ]
    },
    image: crmSuccessImg
  }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setSidebarOpen(false)
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-800 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold">Presentation Navigation</h2>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4 space-y-2">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => goToSlide(index)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                index === currentSlide 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              <div className="text-sm font-medium">{index + 1}. {s.title}</div>
              <div className="text-xs text-slate-400 mt-1">{s.subtitle}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">CRM Implementation Project</h1>
                <p className="text-sm text-slate-400">IT Project Management Case Study</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{currentSlide + 1} of {slides.length}</Badge>
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-2">{slide.title}</h2>
              <p className="text-xl text-slate-300">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content */}
              <div className="space-y-6">
                {slide.id === 'introduction' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Project Scope</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300">{slide.content.scope}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Project Objectives</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {slide.content.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Expected Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <span className="text-2xl">{benefit.icon}</span>
                              <span className="text-slate-300">{benefit.text}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'project_charter' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Project Vision</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 italic">{slide.content.vision}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Key Stakeholders</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {slide.content.stakeholders.map((stakeholder, index) => (
                            <div key={index} className="text-slate-300">
                              <strong>{stakeholder.role}:</strong> {stakeholder.name}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Success Criteria</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {slide.content.successCriteria.map((criteria, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'business_case' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Problem Statement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300">{slide.content.problemStatement}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Proposed Solution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300">{slide.content.proposedSolution}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">ROI Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-slate-400">3-Year ROI</p>
                            <p className="text-2xl font-bold text-green-400">{slide.content.roi.threeYearROI}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Payback Period</p>
                            <p className="text-2xl font-bold text-green-400">{slide.content.roi.paybackPeriod}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Add more slide content rendering here for other slides */}
                {slide.id === 'methodology' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Selected Methodology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-4">{slide.content.selectedMethodology}</p>
                        <ul className="space-y-2">
                          {slide.content.justification.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Phase Structure</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {slide.content.phases.map((phase, index) => (
                            <div key={index} className="border-l-4 border-blue-400 pl-4">
                              <h4 className="font-semibold text-white">Phase {phase.phase}: {phase.title}</h4>
                              <p className="text-sm text-blue-400">{phase.duration}</p>
                              <p className="text-slate-300">{phase.approach}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {/* Continue with other slides... */}
                {slide.id === 'implementation' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Implementation Phases</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {slide.content.phases.map((phase, index) => (
                            <div key={index} className="border-l-4 border-blue-400 pl-4">
                              <h4 className="font-semibold text-white">{phase.phase}</h4>
                              <p className="text-sm text-blue-400">{phase.duration}</p>
                              <p className="text-slate-300">{phase.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Change Management Strategy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.changeManagement.map((item, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{item.strategy}</h4>
                              <p className="text-slate-300">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'risk_management' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Key Risks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.keyRisks.map((risk, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <div>
                                <span className="text-white font-semibold">{risk.category}: </span>
                                <span className="text-slate-300">{risk.description}</span>
                              </div>
                              <Badge variant="outline" className="text-blue-400">{risk.score}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Mitigation Strategies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.mitigationStrategies.map((item, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{item.risk}</h4>
                              <p className="text-slate-300">{item.strategy}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'communication' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Stakeholder Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {slide.content.stakeholderAnalysis.map((item, index) => (
                            <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                              <span className="text-white font-semibold">{item.stakeholder}</span>
                              <span className="text-slate-300">Interest: {item.interest}</span>
                              <span className="text-slate-300">Influence: {item.influence}</span>
                              <span className="text-blue-400">{item.strategy}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Communication Principles</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {slide.content.communicationPrinciples.map((principle, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'quality_assurance' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Testing Strategy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.testingStrategy.map((test, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{test.type}</h4>
                              <p className="text-slate-300">{test.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Defect Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {slide.content.defectManagement.map((defect, index) => (
                            <div key={index} className="grid grid-cols-3 gap-2 text-sm">
                              <span className="text-white font-semibold">{defect.severity}</span>
                              <span className="text-slate-300">{defect.description}</span>
                              <span className="text-blue-400">{defect.resolution}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'training' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Training Needs Assessment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.trainingNeeds.map((need, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{need.audience}</h4>
                              <p className="text-slate-300">{need.training}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Training Program</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.trainingProgram.map((program, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{program.method}</h4>
                              <p className="text-slate-300">{program.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}

                {slide.id === 'success_metrics' && (
                  <>
                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Technical KPIs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {slide.content.technicalKPIs.map((kpi, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{kpi}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Business KPIs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {slide.content.businessKPIs.map((kpi, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-slate-300">{kpi}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-800 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-blue-400">Measurement Timeline</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {slide.content.measurementTimeline.map((timeline, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-white">{timeline.period}</h4>
                              <p className="text-slate-300">{timeline.focus}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </div>

              {/* Image */}
              <div className="flex items-center justify-center">
                {slide.image && (
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Navigation Footer */}
        <footer className="bg-slate-800 border-t border-slate-700 p-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-400' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App

