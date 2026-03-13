import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Module.css'

function InstructionModule({ studentData, onLogout }) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('syllabus')

  const mockSyllabus = [
    {
      id: 1,
      course_code: 'CS101',
      course_name: 'Introduction to Computer Science',
      description: 'Basic concepts of computer science and programming',
      credits: 3,
      prerequisites: 'None',
      objectives: 'Understand fundamental programming concepts'
    },
    {
      id: 2,
      course_code: 'CS201',
      course_name: 'Data Structures',
      description: 'Advanced data structures and algorithms',
      credits: 4,
      prerequisites: 'CS101',
      objectives: 'Master data structures and algorithmic thinking'
    }
  ]

  const mockLessons = [
    {
      id: 1,
      course_code: 'CS101',
      lesson_number: 1,
      title: 'Variables and Data Types',
      description: 'Introduction to variables, constants, and basic data types',
      duration: '2 hours',
      objectives: 'Declare variables, understand data types'
    },
    {
      id: 2,
      course_code: 'CS101',
      lesson_number: 2,
      title: 'Control Structures',
      description: 'Conditional statements and loops',
      duration: '2.5 hours',
      objectives: 'Implement decision making and iteration'
    }
  ]

  const mockCurriculum = [
    {
      id: 1,
      program: 'BS Computer Science',
      year_level: 1,
      semester: 1,
      courses: ['CS101', 'MATH101', 'ENG101'],
      total_credits: 12
    },
    {
      id: 2,
      program: 'BS Computer Science',
      year_level: 1,
      semester: 2,
      courses: ['CS102', 'MATH102', 'PHY101'],
      total_credits: 13
    }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'syllabus':
        return (
          <div className="module-content">
            <h2>Syllabus Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Credits</th>
                    <th>Prerequisites</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSyllabus.map(course => (
                    <tr key={course.id}>
                      <td>{course.course_code}</td>
                      <td>{course.course_name}</td>
                      <td>{course.description}</td>
                      <td>{course.credits}</td>
                      <td>{course.prerequisites}</td>
                      <td>
                        <button className="action-btn">View</button>
                        <button className="action-btn">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'lessons':
        return (
          <div className="module-content">
            <h2>Lesson Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Lesson #</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockLessons.map(lesson => (
                    <tr key={lesson.id}>
                      <td>{lesson.course_code}</td>
                      <td>{lesson.lesson_number}</td>
                      <td>{lesson.title}</td>
                      <td>{lesson.description}</td>
                      <td>{lesson.duration}</td>
                      <td>
                        <button className="action-btn">View</button>
                        <button className="action-btn">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'curriculum':
        return (
          <div className="module-content">
            <h2>Curriculum Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>Courses</th>
                    <th>Total Credits</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCurriculum.map(curr => (
                    <tr key={curr.id}>
                      <td>{curr.program}</td>
                      <td>{curr.year_level}</td>
                      <td>{curr.semester}</td>
                      <td>{curr.courses.join(', ')}</td>
                      <td>{curr.total_credits}</td>
                      <td>
                        <button className="action-btn">View</button>
                        <button className="action-btn">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <h1>CCS Comprehensive Profiling System</h1>
          <p className="subtitle">Student management and academic profiling platform</p>
        </div>
        <div className="header-right">
          {studentData && (
            <div className="user-info">
              <span className="user-label">Logged in as:</span>
              <span className="user-id">{studentData.studentNumber}</span>
              <button
                className="logout-btn"
                onClick={onLogout}
                title="Logout from dashboard"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <nav className="module-navigation">
        <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          Student Dashboard
        </Link>
        <Link to="/faculty" className={`nav-link ${location.pathname === '/faculty' ? 'active' : ''}`}>
          Faculty Dashboard
        </Link>
        <Link to="/instruction" className={`nav-link ${location.pathname === '/instruction' ? 'active' : ''}`}>
          Instruction Module
        </Link>
        <Link to="/scheduling" className={`nav-link ${location.pathname === '/scheduling' ? 'active' : ''}`}>
          Scheduling Module
        </Link>
      </nav>

      <div className="module-container">
        <div className="module-sidebar">
          <h3>Instruction Module</h3>
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`}
              onClick={() => setActiveTab('syllabus')}
            >
              Syllabus
            </button>
            <button
              className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
              onClick={() => setActiveTab('lessons')}
            >
              Lessons
            </button>
            <button
              className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
          </div>
        </div>

        <main className="module-content">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default InstructionModule