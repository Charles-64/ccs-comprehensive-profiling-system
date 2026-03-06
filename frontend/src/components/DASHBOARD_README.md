# Student Dashboard

A comprehensive React-based dashboard for viewing, searching, and filtering students in the CCS (Comprehensive Profiling System).

## Features

### 1. **Search Functionality**
- Real-time search across multiple fields:
  - Student number
  - First name / Last name
  - Email address
- Instant results as you type
- Clear button to quickly reset search

### 2. **Advanced Filtering**
Multiple filter categories for comprehensive student discovery:

#### Gender Filter
- Male
- Female
- Prefer not to say

#### Student Status Filter
- Regular
- Irregular
- Graduated
- On Leave
- Dropped

#### Year Level Filter
- Year 1, 2, 3, 4

#### Enrollment Status Filter
- Enrolled
- On Leave
- Graduated
- Dropped

#### Academic Performance Filters
- **GPA Range**: Filter students by grade point average (0.0 - 4.0)
- **Attendance Rate**: Filter by attendance percentage (0% - 100%)
- **Violations Count**: Filter by number of disciplinary violations (0 - 10+)

### 3. **View Modes**
Toggle between two display modes:

#### Table View
- Sortable columns by clicking headers:
  - Student number
  - Year level
  - GPA
  - Attendance rate
  - Violations count
- Color-coded badges for quick status recognition
- Action buttons (View Profile, Edit)
- Responsive design for smaller screens

#### Grid View
- Card-based layout
- Visual statistics display (GPA, Attendance, Violations)
- Quick profile view button
- Better for browsing

### 4. **Smart Sorting**
- Click any sortable column header to sort
- Toggle between ascending and descending order
- Visual indicators show current sort status

### 5. **Color-Coded Metrics**

**GPA Levels:**
- Excellent (3.75+) - Green
- Very Good (3.5-3.74) - Light Green
- Good (3.0-3.49) - Yellow
- Fair (2.0-2.99) - Orange
- Low (Below 2.0) - Red

**Attendance Levels:**
- Excellent (95%+) - Green
- Good (90-94%) - Light Green
- Fair (80-89%) - Yellow
- Poor (Below 80%) - Red

**Violation Levels:**
- None - Green
- Minor (1 violation) - Light Green
- Moderate (2-3 violations) - Yellow
- Major (4+ violations) - Red

**Student Status:**
- Enrolled - Green
- On Leave - Orange
- Graduated - Purple
- Dropped - Red

## Component Structure

```
StudentDashboard.jsx (Main Container)
├── FilterPanel.jsx (Left Sidebar)
│   ├── Gender Filter
│   ├── Student Status Filter
│   ├── Year Level Filter
│   ├── Enrollment Status Filter
│   ├── Academic Performance Filters
│   └── Reset Button
├── SearchBar.jsx (Top Search)
└── StudentTable.jsx or StudentGrid.jsx (Main Content)
    └── Sortable Table with Action Buttons
    └── Card Grid with Stats
```

## Styling

The dashboard uses a modern, professional design with:
- **Color Scheme**: 
  - Primary: #667eea (Purple)
  - Secondary: #764ba2 (Dark Purple)
  - Accent: #3498db (Blue)
  - Danger: #e74c3c (Red)
  
- **Typography**: System font stack for better performance
- **Spacing**: Consistent 8px grid system
- **Shadows & Effects**: Subtle elevation and transitions

## Responsive Design

Fully responsive design that adapts to:
- **Desktop** (1024px+): Full sidebar filter panel
- **Tablet** (768-1023px): Stacked layout with collapsible filters
- **Mobile** (Below 768px): Full-width layout, hidden non-essential columns

## Mock Data

Currently uses mock data with 4 sample students. To integrate with backend:

### API Integration Steps:
1. Replace mock data in `StudentDashboard.jsx` with API call
2. Create service file for API calls:
   ```javascript
   // services/studentService.js
   export const fetchStudents = async () => {
     const response = await fetch('/api/students');
     return response.json();
   }
   ```
3. Update `useEffect` to fetch data on component mount

### Expected API Response Format:
```json
{
  "data": [
    {
      "student_id": 1,
      "student_number": "STU-2024-001",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@student.edu",
      "phone_number": "09123456789",
      "gender": "Male",
      "student_identification": "Regular",
      "curriculum": "BS Computer Science",
      "program_name": "BS Computer Science",
      "year_level": 2,
      "semester": 2,
      "academic_year": "2025-2026",
      "gpa": 3.75,
      "violations_count": 0,
      "attendance_rate": 95,
      "status": "Enrolled"
    }
  ]
}
```

## File Organization

```
src/
├── components/
│   ├── StudentDashboard.jsx
│   ├── StudentTable.jsx
│   ├── FilterPanel.jsx
│   └── SearchBar.jsx
├── styles/
│   ├── StudentDashboard.css
│   ├── StudentTable.css
│   ├── FilterPanel.css
│   └── SearchBar.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Future Enhancements

- [ ] Backend API integration
- [ ] Export to CSV/PDF functionality
- [ ] Bulk actions (assign counselor, send email)
- [ ] Student profile modal/detail view
- [ ] Advanced search with saved filters
- [ ] Real-time data updates with WebSocket
- [ ] Dashboard statistics and analytics
- [ ] Print functionality
- [ ] Dark mode support
- [ ] Multi-select for bulk operations

## Dependencies

- React 19.2.0
- Vite 7.3.1
- CSS3 with Grid and Flexbox

## Performance

- Client-side filtering for instant feedback
- Memoized computed values with `useMemo`
- CSS animations for smooth transitions
- Responsive images and optimized styles

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where applicable
- Color contrast compliance
- Focus indicators for keyboard users
