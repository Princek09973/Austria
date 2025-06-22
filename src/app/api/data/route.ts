import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/#courses  ' },
  { label: 'Mentor', href: '/#mentor' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Docs', href: '/documentation' },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
  {
    imgSrc: '/images/companies/google.svg',
  },
  {
    imgSrc: '/images/companies/hubspot.svg',
  },
  {
    imgSrc: '/images/companies/microsoft.svg',
  },
  {
    imgSrc: '/images/companies/walmart.svg',
  },
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
]

const CourseData: CourseType[] = [
  {
    heading: '(MERN) Full-Stack Development',
    name: 'James Nolan',
    imgSrc: '/images/courses/mern.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.4,
  },
  {
    heading: 'Design Systems with React',
    name: 'Elena Brooks',
    imgSrc: '/images/courses/react.webp',
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.5,
  },
  {
    heading: 'Create Stunning Banners in Figma',
    name: 'Aria Kim',
    imgSrc: '/images/courses/UiUx.webp',
    students: 120,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
  {
    heading: 'Build & Launch a Webflow Website',
    name: 'Marcus Lee',
    imgSrc: '/images/courses/webflow.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
]

const MentorData: MentorType[] = [
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.webp',
  },
  {
    profession: 'Product Design Lead',
    name: 'Lina Carter',
    imgSrc: '/images/mentor/user2.webp',
  },
  {
    profession: 'UI/UX Strategy Consultant',
    name: 'Ethan Nakamura',
    imgSrc: '/images/mentor/user3.webp',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: "Purvanshi Sharma",
    profession: "MSc in Data Science",
    comment: "The best part about the Germanywale team is that they don't treat you as a customer.",
    imgSrc: '/images/testimonial/purvanshi.png',
    rating: 5,
  },
  {
    name: "Shagun Shah",
    profession: "MSc in Data Science",
    comment: "Won't lie. Was a little skeptical about Germanywale in the start. But it proved me wrong in every way possible.",
    imgSrc: '/images/testimonial/shagun.png',
    rating: 5,
  },
  {
    name: "Ayush Baid",
    profession: "Masters in Management",
    comment: "The mentors are easy to reach and talk to, the process is simplified and their advice on writing SOPs and shortlisting universities.",
    imgSrc: '/images/testimonial/ayush.png',
    rating: 5,
  },
  // Three more entries
  {
    name: "Shweta Kumar",
    profession: "Masters in Non-Financials Intensive",
    comment: "Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine.",
    imgSrc: '/images/testimonial/shweta1.png',
    rating: 5,
  },
  {
    name: "Abhay Ahuja",
    profession: "Masters in Agriculture, Ecology and Societies",
    comment: "The whole process was very transparent and it marked my expectations. I was kept well informed about the ongoing developments.",
    imgSrc: '/images/testimonial/abhay.png',
    rating: 5,
  },
  {
    name: "Naveen Verma",
    profession: "MSc in Biological Resources",
    comment: "My experience with Germanywale has been nothing short of my high expectations. Their flexibility with assigning mentors is excellent.",
    imgSrc: '/images/testimonial/naveen.png',
    rating: 5,
  },
];

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Sitemap',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/#courses' },
      { label: 'Mentor', href: '/#mentor' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Company',
    links: [
      { label: 'Our Team', href: '/' },
      { label: 'career', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Affiliates', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
    CourseData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
