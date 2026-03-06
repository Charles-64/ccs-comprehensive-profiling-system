# Visual Feature Guide - Student Dashboard

## Dashboard Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 🎓 STUDENT DASHBOARD - Comprehensive student management and profiling    │
│ Subtitle: View, search, and manage all students with advanced filtering  │
└──────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ FILTERS SIDEBAR (280px)                                                     │
│                                                                             │
│ 🔍 FILTERS                                               [Active: 2]       │
│ ─────────────────────────────────────────────────────────────             │
│                                                                             │
│ ▼ GENDER                                                                   │
│   ☑ Male                                                                   │
│   ☐ Female                                                                 │
│   ☐ Prefer not to say                                                      │
│                                                                             │
│ ▶ STUDENT STATUS                                                           │
│   ☐ Regular       ☐ Irregular      ☐ Graduated                            │
│   ☐ On Leave      ☐ Dropped                                               │
│                                                                             │
│ ▼ YEAR LEVEL                                                               │
│   ☑ Year 1        ☐ Year 2         ☐ Year 3      ☐ Year 4                │
│                                                                             │
│ ▶ ENROLLMENT STATUS                                                        │
│   ☑ Enrolled      ☐ On Leave       ☐ Graduated   ☐ Dropped              │
│                                                                             │
│ ▼ ACADEMIC PERFORMANCE                                                     │
│   GPA Range:   [1.5] to [4.0]   → Showing: 1.5 - 4.0                    │
│   Attendance:  [85%] to [100%]  → Showing: 85% - 100%                   │
│   Violations:  [0] to [5]       → Showing: 0 - 5                         │
│                                                                             │
│ ┌──────────────────────────────────────────────────────────────┐         │
│ │ ↻ RESET ALL FILTERS                                          │         │
│ └──────────────────────────────────────────────────────────────┘         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ MAIN CONTENT                                                                 │
│                                                                              │
│ ┌────────────────────────────────────────┐  ┌──────────────────────┐      │
│ │ 🔍 Search by student #, name, email... │  │ ≡ Table   ⊞ Grid    │      │
│ └────────────────────────────────────────┘  └──────────────────────┘      │
│                                                                              │
│ Showing 45 students                                                         │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────┐  │
│ │ Student # ▼│ Name      │ Email          │ Program        │ GPA │...│  │
│ ├──────────────────────────────────────────────────────────────────────┤  │
│ │ STU-001   │ John Doe  │ john@mail.com  │ BS Computer... │ 3.75│...│  │
│ │           │           │                │                │ 🟢   │...│  │
│ ├──────────────────────────────────────────────────────────────────────┤  │
│ │ STU-002   │ Maria ... │ maria@mail.com │ BS IT          │ 3.92│...│  │
│ │           │           │                │                │ 🟢   │...│  │
│ ├──────────────────────────────────────────────────────────────────────┤  │
│ │ STU-003   │ Juan ...  │ juan@mail.com  │ BS Computer... │ 3.45│...│  │
│ │           │           │                │                │ 🟡   │...│  │
│ └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Filter Panel - Expanded View

```
FILTER PANEL
════════════════════════════════════════════════════════════════════

🔍 FILTERS                                                      [3]
────────────────────────────────────────────────────────────────

▼ GENDER
  ┌────────────────────────────────────┐
  │ ☑ Male         (Selected)          │
  │ ☐ Female                           │
  │ ☐ Prefer not to say                │
  └────────────────────────────────────┘

▼ STUDENT STATUS
  ┌────────────────────────────────────┐
  │ ☑ Regular      (Selected)          │
  │ ☐ Irregular                        │
  │ ☐ Graduated                        │
  │ ☐ On Leave                         │
  │ ☐ Dropped                          │
  └────────────────────────────────────┘

▼ ACADEMIC PERFORMANCE
  ┌────────────────────────────────────┐
  │ GPA Range                          │
  │ [3.0] to [4.0]                     │
  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
  │ Currently: 3.0 - 4.0               │
  │                                    │
  │ Attendance Rate (%)                │
  │ [75] to [100]                      │
  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
  │ Currently: 75% - 100%              │
  │                                    │
  │ Violations Count                   │
  │ [0] to [3]                         │
  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
  │ Currently: 0 - 3                   │
  └────────────────────────────────────┘

[↻ RESET ALL FILTERS]

════════════════════════════════════════════════════════════════════
```

## Table View - Detail

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Student # ▼ │ Name              │ Program            │ Year │ GPA  │ Status  │
├─────────────────────────────────────────────────────────────────────────────┤
│ STU-2024-001│ John Patrick Doe  │ BS Computer Sci.   │  2   │ 3.75 │ ✓       │
│             │ john.doe@mail.com │                    │      │ 🟢   │Enrolled │
├─────────────────────────────────────────────────────────────────────────────┤
│ STU-2024-002│ Maria Anna Santos │ BS Information...  │  3   │ 3.92 │ ✓       │
│             │ maria.santos@...  │                    │      │ 🟢   │Enrolled │
├─────────────────────────────────────────────────────────────────────────────┤
│ STU-2024-003│ Juan Carlos Cruz  │ BS Computer Sci.   │  1   │ 3.45 │ ✓       │
│             │ juan.cruz@mail.com│                    │      │ 🟡   │Enrolled │
├─────────────────────────────────────────────────────────────────────────────┤
│ STU-2024-004│ Anna Marie Reyes  │ BS Engineering     │  2   │ 3.60 │ ◐       │
│             │ anna.reyes@mail.. │                    │      │ 🟢   │On Leave │
└─────────────────────────────────────────────────────────────────────────────┘

Legend:
✓ = Enrolled    ◐ = On Leave    ○ = Graduated    ✗ = Dropped
🟢 = Excellent/Good   🟡 = Fair   🟠 = Poor   🔴 = Critical
```

## Badge Color Reference

### GPA Badges
```
┌─────────────────────────────────────────────────────┐
│ GPA Level Indicator                                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🟢 3.75+     "Excellent"   [█████████████████]    │
│  🟢 3.50-3.74 "Very Good"   [█████████████]        │
│  🟡 3.00-3.49 "Good"        [████████████]         │
│  🟠 2.00-2.99 "Fair"        [████████]             │
│  🔴 < 2.00    "Low"         [██]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Attendance Badges
```
┌─────────────────────────────────────────────────────┐
│ Attendance Rate Indicator                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🟢 95-100%   "Excellent"   [█████████████████]    │
│  🟢 90-94%    "Good"        [█████████████]        │
│  🟡 80-89%    "Fair"        [████████████]         │
│  🔴 < 80%     "Poor"        [██]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Violation Badges
```
┌─────────────────────────────────────────────────────┐
│ Violations Count Indicator                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🟢 0         "None"        [Good Standing]        │
│  🟢 1         "Minor"       [Caution]              │
│  🟡 2-3       "Moderate"    [Monitor Closely]      │
│  🔴 4+        "Major"       [At Risk]              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Status Badges
```
┌─────────────────────────────────────────────────────┐
│ Student Status Indicator                            │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🟢 Enrolled      "Active"       ─────────         │
│  🟠 On Leave      "Temporary"    ─────────         │
│  🟣 Graduated     "Completed"    ─────────         │
│  🔴 Dropped       "Inactive"     ─────────         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Grid View - Card Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ John Patrick Doe    │  │ Maria Anna Santos   │      │
│  │ Enrolled  🟢        │  │ Enrolled  🟢        │      │
│  │                     │  │                     │      │
│  │ Student #: STU-001  │  │ Student #: STU-002  │      │
│  │ Email: john@mail... │  │ Email: maria@mail.. │      │
│  │ Program: BS CS      │  │ Program: BS IT      │      │
│  │ Year Level: 2       │  │ Year Level: 3       │      │
│  │                     │  │                     │      │
│  │ GPA    │ Attend │ Vio│  GPA    │ Attend │ Vio│      │
│  │ 3.75   │  95%   │ 0  │  3.92   │  98%   │ 0  │      │
│  │ 🟢     │  🟢    │🟢  │  🟢     │  🟢    │🟢  │      │
│  │                     │  │                     │      │
│  │ [View Profile]      │  │ [View Profile]      │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ Juan Carlos Cruz    │  │ Anna Marie Reyes    │      │
│  │ Enrolled  🟢        │  │ On Leave  🟠        │      │
│  │ ...                 │  │ ...                 │      │
│  └─────────────────────┘  └─────────────────────┘      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Search Functionality

```
Search Bar Example
═══════════════════════════════════════════════════════════════════

                    🔍 Search Input Field
         ┌────────────────────────────────────────────┐
         │ 🔍 Search by student #, name, or email... ✕ │
         └────────────────────────────────────────────┘
         
    Real-time results as you type

    Type: "john"
    ↓
    Shows: John Doe, John Smith, Johanna Lee (all matches)
    
    Type: "STU-2024-001"
    ↓
    Shows: John Patrick Doe (exact match)
    
    Type: "john@mail"
    ↓
    Shows: John Doe, John Smith (email matches)

═══════════════════════════════════════════════════════════════════
```

## Sorting Example

```
Click Column Headers to Sort
═════════════════════════════════════════════════════════════════════

Initial View:
Student # ▼ | Name | ...      (Default sort ascending)
───────────────────────────────
STU-001    | John | ...
STU-002    | Maria| ...
STU-003    | Juan | ...

After clicking "Name" header:
Name ▲ | ...        (Now sorted A→Z by name)
───────────────────────────────
Anna   | ...
John   | ...
Juan   | ...

After clicking "Name" again:
Name ▼ | ...        (Reversed to Z→A)
───────────────────────────────
Juan   | ...
John   | ...
Anna   | ...

═════════════════════════════════════════════════════════════════════
```

## Filter Combination Examples

```
Scenario 1: Find High Achievers
═══════════════════════════════════════════════════════════════════

Filters Set:
├─ GPA Range: 3.5 to 4.0
├─ Attendance: 90% to 100%
├─ Violations: 0 to 0
└─ Status: Enrolled

Result: Shows students with excellent academic performance
        who are fully engaged and have no discipline issues

═══════════════════════════════════════════════════════════════════

Scenario 2: Students Needing Academic Support
═══════════════════════════════════════════════════════════════════

Filters Set:
├─ GPA Range: 1.5 to 2.5
├─ Attendance: 0% to 80%
├─ Violations: 0 to 10
└─ Status: Enrolled

Result: Shows students struggling academically with poor
        attendance who need intervention

═══════════════════════════════════════════════════════════════════

Scenario 3: Find Specific Program's Top Performers
═══════════════════════════════════════════════════════════════════

Search: "BS Computer Science"
Then Filter:
├─ GPA Range: 3.7 to 4.0
└─ Status: Enrolled

Result: Top students in Computer Science program

═══════════════════════════════════════════════════════════════════
```

## Responsive Breakpoints

```
DESKTOP (1024px+)
┌──────────────────────────────────────────┐
│ Filters                                   │
│ Sidebar  │                               │
│ 280px    │    Main Content Area (1fr)   │
│          │                               │
└──────────────────────────────────────────┘

TABLET (768-1023px)
┌──────────────────────────────────────────┐
│         Main Content Area (1fr)          │
│                                          │
│ Filters Sidebar (Stacked)               │
└──────────────────────────────────────────┘

MOBILE (<768px)
┌──────────────────────────────────────────┐
│ [≡] Menu                                 │
├──────────────────────────────────────────┤
│         Main Content Area                │
│    (Full width, collapsed columns)       │
└──────────────────────────────────────────┘
```

## Color Palette Reference

```
PRIMARY COLORS                  SECONDARY COLORS
┌──────────────────┐          ┌──────────────────┐
│ #667eea  Purple  │ ▓▓▓▓▓▓   │ #3498db  Blue    │ ▓▓▓▓▓▓
│ #764ba2  D-Purp. │ ▓▓▓▓▓▓   │ #2980b9  D-Blue  │ ▓▓▓▓▓▓
└──────────────────┘          └──────────────────┘

STATUS COLORS                   NEUTRAL COLORS
┌──────────────────┐          ┌──────────────────┐
│ #2ecc71  Green   │ ▓▓▓▓▓▓   │ #2c3e50  Dark    │ ▓▓▓▓▓▓
│ #f39c12  Orange  │ ▓▓▓▓▓▓   │ #95a5a6  Gray    │ ▓▓▓▓▓▓
│ #9b59b6  Purple  │ ▓▓▓▓▓▓   │ #ecf0f1  Light   │ ▓▓▓▓▓▓
│ #e74c3c  Red     │ ▓▓▓▓▓▓   │ #ffffff  White   │ ▓▓▓▓▓▓
└──────────────────┘          └──────────────────┘
```

This visual guide provides a comprehensive overview of the dashboard's appearance and functionality!
