import ariana from "../assets/svgs/ariana-rose.svg";
import maria from "../assets/svgs/maria-haust.svg";
import ramiro from "../assets/svgs/ramiro-pirosa.svg";
import ali from "../assets/svgs/ali-morsedheu.svg";
import ivana from "../assets/svgs/ivana-cajina.svg";
import portos1 from "../assets/images/portos1.png";
import portos2 from "../assets/images/portos2.png";
import portos3 from "../assets/images/portos3.png";
import portos4 from "../assets/images/portos4.png";
import portos5 from "../assets/images/portos5.png";
import portos6 from "../assets/images/portos6.jpg";
import portos7 from "../assets/images/portos7.png";
import portos8 from "../assets/images/portos8.png";
import portos9 from "../assets/images/portos9.png";
import portos10 from "../assets/images/portos10.png";

import maria1 from "../assets/images/maria1.jpg";
import maria2 from "../assets/images/maria2.jpg";
import maria3 from "../assets/images/maria3.jpg";

// Chris
import chris1 from "../assets/images/Creators/chris_project1.jpg";
import chris2 from "../assets/images/Creators/chris_project2.jpg";
import chris3 from "../assets/images/Creators/chris_project3.jpg";
import chris4 from "../assets/images/Creators/chris_project4.jpg";
import chris5 from "../assets/images/Creators/chris_project5.png";
import chris from "../assets/images/Creators/chris.jpg";

// Emily
import emily1 from "../assets/images/Creators/emily_project1.png";
import emily2 from "../assets/images/Creators/emily_project2.png";
import emily3 from "../assets/images/Creators/emily_project3.png";
import emily4 from "../assets/images/Creators/emily_project4.png";
import emily5 from "../assets/images/Creators/emily_project5.jpg";
import emily from "../assets/images/Creators/emily.jpg";

// Jane
import jane1 from "../assets/images/Creators/jane_project1.png";
import jane2 from "../assets/images/Creators/jane_project2.jpg";
import jane3 from "../assets/images/Creators/jane_project3.png";
import jane4 from "../assets/images/Creators/jane_project4.png";
import jane5 from "../assets/images/Creators/jane_project5.png";
import jane from "../assets/images/Creators/jane.jpg";

// John
import john1 from "../assets/images/Creators/john_project1.png";
import john2 from "../assets/images/Creators/john_project2.png";
import john3 from "../assets/images/Creators/john_project3.png";
import john4 from "../assets/images/Creators/john_project4.png";
import john5 from "../assets/images/Creators/john_project5.png";
import john from "../assets/images/Creators/john-doe.jpg";

// Michael
import michael1 from "../assets/images/Creators/michael_project1.png";
import michael2 from "../assets/images/Creators/michael_project2.png";
import michael3 from "../assets/images/Creators/michael_project3.png";
import michael4 from "../assets/images/Creators/michael_project4.png";
import michael5 from "../assets/images/Creators/michael_project5.png";
import michael from "../assets/images/Creators/michael-lee.jpg";

import alice from "../assets/images/Profiles/alice.jpg";
import daniel from "../assets/images/Profiles/daniel-robinson.jpg";
import emilyP from "../assets/images/Profiles/emily.jpg";
import mark from "../assets/images/Profiles/mark-wilson.jpg";
import olivia from "../assets/images/Profiles/olivia.jpg";
import robert from "../assets/images/Profiles/robert.jpg";
import sophia from "../assets/images/Profiles/sophia.jpg";

import homeSVG from "../assets/svgs/home.svg";
import searchSVG from "../assets/svgs/search.svg";
import creatorsSVG from "../assets/svgs/creators.svg";
import TeamsSVG from "../assets/svgs/teams.svg";
import otherSVG from "../assets/svgs/other.svg";

export const navLink = [
  {
    label: "Home",
    url: "/",
    icon: homeSVG,
  },
  {
    label: "Explore",
    url: "/explore",
    icon: searchSVG,
  },
  {
    label: "Creators",
    url: "/creators",
    icon: creatorsSVG,
  },
];

export const cardHome = [
  {
    src: ariana,
    name: "Ariana Rose",
    role: "UI/UX Designeer",
  },
  {
    src: maria,
    name: "Maria Haust",
    role: "Front End Engineer",
  },
  {
    src: ramiro,
    name: "Ramiro Pirosa",
    role: "3D Artist",
  },
  {
    src: ali,
    name: "Ali Morsedheu",
    role: "Backend Engineer",
  },
  {
    src: ivana,
    name: "Ivana Cajina",
    role: "Data Analyst",
  },
  {
    src: ariana,
    name: "Ariana Rose",
    role: "UI/UX Designeer",
  },
  {
    src: maria,
    name: "Maria Haust",
    role: "Front End Engineer",
  },
  {
    src: ramiro,
    name: "Ramiro Pirosa",
    role: "3D Artist",
  },
  {
    src: ali,
    name: "Ali Morsedheu",
    role: "Backend Engineer",
  },
  {
    src: ivana,
    name: "Ivana Cajina",
    role: "Data Analyst",
  },
];

export const explorePage = [
  {
    id: 0,
    src: portos1,
    judul: "Social Media Analytics Dashboard",
    creator: "John Doe",
    photo_profile: john,
    category: "Web Application",
    skill: "Front-End Developer",
    deskripsi:
      "This web-based dashboard enables users to track and analyze their social media performance across multiple platforms in real-time. It features dynamic data visualization tools such as customizable charts, graphs, and filters, allowing users to easily identify key trends and patterns. The platform also offers automated reporting and integration with major social media networks.",
  },
  {
    id: 1,
    src: portos2,
    judul: "E-Commerce Mobile App",
    creator: "Jane Smith",
    photo_profile: jane,
    category: "Mobile Application",
    skill: "Mobile Developer",
    deskripsi:
      "A modern and user-friendly mobile app designed to facilitate online shopping with a seamless and intuitive user interface. The app allows customers to browse through various product categories, add items to their cart, and complete purchases using integrated payment solutions like Stripe. It also includes real-time order tracking, push notifications, and personalized recommendations.",
  },
  {
    id: 2,
    src: portos3,
    judul: "AI-Powered Customer Support Bot",
    creator: "Alice Johnson",
    photo_profile: alice,
    category: "Chatbot",
    skill: "Data Engineer",
    deskripsi:
      "An advanced AI chatbot developed to provide automated customer support, reducing response times and improving customer satisfaction. Leveraging natural language processing (NLP) and machine learning algorithms, the bot can handle common inquiries, troubleshoot issues, and escalate complex problems to human agents when necessary. It continuously learns from interactions to improve accuracy over time.",
  },
  {
    id: 3,
    src: portos4,
    judul: "Fitness Tracking App",
    creator: "Mark Wilson",
    photo_profile: mark,
    category: "Mobile Application",
    skill: "Mobile Developer",
    deskripsi:
      "A comprehensive fitness tracking app designed to help users stay on top of their health goals. The app tracks daily activities such as steps, workouts, and calorie intake. It also syncs with wearable devices and Apple HealthKit, providing detailed progress reports and insights. Users can set personalized fitness goals, follow workout routines, and monitor health metrics such as heart rate and sleep patterns.",
  },
  {
    id: 4,
    src: maria1,
    judul: "Cace Dashboard",
    creator: "Maria Haust",
    photo_profile: maria,
    category: "Dekstop UI / UX",
    skill: "UI UX Designer",
    deskripsi:
      "Explore a sophisticated desktop UI/UX design for a home IoT integration app that revolutionizes smart living. This interface offers effortless control over lighting, security, and appliances through intuitive dashboards, real-time monitoring, and automated routines, enhancing convenience and efficiency in managing your connected home environment.",
  },
  {
    id: 5,
    src: portos5,
    judul: "Online Learning Platform",
    creator: "Emily Davis",
    photo_profile: emily,
    category: "Web Application",
    skill: "Backend Developer",
    deskripsi:
      "An interactive web platform that offers a wide range of online courses for learners of all ages and skill levels. The platform includes features such as video lectures, downloadable resources, quizzes, and interactive forums for students to engage with instructors and peers. Progress tracking and personalized learning paths help users stay motivated and on track to complete their courses.",
  },
  {
    id: 6,
    src: portos6,
    judul: "Real Estate Virtual Tour App",
    creator: "Robert Brown",
    photo_profile: robert,
    category: "VR Application",
    skill: "Full Stack Developer",
    deskripsi:
      "This VR application allows prospective homebuyers to explore real estate properties from the comfort of their own home. The app provides immersive 3D virtual tours, giving users a realistic sense of space and design. It also includes interactive features such as property details, floor plans, and the ability to customize rooms with different furniture and finishes, offering a truly engaging experience.",
  },
  {
    id: 7,
    src: portos7,
    judul: "Inventory Management System",
    creator: "Sophia Martinez",
    photo_profile: sophia,
    category: "Web Application",
    skill: "Full Stack Developer",
    deskripsi:
      "A robust web application built to streamline the process of managing inventory for businesses of all sizes. The system provides real-time tracking of stock levels, orders, and supplier details. Users can set reorder alerts, generate detailed reports, and manage multiple warehouses from a centralized dashboard. The system also integrates with various accounting and shipping solutions for seamless operations.",
  },
  {
    id: 8,
    src: maria2,
    judul: "Website Presentation UI",
    creator: "Maria Haust",
    photo_profile: maria,
    category: "Web Design",
    skill: "UI / UX Designer",
    deskripsi:
      "Website downtime affects every aspect of modern business operation. The most severe consequences accrue to SEO, revenue in case of an e-commerce website, and user base. These types of outages take time to fix and even more time to determine the cause, and prevent for the future.",
  },
  {
    id: 9,
    src: portos8,
    judul: "Customizable Photo Editor",
    creator: "Michael Lee",
    photo_profile: michael,
    category: "Desktop Application",
    skill: "Full Stack Developer",
    deskripsi:
      "A powerful desktop application that provides users with a range of professional editing tools for enhancing and customizing photos. The software includes advanced features such as layers, blending modes, customizable filters, and effects. Users can also create presets for batch editing, making it an ideal tool for both amateur and professional photographers looking for flexible and high-quality editing capabilities.",
  },
  {
    id: 10,
    src: portos9,
    judul: "Online Event Booking System",
    creator: "Olivia Thompson",
    photo_profile: olivia,
    category: "Web Application",
    skill: "Backend Developer",
    deskripsi:
      "A comprehensive web-based event booking system designed for organizers to manage their events efficiently. The platform allows users to create, promote, and sell tickets for events, as well as provide real-time availability updates and integrated payment options via PayPal. The system also features automated email notifications and calendar integration for both event organizers and attendees.",
  },
  {
    id: 11,
    src: portos10,
    judul: "Blockchain-Based Voting Platform",
    creator: "Daniel Robinson",
    photo_profile: daniel,
    category: "Blockchain Application",
    skill: "Data Engineer",
    deskripsi:
      "A highly secure voting platform built on blockchain technology to ensure transparency and integrity in the voting process. This decentralized application allows organizations to conduct elections and surveys with tamper-proof results. The platform ensures anonymity while maintaining verifiability, and it includes features for voter registration, real-time vote counting, and audit trails.",
  },
  {
    id: 12,
    src: maria3,
    judul: "Finance Website Exploration",
    creator: "Maria Haust",
    photo_profile: maria,
    category: "Website UI / UX",
    skill: "UI / UX Designer",
    deskripsi:
      "Experience a modern desktop UI/UX design for a finance management website. This sleek interface provides intuitive tools for budgeting, expense tracking, and financial planning. With real-time insights, interactive charts, and personalized reports, users can effortlessly manage their finances, make informed decisions, and achieve their financial goals with ease.",
  },
];

export const popularSearching = {
  desktop: ["Graphic Design", "Mobile Design", "UX Website"],
  mobile: [
    "Graphic Design",
    "Mobile Design",
    "UX Website",
    "Logo Design",
    "3D Art",
    "Web Flow Design",
    "Landing Page",
    "Minimalist",
    "Product Design",
    "Typography",
    "Animation",
  ],
};

export const creators = [
  {
    id: 1,
    creator: "John Doe",
    skill: "Front-End Developer",
    photo_profile: john,
    image: [john1, john2, john3, john4, john5],
  },
  {
    id: 2,
    creator: "Jane Smith",
    skill: "Backend Developer",
    photo_profile: jane,
    image: [jane1, jane2, jane3, jane4, jane5],
  },
  {
    id: 3,
    creator: "Michael Johnson",
    skill: "Full Stack Developer",
    photo_profile: michael,
    image: [michael1, michael2, michael3, michael4, michael5],
  },
  {
    id: 4,
    creator: "Emily Davis",
    skill: "UI/UX Designer",
    photo_profile: emily,
    image: [emily1, emily2, emily3, emily4, emily5],
  },
  {
    id: 5,
    creator: "Chris Lee",
    skill: "3D Modeling",
    photo_profile: chris,
    image: [chris1, chris2, chris3, chris4, chris5],
  },
];

export const profileData = [
  {
    label: "About",
    url: "/profile/me",
  },
  {
    label: "projects",
    url: "/profile/me?=projects",
  },
  {
    label: "bookmarks",
    url: "/profile/me?=bookmarks",
  },
];

export const creatorData = [
  {
    label: "About",
    url: "/profile/creators",
  },
  {
    label: "projects",
    url: "/profile/creators?=projects",
  },
];

export const footer = {
  features: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Explore",
      url: "/explore",
    },
    {
      label: "Creators",
      url: "/creators",
    },
  ],
  OverView: [
    {
      label: "Popular Creators",
      url: "/#popularCreators",
    },
    {
      label: "What's New",
      url: "/#Features",
    },
  ],
};
