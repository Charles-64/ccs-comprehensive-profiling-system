import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Module.css'

function SchedulingModule({ studentData, onLogout }) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('course')

  const mockCourses = [
    {
      id: 1,
      course_code: 'CS101',
      course_name: 'Introduction to Computer Science',
      department: 'Computer Science',
      credits: 3,
      duration: '1 semester',
      status: 'Active'
    },
    {
      id: 2,
      course_code: 'CS201',
      course_name: 'Data Structures',
      department: 'Computer Science',
      credits: 4,
      duration: '1 semester',
      status: 'Active'
    }
  ]

  const mockSections = [
    {
      id: 1,
      course_code: 'CS101',
      section_code: 'CS101-A',
      instructor: 'Dr. John Smith',
      schedule: 'MWF 9:00-10:00',
      room: 'LAB101',
      capacity: 30,
      enrolled: 25
    },
    {
      id: 2,
      course_code: 'CS101',
      section_code: 'CS101-B',
      instructor: 'Prof. Jane Doe',
      schedule: 'TTH 10:00-11:30',
      room: 'LAB102',
      capacity: 30,
      enrolled: 28
    }
  ]

  const mockRooms = [
    {
      id: 1,
      room_code: 'LAB101',
      room_name: 'Computer Lab 101',
      type: 'Computer Lab',
      capacity: 30,
      location: 'Building A, Floor 1',
      equipment: '30 PCs, Projector',
      status: 'Available'
    },
    {
      id: 2,
      room_code: 'ROOM201',
      room_name: 'Lecture Room 201',
      type: 'Lecture Room',
      capacity: 50,
      location: 'Building B, Floor 2',
      equipment: 'Projector, Whiteboard',
      status: 'Available'
    }
  ]

  const mockLabs = [
    {
      id: 1,
      lab_code: 'NETLAB',
      lab_name: 'Networking Laboratory',
      type: 'Networking',
      capacity: 20,
      location: 'Building C, Floor 1',
      equipment: 'Routers, Switches, PCs',
      status: 'Available'
    },
    {
      id: 2,
      lab_code: 'CHEMLAB',
      lab_name: 'Chemistry Laboratory',
      type: 'Chemistry',
      capacity: 25,
      location: 'Building D, Floor 2',
      equipment: 'Lab equipment, Safety gear',
      status: 'Under Maintenance'
    }
  ]

  const mockFaculty = [
    {
      id: 1,
      faculty_id: 'FAC001',
      name: 'Dr. John Smith',
      department: 'Computer Science',
      specialization: 'Software Engineering',
      email: 'john.smith@university.edu',
      phone: '+1-234-567-8901',
      status: 'Active'
    },
    {
      id: 2,
      faculty_id: 'FAC002',
      name: 'Prof. Jane Doe',
      department: 'Computer Science',
      specialization: 'Data Science',
      email: 'jane.doe@university.edu',
      phone: '+1-234-567-8902',
      status: 'Active'
    }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'course':
        return (
          <div className="module-content">
            <h2>Course Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Department</th>
                    <th>Credits</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCourses.map(course => (
                    <tr key={course.id}>
                      <td>{course.course_code}</td>
                      <td>{course.course_name}</td>
                      <td>{course.department}</td>
                      <td>{course.credits}</td>
                      <td>{course.duration}</td>
                      <td>
                        <span className={`status-badge status-${course.status.toLowerCase()}`}>
                          {course.status}
                        </span>
                      </td>
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
      case 'section':
        return (
          <div className="module-content">
            <h2>Section Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Section</th>
                    <th>Instructor</th>
                    <th>Schedule</th>
                    <th>Room</th>
                    <th>Enrolled/Capacity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockSections.map(section => (
                    <tr key={section.id}>
                      <td>{section.course_code}</td>
                      <td>{section.section_code}</td>
                      <td>{section.instructor}</td>
                      <td>{section.schedule}</td>
                      <td>{section.room}</td>
                      <td>{section.enrolled}/{section.capacity}</td>
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
      case 'rooms':
        return (
          <div className="module-content">
            <h2>Room Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Room Code</th>
                    <th>Room Name</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    <th>Location</th>
                    <th>Equipment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockRooms.map(room => (
                    <tr key={room.id}>
                      <td>{room.room_code}</td>
                      <td>{room.room_name}</td>
                      <td>{room.type}</td>
                      <td>{room.capacity}</td>
                      <td>{room.location}</td>
                      <td>{room.equipment}</td>
                      <td>
                        <span className={`status-badge status-${room.status.toLowerCase().replace(' ', '')}`}>
                          {room.status}
                        </span>
                      </td>
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
      case 'lab':
        return (
          <div className="module-content">
            <h2>Laboratory Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Lab Code</th>
                    <th>Lab Name</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    <th>Location</th>
                    <th>Equipment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockLabs.map(lab => (
                    <tr key={lab.id}>
                      <td>{lab.lab_code}</td>
                      <td>{lab.lab_name}</td>
                      <td>{lab.type}</td>
                      <td>{lab.capacity}</td>
                      <td>{lab.location}</td>
                      <td>{lab.equipment}</td>
                      <td>
                        <span className={`status-badge status-${lab.status.toLowerCase().replace(' ', '')}`}>
                          {lab.status}
                        </span>
                      </td>
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
      case 'faculty':
        return (
          <div className="module-content">
            <h2>Faculty Management</h2>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Faculty ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Specialization</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockFaculty.map(faculty => (
                    <tr key={faculty.id}>
                      <td>{faculty.faculty_id}</td>
                      <td>{faculty.name}</td>
                      <td>{faculty.department}</td>
                      <td>{faculty.specialization}</td>
                      <td>{faculty.email}</td>
                      <td>{faculty.phone}</td>
                      <td>
                        <span className={`status-badge status-${faculty.status.toLowerCase()}`}>
                          {faculty.status}
                        </span>
                      </td>
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
          <h3>Scheduling Module</h3>
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'course' ? 'active' : ''}`}
              onClick={() => setActiveTab('course')}
            >
              Course
            </button>
            <button
              className={`tab-btn ${activeTab === 'section' ? 'active' : ''}`}
              onClick={() => setActiveTab('section')}
            >
              Section
            </button>
            <button
              className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`}
              onClick={() => setActiveTab('rooms')}
            >
              Rooms
            </button>
            <button
              className={`tab-btn ${activeTab === 'lab' ? 'active' : ''}`}
              onClick={() => setActiveTab('lab')}
            >
              Lab
            </button>
            <button
              className={`tab-btn ${activeTab === 'faculty' ? 'active' : ''}`}
              onClick={() => setActiveTab('faculty')}
            >
              Faculty
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

export default SchedulingModule