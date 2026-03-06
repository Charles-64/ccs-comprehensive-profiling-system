# Default Student Login Credentials

## 🔐 Default Credentials (Stored in localStorage)

All default student accounts use the same password:

### Student Accounts

| Student Number | Password | Student Name |
|---|---|---|
| **STU-2024-001** | **password123** | John Patrick Doe |
| **STU-2024-002** | **password123** | Maria Anna Santos |
| **STU-2024-003** | **password123** | Juan Carlos Cruz |
| **STU-2024-004** | **password123** | Anna Marie Reyes |

## 📍 Where Credentials Are Stored

Credentials are defined in `src/components/Login.jsx`:

```javascript
const DEFAULT_CREDENTIALS = {
  'STU-2024-001': 'password123',
  'STU-2024-002': 'password123',
  'STU-2024-003': 'password123',
  'STU-2024-004': 'password123'
}
```

## ✅ How to Log In

### Option 1: Use Demo Button
Click the **"Try Demo Account"** button to auto-login as `STU-2024-001`

### Option 2: Manual Login
Enter any of the credentials above:
- **Student Number**: `STU-2024-001` (or 002, 003, 004)
- **Password**: `password123`

## 💾 Session Storage

After successful login, the session is stored in browser localStorage:

```json
{
  "studentNumber": "STU-2024-001",
  "loginTime": "2025-03-06T10:30:00.000Z",
  "isAuthenticated": true
}
```

**Key**: `student_session`

To view or clear the session:
1. Open browser DevTools (F12)
2. Go to **Application** → **Local Storage**
3. Find the `http://localhost:5173` entry
4. Look for `student_session` key

## 🔄 Session Persistence

- ✅ Session **persists** after page refresh
- ✅ Session **persists** after browser restart
- ✅ Session **clears** when clicking Logout button
- ✅ Session **clears** when localStorage is manually deleted

## 🚀 Development vs Production

### Development (Current)
- Credentials stored in `Login.jsx`
- localStorage-based session management
- No backend API required
- Demo accounts available

### Production (When Integrated with Backend)
To switch to backend authentication:

1. Update `Login.jsx` to call your API:
```javascript
const response = await fetch('https://your-api.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ studentNumber, password })
})

const data = await response.json()
if (data.success) {
  const studentData = {
    studentNumber: data.student.id,
    loginTime: new Date().toISOString(),
    isAuthenticated: true,
    token: data.token // Add JWT token
  }
  localStorage.setItem('student_session', JSON.stringify(studentData))
  onLogin(studentData)
}
```

2. Remove the `DEFAULT_CREDENTIALS` object

3. Your Laravel backend will handle actual password validation

## 📋 Student Details

### STU-2024-001 (John Doe)
- **Program**: BS Computer Science
- **Year Level**: 2
- **GPA**: 3.75
- **Attendance**: 95%
- **Violations**: 0
- **Status**: Enrolled

### STU-2024-002 (Maria Santos)
- **Program**: BS Information Technology
- **Year Level**: 3
- **GPA**: 3.92
- **Attendance**: 98%
- **Violations**: 0
- **Status**: Enrolled

### STU-2024-003 (Juan Cruz)
- **Program**: BS Computer Science
- **Year Level**: 1
- **GPA**: 3.45
- **Attendance**: 87%
- **Violations**: 2
- **Status**: Enrolled

### STU-2024-004 (Anna Reyes)
- **Program**: BS Engineering
- **Year Level**: 2
- **GPA**: 3.60
- **Attendance**: 65%
- **Violations**: 1
- **Status**: On Leave

## 🔒 Security Notes

⚠️ **These are development credentials only:**
- Not for production use
- Password is hardcoded (should be hashed in production)
- No rate limiting or account lockout
- No encryption on localStorage (should use secure cookies in production)

## 🛠️ Troubleshooting

### Login Fails
- ✅ Verify student number is typed correctly (case-sensitive)
- ✅ Check password is exactly `password123`
- ✅ Make sure no extra spaces in inputs

### Lost Credentials
- Open browser DevTools (F12)
- Check **Application** → **Local Storage** for `student_session`
- If missing, just log in again

### Need to Add More Students
Edit `src/components/Login.jsx` and add to `DEFAULT_CREDENTIALS`:
```javascript
const DEFAULT_CREDENTIALS = {
  'STU-2024-001': 'password123',
  'STU-2024-002': 'password123',
  'STU-2024-003': 'password123',
  'STU-2024-004': 'password123',
  'STU-2024-005': 'password123',  // Add new student
}
```

Also update `src/components/StudentDashboard.jsx` to add the new student to the mock data.

## 📝 Reference Links

- `LOGIN_SYSTEM_SETUP.md` - Complete authentication setup guide
- `AUTHENTICATION_IMPLEMENTATION.md` - Implementation details
- `src/components/Login.jsx` - Login component source code
- `src/components/App.jsx` - Authentication flow logic

---

**Version**: 1.0  
**Last Updated**: March 6, 2026  
**Status**: ✅ Development Ready
