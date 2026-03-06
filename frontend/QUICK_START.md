# Quick Start Guide - Student Dashboard

## Running the Dashboard

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation & Running

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

## Features at a Glance

### Left Sidebar - Filters
- **Gender**: Filter by gender (Male/Female/Prefer not to say)
- **Student Status**: Filter by identification type
- **Year Level**: Filter by academic year (1-4)
- **Enrollment Status**: Filter by current enrollment state
- **Academic Performance**: 
  - GPA range slider
  - Attendance rate slider
  - Violations count slider
- **Reset All**: Clear all filters

### Top Search Bar
- Search students by:
  - Student number (STU-XXXX-XXX)
  - Name (first or last)
  - Email address
- Real-time results
- Clear button to reset

### Main Content Area

#### View Toggle (Top Right)
- **≡ Table**: Traditional table view with sortable columns
- **⊞ Grid**: Card-based grid view

#### Table View Features
- Click column headers to sort
- See indicator (▲▼) for current sort
- Color-coded badges for quick assessment
- Action buttons: View Profile, Edit
- Responsive (hides columns on mobile)

#### Grid View Features
- Card layout showing key info
- At-a-glance statistics (GPA, Attendance, Violations)
- Quick profile access

#### Results Counter
- Shows number of students matching current filters

## Color Code Legend

### GPA Badges
🟢 **Excellent**: 3.75+ GPA
🟢 **Very Good**: 3.5-3.74 GPA
🟡 **Good**: 3.0-3.49 GPA
🟠 **Fair**: 2.0-2.99 GPA
🔴 **Low**: Below 2.0 GPA

### Attendance Badges
🟢 **Excellent**: 95%+ attendance
🟢 **Good**: 90-94% attendance
🟡 **Fair**: 80-89% attendance
🔴 **Poor**: Below 80% attendance

### Violations Badges
🟢 **None**: 0 violations
🟢 **Minor**: 1 violation
🟡 **Moderate**: 2-3 violations
🔴 **Major**: 4+ violations

### Student Status Badges
🟢 **Enrolled**: Active student
🟠 **On Leave**: Temporary absence
🟣 **Graduated**: Completed program
🔴 **Dropped**: No longer enrolled

## Example Workflows

### Find Top Performers
1. Open Academic Performance filters
2. Set GPA Range: 3.5 - 4.0
3. Set Attendance: 90 - 100%
4. Set Violations: 0 - 0
5. Click on any student to view details

### Find Students Needing Support
1. Set GPA Range: 0 - 3.0
2. Set Attendance: 0 - 85%
3. View results in table for detailed info

### Find Students with Disciplinary Issues
1. Violations Count: 2 - 10
2. View and sort by violations

### Search Specific Student
1. Use search bar to type student number or name
2. Results update instantly
3. View profile or edit information

## Mock Data

The dashboard includes 4 sample students for testing:

| Student # | Name | Program | Year | GPA | Status |
|-----------|------|---------|------|-----|--------|
| STU-2024-001 | John Doe | BS Computer Science | 2 | 3.75 | Enrolled |
| STU-2024-002 | Maria Santos | BS Information Technology | 3 | 3.92 | Enrolled |
| STU-2024-003 | Juan Cruz | BS Computer Science | 1 | 3.45 | Enrolled |
| STU-2024-004 | Anna Reyes | BS Engineering | 2 | 3.60 | On Leave |

## Integrating with Backend

### Step 1: Create API Service
Create `src/services/studentService.js`:

```javascript
const API_BASE = 'http://localhost:8000/api'; // Adjust URL as needed

export const fetchStudents = async () => {
  try {
    const response = await fetch(`${API_BASE}/students`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    return [];
  }
};
```

### Step 2: Update StudentDashboard.jsx
Add to imports:
```javascript
import { useEffect } from 'react'
import { fetchStudents } from '../services/studentService'
```

Add inside component (after state declarations):
```javascript
useEffect(() => {
  const loadStudents = async () => {
    const data = await fetchStudents();
    if (data.length > 0) {
      setStudents(data);
    }
  };
  loadStudents();
}, []);
```

### Step 3: Ensure Backend Returns Correct Format
The API should return an array of student objects:

```json
[
  {
    "student_id": 1,
    "student_number": "STU-2024-001",
    "first_name": "John",
    "middle_name": "Patrick",
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
```

## Troubleshooting

### Dashboard not loading?
- Check browser console for errors (F12)
- Ensure all component files are in `src/components/`
- Verify all CSS files are in `src/styles/`
- Check that App.jsx imports StudentDashboard

### Search not working?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `npm run dev`)

### Filters not working?
- Check that FilterPanel.jsx is properly imported
- Verify filter state is being updated correctly
- Check browser console for JavaScript errors

### Styling looks wrong?
- Ensure all CSS files are imported correctly
- Check that colors match the CSS files
- Clear browser cache and hard refresh (Ctrl+Shift+R)

## Next Steps

1. **Review the dashboard** - Play with all filters and search
2. **Customize styling** - Adjust colors in CSS files to match your brand
3. **Integrate with backend** - Follow the API integration steps above
4. **Add more features** - Export, bulk actions, student profiles, etc.
5. **Optimize performance** - Add pagination for large datasets

## Files Created

```
frontend/
├── src/
│   ├── components/
│   │   ├── StudentDashboard.jsx       (Main component - 250 lines)
│   │   ├── StudentTable.jsx           (Table view - 80 lines)
│   │   ├── FilterPanel.jsx            (Filters - 170 lines)
│   │   ├── SearchBar.jsx              (Search - 25 lines)
│   │   └── DASHBOARD_README.md        (Detailed docs)
│   ├── styles/
│   │   ├── StudentDashboard.css       (Main styles - 240 lines)
│   │   ├── StudentTable.css           (Table styles - 280 lines)
│   │   ├── FilterPanel.css            (Filter styles - 200 lines)
│   │   └── SearchBar.css              (Search styles - 65 lines)
│   ├── App.jsx                        (Updated)
│   ├── App.css                        (Updated)
│   └── index.css                      (Updated)
├── STUDENT_DASHBOARD_SUMMARY.md       (Technical summary)
└── QUICK_START.md                     (This file)
```

## Support & Documentation

- **Detailed Component Guide**: See `DASHBOARD_README.md`
- **Technical Summary**: See `STUDENT_DASHBOARD_SUMMARY.md`
- **Component Code**: Review individual `.jsx` files for comments

## Browser DevTools Tips

### Inspect Elements
- Right-click → Inspect Element
- Check computed styles and DOM hierarchy

### Network Tab
- Monitor API calls when integrated with backend
- Check response formats and error codes

### Console
- Look for JavaScript errors
- Check API request/response logs

## Performance Tips

- Filters are applied client-side for instant feedback
- For large datasets (1000+ students), consider adding pagination
- Use browser DevTools Performance tab to profile if needed

## Customization Examples

### Change primary color from purple to blue:
1. Open `StudentDashboard.css`
2. Replace `#667eea` with your blue color
3. Replace `#764ba2` with matching dark blue

### Add more filter options:
1. Open `FilterPanel.jsx`
2. Add new filter section following the existing pattern
3. Update filter state in `StudentDashboard.jsx`

### Modify badge colors:
1. Open `StudentTable.css`
2. Find `.gpa-badge.gpa-excellent` etc.
3. Change the background and color properties

Enjoy! 🎉
