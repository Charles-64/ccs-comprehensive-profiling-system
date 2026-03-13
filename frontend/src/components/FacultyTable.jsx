import '../styles/FacultyTable.css'

function SortIcon({ direction }) {
  if (direction === 'asc') {
    return <span className="sort-icon">▲</span>
  } else if (direction === 'desc') {
    return <span className="sort-icon">▼</span>
  }
  return <span className="sort-icon">⇅</span>
}

function FacultyTable({ faculty, sortConfig, onSort }) {
  const handleHeaderClick = (field) => {
    onSort(field)
  }

  return (
    <div className="faculty-table-container">
      <table className="faculty-table">
        <colgroup>
          <col className="col-faculty-number" />
          <col className="col-name" />
          <col className="col-email" />
          <col className="col-department" />
          <col className="col-position" />
          <col className="col-specialization" />
          <col className="col-employment-status" />
          <col className="col-years-service" />
          <col className="col-teaching-load" />
          <col className="col-research-projects" />
          <col className="col-publications" />
          <col className="col-status" />
          <col className="col-actions" />
        </colgroup>
        <thead>
          <tr>
            <th onClick={() => handleHeaderClick('faculty_number')} className="sortable">
              Faculty Number
              <SortIcon direction={sortConfig.field === 'faculty_number' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('last_name')} className="sortable">
              Name
              <SortIcon direction={sortConfig.field === 'last_name' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('email')} className="sortable">
              Email
              <SortIcon direction={sortConfig.field === 'email' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('department')} className="sortable">
              Department
              <SortIcon direction={sortConfig.field === 'department' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('position')} className="sortable">
              Position
              <SortIcon direction={sortConfig.field === 'position' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('specialization')} className="sortable">
              Specialization
              <SortIcon direction={sortConfig.field === 'specialization' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('employment_status')} className="sortable">
              Employment Status
              <SortIcon direction={sortConfig.field === 'employment_status' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('years_of_service')} className="sortable">
              Years of Service
              <SortIcon direction={sortConfig.field === 'years_of_service' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('teaching_load')} className="sortable">
              Teaching Load (hrs)
              <SortIcon direction={sortConfig.field === 'teaching_load' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('research_projects')} className="sortable">
              Research Projects
              <SortIcon direction={sortConfig.field === 'research_projects' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('publications_count')} className="sortable">
              Publications
              <SortIcon direction={sortConfig.field === 'publications_count' ? sortConfig.direction : null} />
            </th>
            <th onClick={() => handleHeaderClick('status')} className="sortable">
              Status
              <SortIcon direction={sortConfig.field === 'status' ? sortConfig.direction : null} />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(facultyMember => (
            <tr key={facultyMember.faculty_id}>
              <td className="faculty-number">{facultyMember.faculty_number}</td>
              <td className="name">
                {facultyMember.first_name} {facultyMember.middle_name} {facultyMember.last_name}
              </td>
              <td className="email">{facultyMember.email}</td>
              <td className="department">{facultyMember.department}</td>
              <td className="position">{facultyMember.position}</td>
              <td className="specialization">{facultyMember.specialization}</td>
              <td className="employment-status">
                <span className={`status-badge status-${facultyMember.employment_status.toLowerCase().replace(' ', '-')}`}>
                  {facultyMember.employment_status}
                </span>
              </td>
              <td className="years-service">{facultyMember.years_of_service}</td>
              <td className="teaching-load">{facultyMember.teaching_load}</td>
              <td className="research-projects">{facultyMember.research_projects}</td>
              <td className="publications">{facultyMember.publications_count}</td>
              <td className="status">
                <span className={`status-badge status-${facultyMember.status.toLowerCase().replace(' ', '-')}`}>
                  {facultyMember.status}
                </span>
              </td>
              <td className="actions">
                <button className="action-btn view-btn" title="View Profile">
                  👁️
                </button>
                <button className="action-btn edit-btn" title="Edit">
                  ✏️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultyTable