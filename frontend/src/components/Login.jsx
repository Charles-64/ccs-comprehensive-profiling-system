import { useState } from 'react'
import '../styles/Login.css'

// Default student credentials (stored locally)
const DEFAULT_CREDENTIALS = {
  'STU-2024-001': 'password123',
  'STU-2024-002': 'password123',
  'STU-2024-003': 'password123',
  'STU-2024-004': 'password123'
}

function Login({ onLogin }) {
  const [studentNumber, setStudentNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Simulate API call - will work with real backend when ready
      await new Promise(resolve => setTimeout(resolve, 500))

      // Validate credentials (mock validation)
      if (!studentNumber.trim()) {
        setError('Student number is required')
        setLoading(false)
        return
      }

      if (!password.trim()) {
        setError('Password is required')
        setLoading(false)
        return
      }

      // Check credentials against default list
      if (DEFAULT_CREDENTIALS[studentNumber] === password) {
        // Store in localStorage for persistence
        const studentData = {
          studentNumber,
          loginTime: new Date().toISOString(),
          isAuthenticated: true
        }
        localStorage.setItem('student_session', JSON.stringify(studentData))
        
        onLogin(studentData)
      } else {
        setError('Invalid student number or password')
        setLoading(false)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const handleDemoLogin = () => {
    const demoStudent = {
      studentNumber: 'STU-2024-001',
      loginTime: new Date().toISOString(),
      isAuthenticated: true
    }
    localStorage.setItem('student_session', JSON.stringify(demoStudent))
    onLogin(demoStudent)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Student Portal</h1>
          <p>Login to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="studentNumber">Student Number</label>
            <input
              type="text"
              id="studentNumber"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              placeholder="STU-2024-001"
              disabled={loading}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn-login"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-divider">
          <span>Demo</span>
        </div>

        <button 
          type="button"
          className="btn-demo"
          onClick={handleDemoLogin}
          disabled={loading}
        >
          Try Demo Account
        </button>

        <div className="login-footer">
          <p><strong>Default Credentials:</strong></p>
          <p>Student: <strong>STU-2024-001</strong></p>
          <p>Password: <strong>password123</strong></p>
          <p style={{ marginTop: '12px', fontSize: '0.75rem' }}>
            (Also works for STU-2024-002, STU-2024-003, STU-2024-004)
          </p>
          <p className="login-note">
            This is a local authentication system. In production, this will integrate with your backend API.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
