# COMMUNITY MEMBER MANAGEMENT SYSTEM
## Complete Module Structure & Form Requirements

---

# 1. MY PROFILE

Every registered member will have a personal profile containing their personal information, contact details, and address information.

## 1.1 Personal Information

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Image Upload | No |
| Full Name | Text | Yes |
| Date of Birth | Date Picker | Yes |
| Blood Group | Dropdown | No |
| Gender | Dropdown | Yes |
| Marital Status | Dropdown | Yes |
| Mobile Number | Telephone | Yes |
| Gmail Address | Email | Yes |
| Occupation | Text | No |
| Qualification | Text / Dropdown | No |

### Blood Group Options
- A+
- A-
- B+
- B-
- AB+
- AB-
- O+
- O-

### Gender Options
- Male
- Female
- Other

### Marital Status Options
- Single
- Married
- Divorced
- Widowed

## 1.2 Permanent Address

| Field Name | Input Type | Required |
|---|---|---|
| House / Flat Number | Text | No |
| Street / Area | Text | Yes |
| Village / City | Text | Yes |
| District | Text | Yes |
| State | Dropdown | Yes |
| PIN Code | Number (6 Digits) | Yes |

## 1.3 Native Address

| Field Name | Input Type | Required |
|---|---|---|
| House / Flat Number | Text | No |
| Street / Area | Text | Yes |
| Village / City | Text | Yes |
| District | Text | Yes |
| State | Dropdown | Yes |
| PIN Code | Number (6 Digits) | Yes |

Option:
- Same as Permanent Address

## 1.4 Profile Actions

- View QR Code
- View Family Members
- Edit Profile
- Update Profile Image
- Download Profile (Optional)

---

# 2. FAMILY MEMBERS

Members can add and manage their family members under their registered account.

## 2.1 Family Member Information

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Image Upload | No |
| Full Name | Text | Yes |
| Date of Birth | Date Picker | Yes |
| Mobile Number | Telephone | No |
| Email Address | Email | No |
| Blood Group | Dropdown | No |
| Gender | Dropdown | Yes |
| Marital Status | Dropdown | Yes |
| Relation | Dropdown | Yes |
| Maternal Surname | Text | No |
| Occupation | Text | No |
| Qualification | Text / Dropdown | No |

### Relation Options
- Father
- Mother
- Husband
- Wife
- Son
- Daughter
- Brother
- Sister
- Grandfather
- Grandmother
- Grandson
- Granddaughter
- Uncle
- Aunt
- Other

## 2.2 Family Member Actions

- View QR Code
- Edit Family Member
- Delete Family Member
- View Complete Details

## 2.3 Family Member Listing

Each family member should appear in an individual profile card containing:

- Profile Image
- Full Name
- Relation
- Date of Birth
- Mobile Number
- Blood Group
- View Details Button
- View QR Button
- Edit Button
- Delete Button

---

# 3. BUSINESS DIRECTORY

This module allows registered members to register their businesses and explore businesses registered by other community members.

## 3.1 Business Registration Form

| Field Name | Input Type | Required |
|---|---|---|
| Business Profile Image / Logo | Image Upload | No |
| Business Name | Text | Yes |
| Business Holder Name | Text | Yes |
| Phone Number | Telephone | Yes |
| Email Address | Email | No |
| Business Address | Textarea | Yes |
| PIN Code | Number (6 Digits) | Yes |
| City | Text | Yes |
| District | Text | Yes |
| State | Dropdown | Yes |
| Type of Business | Dropdown | Yes |

### Business Categories
- Retail Shop
- Wholesale Business
- Manufacturing
- IT & Software
- Education
- Healthcare
- Real Estate
- Construction
- Finance & Accounting
- Food & Restaurant
- Transportation
- Automobile
- Textile
- Agriculture
- Professional Services
- Other

## 3.2 Business Ownership & Permissions

### If the business belongs to the logged-in member:

Display:
- View Details
- Edit Business
- Delete Business
- View QR Code (Optional)

### If the business belongs to another member:

Display:
- View Details
- Chat on WhatsApp

WhatsApp button should redirect to WhatsApp using the registered business phone number.

## 3.3 Business Listing Card

Each business card should contain:

- Business Logo
- Business Name
- Business Holder Name
- Business Category
- Phone Number
- Email Address
- City
- District
- State
- View Details Button
- Ownership-Based Action Button

---

# 4. JOB REGISTRATION

This module allows community members to register their professional details and employment requirements.

## 4.1 Job Registration Form

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Auto-fetch from Member Profile | No |
| Full Name | Auto-fetch from Member Profile | Yes |
| Mobile Number | Auto-fetch from Member Profile | Yes |
| Email Address | Auto-fetch from Member Profile | Yes |
| Qualification | Text / Dropdown | Yes |
| Occupation | Text | No |
| Skills | Multi-select | No |
| Experience | Dropdown | Yes |
| Current Company | Text | No |
| Current Job Position | Text | No |
| Preferred Job Location | Text | No |
| Expected Salary | Number | No |
| Resume | PDF Upload | No |
| Job Type | Dropdown | Yes |
| Job Availability | Dropdown | Yes |

### Experience Options
- Fresher
- 0-1 Years
- 1-3 Years
- 3-5 Years
- 5-10 Years
- 10+ Years

### Job Type Options
- Full Time
- Part Time
- Work From Home
- Freelance
- Internship
- Contract

### Job Availability Options
- Looking for a Job
- Currently Employed
- Open to Opportunities
- Not Looking for a Job

## 4.2 Job Registration Actions

- Register for Job Opportunities
- Edit Job Profile
- Delete Job Registration
- View Job Profile

---

# 5. MATRIMONIAL REGISTRATION

This module allows members to register their own or their family members' matrimonial profiles.

## 5.1 Personal Information

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Image Upload | Yes |
| Full Name | Text | Yes |
| Date of Birth | Date Picker | Yes |
| Height | Text / Dropdown | No |
| Weight | Number | No |
| Gender | Dropdown | Yes |
| Marital Status | Dropdown | Yes |
| Blood Group | Dropdown | No |
| Religion / Community | Text | No |
| Sub-community | Text | No |
| Maternal Surname | Text | No |

## 5.2 Education & Career Details

| Field Name | Input Type | Required |
|---|---|---|
| Qualification | Text / Dropdown | Yes |
| Occupation | Text | Yes |
| Company Name | Text | No |
| Annual Income | Number | No |

## 5.3 Family Information

| Field Name | Input Type | Required |
|---|---|---|
| Father's Name | Text | Yes |
| Father's Occupation | Text | No |
| Mother's Name | Text | Yes |
| Mother's Occupation | Text | No |
| Total Family Members | Number | No |
| Native Place | Text | Yes |
| Family Address | Textarea | No |

## 5.4 Partner Preferences

| Field Name | Input Type | Required |
|---|---|---|
| Preferred Age From | Number | No |
| Preferred Age To | Number | No |
| Preferred Height | Text | No |
| Preferred Qualification | Text | No |
| Preferred Occupation | Text | No |
| Preferred City | Text | No |
| Other Expectations | Textarea | No |

## 5.5 Matrimonial Actions

- Register Matrimonial Profile
- View Matrimonial Profile
- Edit Matrimonial Profile
- Delete Matrimonial Profile

---

# 6. MEMBER LIST

This module displays all registered community members.

## 6.1 Member Information

| Field Name | Description |
|---|---|
| Profile Image | Member Profile Photo |
| Member ID | Unique Member Identification |
| Full Name | Member Name |
| Date of Birth | Date of Birth |
| Gender | Gender |
| Occupation | Profession |
| Mobile Number | Contact Number |
| City | City |
| District | District |
| Blood Group | Blood Group |

## 6.2 Member List Features

- Search by Name
- Search by Member ID
- Search by Mobile Number (subject to privacy settings)
- Filter by Gender
- Filter by City
- Filter by District
- Filter by Blood Group
- Filter by Occupation
- View Member Profile
- View Family Members
- View QR Code

---

# 7. COMMITTEE MEMBERS

This module displays the current committee members and their responsibilities.

## 7.1 Committee Member Information

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Image Upload | No |
| Full Name | Text | Yes |
| Designation | Dropdown / Text | Yes |
| Mobile Number | Telephone | Yes |
| Email Address | Email | No |
| Committee Name | Text | Yes |
| Joining Date | Date Picker | Yes |
| End Date | Date Picker | No |
| Address | Textarea | No |

### Committee Designations
- President
- Vice President
- Secretary
- Joint Secretary
- Treasurer
- Executive Member
- Committee Member
- Other

## 7.2 Committee Features

- View Committee Members
- View Individual Details
- Contact Committee Members
- View Previous Committee Members
- Filter by Designation

---

# 8. TRUSTEES

This module displays all trustees associated with the community trust.

## 8.1 Trustee Information

| Field Name | Input Type | Required |
|---|---|---|
| Profile Image | Image Upload | No |
| Full Name | Text | Yes |
| Designation | Text | Yes |
| Mobile Number | Telephone | Yes |
| Email Address | Email | No |
| Joining Date | Date Picker | Yes |
| Address | Textarea | No |
| Description | Textarea | No |

## 8.2 Trustee Features

- View Trustees
- View Individual Details
- Contact Trustee
- View Trustee Designation
- View Trustee History

---

# 9. ANNOUNCEMENTS

This module provides a centralized announcement and notification system.

## 9.1 Announcement Information

| Field Name | Input Type | Required |
|---|---|---|
| Announcement Title | Text | Yes |
| Description | Rich Text Editor | Yes |
| Announcement Image | Image Upload | No |
| Attachment | PDF / Document | No |
| Published Date | Auto-generated | Yes |
| Expiry Date | Date Picker | No |
| Published By | Auto-generated | Yes |
| Priority | Dropdown | Yes |

### Priority Options
- Normal
- Important
- Urgent

## 9.2 Announcement Features

- View Latest Announcements
- View Complete Announcement
- Download Attachments
- Share Announcement
- Pin Important Announcements
- View Previous Announcements
- Search Announcements

---

# 10. MAIN APPLICATION NAVIGATION

The application should contain the following main navigation categories:

1. My Profile
2. Family Members
3. Business
4. Job Registration
5. Matrimonial Registration
6. Member List
7. Committee Members
8. Trustees
9. Announcements

---

# 11. DASHBOARD STRUCTURE

The dashboard should display a personalized overview of the logged-in member.

## 11.1 Dashboard Header

- Community Logo
- Search
- Notifications
- Profile Image
- Member Name
- Member ID
- Logout

## 11.2 Dashboard Quick Access Cards

1. My Profile
2. Family Members
3. Business Directory
4. Job Registration
5. Matrimonial Registration
6. Member List
7. Committee Members
8. Trustees
9. Announcements

## 11.3 Dashboard Statistics

- Total Family Members
- Registered Businesses
- Registered Job Seekers
- Matrimonial Profiles
- Total Community Members

## 11.4 Dashboard Additional Sections

- Latest Announcements
- Upcoming Events
- Recently Added Members
- Recently Registered Businesses

---

# 12. QR CODE SYSTEM

Every registered member should have a unique QR code.

## QR Code Requirements

- Generate a unique QR code for every member.
- QR code should be linked to the member's unique ID.
- Scanning the QR code should open the member's public profile.
- Allow members to view their QR code.
- Allow members to download their QR code.
- Family members should also have individual QR codes if they have separate member records.

### QR Profile Information

- Member ID
- Profile Image
- Full Name
- Blood Group
- City
- Member Verification Status

Important: Sensitive information such as full address, personal email, and mobile number should not be publicly exposed through the QR code without the member's permission.

---

# 13. ROLE-BASED ACCESS CONTROL

The application should support different user roles.

## 13.1 Member

- View and edit own profile.
- Add and manage family members.
- Register and manage own business.
- Register for job opportunities.
- Register matrimonial profiles.
- View member directory.
- View committee members.
- View trustees.
- View announcements.

## 13.2 Admin

- Manage all members.
- Add, edit, and delete members.
- Verify member profiles.
- Manage family records.
- Manage businesses.
- Manage job registrations.
- Manage matrimonial registrations.
- Manage committee members.
- Manage trustees.
- Publish announcements.
- Manage QR codes.
- Manage user permissions.

## 13.3 Committee Member

- View community members.
- View assigned committee information.
- Manage authorized announcements (if permitted).
- Access assigned administrative features.

## 13.4 Trustee

- View trustee information.
- View authorized community information.
- Access assigned administrative features.

---

# 14. DATABASE STRUCTURE

Recommended database tables:

1. `members`
2. `member_addresses`
3. `family_members`
4. `businesses`
5. `job_registrations`
6. `matrimonial_profiles`
7. `committee_members`
8. `trustees`
9. `announcements`
10. `member_qr_codes`
11. `notifications`
12. `admin_users`
13. `roles`
14. `member_privacy_settings`

## Database Relationship Rules

- Every member must have a unique Member ID.
- Every member can have multiple family members.
- Every member can register multiple businesses.
- Every member can have one active job registration, with provision for registration history.
- Every member or family member can have a matrimonial profile, subject to eligibility and consent.
- Every business must be linked to its owner through Member ID.
- Committee members and trustees should be linked to member records wherever possible.
- Announcements should be linked to the admin or authorized publisher.

---

# 15. IMPORTANT SYSTEM REQUIREMENTS

## 15.1 Profile Management
- Profile editing.
- Profile image uploading.
- Form validation.
- Duplicate mobile number prevention.
- Unique Member ID generation.

## 15.2 Family Management
- Multiple family member registration.
- Relation-based organization.
- Family member editing and deletion.
- Individual family QR codes.

## 15.3 Business Management
- Ownership-based permissions.
- Business search and filtering.
- WhatsApp contact integration.
- Business editing and deletion.

## 15.4 Security
- Secure login and logout.
- Password hashing.
- Session management.
- Role-based access.
- CSRF protection.
- Input validation.
- Secure image and document uploads.
- Server-side ownership verification.

## 15.5 Privacy
- Members should control the visibility of their contact information.
- Sensitive personal information should not be publicly accessible.
- Matrimonial profiles should require the consent of the person represented.
- Only authorized administrators should manage committee and trustee records.

---

# 16. FINAL MODULE SUMMARY

| No. | Module | Main Purpose |
|---|---|---|
| 01 | My Profile | Personal and address information |
| 02 | Family Members | Family registration and management |
| 03 | Business | Community business directory |
| 04 | Job Registration | Employment and professional information |
| 05 | Matrimonial Registration | Matrimonial profile management |
| 06 | Member List | Community member directory |
| 07 | Committee Members | Committee information |
| 08 | Trustees | Trust member information |
| 09 | Announcements | Community notices and updates |
| 10 | QR Code System | Digital member identification |
| 11 | Dashboard | Centralized member dashboard |
| 12 | Admin Panel | Application and data management |

---

# END OF REQUIREMENT DOCUMENT