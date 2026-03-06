# Student Dashboard - Architecture & Component Diagram

## Component Hierarchy

```
App.jsx
└── StudentDashboard.jsx (Main Container)
    ├── FilterPanel.jsx (Left Sidebar)
    │   ├── Gender Checkboxes
    │   ├── Student Status Checkboxes
    │   ├── Year Level Checkboxes
    │   ├── Enrollment Status Checkboxes
    │   ├── GPA Range Slider
    │   ├── Attendance Range Slider
    │   ├── Violations Range Slider
    │   └── Reset Button
    │
    └── Main Content Area
        ├── SearchBar.jsx
        │   ├── Search Input
        │   ├── Search Icon
        │   └── Clear Button
        │
        ├── View Controls
        │   ├── Table View Button
        │   └── Grid View Button
        │
        ├── Results Info
        │   └── Student Count Display
        │
        └── Dynamic Content
            ├── StudentTable.jsx (when viewMode === 'table')
            │   ├── Table Headers (Sortable)
            │   └── Table Rows
            │       ├── Student Number
            │       ├── Name
            │       ├── Email
            │       ├── Program
            │       ├── Year Level
            │       ├── Gender
            │       ├── GPA (Color-coded)
            │       ├── Attendance (Color-coded)
            │       ├── Violations (Color-coded)
            │       ├── Status (Color-coded)
            │       └── Action Buttons
            │
            └── StudentGrid.jsx (when viewMode === 'grid')
                └── Student Cards
                    ├── Card Header (Name + Status)
                    ├── Card Body (Info + Stats)
                    └── Card Footer (Action Button)
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      StudentDashboard State                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ students: [...]                                          │  │
│  │ searchTerm: ""                                           │  │
│  │ filters: { gender, identification, year, ... }          │  │
│  │ sortConfig: { field, direction }                         │  │
│  │ viewMode: "table" | "grid"                              │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    useMemo Filtering Logic
                              ↓
        ┌─────────────────────────────────────────────────┐
        │     Filtered & Sorted Students Array           │
        │  (Real-time updates as user modifies filters)   │
        └─────────────────────────────────────────────────┘
                              ↓
            ┌────────────────────────────────────┐
            │   View Mode Toggle (Table/Grid)    │
            └────────────────────────────────────┘
                        ↓          ↓
                   ┌────────────────────┐
                   │                    │
            StudentTable.jsx    StudentGrid.jsx
                (Render)           (Render)
                   │                    │
              Display Table       Display Cards
```

## Filter Logic Flow

```
Raw Students List
      ↓
    Search Filter (searchTerm)
      ↓
    Gender Filter
      ↓
    Student Status Filter
      ↓
    Year Level Filter
      ↓
    Enrollment Status Filter
      ↓
    GPA Range Filter
      ↓
    Attendance Range Filter
      ↓
    Violations Count Filter
      ↓
    Sort by Selected Field
      ↓
Final Filtered & Sorted Results
```

## File Structure Tree

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── StudentDashboard.jsx
│   │   │   ├── Main container component
│   │   │   ├── State management (students, filters, search, sort)
│   │   │   ├── Filtering & sorting logic (useMemo)
│   │   │   ├── Mock data
│   │   │   ├── Grid view component (StudentGrid)
│   │   │   └── Props:
│   │   │       └── onFilterChange, onSort, handleReset
│   │   │
│   │   ├── FilterPanel.jsx
│   │   │   ├── Collapsible filter sections
│   │   │   ├── Multi-select checkboxes
│   │   │   ├── Range sliders
│   │   │   ├── Reset button
│   │   │   ├── Active filter counter
│   │   │   └── Props:
│   │   │       ├── filters
│   │   │       ├── onFilterChange
│   │   │       └── onReset
│   │   │
│   │   ├── StudentTable.jsx
│   │   │   ├── Sortable table component
│   │   │   ├── Color-coded badges
│   │   │   ├── Action buttons
│   │   │   ├── Helper functions for badge colors
│   │   │   └── Props:
│   │   │       ├── students
│   │   │       ├── sortConfig
│   │   │       └── onSort
│   │   │
│   │   ├── SearchBar.jsx
│   │   │   ├── Search input component
│   │   │   ├── Clear button
│   │   │   └── Props:
│   │   │       ├── searchTerm
│   │   │       ├── onSearchChange
│   │   │       └── placeholder
│   │   │
│   │   └── DASHBOARD_README.md
│   │       └── Detailed documentation
│   │
│   ├── styles/
│   │   ├── StudentDashboard.css
│   │   │   ├── Layout & grid system
│   │   │   ├── Header styling
│   │   │   ├── Card layouts
│   │   │   └── Responsive breakpoints
│   │   │
│   │   ├── StudentTable.css
│   │   │   ├── Table styling
│   │   │   ├── Sortable headers
│   │   │   ├── Badge colors
│   │   │   ├── Hover effects
│   │   │   └── Responsive behavior
│   │   │
│   │   ├── FilterPanel.css
│   │   │   ├── Sidebar styling
│   │   │   ├── Collapsible sections
│   │   │   ├── Checkbox styling
│   │   │   ├── Range input styling
│   │   │   └── Button styling
│   │   │
│   │   └── SearchBar.css
│   │       ├── Input styling
│   │       ├── Icon positioning
│   │       └── Focus states
│   │
│   ├── App.jsx
│   │   └── Routes StudentDashboard
│   │
│   ├── App.css
│   │   └── Root styling
│   │
│   ├── main.jsx
│   │   └── React entry point
│   │
│   └── index.css
│       └── Global styles
│
├── STUDENT_DASHBOARD_SUMMARY.md
│   └── Technical documentation
│
├── QUICK_START.md
│   └── Quick start guide
│
├── package.json
├── vite.config.js
└── README.md
```

## State Management

### StudentDashboard State Structure

```javascript
{
  // Core data
  students: [
    {
      student_id: 1,
      student_number: "STU-2024-001",
      first_name: "John",
      middle_name: "Patrick",
      last_name: "Doe",
      email: "john.doe@student.edu",
      phone_number: "09123456789",
      gender: "Male",
      student_identification: "Regular",
      curriculum: "BS Computer Science",
      program_name: "BS Computer Science",
      year_level: 2,
      semester: 2,
      academic_year: "2025-2026",
      gpa: 3.75,
      violations_count: 0,
      attendance_rate: 95,
      status: "Enrolled"
    }
    // ... more students
  ],

  // User input
  searchTerm: "",

  // Filter state
  filters: {
    gender: [],                    // Multi-select
    student_identification: [],    // Multi-select
    year_level: [],               // Multi-select
    status: [],                   // Multi-select
    gpa_min: 0,                   // Range
    gpa_max: 4.0,                 // Range
    violations_min: 0,            // Range
    violations_max: 10,           // Range
    attendance_min: 0,            // Range
    attendance_max: 100           // Range
  },

  // Sort configuration
  sortConfig: {
    field: "student_number",      // Current sort field
    direction: "asc"              // "asc" or "desc"
  },

  // View preference
  viewMode: "table"               // "table" or "grid"
}
```

## CSS Grid Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    Dashboard Header                         │
└─────────────────────────────────────────────────────────────┘
┌───────────────────────────────────────────────────────────────┐
│ Filters │                                                       │
│ Sidebar │              Main Content Area                       │
│         │ ┌─────────────────────────────────────────────────┐ │
│ 280px   │ │ Search Bar              View Mode Toggle        │ │
│         │ │ ┌────────────────────────────────────────────┐ │ │
│         │ │ │ [Search...] ✕                  [≡] [⊞]     │ │ │
│         │ │ └────────────────────────────────────────────┘ │ │
│         │ │                                                 │ │
│         │ │ Results: Showing 4 students                    │ │
│         │ │ ┌──────────────────────────────────────────┐ │ │
│         │ │ │ Student Table or Grid                    │ │ │
│         │ │ │ (Dynamic content based on viewMode)     │ │ │
│         │ │ └──────────────────────────────────────────┘ │ │
│         │ └─────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────┘
```

## Responsive Design Breakpoints

```
Desktop (1024px+)
│
├── Layout: grid-template-columns: 280px 1fr
├── Sidebar: sticky position
├── Table: All columns visible
└── Grid: 3-4 columns

Tablet (768-1023px)
│
├── Layout: Single column (filters become modal/collapsible)
├── Sidebar: Position relative (below search)
├── Table: 70% columns visible
└── Grid: 2 columns

Mobile (<768px)
│
├── Layout: Full width, stacked
├── Sidebar: Inline filters
├── Table: 40% columns visible (hidden: email, year, gender)
└── Grid: 1 column full width
```

## Color Palette

```
Primary Colors:
├── Purple: #667eea
├── Dark Purple: #764ba2
└── Light Purple: rgba(102, 126, 234, 0.1)

Secondary Colors:
├── Blue: #3498db
├── Dark Blue: #2980b9
└── Light Blue: #e8f4f8

Status Colors:
├── Green (Success): #2ecc71, #d4edda
├── Orange (Warning): #f39c12, #fff3cd
├── Purple (Info): #9b59b6
└── Red (Danger): #e74c3c, #f8d7da

Neutral Colors:
├── Dark Gray: #2c3e50
├── Medium Gray: #34495e
├── Light Gray: #95a5a6
├── Lighter Gray: #bdc3c7
├── Very Light: #ecf0f1
├── Lightest: #f8f9fa
└── White: #ffffff
```

## Performance Considerations

```
Optimization Techniques Used:
├── useMemo for filtering/sorting
├── memoized computed values
├── CSS animations (hardware accelerated)
├── Event delegation
├── Responsive images
├── Minimal re-renders
└── Client-side filtering (instant feedback)

For Large Datasets (1000+ students):
├── Implement pagination
├── Add virtual scrolling
├── Consider server-side filtering
├── Add loading states
└── Implement debouncing on search
```

## Integration Points

```
Backend API Integration:
│
├── Endpoint: GET /api/students
├── Response Format: Array of student objects
├── Error Handling: Try-catch in fetchStudents
├── Loading State: Add spinner while fetching
├── Caching: Consider useCallback for stable refs
└── Real-time Updates: Consider WebSocket integration

Authentication:
├── JWT token in Authorization header
├── Token refresh on 401 response
└── Logout on 403 response

Required Student Data Fields:
├── student_id (unique identifier)
├── student_number (human-readable ID)
├── first_name, middle_name, last_name
├── email, phone_number
├── gender
├── student_identification
├── program_name, curriculum
├── year_level, semester, academic_year
├── gpa
├── violations_count
├── attendance_rate
└── status
```

This comprehensive architecture ensures maintainability, scalability, and ease of future enhancements!
