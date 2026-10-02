export interface Program {
  id: string;
  name: string;
  slug: string;
  category: 'engineering' | 'data' | 'design';
  shortDesc: string;
  description: string;
  duration: string;
  schedule: string;
  level: string;
  tuition: string;
  nextCohort: string;
  skills: string[];
  curriculum: {
    module: string;
    weeks: string;
    topics: string[];
  }[];
  careerRoles: string[];
  avgSalary: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Hackathon' | 'Workshop' | 'Open House' | 'Keynote';
  spotsAvailable: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  program: string;
  gradYear: string;
  quote: string;
  salaryIncrease: string;
  avatar: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  specialty: string;
  priorCompany: string;
  experience: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Tuition' | 'Curriculum' | 'Careers';
}
