import '../styles/FacultyFilterPanel.css'

function FacultyFilterPanel({ filters, onFilterChange, onReset }) {
  const handleCheckboxChange = (filterType, value) => {
    const currentValues = filters[filterType] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value]

    onFilterChange({
      ...filters,
      [filterType]: newValues
    })
  }

  const handleRangeChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: parseInt(value) || 0
    })
  }

  const filterOptions = {
    gender: ['Male', 'Female'],
    department: ['Computer Science', 'Information Technology', 'Mathematics', 'Engineering'],
    position: ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer', 'Instructor'],
    employment_status: ['Full-time', 'Part-time', 'Contractual'],
    status: ['Active', 'On Leave', 'Inactive']
  }

  return (
    <div className="faculty-filter-panel">
      <div className="filter-section">
        <h4>Gender</h4>
        <div className="checkbox-group">
          {filterOptions.gender.map(gender => (
            <label key={gender} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.gender.includes(gender)}
                onChange={() => handleCheckboxChange('gender', gender)}
              />
              <span className="checkmark"></span>
              {gender}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Department</h4>
        <div className="checkbox-group">
          {filterOptions.department.map(dept => (
            <label key={dept} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.department.includes(dept)}
                onChange={() => handleCheckboxChange('department', dept)}
              />
              <span className="checkmark"></span>
              {dept}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Position</h4>
        <div className="checkbox-group">
          {filterOptions.position.map(pos => (
            <label key={pos} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.position.includes(pos)}
                onChange={() => handleCheckboxChange('position', pos)}
              />
              <span className="checkmark"></span>
              {pos}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Employment Status</h4>
        <div className="checkbox-group">
          {filterOptions.employment_status.map(status => (
            <label key={status} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.employment_status.includes(status)}
                onChange={() => handleCheckboxChange('employment_status', status)}
              />
              <span className="checkmark"></span>
              {status}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Faculty Status</h4>
        <div className="checkbox-group">
          {filterOptions.status.map(status => (
            <label key={status} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.status.includes(status)}
                onChange={() => handleCheckboxChange('status', status)}
              />
              <span className="checkmark"></span>
              {status}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Years of Service</h4>
        <div className="range-inputs">
          <div className="range-group">
            <label>Min:</label>
            <input
              type="number"
              min="0"
              max="50"
              value={filters.years_of_service_min}
              onChange={(e) => handleRangeChange('years_of_service_min', e.target.value)}
            />
          </div>
          <div className="range-group">
            <label>Max:</label>
            <input
              type="number"
              min="0"
              max="50"
              value={filters.years_of_service_max}
              onChange={(e) => handleRangeChange('years_of_service_max', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Teaching Load (hours)</h4>
        <div className="range-inputs">
          <div className="range-group">
            <label>Min:</label>
            <input
              type="number"
              min="0"
              max="30"
              value={filters.teaching_load_min}
              onChange={(e) => handleRangeChange('teaching_load_min', e.target.value)}
            />
          </div>
          <div className="range-group">
            <label>Max:</label>
            <input
              type="number"
              min="0"
              max="30"
              value={filters.teaching_load_max}
              onChange={(e) => handleRangeChange('teaching_load_max', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Research Projects</h4>
        <div className="range-inputs">
          <div className="range-group">
            <label>Min:</label>
            <input
              type="number"
              min="0"
              max="50"
              value={filters.research_projects_min}
              onChange={(e) => handleRangeChange('research_projects_min', e.target.value)}
            />
          </div>
          <div className="range-group">
            <label>Max:</label>
            <input
              type="number"
              min="0"
              max="50"
              value={filters.research_projects_max}
              onChange={(e) => handleRangeChange('research_projects_max', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4>Publications</h4>
        <div className="range-inputs">
          <div className="range-group">
            <label>Min:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={filters.publications_min}
              onChange={(e) => handleRangeChange('publications_min', e.target.value)}
            />
          </div>
          <div className="range-group">
            <label>Max:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={filters.publications_max}
              onChange={(e) => handleRangeChange('publications_max', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button className="reset-filters-btn" onClick={onReset}>
          Reset All Filters
        </button>
      </div>
    </div>
  )
}

export default FacultyFilterPanel