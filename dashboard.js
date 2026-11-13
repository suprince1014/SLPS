// ==========================================================
// SLPS VAPI - COMMUNITY MEMBER MANAGEMENT SYSTEM
// DYNAMIC DASHBOARD ENGINE (Supports LocalStorage Persistence & Interactive Workflows)
// ==========================================================

// --- DEFAULT SEED DATA (Section 1 to 14) ---
const DEFAULT_DEMO_MEMBER = {
  member_id: "SLPS-2026-1001",
  first_name: "Suprince",
  middle_name: "Vijaybhai",
  last_name: "Kakadiya",
  phone: "+91 94081 91506",
  email: "kakadiyasuprince@gmail.com",
  date_of_birth: "2006-01-11",
  gender: "Male",
  marital_status: "Single",
  blood_group: "B+",
  occupation: "Software Engineer & Community Volunteer",
  qualification: "B.Tech in Computer Science & Engineering",
  region: "Vapi & Valsad District",
  membership_type: "Active Life Member",
  role: "Member",
  joined_date: "14 Jan 2024",
  verified: true,
  avatar: "",
  privacy: {
    show_phone: true,
    show_email: true,
    blood_circle: true
  },
  permanent_address: {
    house: "401, Yashvi Nestoya",
    street: "Chharwada Road",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396191"
  },
  native_address: {
    house: "Sardar Chowk",
    street: "Main Bazar Road",
    city: "Roghel",
    district: "Amreli",
    state: "Gujarat",
    pincode: "365601"
  }
};

const INITIAL_FAMILY_MEMBERS = [
  {
    id: "FAM-01",
    name: "Vijaybhai M. Kakadiya",
    relation: "Father",
    dob: "1978-05-15",
    gender: "Male",
    marital_status: "Married",
    blood_group: "B+",
    phone: "+91 98251 12345",
    email: "vijaybhai.kakadiya@gmail.com",
    maternal_surname: "Dholakiya",
    occupation: "Business Owner - Kakadiya Textiles",
    qualification: "B.Com"
  },
  {
    id: "FAM-02",
    name: "Gitaben V. Kakadiya",
    relation: "Mother",
    dob: "1982-08-20",
    gender: "Female",
    marital_status: "Married",
    blood_group: "O+",
    phone: "+91 98251 67890",
    email: "",
    maternal_surname: "Patoliya",
    occupation: "Homemaker & Social Worker",
    qualification: "HSC"
  },
  {
    id: "FAM-03",
    name: "Harsh V. Kakadiya",
    relation: "Brother",
    dob: "2009-11-04",
    gender: "Male",
    marital_status: "Single",
    blood_group: "B+",
    phone: "+91 94081 99887",
    email: "harsh.kakadiya@gmail.com",
    maternal_surname: "Dholakiya",
    occupation: "Student (Science Stream)",
    qualification: "Class 11 Science"
  }
];

const INITIAL_BUSINESSES = [
  {
    id: "BIZ-01",
    name: "Kakadiya Textiles & Fabrics",
    holder_name: "Vijaybhai Kakadiya",
    category: "Textile",
    phone: "+91 98251 12345",
    email: "kakadiyatex@gmail.com",
    address: "Shed No. 14, GIDC Phase 1, Near Sardar Chowk",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396195",
    is_own: true
  },
  {
    id: "BIZ-02",
    name: "Patel Cloud Solutions & IT",
    holder_name: "Suprince Kakadiya",
    category: "IT & Software",
    phone: "+91 94081 91506",
    email: "contact@patelcloud.in",
    address: "402, Trade Square, Gunjan Char Rasta",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396191",
    is_own: true
  },
  {
    id: "BIZ-03",
    name: "Saurashtra Diamond & Tooling Works",
    holder_name: "Rameshbhai B. Savani",
    category: "Manufacturing",
    phone: "+91 98795 44321",
    email: "savani.tools@gmail.com",
    address: "Plot 88, Near Water Tank, GIDC Phase 2",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396195",
    is_own: false
  },
  {
    id: "BIZ-04",
    name: "Radhe Krishna Caterers & Sweets",
    holder_name: "Bhaveshbhai R. Gajera",
    category: "Food & Restaurant",
    phone: "+91 99245 88990",
    email: "radhecaterers@gmail.com",
    address: "Station Road, Opp. Patel Samaj Bhavan",
    city: "Valsad",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396001",
    is_own: false
  },
  {
    id: "BIZ-05",
    name: "Ambika Real Estate & Builders",
    holder_name: "Mansukhbhai Vaghani",
    category: "Real Estate",
    phone: "+91 98241 55667",
    email: "ambikarealty@yahoo.com",
    address: "Shop 12, City Centre Mall, Chala",
    city: "Vapi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396191",
    is_own: false
  },
  {
    id: "BIZ-06",
    name: "Shreeji Agro Chemicals & Seeds",
    holder_name: "Dineshbhai K. Radadiya",
    category: "Agriculture",
    phone: "+91 98250 11223",
    email: "shreejiagro@gmail.com",
    address: "Main Highway Road, Near APMC Market",
    city: "Pardi",
    district: "Valsad",
    state: "Gujarat",
    pincode: "396125",
    is_own: false
  }
];

const INITIAL_JOB_PROFILES = [
  {
    id: "JOB-01",
    name: "Suprince Vijaybhai Kakadiya",
    phone: "+91 94081 91506",
    email: "kakadiyasuprince@gmail.com",
    qualification: "B.Tech in Computer Science & Engineering",
    occupation: "Full Stack Web Developer & Cloud Architect",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Cloud Architecture"],
    experience: "1-3 Years",
    company: "Patel Cloud Technologies",
    position: "Software Engineer",
    location: "Vapi / Surat / Remote",
    salary: 850000,
    resume: "Suprince_Kakadiya_Resume.pdf",
    job_type: "Full Time",
    availability: "Open to Opportunities",
    is_own: true
  },
  {
    id: "JOB-02",
    name: "Priyaben D. Radadiya",
    phone: "+91 98790 33445",
    email: "priya.radadiya@gmail.com",
    qualification: "M.Com, Chartered Accountant (Inter)",
    occupation: "Senior Corporate Accountant",
    skills: ["Tally Prime", "GST Compliance", "Financial Auditing", "Income Tax", "Excel MIS"],
    experience: "3-5 Years",
    company: "Vapi Industrial Finance Corp",
    position: "Accounts Lead",
    location: "Vapi / Silvassa",
    salary: 650000,
    resume: "Priya_Radadiya_Resume.pdf",
    job_type: "Full Time",
    availability: "Looking for a Job",
    is_own: false
  },
  {
    id: "JOB-03",
    name: "Kevin B. Savani",
    phone: "+91 97230 44556",
    email: "kevin.savani@gmail.com",
    qualification: "B.E. Mechanical Engineering",
    occupation: "Production & Quality Assurance Engineer",
    skills: ["SolidWorks", "AutoCAD", "CNC Programming", "Six Sigma", "Shop Floor Management"],
    experience: "1-3 Years",
    company: "GIDC Precision Engineering Works",
    position: "Quality Control Officer",
    location: "Vapi / Daman",
    salary: 480000,
    resume: "Kevin_Savani_Resume.pdf",
    job_type: "Full Time",
    availability: "Currently Employed",
    is_own: false
  },
  {
    id: "JOB-04",
    name: "Drashti M. Vaghani",
    phone: "+91 98240 77889",
    email: "drashti.vaghani@gmail.com",
    qualification: "B.Pharm, MBA in Healthcare Management",
    occupation: "Regulatory Affairs Specialist",
    skills: ["FDA Filings", "Pharma QA", "Drug Dossier Preparation", "cGMP Compliance"],
    experience: "5-10 Years",
    company: "Sun Pharmaceutical Industries",
    position: "Assistant Manager - QA",
    location: "Vapi / Daman",
    salary: 950000,
    resume: "Drashti_Vaghani_Resume.pdf",
    job_type: "Full Time",
    availability: "Open to Opportunities",
    is_own: false
  }
];

const INITIAL_MATRIMONIAL_PROFILES = [
  {
    id: "MAT-01",
    name: "Suprince Vijaybhai Kakadiya",
    gender: "Male",
    dob: "2006-01-11",
    height: "5 ft 10 in",
    weight: 68,
    marital_status: "Single",
    blood_group: "B+",
    religion: "Hindu Leuva Patel",
    sub_community: "Saurashtra Leuva Patel",
    maternal_surname: "Dholakiya",
    qualification: "B.Tech in Computer Science",
    occupation: "Software Engineer",
    company: "Tech Innovators",
    income: 950000,
    father_details: "Vijaybhai Kakadiya (Business Owner - Textiles)",
    mother_details: "Gitaben Kakadiya (Homemaker)",
    family_members_count: 4,
    native_place: "Roghel, Amreli",
    family_address: "401, Yashvi Nestoya, Chharwada Vapi",
    pref_age_min: 19,
    pref_age_max: 24,
    pref_city: "Vapi, Surat, Ahmedabad, Rajkot",
    pref_notes: "Cultured, family-oriented, understanding partner with traditional Leuva Patel family values.",
    is_own: true
  },
  {
    id: "MAT-02",
    name: "Anjali M. Patel",
    gender: "Female",
    dob: "2002-04-18",
    height: "5 ft 4 in",
    weight: 54,
    marital_status: "Single",
    blood_group: "O+",
    religion: "Hindu Leuva Patel",
    sub_community: "Saurashtra Leuva Patel",
    maternal_surname: "Kathiriya",
    qualification: "M.Sc in Biotechnology",
    occupation: "Clinical Research Analyst",
    company: "Zydus Life Sciences",
    income: 680000,
    father_details: "Manishbhai Patel (Industrialist, Vapi GIDC)",
    mother_details: "Rekhaben Patel (School Principal)",
    family_members_count: 4,
    native_place: "Lathi, Amreli",
    family_address: "B-201, Green Residency, Gunjan, Vapi",
    pref_age_min: 24,
    pref_age_max: 28,
    pref_city: "Gujarat / Mumbai",
    pref_notes: "Educated, supportive partner with grounded cultural roots and progressive mindset.",
    is_own: false
  },
  {
    id: "MAT-03",
    name: "Ronak K. Dholakiya",
    gender: "Male",
    dob: "1998-09-12",
    height: "5 ft 11 in",
    weight: 74,
    marital_status: "Single",
    blood_group: "A+",
    religion: "Hindu Leuva Patel",
    sub_community: "Saurashtra Leuva Patel",
    maternal_surname: "Chauhan",
    qualification: "Chartered Accountant (CA)",
    occupation: "Senior Financial Consultant",
    company: "Deloitte India",
    income: 1400000,
    father_details: "Kishorbhai Dholakiya (Retired Bank Manager)",
    mother_details: "Kailashben Dholakiya (Homemaker)",
    family_members_count: 3,
    native_place: "Savarkundla, Amreli",
    family_address: "Bungalow 12, Tithal Road, Valsad",
    pref_age_min: 23,
    pref_age_max: 27,
    pref_city: "Valsad / Vapi / Surat / Ahmedabad",
    pref_notes: "Values mutual respect, open communication, and cultural tradition.",
    is_own: false
  },
  {
    id: "MAT-04",
    name: "Pooja H. Savani",
    gender: "Female",
    dob: "2001-12-05",
    height: "5 ft 5 in",
    weight: 56,
    marital_status: "Single",
    blood_group: "AB+",
    religion: "Hindu Leuva Patel",
    sub_community: "Saurashtra Leuva Patel",
    maternal_surname: "Gajera",
    qualification: "B.Arch (Architecture)",
    occupation: "Interior & Landscape Architect",
    company: "Studio Design Works",
    income: 720000,
    father_details: "Hasmukhbhai Savani (Building Contractor)",
    mother_details: "Bhavanaben Savani (Homemaker)",
    family_members_count: 4,
    native_place: "Gariadhar, Bhavnagar",
    family_address: "A-504, Rivera Heights, Chala, Vapi",
    pref_age_min: 24,
    pref_age_max: 29,
    pref_city: "South Gujarat / Saurashtra",
    pref_notes: "Well-mannered, creative, and family-oriented companion.",
    is_own: false
  }
];

const INITIAL_MEMBERS_DIRECTORY = [
  { id: "SLPS-2026-1001", name: "Suprince Vijaybhai Kakadiya", gender: "Male", dob: "2006-01-11", blood: "B+", city: "Vapi", district: "Valsad", occupation: "Software Engineer", phone: "+91 94081 91506", verified: true },
  { id: "SLPS-2026-1002", name: "Vijaybhai M. Kakadiya", gender: "Male", dob: "1978-05-15", blood: "B+", city: "Vapi", district: "Valsad", occupation: "Textile Business", phone: "+91 98251 12345", verified: true },
  { id: "SLPS-2026-1003", name: "Rameshbhai B. Savani", gender: "Male", dob: "1974-03-22", blood: "O+", city: "Vapi", district: "Valsad", occupation: "Precision Tooling", phone: "+91 98795 44321", verified: true },
  { id: "SLPS-2026-1004", name: "Mansukhbhai Vaghani", gender: "Male", dob: "1969-11-10", blood: "A+", city: "Valsad", district: "Valsad", occupation: "Real Estate Developer", phone: "+91 98241 55667", verified: true },
  { id: "SLPS-2026-1005", name: "Bhaveshbhai R. Gajera", gender: "Male", dob: "1981-07-08", blood: "B+", city: "Valsad", district: "Valsad", occupation: "Food & Catering", phone: "+91 99245 88990", verified: true },
  { id: "SLPS-2026-1006", name: "Dineshbhai K. Radadiya", gender: "Male", dob: "1976-09-14", blood: "O-", city: "Pardi", district: "Valsad", occupation: "Agro Chemicals", phone: "+91 98250 11223", verified: true },
  { id: "SLPS-2026-1007", name: "Drashti M. Vaghani", gender: "Female", dob: "1996-06-18", blood: "B+", city: "Vapi", district: "Valsad", occupation: "Pharma QA Manager", phone: "+91 98240 77889", verified: true },
  { id: "SLPS-2026-1008", name: "Priyaben D. Radadiya", gender: "Female", dob: "1999-02-27", blood: "AB+", city: "Vapi", district: "Valsad", occupation: "Chartered Accountant", phone: "+91 98790 33445", verified: true },
  { id: "SLPS-2026-1009", name: "Kishorbhai Dholakiya", gender: "Male", dob: "1963-01-30", blood: "A+", city: "Valsad", district: "Valsad", occupation: "Retired Banker", phone: "+91 98241 00998", verified: true },
  { id: "SLPS-2026-1010", name: "Harsh V. Kakadiya", gender: "Male", dob: "2009-11-04", blood: "B+", city: "Vapi", district: "Valsad", occupation: "Student (Science)", phone: "+91 94081 99887", verified: true },
  { id: "SLPS-2026-1011", name: "Gitaben V. Kakadiya", gender: "Female", dob: "1982-08-20", blood: "O+", city: "Vapi", district: "Valsad", occupation: "Social Worker", phone: "+91 98251 67890", verified: true },
  { id: "SLPS-2026-1012", name: "Anjali M. Patel", gender: "Female", dob: "2002-04-18", blood: "O+", city: "Vapi", district: "Valsad", occupation: "Clinical Researcher", phone: "+91 98251 33441", verified: true }
];

const INITIAL_COMMITTEE = [
  {
    name: "Shri Vallabhbhai G. Patel",
    designation: "President",
    tenure: "2024 - 2027",
    committee: "Central Managing Committee",
    phone: "+91 98251 00001",
    email: "president.slpsvapi@gmail.com",
    address: "Patel Bhavan, Station Road, Vapi",
    bio: "Managing Director of Patel Paper Mills; providing vision and strategic leadership to community institutions."
  },
  {
    name: "Shri Rameshbhai B. Savani",
    designation: "Vice President",
    tenure: "2024 - 2027",
    committee: "Central Managing Committee",
    phone: "+91 98251 00002",
    email: "vp.slpsvapi@gmail.com",
    address: "GIDC Industrial Zone, Chala, Vapi",
    bio: "Founder of Savani Precision Engineering; active patron of youth vocational programs."
  },
  {
    name: "Shri Pravinbhai M. Kakadiya",
    designation: "Secretary",
    tenure: "2024 - 2027",
    committee: "Executive Secretariat",
    phone: "+91 98251 00003",
    email: "secretary.slpsvapi@gmail.com",
    address: "Gunjan Char Rasta, Vapi",
    bio: "Industrial Safety Consultant; oversees administrative operations, member records, and digital systems."
  },
  {
    name: "Shri Bhaveshbhai R. Gajera",
    designation: "Joint Secretary",
    tenure: "2024 - 2027",
    committee: "Executive Secretariat",
    phone: "+91 98251 00004",
    email: "jointsec.slpsvapi@gmail.com",
    address: "Tithal Road, Valsad",
    bio: "Director of Shreeji Logistics; coordinates event planning, hall bookings, and community logistics."
  },
  {
    name: "Shri Dineshbhai K. Radadiya",
    designation: "Treasurer",
    tenure: "2024 - 2027",
    committee: "Finance & Accounts",
    phone: "+91 98251 00005",
    email: "treasurer.slpsvapi@gmail.com",
    address: "GIDC Colony, Vapi",
    bio: "Financial services lead; manages trust audits, member dues, and transparent fund allocation."
  },
  {
    name: "Shri Suprince V. Kakadiya",
    designation: "Executive Member (Youth & IT)",
    tenure: "2025 - 2027",
    committee: "Youth, Education & Digital Affairs",
    phone: "+91 94081 91506",
    email: "kakadiyasuprince@gmail.com",
    address: "401, Yashvi Nestoya, Vapi",
    bio: "Leads digital member portal initiatives, IT workshops, and youth career networking conclaves."
  },
  {
    name: "Smt. Bhavnaben M. Vaghani",
    designation: "Executive Member (Women Welfare)",
    tenure: "2024 - 2027",
    committee: "Mahila Mandal & Social Reform",
    phone: "+91 98251 00007",
    email: "womenwelfare.slps@gmail.com",
    address: "Valsad Town",
    bio: "Organizes self-help groups, cultural competitions, and educational guidance for community women."
  },
  {
    name: "Shri Hardik K. Dholakiya",
    designation: "Executive Member (Sports & Culture)",
    tenure: "2024 - 2027",
    committee: "Sports & Cultural Committee",
    phone: "+91 98251 00008",
    email: "sports.slps@gmail.com",
    address: "Chharwada, Vapi",
    bio: "Coordinates the Annual Leuva Patel Premier League Cricket Tournament and Navratri Utsav."
  }
];

const INITIAL_TRUSTEES = [
  {
    name: "Shri Kanubhai M. Desai",
    designation: "Chief Patron & Trustee",
    appointed: "2012",
    photo: "assets/kanudesai.webp",
    phone: "+91 98251 99999",
    email: "office.kanudesai@gujarat.gov.in",
    address: "Pardi / Gandhinagar",
    bio: "Hon. Cabinet Minister of Finance, Energy & Petrochemicals, Govt. of Gujarat. Visionary statesman guiding the community educational institutions, hostels, and medical welfare trusts."
  },
  {
    name: "Shri Manharlal P. Patel",
    designation: "Trustee",
    appointed: "2014",
    photo: "",
    phone: "+91 98251 99991",
    email: "patel.manharlal@gmail.com",
    address: "GIDC Phase 1, Vapi",
    bio: "Pioneer industrialist in Vapi. Dedicated 30+ years to building community wedding convention halls, senior citizen welfare centers, and medical dispensaries."
  },
  {
    name: "Shri Jayantibhai L. Kakadiya",
    designation: "Managing Trustee (Education Wing)",
    appointed: "2016",
    photo: "",
    phone: "+91 98251 99992",
    email: "jayantibhai.kakadiya@gmail.com",
    address: "Chala, Vapi",
    bio: "Spearheaded the Samaj Higher Education Scholarship Foundation granting over 500+ student scholarships annually across South Gujarat."
  },
  {
    name: "Smt. Shantaben R. Savani",
    designation: "Trustee (Social & Medical Welfare)",
    appointed: "2018",
    photo: "",
    phone: "+91 98251 99993",
    email: "shantaben.savani@gmail.com",
    address: "Vapi Town",
    bio: "Philanthropist championing women empowerment, vocational craft centers, and matrimonial counselling services in South Gujarat."
  },
  {
    name: "Shri Gordhanbhai T. Radadiya",
    designation: "Trustee (Rural & Native Liaison)",
    appointed: "2020",
    photo: "",
    phone: "+91 98251 99994",
    email: "gordhanbhai.radadiya@gmail.com",
    address: "Pardi, Valsad",
    bio: "Leads Saurashtra homeland connect initiatives linking native farmers with agricultural trade networks and cold storage facilities in Vapi."
  }
];

const INITIAL_ANNOUNCEMENTS = [
  {
    id: "ANN-01",
    title: "Mega Blood Donation & Free Medical Health Screening Camp",
    priority: "Normal",
    pinned: true,
    published_by: "Medical Aid Committee",
    published_date: "11 Nov 2026",
    description: "Annual voluntary blood donation drive and comprehensive medical health screening organized at Samaj Bhavan in association with Haria L.G. Rotary Hospital, Vapi. All youth members and families are cordially invited to participate.",
    attachment: "Blood_Camp_Notice_11Nov.pdf"
  },
  {
    id: "ANN-02",
    title: "SLPS Annual Sneha Milan & Cultural Night 2026 - Registration Open",
    priority: "Important",
    pinned: true,
    published_by: "Central Executive Committee",
    published_date: "08 Nov 2026",
    description: "We cordially invite all Leuva Patel community families to the Grand Sneha Milan & Cultural Festival on 28th November 2026 at Vapi Samaj Bhavan. Features traditional Kathiyawadi community dinner, folk dance, and student felicitation.",
    attachment: "Sneha_Milan_Schedule_2026.pdf"
  },
  {
    id: "ANN-03",
    title: "Higher Education Merit Scholarships 2026-27 Applications Invited",
    priority: "Important",
    pinned: false,
    published_by: "Shreeji Education Trust",
    published_date: "01 Nov 2026",
    description: "Applications are open for meritorious students scoring above 80% in 10th/12th or pursuing professional degrees (Engineering, Medical, Law, CA). Submit academic records online by 15th December 2026.",
    attachment: "Scholarship_Criteria_2026.pdf"
  },
  {
    id: "ANN-04",
    title: "Samaj Bhavan Renovated AC Banquet Hall Available for Booking",
    priority: "Normal",
    pinned: false,
    published_by: "Property & Infrastructure Committee",
    published_date: "25 Oct 2026",
    description: "The newly renovated air-conditioned Main Banquet Hall (capacity 1,200 persons) and dining pavilions are now open for family functions and weddings with 40% subsidized tariff for verified Samaj life members.",
    attachment: "Hall_Booking_Tariff_2026.pdf"
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "NOTIF-01",
    title: "Urgent Blood Need",
    text: "O- & B+ blood needed at Haria Rotary Hospital Vapi.",
    time: "25m ago",
    unread: true,
    targetTab: "announcements"
  },
  {
    id: "NOTIF-02",
    title: "Sneha Milan 2026 Registration",
    text: "Confirm your family pass for the annual cultural gathering.",
    time: "3h ago",
    unread: true,
    targetTab: "overview"
  },
  {
    id: "NOTIF-03",
    title: "New Talent Match in IT",
    text: "A new senior accountant and web developer joined the talent portal.",
    time: "1d ago",
    unread: true,
    targetTab: "job"
  },
  {
    id: "NOTIF-04",
    title: "Digital ID Card Verified",
    text: "Your official QR pass is active and verified for year 2026.",
    time: "2d ago",
    unread: false,
    targetTab: "idcard"
  }
];

// --- STORAGE ACCESSORS ---
function getStoredItem(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setStoredItem(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to localStorage:`, err);
  }
}

function getActiveMember() {
  const current = getStoredItem("slps_current_user", DEFAULT_DEMO_MEMBER);
  return {
    ...DEFAULT_DEMO_MEMBER,
    ...current,
    role: current.role || "Member",
    permanent_address: { ...DEFAULT_DEMO_MEMBER.permanent_address, ...(current.permanent_address || {}) },
    native_address: { ...DEFAULT_DEMO_MEMBER.native_address, ...(current.native_address || {}) },
    privacy: { ...DEFAULT_DEMO_MEMBER.privacy, ...(current.privacy || {}) }
  };
}

function saveActiveMember(profile) {
  setStoredItem("slps_current_user", profile);
  const directory = getMembersDirectory();
  const idx = directory.findIndex((m) => m.id === profile.member_id);
  const fullName = [profile.first_name, profile.middle_name, profile.last_name].filter(Boolean).join(" ");
  const updatedEntry = {
    id: profile.member_id,
    name: fullName,
    gender: profile.gender || "Male",
    dob: profile.date_of_birth,
    blood: profile.blood_group || "B+",
    city: profile.permanent_address?.city || "Vapi",
    district: profile.permanent_address?.district || "Valsad",
    occupation: profile.occupation || "Member",
    phone: profile.phone,
    verified: true
  };
  if (idx >= 0) {
    directory[idx] = updatedEntry;
  } else {
    directory.unshift(updatedEntry);
  }
  saveMembersDirectory(directory);
}

function getFamilyMembers() {
  return getStoredItem("slps_family_members", INITIAL_FAMILY_MEMBERS);
}

function saveFamilyMembers(list) {
  setStoredItem("slps_family_members", list);
}

function getBusinesses() {
  return getStoredItem("slps_businesses", INITIAL_BUSINESSES);
}

function saveBusinesses(list) {
  setStoredItem("slps_businesses", list);
}

function getJobProfiles() {
  return getStoredItem("slps_job_profiles", INITIAL_JOB_PROFILES);
}

function saveJobProfiles(list) {
  setStoredItem("slps_job_profiles", list);
}

function getMatrimonialProfiles() {
  return getStoredItem("slps_matrimonial_profiles", INITIAL_MATRIMONIAL_PROFILES);
}

function saveMatrimonialProfiles(list) {
  setStoredItem("slps_matrimonial_profiles", list);
}

let membersDirectoryCache = null;

async function loadExternalMembersJson() {
  try {
    const res = await fetch(`members.json?_t=${Date.now()}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        membersDirectoryCache = data;
        localStorage.setItem("slps_members_directory", JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    console.info("Notice: Using embedded members fallback:", err.message);
  }
  return null;
}

function getMembersDirectory() {
  if (membersDirectoryCache && Array.isArray(membersDirectoryCache)) {
    return membersDirectoryCache;
  }
  return getStoredItem("slps_members_directory", INITIAL_MEMBERS_DIRECTORY);
}

function saveMembersDirectory(list) {
  membersDirectoryCache = list;
  setStoredItem("slps_members_directory", list);
}

function getAnnouncements() {
  return getStoredItem("slps_announcements", INITIAL_ANNOUNCEMENTS);
}

function saveAnnouncements(list) {
  setStoredItem("slps_announcements", list);
}

function getNotifications() {
  return getStoredItem("slps_notifications", INITIAL_NOTIFICATIONS);
}

function saveNotifications(list) {
  setStoredItem("slps_notifications", list);
}

// --- PURE JS QR CODE GENERATOR (Offline SVG generator) ---
function generateQRCodeSVG(text, size = 160) {
  const matrixSize = 25;
  const matrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill(0));

  function drawFinder(r0, c0) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix[r0 + r][c0 + c] = 1;
        }
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, matrixSize - 7);
  drawFinder(matrixSize - 7, 0);

  for (let i = 8; i < matrixSize - 8; i++) {
    matrix[6][i] = i % 2 === 0 ? 1 : 0;
    matrix[i][6] = i % 2 === 0 ? 1 : 0;
  }

  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      if (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)) {
        matrix[18 + r][18 + c] = 1;
      }
    }
  }

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  let seed = Math.abs(hash) || 9876543;
  function rnd() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      if ((r < 8 && c < 8) || (r < 8 && c >= matrixSize - 8) || (r >= matrixSize - 8 && c < 8)) continue;
      if (r === 6 || c === 6) continue;
      if (r >= 16 && r <= 20 && c >= 16 && c <= 20) continue;
      matrix[r][c] = rnd() > 0.48 ? 1 : 0;
    }
  }

  const cellSize = size / matrixSize;
  let paths = "";
  for (let r = 0; r < matrixSize; r++) {
    for (let c = 0; c < matrixSize; c++) {
      if (matrix[r][c] === 1) {
        const x = c * cellSize;
        const y = r * cellSize;
        paths += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cellSize.toFixed(1)}" height="${cellSize.toFixed(1)}" fill="#26372e" />`;
      }
    }
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" aria-label="QR Code for ${text}">${paths}</svg>`;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, isError = false) {
  const toast = document.querySelector("#dash-toast");
  if (!toast) return;
  const msgEl = toast.querySelector(".dash-toast-msg");
  const iconEl = toast.querySelector(".dash-toast-icon");
  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.textContent = isError ? "⚠️" : "✓";
  toast.classList.toggle("toast-error", isError);
  toast.classList.add("show");
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// --- UTILITY FORMATTERS ---
function getInitials(name) {
  if (!name) return "SL";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function calculateAge(dobString) {
  if (!dobString) return "";
  const dob = new Date(dobString);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

// --- TAB SWITCHING (LEFT SIDEBAR & MOBILE DRAWER) ---
function switchTab(tabId) {
  const tabs = document.querySelectorAll(".dash-nav-tab");
  const panes = document.querySelectorAll(".dash-tab-pane");

  tabs.forEach((tab) => {
    const isSelected = tab.dataset.tab === tabId;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });

  // Sync mobile bottom navigation bar
  const bottomBtns = document.querySelectorAll(".mobile-nav-btn[data-tab]");
  bottomBtns.forEach((btn) => {
    const isSelected = btn.dataset.tab === tabId;
    btn.classList.toggle("is-active", isSelected);
    btn.setAttribute("aria-selected", String(isSelected));
  });

  panes.forEach((pane) => {
    const isTarget = pane.id === `pane-${tabId}`;
    pane.hidden = !isTarget;
  });

  // Close mobile sidebar drawer if open
  const sidebar = document.querySelector("#dash-sidebar");
  const overlay = document.querySelector("#sidebar-overlay");
  if (sidebar && sidebar.classList.contains("sidebar-open")) {
    sidebar.classList.remove("sidebar-open");
    if (overlay) overlay.classList.remove("is-active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- 1. TOP ANNOUNCEMENT CAROUSEL CONTROLLER (Above the Navbar) ---
function initAnnouncementCarousel(announcementsList) {
  const track = document.querySelector("#carousel-slider-track");
  const alertLabel = document.querySelector("#top-alert-label");
  const alertPill = document.querySelector("#top-alert-pill");

  if (!track || !announcementsList || announcementsList.length === 0) return;

  if (alertLabel && alertPill) {
    alertLabel.textContent = "Community Notice";
    alertPill.style.background = "var(--dash-green-dark)";
  }

  // Render items and duplicate them for a seamless continuous scrolling loop
  const buildItems = () =>
    announcementsList
      .map((a, idx) => {
        const icon = a.priority === "Important" ? "⭐" : "📢";
        return `
        <span class="ticker-item" data-index="${idx}" data-priority="${a.priority}" data-jump-tab="announcements">
          <span class="slide-content-text">
            ${icon} <strong>${a.title}:</strong> ${a.description.substring(0, 115)}…
          </span>
          <span class="ticker-bullet">&bull;</span>
        </span>
      `;
      })
      .join("");

  const itemsHtml = buildItems();
  // Duplicate for seamless 50% translation infinite loop
  track.innerHTML = itemsHtml + itemsHtml;

  // Jump to announcements tab on click
  track.querySelectorAll(".ticker-item").forEach((item) => {
    item.onclick = () => {
      if (typeof switchTab === "function") {
        switchTab("announcements");
      }
    };
  });
}

// --- 2. MAIN DASHBOARD RENDERER ---
function renderDashboard() {
  const member = getActiveMember();
  const familyList = getFamilyMembers();
  const businessList = getBusinesses();
  const jobList = getJobProfiles();
  const matrimonialList = getMatrimonialProfiles();
  const directoryList = getMembersDirectory();
  const announcementsList = getAnnouncements();
  const notificationsList = getNotifications();

  const fullName = [member.first_name, member.middle_name, member.last_name].filter(Boolean).join(" ");
  const initials = getInitials(fullName);
  const age = calculateAge(member.date_of_birth);

  // 1. Sidebar Brand & User Card
  const sidebarAvatar = document.querySelector("#sidebar-avatar");
  const sidebarUserName = document.querySelector("#sidebar-user-name");
  const sidebarUserId = document.querySelector("#sidebar-user-id");

  if (sidebarAvatar) {
    if (member.avatar) sidebarAvatar.innerHTML = `<img src="${member.avatar}" alt="${fullName}" />`;
    else sidebarAvatar.textContent = initials;
  }
  if (sidebarUserName) sidebarUserName.textContent = fullName;
  if (sidebarUserId) sidebarUserId.textContent = member.member_id;

  // 2. Header Elements: User Chip & READ-ONLY ROLE BADGE
  const headerAvatar = document.querySelector("#header-avatar");
  const headerUserName = document.querySelector("#header-user-name");
  const headerUserId = document.querySelector("#header-user-id");
  const currentRoleName = document.querySelector("#current-role-name");
  const adminBanner = document.querySelector("#admin-mode-banner");

  if (headerAvatar) {
    if (member.avatar) headerAvatar.innerHTML = `<img src="${member.avatar}" alt="${fullName}" />`;
    else headerAvatar.textContent = initials;
  }
  if (headerUserName) headerUserName.textContent = fullName;
  if (headerUserId) headerUserId.textContent = member.member_id;

  // Read-only role display (Managed by admin)
  const roleDisplay = member.role || "Member";
  if (currentRoleName) currentRoleName.textContent = roleDisplay;
  if (adminBanner) adminBanner.hidden = !(roleDisplay.toLowerCase().includes("admin"));

  // 3. Tab Badge Counters in Left Sidebar
  const tabFamCount = document.querySelector("#tab-family-count");
  const tabBizCount = document.querySelector("#tab-business-count");
  const tabJobCount = document.querySelector("#tab-job-count");
  const tabMatriCount = document.querySelector("#tab-matrimonial-count");
  const tabDirCount = document.querySelector("#tab-members-count");
  const tabAnnCount = document.querySelector("#tab-announcements-count");

  if (tabFamCount) tabFamCount.textContent = familyList.length;
  if (tabBizCount) tabBizCount.textContent = businessList.length;
  if (tabJobCount) tabJobCount.textContent = jobList.length;
  if (tabMatriCount) tabMatriCount.textContent = matrimonialList.length;
  if (tabDirCount) tabDirCount.textContent = directoryList.length;
  if (tabAnnCount) tabAnnCount.textContent = announcementsList.length;

  // 4. Overview Welcome & KPIs
  const memberDisplay = document.querySelector("#member-display-name");
  if (memberDisplay) memberDisplay.textContent = `${member.first_name || "Member"}.`;

  const kpiMembers = document.querySelector("#kpi-members-count");
  const kpiFamily = document.querySelector("#kpi-family-count");
  const kpiBiz = document.querySelector("#kpi-business-count");
  const kpiJob = document.querySelector("#kpi-job-count");
  const kpiMatri = document.querySelector("#kpi-matrimonial-count");
  const kpiBlood = document.querySelector("#kpi-blood-count");

  if (kpiMembers) kpiMembers.textContent = directoryList.length;
  if (kpiFamily) kpiFamily.textContent = familyList.length;
  if (kpiBiz) kpiBiz.textContent = businessList.length;
  if (kpiJob) kpiJob.textContent = jobList.length;
  if (kpiMatri) kpiMatri.textContent = matrimonialList.length;
  if (kpiBlood) kpiBlood.textContent = directoryList.filter((m) => m.blood).length;

  // 5. Digital Samaj ID Card Elements
  const idAvatar = document.querySelector("#id-avatar-box");
  const cardName = document.querySelector("#card-member-name");
  const cardId = document.querySelector("#card-member-id");
  const cardBlood = document.querySelector("#card-blood-group");
  const cardRegion = document.querySelector("#card-region");
  const cardQrRender = document.querySelector("#card-qr-render");

  if (idAvatar) idAvatar.textContent = initials;
  if (cardName) cardName.textContent = fullName;
  if (cardId) cardId.textContent = member.member_id;
  if (cardBlood) cardBlood.textContent = member.blood_group || "B+";
  if (cardRegion) cardRegion.textContent = member.region || "Vapi & Valsad District";
  if (cardQrRender) {
    cardQrRender.innerHTML = generateQRCodeSVG(
      `https://slpsvapi.org/verify?id=${encodeURIComponent(member.member_id)}`,
      44
    );
  }

  // 6. Top Announcement Carousel
  initAnnouncementCarousel(announcementsList);

  // 7. Render Notifications Dropdown
  renderNotifications(notificationsList);

  // 8. Render Sub-Modules
  renderProfileSection(member, fullName, initials, age);
  renderFamilySection(familyList);
  renderBusinessSection(businessList);
  renderJobSection(jobList, member);
  renderMatrimonialSection(matrimonialList);
  renderDirectorySection(directoryList);
  renderCommitteeSection();
  renderTrusteesSection();
  renderAnnouncementsSection(announcementsList);
  renderOverviewLists(announcementsList, businessList);
  renderQRPassPane(member, fullName);

  // Reveal main container
  const loading = document.querySelector("#dashboard-loading");
  const main = document.querySelector("#dashboard-main");
  if (loading) loading.hidden = true;
  if (main) main.hidden = false;
}

// --- SUB-MODULE RENDERERS ---

function renderNotifications(notifications) {
  const countEl = document.querySelector("#notif-count");
  const container = document.querySelector("#notification-items-wrap");
  if (!container) return;

  const unreadCount = notifications.filter((n) => n.unread).length;
  if (countEl) countEl.textContent = unreadCount;

  if (notifications.length === 0) {
    container.innerHTML = `<div style="padding:16px; text-align:center; color:var(--dash-muted); font-size:12px;">No notifications.</div>`;
    return;
  }

  container.innerHTML = notifications
    .map(
      (n) => `
    <div class="notification-item ${n.unread ? "unread" : ""}" data-notif-id="${n.id}" data-target-tab="${n.targetTab || "overview"}">
      <span class="notif-icon">🔔</span>
      <div>
        <div class="notif-title">${n.title}</div>
        <p class="notif-text">${n.text}</p>
        <span class="notif-time">${n.time}</span>
      </div>
    </div>
  `
    )
    .join("");

  container.querySelectorAll(".notification-item").forEach((item) => {
    item.addEventListener("click", () => {
      const tab = item.dataset.targetTab;
      if (tab) switchTab(tab);
      const dropdown = document.querySelector("#notif-dropdown");
      if (dropdown) dropdown.hidden = true;
    });
  });
}

function renderProfileSection(member, fullName, initials, age) {
  const largeAvatar = document.querySelector("#profile-large-avatar");
  const cardName = document.querySelector("#profile-card-name");
  const cardRole = document.querySelector("#profile-card-role");
  const statId = document.querySelector("#stat-member-id");
  const statPhone = document.querySelector("#stat-phone");
  const statRegion = document.querySelector("#stat-region");
  const statBlood = document.querySelector("#stat-blood-group");
  const statJoined = document.querySelector("#stat-joined-date");

  if (largeAvatar) {
    if (member.avatar) largeAvatar.innerHTML = `<img src="${member.avatar}" alt="${fullName}" />`;
    else largeAvatar.textContent = initials;
  }
  if (cardName) cardName.textContent = fullName;
  if (cardRole) cardRole.textContent = `${member.occupation || "Member"} • Verified`;
  if (statId) statId.textContent = member.member_id;
  if (statPhone) statPhone.textContent = member.phone;
  if (statRegion) statRegion.textContent = member.region || "Vapi & Valsad";
  if (statBlood) statBlood.textContent = member.blood_group || "B+";
  if (statJoined) statJoined.textContent = member.joined_date;

  // Personal Information
  const pName = document.querySelector("#profile-name");
  const pPhone = document.querySelector("#profile-phone");
  const pEmail = document.querySelector("#profile-email");
  const pDob = document.querySelector("#profile-dob");
  const pGender = document.querySelector("#profile-gender");
  const pMarital = document.querySelector("#profile-marital");
  const pBlood = document.querySelector("#profile-blood-group");
  const pOcc = document.querySelector("#profile-occupation");
  const pQual = document.querySelector("#profile-qualification");

  if (pName) pName.textContent = fullName;
  if (pPhone) pPhone.textContent = member.phone;
  if (pEmail) pEmail.textContent = member.email;
  if (pDob) pDob.textContent = `${member.date_of_birth} (Age ${age || "—"})`;
  if (pGender) pGender.textContent = member.gender;
  if (pMarital) pMarital.textContent = member.marital_status;
  if (pBlood) pBlood.textContent = `${member.blood_group} (Active in Emergency Circle)`;
  if (pOcc) pOcc.textContent = member.occupation || "—";
  if (pQual) pQual.textContent = member.qualification || "—";

  // Permanent Address
  const pHouse = document.querySelector("#profile-perm-house");
  const pStreet = document.querySelector("#profile-perm-street");
  const pCity = document.querySelector("#profile-perm-city");
  const pDist = document.querySelector("#profile-perm-district");
  const pState = document.querySelector("#profile-perm-state");
  const pPin = document.querySelector("#profile-perm-pincode");
  const pFullAddr = document.querySelector("#profile-address");

  const perm = member.permanent_address || {};
  if (pHouse) pHouse.textContent = perm.house || "—";
  if (pStreet) pStreet.textContent = perm.street || "—";
  if (pCity) pCity.textContent = perm.city || "—";
  if (pDist) pDist.textContent = perm.district || "—";
  if (pState) pState.textContent = perm.state || "Gujarat";
  if (pPin) pPin.textContent = perm.pincode || "—";
  if (pFullAddr) {
    pFullAddr.textContent = [perm.house, perm.street, perm.city, perm.district, perm.state, perm.pincode]
      .filter(Boolean)
      .join(", ");
  }

  // Native Address
  const nat = member.native_address || {};
  const nPlace = document.querySelector("#profile-native");
  const nStreet = document.querySelector("#profile-native-street");
  const nCity = document.querySelector("#profile-native-city");
  const nDist = document.querySelector("#profile-native-district");
  const nPin = document.querySelector("#profile-native-pin");

  if (nPlace) nPlace.textContent = `${nat.city || "Roghel"}, Saurashtra`;
  if (nStreet) nStreet.textContent = nat.street || "—";
  if (nCity) nCity.textContent = nat.city || "—";
  if (nDist) nDist.textContent = nat.district || "Amreli";
  if (nPin) nPin.textContent = nat.pincode || "365601";
}

function renderFamilySection(familyList) {
  const container = document.querySelector("#family-grid-container");
  const summaryCount = document.querySelector("#family-summary-count");
  if (!container) return;

  if (summaryCount) summaryCount.textContent = `${familyList.length} Members Registered`;

  if (familyList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #fff; border: 1px dashed var(--dash-line); border-radius: 8px;">
        <p style="color:var(--dash-muted); margin-bottom:12px;">No family members registered under your account yet.</p>
        <button class="button button-small button-primary" id="empty-add-family-btn">Add First Family Member</button>
      </div>
    `;
    const emptyBtn = container.querySelector("#empty-add-family-btn");
    if (emptyBtn) emptyBtn.addEventListener("click", () => openFamilyModal());
    return;
  }

  container.innerHTML = familyList
    .map(
      (m, idx) => `
    <div class="family-card" data-family-idx="${idx}">
      <div class="family-card-top">
        <div class="family-avatar">${getInitials(m.name)}</div>
        <div class="family-primary-info">
          <h4>${m.name}</h4>
          <span class="relation-pill">${m.relation}</span>
        </div>
      </div>
      <div class="family-details-list">
        <span>DOB: <strong>${m.dob} (Age ${calculateAge(m.dob)})</strong></span>
        <span>Blood Group: <strong class="blood-badge">${m.blood_group || "—"}</strong></span>
        <span>Mobile: <strong>${m.phone || "—"}</strong></span>
        <span>Occupation: <strong>${m.occupation || "Homemaker / Student"}</strong></span>
        <span>Qualification: <strong>${m.qualification || "—"}</strong></span>
        ${m.maternal_surname ? `<span>Mosal Atak: <strong>${m.maternal_surname}</strong></span>` : ""}
      </div>
      <div class="family-card-actions">
        <button class="button button-small button-outline view-family-qr-btn" data-idx="${idx}" type="button" title="View Individual QR">📱 QR</button>
        <button class="button button-small button-outline view-family-details-btn" data-idx="${idx}" type="button" title="View Details">👁️</button>
        <button class="button button-small button-outline edit-family-btn" data-idx="${idx}" type="button" title="Edit">✏️</button>
        <button class="button button-small button-outline delete-family-btn" data-idx="${idx}" type="button" title="Delete" style="color:var(--dash-danger);">🗑️</button>
      </div>
    </div>
  `
    )
    .join("");

  container.querySelectorAll(".view-family-qr-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const m = familyList[idx];
      openQRModal(m.id || `SLPS-FAM-${idx + 1}`, m.name, m.blood_group, "Family Member");
    });
  });

  container.querySelectorAll(".view-family-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const m = familyList[idx];
      openDetailsModal("Family Member Profile", `
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">
          <div class="family-avatar" style="width:60px; height:60px; font-size:22px;">${getInitials(m.name)}</div>
          <div>
            <h4 style="margin:0 0 4px; font-size:18px;">${m.name}</h4>
            <span class="relation-pill">${m.relation}</span>
          </div>
        </div>
        <p><strong>Date of Birth:</strong> ${m.dob} (Age ${calculateAge(m.dob)})</p>
        <p><strong>Gender:</strong> ${m.gender || "—"}</p>
        <p><strong>Marital Status:</strong> ${m.marital_status || "—"}</p>
        <p><strong>Blood Group:</strong> ${m.blood_group || "—"}</p>
        <p><strong>Mobile Number:</strong> ${m.phone || "—"}</p>
        <p><strong>Email:</strong> ${m.email || "—"}</p>
        <p><strong>Maternal Surname (Mosal):</strong> ${m.maternal_surname || "—"}</p>
        <p><strong>Occupation:</strong> ${m.occupation || "—"}</p>
        <p><strong>Qualification:</strong> ${m.qualification || "—"}</p>
      `);
    });
  });

  container.querySelectorAll(".edit-family-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openFamilyModal(Number(btn.dataset.idx));
    });
  });

  container.querySelectorAll(".delete-family-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const memberToDelete = familyList[idx];
      if (confirm(`Are you sure you want to remove ${memberToDelete.name} from family records?`)) {
        familyList.splice(idx, 1);
        saveFamilyMembers(familyList);
        renderDashboard();
        showToast("Family member removed successfully.");
      }
    });
  });
}

function renderBusinessSection(businessList, filterCategory = "all") {
  const container = document.querySelector("#business-grid-container");
  if (!container) return;

  const filtered = filterCategory === "all" ? businessList : businessList.filter((b) => b.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: #fff; border: 1px dashed var(--dash-line); border-radius: 8px;">
        <p style="color:var(--dash-muted);">No businesses registered under category "${filterCategory}".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map(
      (b) => `
    <div class="business-card ${b.is_own ? "is-own-business" : ""}">
      <div class="business-header">
        <div class="business-logo-title">
          <div class="business-logo-box">${getInitials(b.name)}</div>
          <div>
            <h4>${b.name}</h4>
            <span class="business-category-tag">${b.category}</span>
          </div>
        </div>
        ${b.is_own ? `<span class="own-business-pill">Your Business</span>` : ""}
      </div>

      <div class="business-info-rows">
        <span>👤 <strong>${b.holder_name}</strong></span>
        <span>📞 ${b.phone}</span>
        ${b.email ? `<span>✉️ ${b.email}</span>` : ""}
        <span>📍 ${b.address}, ${b.city}, ${b.district} - ${b.pincode}</span>
      </div>

      <div class="business-card-actions">
        ${
          b.is_own
            ? `
          <button class="button button-small button-outline edit-biz-btn" data-id="${b.id}">✏️ Edit</button>
          <button class="button button-small button-outline qr-biz-btn" data-id="${b.id}">📱 QR</button>
          <button class="button button-small button-outline delete-biz-btn" data-id="${b.id}" style="color:var(--dash-danger);">🗑️</button>
        `
            : `
          <a class="button button-small whatsapp-chat-btn" href="https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${b.holder_name}, I found ${b.name} on the SLPS Vapi Community Directory.`)}" target="_blank" rel="noopener">
            💬 Chat on WhatsApp
          </a>
          <button class="button button-small button-outline view-biz-details-btn" data-id="${b.id}">Details</button>
        `
        }
      </div>
    </div>
  `
    )
    .join("");

  container.querySelectorAll(".edit-biz-btn").forEach((btn) => {
    btn.addEventListener("click", () => openBusinessModal(btn.dataset.id));
  });

  container.querySelectorAll(".qr-biz-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const b = businessList.find((x) => x.id === btn.dataset.id);
      if (b) openQRModal(b.id, b.name, b.category, b.city);
    });
  });

  container.querySelectorAll(".delete-biz-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (confirm("Delete this business registration?")) {
        const next = businessList.filter((x) => x.id !== id);
        saveBusinesses(next);
        renderDashboard();
        showToast("Business listing deleted.");
      }
    });
  });

  container.querySelectorAll(".view-biz-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const b = businessList.find((x) => x.id === btn.dataset.id);
      if (b) {
        openDetailsModal(`Business: ${b.name}`, `
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:16px;">
            <div class="business-logo-box" style="width:60px; height:60px; font-size:22px;">${getInitials(b.name)}</div>
            <div>
              <h4 style="margin:0 0 4px; font-size:18px;">${b.name}</h4>
              <span class="business-category-tag">${b.category}</span>
            </div>
          </div>
          <p><strong>Business Holder / Proprietor:</strong> ${b.holder_name}</p>
          <p><strong>Phone Number:</strong> ${b.phone}</p>
          <p><strong>Email Address:</strong> ${b.email || "—"}</p>
          <p><strong>Full Address:</strong> ${b.address}, ${b.city}, ${b.district} - ${b.pincode}</p>
          <p><strong>State:</strong> ${b.state || "Gujarat"}</p>
          <div style="margin-top:20px;">
            <a class="button button-small whatsapp-chat-btn" href="https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${b.holder_name}, I saw your business on SLPS Vapi portal.`)}" target="_blank" rel="noopener">
              Open Direct WhatsApp Chat ↗
            </a>
          </div>
        `);
      }
    });
  });
}

function renderJobSection(jobList, member) {
  const ownJob = jobList.find((j) => j.is_own) || jobList[0];
  const jName = document.querySelector("#my-job-name");
  const jQual = document.querySelector("#my-job-qualification");
  const jOcc = document.querySelector("#my-job-occupation");
  const jExp = document.querySelector("#my-job-experience");
  const jComp = document.querySelector("#my-job-company");
  const jPos = document.querySelector("#my-job-position");
  const jLoc = document.querySelector("#my-job-location");
  const jSal = document.querySelector("#my-job-salary");
  const jType = document.querySelector("#my-job-type");
  const jBadge = document.querySelector("#my-job-availability-badge");
  const jSkills = document.querySelector("#my-job-skills-tags");
  const jResumeLabel = document.querySelector("#my-job-resume-label");

  if (ownJob) {
    if (jName) jName.textContent = ownJob.name;
    if (jQual) jQual.textContent = ownJob.qualification;
    if (jOcc) jOcc.textContent = ownJob.occupation;
    if (jExp) jExp.textContent = ownJob.experience;
    if (jComp) jComp.textContent = ownJob.company || "—";
    if (jPos) jPos.textContent = ownJob.position || "—";
    if (jLoc) jLoc.textContent = ownJob.location || "Vapi / Remote";
    if (jSal) jSal.textContent = ownJob.salary ? formatCurrency(ownJob.salary) + " / year" : "Not specified";
    if (jType) jType.textContent = ownJob.job_type;
    if (jBadge) {
      jBadge.textContent = ownJob.availability;
      jBadge.className = `job-availability-badge ${
        ownJob.availability.includes("Looking") ? "badge-looking" : ownJob.availability.includes("Employed") ? "badge-employed" : "badge-open"
      }`;
    }
    if (jSkills) {
      jSkills.innerHTML = (ownJob.skills || []).map((s) => `<span class="skill-pill">${s}</span>`).join("");
    }
    if (jResumeLabel) {
      jResumeLabel.textContent = `📄 ${ownJob.resume || "Resume_Verified.pdf"} (Uploaded)`;
    }
  }

  const container = document.querySelector("#job-directory-container");
  if (!container) return;

  container.innerHTML = jobList
    .map(
      (j) => `
    <div class="job-card">
      <div class="job-card-header">
        <div class="job-seeker-avatar">${getInitials(j.name)}</div>
        <div>
          <h4 style="margin:0 0 2px; font-size:15px;">${j.name}</h4>
          <span style="font-size:11.5px; color:var(--dash-muted);">${j.occupation}</span>
        </div>
        <span class="job-availability-badge ${j.availability.includes("Looking") ? "badge-looking" : j.availability.includes("Employed") ? "badge-employed" : "badge-open"}">
          ${j.availability}
        </span>
      </div>

      <div style="font-size:12px; color:var(--dash-muted); display:flex; flex-direction:column; gap:4px; margin-bottom:8px;">
        <span>🎓 <strong>${j.qualification}</strong> (${j.experience})</span>
        <span>🏢 ${j.company ? `${j.position} at ${j.company}` : "Available for Hire"}</span>
        <span>📍 ${j.location}</span>
      </div>

      <div class="skill-tag-pills">
        ${(j.skills || []).map((s) => `<span class="skill-pill">${s}</span>`).join("")}
      </div>

      <div style="margin-top:auto; padding-top:12px; border-top:1px solid var(--dash-line); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:11px; font-weight:700; color:var(--dash-green-dark);">${j.job_type}</span>
        <a class="button button-small button-outline" href="mailto:${j.email}?subject=Job%20Inquiry%20via%20SLPS%20Portal">
          ✉️ Contact Candidate
        </a>
      </div>
    </div>
  `
    )
    .join("");
}

function renderMatrimonialSection(matrimonialList) {
  const container = document.querySelector("#matrimonial-grid-container");
  const myCard = document.querySelector("#my-matrimonial-card");
  if (!container) return;

  container.innerHTML = matrimonialList
    .map(
      (m, idx) => `
    <div class="matrimonial-card">
      <div class="matrimonial-top">
        <div class="matrimonial-photo">${getInitials(m.name)}</div>
        <div class="matrimonial-primary">
          <h4>${m.name}</h4>
          <span class="gender-age-pill">${m.gender === "Female" ? "Bride (Kanya)" : "Groom (Yuvak)"} • Age ${calculateAge(m.dob)} • ${m.height || "5 ft 8 in"}</span>
          <div style="font-size:11.5px; color:var(--dash-muted); margin-top:2px;">📍 ${m.native_place}</div>
        </div>
      </div>

      <dl class="matrimonial-details-grid">
        <dt>Education</dt>
        <dd>${m.qualification}</dd>
        <dt>Occupation</dt>
        <dd>${m.occupation}</dd>
        <dt>Mosal Atak</dt>
        <dd>${m.maternal_surname || "Patel"}</dd>
        <dt>Family City</dt>
        <dd>${m.family_address?.split(",")[0] || "Vapi"}</dd>
      </dl>

      <div style="font-size:11.5px; color:var(--dash-muted); margin-bottom:12px;">
        <strong>Preferences:</strong> Age ${m.pref_age_min || 20}-${m.pref_age_max || 28}, ${m.pref_city || "Gujarat"}.
      </div>

      <div style="margin-top:auto; display:flex; gap:8px;">
        <button class="button button-small button-primary full-width view-matri-details-btn" data-idx="${idx}" type="button">
          View Complete Bio-data 📄
        </button>
      </div>
    </div>
  `
    )
    .join("");

  container.querySelectorAll(".view-matri-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const m = matrimonialList[idx];
      openDetailsModal(`Matrimonial Bio-data: ${m.name}`, `
        <div style="display:flex; gap:16px; align-items:center; margin-bottom:18px;">
          <div class="matrimonial-photo" style="width:72px; height:72px; font-size:26px;">${getInitials(m.name)}</div>
          <div>
            <h4 style="margin:0 0 4px; font-size:19px;">${m.name}</h4>
            <span class="gender-age-pill">${m.gender === "Female" ? "Kanya (Bride)" : "Yuvak (Groom)"} • DOB: ${m.dob} (Age ${calculateAge(m.dob)})</span>
          </div>
        </div>

        <div class="section-label" style="margin:14px 0 8px;"><span>5.1</span> Personal Attributes</div>
        <p><strong>Height:</strong> ${m.height || "—"} | <strong>Weight:</strong> ${m.weight ? m.weight + " kg" : "—"} | <strong>Blood Group:</strong> ${m.blood_group || "—"}</p>
        <p><strong>Community:</strong> ${m.sub_community || "Saurashtra Leuva Patel"} | <strong>Maternal Surname (Mosal):</strong> ${m.maternal_surname || "—"}</p>

        <div class="section-label" style="margin:14px 0 8px;"><span>5.2</span> Education &amp; Career</div>
        <p><strong>Qualification:</strong> ${m.qualification}</p>
        <p><strong>Occupation:</strong> ${m.occupation} ${m.company ? `at ${m.company}` : ""}</p>
        <p><strong>Annual Income:</strong> ${m.income ? formatCurrency(m.income) + " / year" : "Confidential"}</p>

        <div class="section-label" style="margin:14px 0 8px;"><span>5.3</span> Family Background</div>
        <p><strong>Father:</strong> ${m.father_details || "—"}</p>
        <p><strong>Mother:</strong> ${m.mother_details || "—"}</p>
        <p><strong>Total Family Members:</strong> ${m.family_members_count || 4}</p>
        <p><strong>Native Place (Saurashtra):</strong> ${m.native_place}</p>
        <p><strong>Family Residence:</strong> ${m.family_address}</p>

        <div class="section-label" style="margin:14px 0 8px;"><span>5.4</span> Partner Expectations</div>
        <p><strong>Preferred Age:</strong> ${m.pref_age_min || 20} to ${m.pref_age_max || 28} years</p>
        <p><strong>Preferred Cities:</strong> ${m.pref_city || "Any"}</p>
        <p><strong>Expectations &amp; Lifestyle:</strong> ${m.pref_notes || "Educated, understanding, and culturally grounded."}</p>
      `);
    });
  });

  const ownMatri = matrimonialList.find((m) => m.is_own) || matrimonialList[0];
  if (myCard && ownMatri) {
    myCard.innerHTML = `
      <div class="dash-card-header">
        <h3><span>💍</span> My Registered Matrimonial Record</h3>
        <button class="button button-small button-outline" id="edit-my-matrimonial-btn" type="button">✏️ Edit Bio-data</button>
      </div>
      <dl class="profile-details">
        <div><dt>Full Name</dt><dd>${ownMatri.name}</dd></div>
        <div><dt>Gender &amp; Age</dt><dd>${ownMatri.gender} (Age ${calculateAge(ownMatri.dob)})</dd></div>
        <div><dt>Date of Birth</dt><dd>${ownMatri.dob}</dd></div>
        <div><dt>Height / Weight</dt><dd>${ownMatri.height || "5 ft 10 in"} &bull; ${ownMatri.weight ? ownMatri.weight + " kg" : "68 kg"}</dd></div>
        <div><dt>Education</dt><dd>${ownMatri.qualification}</dd></div>
        <div><dt>Occupation</dt><dd>${ownMatri.occupation}</dd></div>
        <div><dt>Native Place</dt><dd>${ownMatri.native_place}</dd></div>
        <div><dt>Maternal Surname</dt><dd>${ownMatri.maternal_surname || "Dholakiya"}</dd></div>
        <div><dt>Father's Details</dt><dd>${ownMatri.father_details}</dd></div>
        <div><dt>Mother's Details</dt><dd>${ownMatri.mother_details}</dd></div>
        <div style="grid-column: 1 / -1;"><dt>Partner Expectations</dt><dd>${ownMatri.pref_notes}</dd></div>
      </dl>
    `;
    const editBtn = myCard.querySelector("#edit-my-matrimonial-btn");
    if (editBtn) {
      editBtn.addEventListener("click", () => openMatrimonialModal());
    }
  }
}

function renderDirectorySection(directoryList) {
  const tbody = document.querySelector("#directory-table-body");
  if (!tbody) return;

  const searchVal = (document.querySelector("#dir-search-input")?.value || "").toLowerCase().trim();
  const filterCity = document.querySelector("#dir-filter-city")?.value || "all";
  const filterBlood = document.querySelector("#dir-filter-blood")?.value || "all";
  const filterGender = document.querySelector("#dir-filter-gender")?.value || "all";

  const filtered = directoryList.filter((m) => {
    if (searchVal) {
      const match =
        m.name.toLowerCase().includes(searchVal) ||
        m.id.toLowerCase().includes(searchVal) ||
        (m.phone && m.phone.includes(searchVal));
      if (!match) return false;
    }
    if (filterCity !== "all" && m.city !== filterCity) return false;
    if (filterBlood !== "all" && m.blood !== filterBlood) return false;
    if (filterGender !== "all" && m.gender !== filterGender) return false;
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:32px; color:var(--dash-muted);">No members found matching your filter criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map(
      (m) => `
    <tr>
      <td>
        <div class="member-cell">
          <div class="member-cell-avatar">${getInitials(m.name)}</div>
          <div>
            <strong>${m.name}</strong>
            <div style="font-size:11px; color:var(--dash-muted);">${m.gender} • Age ${calculateAge(m.dob)}</div>
          </div>
        </div>
      </td>
      <td><span style="font-family:ui-monospace, monospace; font-size:11.5px; font-weight:700;">${m.id}</span></td>
      <td><span class="blood-badge">${m.blood || "—"}</span></td>
      <td>${m.city}, ${m.district || "Valsad"}</td>
      <td>${m.occupation || "Member"}</td>
      <td>${m.phone || "—"}</td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="button button-small button-outline view-dir-member-btn" data-id="${m.id}" type="button" title="View Profile">👁️</button>
          <button class="button button-small button-outline view-dir-qr-btn" data-id="${m.id}" type="button" title="View Digital QR">📱</button>
        </div>
      </td>
    </tr>
  `
    )
    .join("");

  tbody.querySelectorAll(".view-dir-member-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const m = directoryList.find((x) => x.id === btn.dataset.id);
      if (m) {
        openDetailsModal(`Member Profile: ${m.name}`, `
          <div style="display:flex; gap:14px; align-items:center; margin-bottom:16px;">
            <div class="member-cell-avatar" style="width:56px; height:56px; font-size:20px;">${getInitials(m.name)}</div>
            <div>
              <h4 style="margin:0 0 4px; font-size:18px;">${m.name}</h4>
              <span class="card-pill">Member ID: ${m.id}</span>
            </div>
          </div>
          <p><strong>Blood Group:</strong> ${m.blood || "—"}</p>
          <p><strong>City / District:</strong> ${m.city}, ${m.district || "Valsad"}</p>
          <p><strong>Occupation:</strong> ${m.occupation || "—"}</p>
          <p><strong>Mobile Number:</strong> ${m.phone || "—"}</p>
          <p><strong>Verification Status:</strong> <span class="text-success">Official Verified Member ✓</span></p>
        `);
      }
    });
  });

  tbody.querySelectorAll(".view-dir-qr-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const m = directoryList.find((x) => x.id === btn.dataset.id);
      if (m) openQRModal(m.id, m.name, m.blood, m.city);
    });
  });
}

function renderCommitteeSection() {
  const container = document.querySelector("#committee-grid-container");
  if (!container) return;

  container.innerHTML = INITIAL_COMMITTEE.map(
    (c) => `
    <div class="committee-card">
      <div class="committee-top">
        <div class="committee-avatar">${getInitials(c.name)}</div>
        <div>
          <h4 style="margin:0 0 2px; font-size:16px;">${c.name}</h4>
          <span class="designation-pill ${c.designation.includes("President") ? "president" : ""}">${c.designation}</span>
          <div style="font-size:11px; color:var(--dash-muted); margin-top:3px;">Tenure: ${c.tenure}</div>
        </div>
      </div>
      <p style="font-size:12px; color:var(--dash-muted); line-height:1.5; margin:0 0 12px; flex:1;">${c.bio}</p>
      <div style="font-size:11.5px; color:var(--dash-ink); display:flex; flex-direction:column; gap:4px; padding-top:10px; border-top:1px solid var(--dash-line);">
        <span>📞 ${c.phone}</span>
        <span>✉️ ${c.email}</span>
        <span>📍 ${c.address}</span>
      </div>
      <div style="margin-top:14px; display:flex; gap:8px;">
        <a class="button button-small button-outline full-width" href="tel:${c.phone}">Call</a>
        <a class="button button-small button-outline full-width" href="mailto:${c.email}">Email</a>
      </div>
    </div>
  `
  ).join("");
}

function renderTrusteesSection() {
  const container = document.querySelector("#trustees-grid-container");
  if (!container) return;

  container.innerHTML = INITIAL_TRUSTEES.map(
    (t) => `
    <div class="committee-card">
      <div class="committee-top">
        <div class="committee-avatar">
          ${t.photo ? `<img src="${t.photo}" alt="${t.name}" />` : getInitials(t.name)}
        </div>
        <div>
          <h4 style="margin:0 0 2px; font-size:16px;">${t.name}</h4>
          <span class="designation-pill president">${t.designation}</span>
          <div style="font-size:11px; color:var(--dash-muted); margin-top:3px;">Appointed: Year ${t.appointed}</div>
        </div>
      </div>
      <p style="font-size:12px; color:var(--dash-muted); line-height:1.5; margin:0 0 12px; flex:1;">${t.bio}</p>
      <div style="font-size:11.5px; color:var(--dash-ink); display:flex; flex-direction:column; gap:4px; padding-top:10px; border-top:1px solid var(--dash-line);">
        <span>📞 ${t.phone}</span>
        ${t.email ? `<span>✉️ ${t.email}</span>` : ""}
        <span>📍 ${t.address}</span>
      </div>
    </div>
  `
  ).join("");
}

function renderAnnouncementsSection(announcementsList, filterPriority = "all") {
  const container = document.querySelector("#announcements-list-container");
  if (!container) return;

  const filtered = filterPriority === "all" ? announcementsList : announcementsList.filter((a) => a.priority === filterPriority);

  container.innerHTML = filtered
    .map(
      (a) => `
    <article class="announcement-card ${a.pinned ? "is-pinned" : ""} ${a.priority === "Urgent" ? "priority-urgent" : ""}">
      <div class="announcement-top">
        <span class="announcement-priority-badge ${
          a.priority === "Urgent"
            ? "priority-badge-urgent"
            : a.priority === "Important"
              ? "priority-badge-important"
              : "priority-badge-normal"
        }">
          ${a.priority === "Urgent" ? "🚨 " : ""}${a.priority}
        </span>
        <span class="announcement-meta">Published: ${a.published_date} by ${a.published_by}</span>
      </div>
      <h4>${a.title}</h4>
      <p class="announcement-desc">${a.description}</p>
      <div class="announcement-footer">
        <div>
          ${a.attachment ? `<span>📎 Attachment: <strong>${a.attachment}</strong></span>` : "<span>Official Community Notice</span>"}
        </div>
        <div style="display:flex; gap:8px;">
          ${
            a.attachment
              ? `<button class="button button-small button-outline download-attach-btn" data-file="${a.attachment}" type="button">📥 Download PDF</button>`
              : ""
          }
          <button class="button button-small button-outline share-ann-btn" data-title="${a.title}" type="button">🔗 Share</button>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  container.querySelectorAll(".download-attach-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast(`Downloading official circular: ${btn.dataset.file}…`);
    });
  });

  container.querySelectorAll(".share-ann-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`SLPS Vapi Announcement: ${title}\nhttps://slpsvapi.org/dashboard.html?tab=announcements`);
        showToast("Announcement link copied to clipboard!");
      }
    });
  });
}

function renderOverviewLists(announcementsList, businessList) {
  const annContainer = document.querySelector("#overview-announcements-list");
  if (annContainer) {
    const top3 = announcementsList.slice(0, 3);
    annContainer.innerHTML = top3
      .map(
        (a) => `
      <div style="padding:12px; background:#fafaf7; border:1px solid var(--dash-line); border-radius:6px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span class="announcement-priority-badge ${
            a.priority === "Urgent" ? "priority-badge-urgent" : a.priority === "Important" ? "priority-badge-important" : "priority-badge-normal"
          }" style="font-size:9.5px; padding:2px 6px;">${a.priority}</span>
          <span style="font-size:10.5px; color:var(--dash-muted);">${a.published_date}</span>
        </div>
        <h4 style="margin:0 0 4px; font-size:13.5px;">${a.title}</h4>
        <p style="margin:0; font-size:11.5px; color:var(--dash-muted); line-height:1.4;">${a.description.substring(0, 110)}…</p>
      </div>
    `
      )
      .join("");
  }

  const bizContainer = document.querySelector("#overview-businesses-list");
  if (bizContainer) {
    const top3Biz = businessList.slice(0, 3);
    bizContainer.innerHTML = top3Biz
      .map(
        (b) => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:#fafaf7; border:1px solid var(--dash-line); border-radius:6px;">
        <div>
          <strong style="font-size:13px; color:var(--dash-ink);">${b.name}</strong>
          <div style="font-size:11px; color:var(--dash-muted);">${b.category} • ${b.city}</div>
        </div>
        <a class="button button-small whatsapp-chat-btn" style="min-height:30px; padding:0 10px; font-size:10.5px;" href="https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=Hello" target="_blank" rel="noopener">
          WhatsApp
        </a>
      </div>
    `
      )
      .join("");
  }
}

function renderQRPassPane(member, fullName) {
  const qrSvgWrap = document.querySelector("#main-qr-svg-render");
  const pMemberId = document.querySelector("#qr-pane-member-id");
  const pName = document.querySelector("#qr-pane-name");
  const pBlood = document.querySelector("#qr-pane-blood");

  if (pMemberId) pMemberId.textContent = member.member_id;
  if (pName) pName.textContent = fullName;
  if (pBlood) pBlood.textContent = member.blood_group || "B+";

  if (qrSvgWrap) {
    qrSvgWrap.innerHTML = generateQRCodeSVG(
      `https://slpsvapi.org/verify?id=${encodeURIComponent(member.member_id)}&name=${encodeURIComponent(fullName)}&blood=${encodeURIComponent(member.blood_group || "B+")}`,
      200
    );
  }
}

// --- MODAL CONTROLLERS ---
function openDetailsModal(title, htmlContent) {
  const modal = document.querySelector("#modal-view-details");
  const titleEl = document.querySelector("#modal-view-title");
  const bodyEl = document.querySelector("#modal-view-body");
  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.innerHTML = htmlContent;
  if (!modal.open) modal.showModal();
}

function openQRModal(id, name, blood, note = "") {
  const modal = document.querySelector("#modal-qr-code");
  const nameEl = document.querySelector("#modal-qr-name");
  const idEl = document.querySelector("#modal-qr-id");
  const svgWrap = document.querySelector("#modal-qr-svg-wrap");
  const detailsEl = document.querySelector("#modal-qr-details");
  if (!modal) return;

  if (nameEl) nameEl.textContent = name;
  if (idEl) idEl.textContent = `Record ID: ${id}`;
  if (svgWrap) {
    svgWrap.innerHTML = generateQRCodeSVG(`https://slpsvapi.org/verify?id=${encodeURIComponent(id)}`, 180);
  }
  if (detailsEl) {
    detailsEl.innerHTML = `
      <div><span>Record Holder:</span> <strong>${name}</strong></div>
      <div><span>Category / Blood:</span> <strong>${blood || "—"}</strong></div>
      <div><span>Verification:</span> <strong class="text-success">Verified Samaj Pass ✓</strong></div>
    `;
  }
  if (!modal.open) modal.showModal();
}

function openFamilyModal(editIndex = null) {
  const modal = document.querySelector("#modal-add-family");
  const form = document.querySelector("#form-family-member");
  const title = document.querySelector("#modal-family-title");
  const indexInput = document.querySelector("#family-edit-index");
  if (!modal || !form) return;

  form.reset();
  if (editIndex !== null) {
    const list = getFamilyMembers();
    const item = list[editIndex];
    if (item) {
      if (title) title.textContent = "Edit Family Member";
      if (indexInput) indexInput.value = String(editIndex);
      form.elements["name"].value = item.name || "";
      form.elements["relation"].value = item.relation || "Son";
      form.elements["dob"].value = item.dob || "";
      form.elements["gender"].value = item.gender || "Male";
      form.elements["marital_status"].value = item.marital_status || "Single";
      form.elements["blood_group"].value = item.blood_group || "B+";
      form.elements["phone"].value = item.phone || "";
      form.elements["email"].value = item.email || "";
      form.elements["maternal_surname"].value = item.maternal_surname || "";
      form.elements["occupation"].value = item.occupation || "";
      form.elements["qualification"].value = item.qualification || "";
    }
  } else {
    if (title) title.textContent = "Add Family Member";
    if (indexInput) indexInput.value = "";
  }
  if (!modal.open) modal.showModal();
}

function openBusinessModal(editId = null) {
  const modal = document.querySelector("#modal-add-business");
  const form = document.querySelector("#form-business");
  const title = document.querySelector("#modal-biz-title");
  const editIdInput = document.querySelector("#biz-edit-id");
  if (!modal || !form) return;

  form.reset();
  if (editId) {
    const list = getBusinesses();
    const item = list.find((b) => b.id === editId);
    if (item) {
      if (title) title.textContent = "Edit Business Listing";
      if (editIdInput) editIdInput.value = editId;
      form.elements["name"].value = item.name || "";
      form.elements["holder_name"].value = item.holder_name || "";
      form.elements["category"].value = item.category || "IT & Software";
      form.elements["phone"].value = item.phone || "";
      form.elements["email"].value = item.email || "";
      form.elements["address"].value = item.address || "";
      form.elements["city"].value = item.city || "Vapi";
      form.elements["district"].value = item.district || "Valsad";
      form.elements["pincode"].value = item.pincode || "396191";
    }
  } else {
    if (title) title.textContent = "Register Business in Directory";
    if (editIdInput) editIdInput.value = "";
  }
  if (!modal.open) modal.showModal();
}

function openMatrimonialModal() {
  const modal = document.querySelector("#modal-register-matrimonial");
  const form = document.querySelector("#form-matrimonial-profile");
  if (!modal || !form) return;
  const matriList = getMatrimonialProfiles();
  const ownMatri = matriList.find((m) => m.is_own) || matriList[0];
  if (ownMatri) {
    form.elements["name"].value = ownMatri.name || "";
    form.elements["gender"].value = ownMatri.gender || "Male";
    form.elements["dob"].value = ownMatri.dob || "";
    form.elements["height"].value = ownMatri.height || "5 ft 10 in";
    form.elements["weight"].value = ownMatri.weight || "68";
    form.elements["marital_status"].value = ownMatri.marital_status || "Single";
    form.elements["blood_group"].value = ownMatri.blood_group || "B+";
    form.elements["maternal_surname"].value = ownMatri.maternal_surname || "";
    form.elements["qualification"].value = ownMatri.qualification || "";
    form.elements["occupation"].value = ownMatri.occupation || "";
    form.elements["company"].value = ownMatri.company || "";
    form.elements["income"].value = ownMatri.income || "";
    form.elements["father_details"].value = ownMatri.father_details || "";
    form.elements["mother_details"].value = ownMatri.mother_details || "";
    form.elements["family_members_count"].value = ownMatri.family_members_count || 4;
    form.elements["native_place"].value = ownMatri.native_place || "Roghel, Amreli";
    form.elements["pref_age_min"].value = ownMatri.pref_age_min || 19;
    form.elements["pref_age_max"].value = ownMatri.pref_age_max || 25;
    form.elements["pref_city"].value = ownMatri.pref_city || "Vapi, Surat";
    form.elements["pref_notes"].value = ownMatri.pref_notes || "";
  }
  if (!modal.open) modal.showModal();
}

// --- GLOBAL SEARCH ENGINE ---
function handleGlobalSearch(query) {
  const resultsDropdown = document.querySelector("#global-search-results");
  if (!resultsDropdown) return;

  const q = query.toLowerCase().trim();
  if (q.length < 2) {
    resultsDropdown.hidden = true;
    resultsDropdown.innerHTML = "";
    return;
  }

  const directory = getMembersDirectory();
  const businesses = getBusinesses();
  const jobs = getJobProfiles();
  const announcements = getAnnouncements();

  const matchedMembers = directory.filter((m) => m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q)).slice(0, 3);
  const matchedBiz = businesses.filter((b) => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)).slice(0, 3);
  const matchedJobs = jobs.filter((j) => j.name.toLowerCase().includes(q) || (j.skills && j.skills.some((s) => s.toLowerCase().includes(q)))).slice(0, 3);
  const matchedAnn = announcements.filter((a) => a.title.toLowerCase().includes(q)).slice(0, 2);

  const totalMatches = matchedMembers.length + matchedBiz.length + matchedJobs.length + matchedAnn.length;

  if (totalMatches === 0) {
    resultsDropdown.innerHTML = `<div style="padding:12px 16px; font-size:12px; color:var(--dash-muted);">No results found for "${query}".</div>`;
    resultsDropdown.hidden = false;
    return;
  }

  let html = "";
  if (matchedMembers.length) {
    html += `<div class="search-result-group-title">Members</div>`;
    matchedMembers.forEach((m) => {
      html += `
        <div class="search-result-item" data-jump-tab="directory">
          <span class="search-result-icon">👤</span>
          <div>
            <strong>${m.name}</strong> <span class="search-result-meta">(${m.id} • ${m.city})</span>
          </div>
        </div>
      `;
    });
  }

  if (matchedBiz.length) {
    html += `<div class="search-result-group-title">Businesses</div>`;
    matchedBiz.forEach((b) => {
      html += `
        <div class="search-result-item" data-jump-tab="business">
          <span class="search-result-icon">🏢</span>
          <div>
            <strong>${b.name}</strong> <span class="search-result-meta">(${b.category})</span>
          </div>
        </div>
      `;
    });
  }

  if (matchedJobs.length) {
    html += `<div class="search-result-group-title">Talent &amp; Jobs</div>`;
    matchedJobs.forEach((j) => {
      html += `
        <div class="search-result-item" data-jump-tab="job">
          <span class="search-result-icon">💼</span>
          <div>
            <strong>${j.name}</strong> <span class="search-result-meta">(${j.occupation})</span>
          </div>
        </div>
      `;
    });
  }

  if (matchedAnn.length) {
    html += `<div class="search-result-group-title">Notices</div>`;
    matchedAnn.forEach((a) => {
      html += `
        <div class="search-result-item" data-jump-tab="announcements">
          <span class="search-result-icon">📢</span>
          <div>
            <strong>${a.title}</strong>
          </div>
        </div>
      `;
    });
  }

  resultsDropdown.innerHTML = html;
  resultsDropdown.hidden = false;

  resultsDropdown.querySelectorAll(".search-result-item").forEach((item) => {
    item.addEventListener("click", () => {
      switchTab(item.dataset.jumpTab);
      resultsDropdown.hidden = true;
    });
  });
}

// --- LOGOUT / SIGN OUT HANDLER ---
function handleSignOut() {
  localStorage.removeItem("slps_current_user");
  window.location.replace("index.html");
}

// --- EVENT LISTENERS INITIALIZATION ---
function initEventListeners() {
  // 1. Navigation Tab Switching in Left Sidebar
  document.querySelectorAll(".dash-nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Jump tab shortcuts (e.g. quick access cards, breadcrumbs)
  document.addEventListener("click", (e) => {
    const jumpEl = e.target.closest("[data-jump-tab]");
    if (jumpEl) {
      switchTab(jumpEl.dataset.jumpTab);
    }
  });

  // Mobile sidebar drawer toggles
  const mobileToggle = document.querySelector("#mobile-sidebar-toggle");
  const sidebarCloseBtn = document.querySelector("#sidebar-close-btn");
  const mobileBottomMenu = document.querySelector("#mobile-bottom-menu-trigger");
  const sidebar = document.querySelector("#dash-sidebar");
  const overlay = document.querySelector("#sidebar-overlay");

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-open");
      if (overlay) overlay.classList.toggle("is-active");
    });
  }

  if (sidebarCloseBtn && sidebar) {
    sidebarCloseBtn.addEventListener("click", () => {
      sidebar.classList.remove("sidebar-open");
      if (overlay) overlay.classList.remove("is-active");
    });
  }

  if (mobileBottomMenu && sidebar) {
    mobileBottomMenu.addEventListener("click", () => {
      sidebar.classList.add("sidebar-open");
      if (overlay) overlay.classList.add("is-active");
    });
  }

  if (overlay && sidebar) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("sidebar-open");
      overlay.classList.remove("is-active");
    });
  }

  // Mobile Bottom Navigation Bar button taps
  document.querySelectorAll(".mobile-nav-btn[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });

  // 2. Notifications Toggle
  const notifBtn = document.querySelector("#notif-toggle-btn");
  const notifDropdown = document.querySelector("#notif-dropdown");
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      notifDropdown.hidden = !notifDropdown.hidden;
    });
    document.addEventListener("click", (e) => {
      if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
        notifDropdown.hidden = true;
      }
    });
  }

  const markAllReadBtn = document.querySelector("#mark-all-read-btn");
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener("click", () => {
      const notifs = getNotifications();
      notifs.forEach((n) => (n.unread = false));
      saveNotifications(notifs);
      renderNotifications(notifs);
      showToast("All notifications marked as read.");
    });
  }

  // 3. Global Search Input
  const searchInput = document.querySelector("#global-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleGlobalSearch(e.target.value);
    });
    document.addEventListener("click", (e) => {
      const searchBox = document.querySelector(".dash-search-box");
      const results = document.querySelector("#global-search-results");
      if (results && searchBox && !searchBox.contains(e.target)) {
        results.hidden = true;
      }
    });
  }

  // 4. Close Modals
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("dialog");
      if (modal) modal.close();
    });
  });

  // 5. Profile Editing Handlers
  const openEditProfileBtn = document.querySelector("#open-edit-profile-modal");
  const editProfileModal = document.querySelector("#modal-edit-profile");
  const editProfileForm = document.querySelector("#form-edit-profile");

  if (openEditProfileBtn && editProfileModal && editProfileForm) {
    openEditProfileBtn.addEventListener("click", () => {
      const m = getActiveMember();
      const perm = m.permanent_address || {};
      const nat = m.native_address || {};

      editProfileForm.elements["first_name"].value = m.first_name || "";
      editProfileForm.elements["middle_name"].value = m.middle_name || "";
      editProfileForm.elements["last_name"].value = m.last_name || "";
      editProfileForm.elements["date_of_birth"].value = m.date_of_birth || "";
      editProfileForm.elements["gender"].value = m.gender || "Male";
      editProfileForm.elements["marital_status"].value = m.marital_status || "Single";
      editProfileForm.elements["blood_group"].value = m.blood_group || "B+";
      editProfileForm.elements["occupation"].value = m.occupation || "";
      editProfileForm.elements["qualification"].value = m.qualification || "";
      editProfileForm.elements["phone"].value = m.phone || "";
      editProfileForm.elements["email"].value = m.email || "";

      editProfileForm.elements["perm_house"].value = perm.house || "";
      editProfileForm.elements["perm_street"].value = perm.street || "";
      editProfileForm.elements["perm_city"].value = perm.city || "Vapi";
      editProfileForm.elements["perm_district"].value = perm.district || "Valsad";
      editProfileForm.elements["perm_pincode"].value = perm.pincode || "396191";

      editProfileForm.elements["native_house"].value = nat.house || "";
      editProfileForm.elements["native_city"].value = nat.city || "Roghel";
      editProfileForm.elements["native_district"].value = nat.district || "Amreli";
      editProfileForm.elements["native_pincode"].value = nat.pincode || "365601";

      if (!editProfileModal.open) editProfileModal.showModal();
    });

    const copyPermBtn = document.querySelector("#copy-perm-to-native-btn");
    if (copyPermBtn) {
      copyPermBtn.addEventListener("click", () => {
        editProfileForm.elements["native_house"].value = editProfileForm.elements["perm_house"].value;
        editProfileForm.elements["native_city"].value = editProfileForm.elements["perm_city"].value;
        editProfileForm.elements["native_district"].value = editProfileForm.elements["perm_district"].value;
        editProfileForm.elements["native_pincode"].value = editProfileForm.elements["perm_pincode"].value;
        showToast("Copied permanent address to native fields.");
      });
    }

    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const m = getActiveMember();
      const fd = new FormData(editProfileForm);

      m.first_name = String(fd.get("first_name") || "").trim() || m.first_name;
      m.middle_name = String(fd.get("middle_name") || "").trim();
      m.last_name = String(fd.get("last_name") || "").trim() || m.last_name;
      m.date_of_birth = String(fd.get("date_of_birth") || m.date_of_birth);
      m.gender = String(fd.get("gender") || m.gender);
      m.marital_status = String(fd.get("marital_status") || m.marital_status);
      m.blood_group = String(fd.get("blood_group") || m.blood_group);
      m.occupation = String(fd.get("occupation") || "").trim();
      m.qualification = String(fd.get("qualification") || "").trim();
      m.phone = String(fd.get("phone") || m.phone).trim();
      m.email = String(fd.get("email") || m.email).trim().toLowerCase();

      m.permanent_address = {
        house: String(fd.get("perm_house") || "").trim(),
        street: String(fd.get("perm_street") || "").trim(),
        city: String(fd.get("perm_city") || "Vapi").trim(),
        district: String(fd.get("perm_district") || "Valsad").trim(),
        state: "Gujarat",
        pincode: String(fd.get("perm_pincode") || "396191").trim()
      };

      m.native_address = {
        house: String(fd.get("native_house") || "").trim(),
        street: "Main Bazar",
        city: String(fd.get("native_city") || "Roghel").trim(),
        district: String(fd.get("native_district") || "Amreli").trim(),
        state: "Gujarat",
        pincode: String(fd.get("native_pincode") || "365601").trim()
      };

      saveActiveMember(m);
      renderDashboard();
      editProfileModal.close();
      showToast("Profile details updated successfully!");
    });
  }

  // Photo Upload Handler (base64 preview)
  const photoUploadInput = document.querySelector("#profile-photo-upload");
  if (photoUploadInput) {
    photoUploadInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const m = getActiveMember();
          m.avatar = event.target.result;
          saveActiveMember(m);
          renderDashboard();
          showToast("Profile picture updated!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 6. Family Form Handlers
  const familyForm = document.querySelector("#form-family-member");
  const familyModal = document.querySelector("#modal-add-family");
  const openAddFamBtn = document.querySelector("#open-add-family-modal");

  if (openAddFamBtn) openAddFamBtn.addEventListener("click", () => openFamilyModal());

  if (familyForm && familyModal) {
    familyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const list = getFamilyMembers();
      const fd = new FormData(familyForm);
      const editIdx = document.querySelector("#family-edit-index")?.value;

      const record = {
        id: editIdx !== "" ? list[Number(editIdx)].id : `FAM-${String(list.length + 1).padStart(2, "0")}`,
        name: String(fd.get("name") || "").trim(),
        relation: String(fd.get("relation") || "Other"),
        dob: String(fd.get("dob") || ""),
        gender: String(fd.get("gender") || "Male"),
        marital_status: String(fd.get("marital_status") || "Single"),
        blood_group: String(fd.get("blood_group") || "B+"),
        phone: String(fd.get("phone") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        maternal_surname: String(fd.get("maternal_surname") || "").trim(),
        occupation: String(fd.get("occupation") || "").trim(),
        qualification: String(fd.get("qualification") || "").trim()
      };

      if (editIdx !== "") {
        list[Number(editIdx)] = record;
        showToast("Family member details updated.");
      } else {
        list.push(record);
        showToast("New family member registered successfully!");
      }

      saveFamilyMembers(list);
      renderDashboard();
      familyModal.close();
    });
  }

  // 7. Business Form & Category Filters
  const bizForm = document.querySelector("#form-business");
  const bizModal = document.querySelector("#modal-add-business");
  const openAddBizBtn = document.querySelector("#open-add-business-modal");

  if (openAddBizBtn) openAddBizBtn.addEventListener("click", () => openBusinessModal());

  if (bizForm && bizModal) {
    bizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const list = getBusinesses();
      const fd = new FormData(bizForm);
      const editId = document.querySelector("#biz-edit-id")?.value;

      const record = {
        id: editId || `BIZ-${String(list.length + 1).padStart(2, "0")}`,
        name: String(fd.get("name") || "").trim(),
        holder_name: String(fd.get("holder_name") || "").trim(),
        category: String(fd.get("category") || "Other"),
        phone: String(fd.get("phone") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        address: String(fd.get("address") || "").trim(),
        city: String(fd.get("city") || "Vapi").trim(),
        district: String(fd.get("district") || "Valsad").trim(),
        state: "Gujarat",
        pincode: String(fd.get("pincode") || "396191").trim(),
        is_own: true
      };

      if (editId) {
        const idx = list.findIndex((x) => x.id === editId);
        if (idx >= 0) list[idx] = record;
        showToast("Business listing updated.");
      } else {
        list.unshift(record);
        showToast("Business registered in directory!");
      }

      saveBusinesses(list);
      renderDashboard();
      bizModal.close();
    });
  }

  document.querySelectorAll("#business-category-filters .category-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#business-category-filters .category-filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderBusinessSection(getBusinesses(), btn.dataset.cat);
    });
  });

  // 8. Job Portal Subtabs & Modal
  document.querySelectorAll(".segmented-subtabs .segmented-subtab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const container = tab.closest(".dash-tab-pane");
      if (!container) return;
      container.querySelectorAll(".segmented-subtab").forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const subtab = tab.dataset.subtab;
      if (subtab === "my-job") {
        document.querySelector("#subpane-my-job").hidden = false;
        document.querySelector("#subpane-job-directory").hidden = true;
      } else if (subtab === "job-directory") {
        document.querySelector("#subpane-my-job").hidden = true;
        document.querySelector("#subpane-job-directory").hidden = false;
      } else if (subtab === "browse-matrimonial") {
        document.querySelector("#subpane-browse-matrimonial").hidden = false;
        document.querySelector("#subpane-my-matrimonial").hidden = true;
      } else if (subtab === "my-matrimonial") {
        document.querySelector("#subpane-browse-matrimonial").hidden = true;
        document.querySelector("#subpane-my-matrimonial").hidden = false;
      }
    });
  });

  const openJobModalBtn = document.querySelector("#open-register-job-modal");
  const jobModal = document.querySelector("#modal-register-job");
  const jobForm = document.querySelector("#form-job-profile");

  if (openJobModalBtn && jobModal && jobForm) {
    openJobModalBtn.addEventListener("click", () => {
      const jobs = getJobProfiles();
      const own = jobs.find((j) => j.is_own) || jobs[0];
      if (own) {
        jobForm.elements["qualification"].value = own.qualification || "";
        jobForm.elements["occupation"].value = own.occupation || "";
        jobForm.elements["experience"].value = own.experience || "1-3 Years";
        jobForm.elements["job_type"].value = own.job_type || "Full Time";
        jobForm.elements["availability"].value = own.availability || "Open to Opportunities";
        jobForm.elements["company"].value = own.company || "";
        jobForm.elements["position"].value = own.position || "";
        jobForm.elements["location"].value = own.location || "";
        jobForm.elements["salary"].value = own.salary || "";
        jobForm.elements["skills"].value = (own.skills || []).join(", ");
      }
      if (!jobModal.open) jobModal.showModal();
    });

    jobForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const jobs = getJobProfiles();
      const m = getActiveMember();
      const fd = new FormData(jobForm);

      const record = {
        id: "JOB-01",
        name: [m.first_name, m.middle_name, m.last_name].filter(Boolean).join(" "),
        phone: m.phone,
        email: m.email,
        qualification: String(fd.get("qualification") || "").trim(),
        occupation: String(fd.get("occupation") || "").trim(),
        experience: String(fd.get("experience") || "1-3 Years"),
        job_type: String(fd.get("job_type") || "Full Time"),
        availability: String(fd.get("availability") || "Open to Opportunities"),
        company: String(fd.get("company") || "").trim(),
        position: String(fd.get("position") || "").trim(),
        location: String(fd.get("location") || "").trim(),
        salary: Number(fd.get("salary")) || 850000,
        skills: String(fd.get("skills") || "").split(",").map((s) => s.trim()).filter(Boolean),
        resume: "Suprince_Kakadiya_Resume.pdf",
        is_own: true
      };

      const ownIdx = jobs.findIndex((j) => j.is_own);
      if (ownIdx >= 0) jobs[ownIdx] = record;
      else jobs.unshift(record);

      saveJobProfiles(jobs);
      renderDashboard();
      jobModal.close();
      showToast("Job profile updated successfully!");
    });
  }

  const dlResumeBtn = document.querySelector("#download-my-resume-btn");
  if (dlResumeBtn) {
    dlResumeBtn.addEventListener("click", () => {
      showToast("Downloading verified resume: Suprince_Kakadiya_Resume.pdf");
    });
  }

  // 9. Matrimonial Form & Filters
  const openMatriBtn = document.querySelector("#open-register-matrimonial-modal");
  const matriForm = document.querySelector("#form-matrimonial-profile");
  const matriModal = document.querySelector("#modal-register-matrimonial");

  if (openMatriBtn) openMatriBtn.addEventListener("click", () => openMatrimonialModal());

  if (matriForm && matriModal) {
    matriForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const list = getMatrimonialProfiles();
      const fd = new FormData(matriForm);

      const record = {
        id: "MAT-01",
        name: String(fd.get("name") || "").trim(),
        gender: String(fd.get("gender") || "Male"),
        dob: String(fd.get("dob") || "2006-01-11"),
        height: String(fd.get("height") || "5 ft 10 in"),
        weight: Number(fd.get("weight")) || 68,
        marital_status: String(fd.get("marital_status") || "Single"),
        blood_group: String(fd.get("blood_group") || "B+"),
        religion: "Hindu Leuva Patel",
        sub_community: "Saurashtra Leuva Patel",
        maternal_surname: String(fd.get("maternal_surname") || ""),
        qualification: String(fd.get("qualification") || ""),
        occupation: String(fd.get("occupation") || ""),
        company: String(fd.get("company") || ""),
        income: Number(fd.get("income")) || 950000,
        father_details: String(fd.get("father_details") || ""),
        mother_details: String(fd.get("mother_details") || ""),
        family_members_count: Number(fd.get("family_members_count")) || 4,
        native_place: String(fd.get("native_place") || "Roghel, Amreli"),
        family_address: "401, Yashvi Nestoya, Chharwada Vapi",
        pref_age_min: Number(fd.get("pref_age_min")) || 19,
        pref_age_max: Number(fd.get("pref_age_max")) || 25,
        pref_city: String(fd.get("pref_city") || "Vapi, Surat"),
        pref_notes: String(fd.get("pref_notes") || ""),
        is_own: true
      };

      const ownIdx = list.findIndex((m) => m.is_own);
      if (ownIdx >= 0) list[ownIdx] = record;
      else list.unshift(record);

      saveMatrimonialProfiles(list);
      renderDashboard();
      matriModal.close();
      showToast("Matrimonial profile saved successfully!");
    });
  }

  document.querySelectorAll("#matrimonial-gender-filters .category-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#matrimonial-gender-filters .category-filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const gender = btn.dataset.gender;
      const all = getMatrimonialProfiles();
      const filtered = gender === "all" ? all : all.filter((m) => m.gender === gender);
      renderMatrimonialSection(filtered);
    });
  });

  // 10. Directory Filter Listeners
  const dirSearch = document.querySelector("#dir-search-input");
  const dirCity = document.querySelector("#dir-filter-city");
  const dirBlood = document.querySelector("#dir-filter-blood");
  const dirGender = document.querySelector("#dir-filter-gender");

  [dirSearch, dirCity, dirBlood, dirGender].forEach((el) => {
    if (el) {
      el.addEventListener("input", () => renderDirectorySection(getMembersDirectory()));
      el.addEventListener("change", () => renderDirectorySection(getMembersDirectory()));
    }
  });

  document.querySelectorAll("#emergency-blood-pills .blood-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#emergency-blood-pills .blood-pill").forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const group = pill.dataset.blood;
      switchTab("directory");
      if (dirBlood) {
        dirBlood.value = group;
        renderDirectorySection(getMembersDirectory());
      }
    });
  });

  // 11. Announcements Form & Admin Actions
  const openAnnModalBtn = document.querySelector("#open-post-announcement-modal");
  const adminAddAnnBtn = document.querySelector("#admin-add-announcement-btn");
  const annModal = document.querySelector("#modal-post-announcement");
  const annForm = document.querySelector("#form-announcement");

  function openAnnouncementModal() {
    if (annModal && !annModal.open) annModal.showModal();
  }

  if (openAnnModalBtn) openAnnModalBtn.addEventListener("click", openAnnouncementModal);
  if (adminAddAnnBtn) adminAddAnnBtn.addEventListener("click", openAnnouncementModal);

  if (annForm && annModal) {
    annForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const list = getAnnouncements();
      const fd = new FormData(annForm);

      const record = {
        id: `ANN-${String(list.length + 1).padStart(2, "0")}`,
        title: String(fd.get("title") || "").trim(),
        priority: String(fd.get("priority") || "Normal"),
        published_by: String(fd.get("published_by") || "Executive Committee").trim(),
        published_date: "Today, 11 Nov 2026",
        description: String(fd.get("description") || "").trim(),
        attachment: String(fd.get("attachment") || "").trim() || "Official_Notice.pdf",
        pinned: Boolean(fd.get("pinned"))
      };

      list.unshift(record);
      saveAnnouncements(list);
      renderDashboard();
      annModal.close();
      showToast("Community announcement published successfully!");
    });
  }

  document.querySelectorAll("#announcement-priority-filters .category-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#announcement-priority-filters .category-filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderAnnouncementsSection(getAnnouncements(), btn.dataset.prio);
    });
  });

  // 12. ID Pass & Print Utilities
  function handlePrint() {
    window.print();
  }

  const printTriggers = [
    document.querySelector("#print-card-trigger"),
    document.querySelector("#quick-print-card-btn"),
    document.querySelector("#print-card-btn-2"),
    document.querySelector("#print-official-badge-btn")
  ];
  printTriggers.forEach((btn) => {
    if (btn) btn.addEventListener("click", handlePrint);
  });

  const copyIdBtn = document.querySelector("#copy-member-id");
  if (copyIdBtn) {
    copyIdBtn.addEventListener("click", () => {
      const active = getActiveMember();
      const idToCopy = active.member_id || "SLPS-2026-1001";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(idToCopy).then(() => {
          showToast(`Member ID ${idToCopy} copied to clipboard!`);
        });
      }
    });
  }

  const copyQrLinkBtn = document.querySelector("#copy-qr-link-btn");
  if (copyQrLinkBtn) {
    copyQrLinkBtn.addEventListener("click", () => {
      const active = getActiveMember();
      const url = `https://slpsvapi.org/verify?id=${encodeURIComponent(active.member_id)}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast("Digital QR verification link copied!");
        });
      }
    });
  }

  const downloadQrBtn = document.querySelector("#download-qr-svg-btn");
  if (downloadQrBtn) {
    downloadQrBtn.addEventListener("click", () => {
      const active = getActiveMember();
      const svg = generateQRCodeSVG(`https://slpsvapi.org/verify?id=${encodeURIComponent(active.member_id)}`, 300);
      const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SLPS_QR_${active.member_id}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("QR code downloaded as SVG image.");
    });
  }

  const quickQrBtn = document.querySelector("#quick-view-qr-btn");
  const viewProfQrBtn = document.querySelector("#view-profile-qr-btn");
  [quickQrBtn, viewProfQrBtn].forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        const m = getActiveMember();
        const fullName = [m.first_name, m.middle_name, m.last_name].filter(Boolean).join(" ");
        openQRModal(m.member_id, fullName, m.blood_group, "Verified Life Member");
      });
    }
  });

  const modalQrDlBtn = document.querySelector("#modal-qr-download-btn");
  if (modalQrDlBtn) {
    modalQrDlBtn.addEventListener("click", () => {
      showToast("Downloading digital QR credential…");
    });
  }

  // 13. Event RSVP Toggles
  document.querySelectorAll(".rsvp-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isConfirmed = btn.classList.contains("button-primary");
      if (!isConfirmed) {
        btn.classList.remove("button-outline");
        btn.classList.add("button-primary");
        btn.textContent = "✓ RSVP Confirmed";
        showToast("RSVP registered for event!");
      } else {
        btn.classList.remove("button-primary");
        btn.classList.add("button-outline");
        btn.textContent = "RSVP Free";
        showToast("RSVP cancelled.");
      }
    });
  });

  // 14. Reset Demo Storage
  const resetDemoBtn = document.querySelector("#reset-demo-storage");
  if (resetDemoBtn) {
    resetDemoBtn.addEventListener("click", () => {
      if (confirm("Reset demo data to default Suprince Kakadiya profile and community listings?")) {
        localStorage.clear();
        localStorage.setItem("slps_current_user", JSON.stringify(DEFAULT_DEMO_MEMBER));
        localStorage.setItem("slps_family_members", JSON.stringify(INITIAL_FAMILY_MEMBERS));
        localStorage.setItem("slps_businesses", JSON.stringify(INITIAL_BUSINESSES));
        localStorage.setItem("slps_job_profiles", JSON.stringify(INITIAL_JOB_PROFILES));
        localStorage.setItem("slps_matrimonial_profiles", JSON.stringify(INITIAL_MATRIMONIAL_PROFILES));
        localStorage.setItem("slps_members_directory", JSON.stringify(INITIAL_MEMBERS_DIRECTORY));
        localStorage.setItem("slps_announcements", JSON.stringify(INITIAL_ANNOUNCEMENTS));
        localStorage.setItem("slps_notifications", JSON.stringify(INITIAL_NOTIFICATIONS));
        renderDashboard();
        showToast("Demo storage restored to defaults.");
      }
    });
  }

  // 15. Sign Out Handlers (Top bar and sidebar buttons directly redirect to website)
  const signOutBtn = document.querySelector("#sign-out");
  const sidebarSignOutBtn = document.querySelector("#sidebar-sign-out-btn");
  if (signOutBtn) signOutBtn.addEventListener("click", handleSignOut);
  if (sidebarSignOutBtn) sidebarSignOutBtn.addEventListener("click", handleSignOut);
}

// --- BOOTSTRAP ---
async function startApp() {
  try {
    initEventListeners();
    // 1. Fetch live members from members.json so additions/removals reflect immediately
    await loadExternalMembersJson();
    // 2. Render all dashboard sections, KPIs, and directory with the loaded members
    renderDashboard();

    // 3. Live Synchronization Listener: Instantly reflects changes made in Admin Portal across open tabs
    window.addEventListener("storage", (e) => {
      if (
        e.key === "slps_members_directory" ||
        e.key === "slps_announcements" ||
        e.key === "slps_businesses" ||
        e.key === "slps_job_profiles" ||
        e.key === "slps_matrimonial_profiles"
      ) {
        console.info("Live update received from Admin Portal for key:", e.key);
        renderDashboard();
        if (e.key === "slps_announcements") {
          initAnnouncementCarousel(getAnnouncements());
        }
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const requestedTab = urlParams.get("tab");
    if (requestedTab) {
      switchTab(requestedTab);
    }
  } catch (err) {
    console.error("Dashboard initialization error:", err);
    const loading = document.querySelector("#dashboard-loading");
    const errEl = document.querySelector("#dashboard-error");
    if (loading) loading.hidden = true;
    if (errEl) {
      errEl.hidden = false;
      errEl.textContent = `Could not load member dashboard: ${err.message || "Please refresh"}`;
    }
  }
}

startApp();
