import '../styles/StudentTable.css'

function StudentTable({ students, sortConfig, onSort }) {
  const SortIcon = ({ field }) => {
    if (sortConfig.field !== field) return <span className="sort-icon">⇅</span>
    return sortConfig.direction === 'asc' ? 
      <span className="sort-icon active">▲</span> : 
      <span className="sort-icon active">▼</span>
  }

  const handleHeaderClick = (field) => {
    onSort(field)
  }

  return (
    <div className="table-wrapper">
      <table className="students-table">
        <colgroup>
          <col className="col-student-number" />
          <col className="col-name" />
          <col className="col-email" />
          <col className="col-program" />
          <col className="col-year" />
          <col className="col-gender" />
          <col className="col-gpa" />
          <col className="col-attendance" />
          <col className="col-violations" />
          <col className="col-status" />
          <col className="col-actions" />
        </colgroup>
        <thead>
          <tr>
            <th onClick={() => handleHeaderClick('student_number')} className="sortable">
              Student # <SortIcon field="student_number" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Program</th>
            <th onClick={() => handleHeaderClick('year_level')} className="sortable">
              Year <SortIcon field="year_level" />
            </th>
            <th>Gender</th>
            <th onClick={() => handleHeaderClick('gpa')} className="sortable">
              GPA <SortIcon field="gpa" />
            </th>
            <th onClick={() => handleHeaderClick('attendance_rate')} className="sortable">
              Attendance <SortIcon field="attendance_rate" />
            </th>
            <th onClick={() => handleHeaderClick('violations_count')} className="sortable">
              Violations <SortIcon field="violations_count" />
            </th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.student_id}>
              <td className="student-number">
                <span className="badge">{student.student_number}</span>
              </td>
              <td className="student-name">
                {student.first_name} {student.middle_name ? `${student.middle_name[0]}.` : ''} {student.last_name}
              </td>
              <td className="email">{student.email}</td>
              <td className="program">{student.program_name}</td>
              <td className="year-level">Year {student.year_level}</td>
              <td className="gender">{student.gender}</td>
              <td className="gpa">
                <span className={`gpa-badge gpa-${getGpaLevel(student.gpa)}`}>
                  {student.gpa.toFixed(2)}
                </span>
              </td>
              <td className="attendance">
                <span className={`attendance-badge attendance-${getAttendanceLevel(student.attendance_rate)}`}>
                  {student.attendance_rate}%
                </span>
              </td>
              <td className="violations">
                <span className={`violations-badge violations-${getViolationLevel(student.violations_count)}`}>
                  {student.violations_count}
                </span>
              </td>
              <td className="status">
                <span className={`status-badge status-${student.status.toLowerCase().replace(' ', '-')}`}>
                  {student.status}
                </span>
              </td>
              <td className="actions">
                <button className="action-btn view-btn" title="View Profile">
                  👁 View
                </button>
                <button className="action-btn edit-btn" title="Edit">
                  ✎ Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Helper functions to determine visual levels
function getGpaLevel(gpa) {
  if (gpa >= 3.75) return 'excellent'
  if (gpa >= 3.5) return 'very-good'
  if (gpa >= 3.0) return 'good'
  if (gpa >= 2.0) return 'fair'
  return 'low'
}

function getAttendanceLevel(rate) {
  if (rate >= 95) return 'excellent'
  if (rate >= 90) return 'good'
  if (rate >= 80) return 'fair'
  return 'poor'
}

function getViolationLevel(count) {
  if (count === 0) return 'none'
  if (count === 1) return 'minor'
  if (count <= 3) return 'moderate'
  return 'major'
}

export default StudentTable
