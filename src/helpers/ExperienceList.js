import React, { Component } from "react";
import atlarge from "../images/worksamples/dataatlarge_sample.jpg";
import atlarge2 from "../images/worksamples/monthly_rate_DA.png";
import brown from "../images/worksamples/privasee_ppt.png";
import brown2 from "../images/worksamples/privasee_ppt2.png";
import brown3 from "../images/worksamples/privasee_pic.png";
import un from "../images/worksamples/UN_crossroad.png";
import un1 from "../images/worksamples/un_cover.png";
import un2 from "../images/worksamples/un_cover_2.png";
import un3 from "../images/worksamples/un_policy_briefs.png";
import halara from "../images/worksamples/halara_ins.png";
import halara1 from "../images/worksamples/halara_post.jpg";
import halara2 from "../images/worksamples/halara_post2.jpg";
import halara3 from "../images/worksamples/halara_post3.jpg";
import dihua from "../images/worksamples/dihua.png";
import dihua1 from "../images/worksamples/dihua_2.png";
import dihua2 from "../images/worksamples/dihua_3.png";
import dihua3 from "../images/worksamples/dihua_4.png";
import dihua4 from "../images/worksamples/dihua_5.png";
import bd from "../images/worksamples/bytedance.png";
import lede from "../images/worksamples/lede.png";

export const ExperienceList = [
  {
    title: "Entrepreneurship Fellow",
    company: "Brown Insititute for Media Innovation",
    company_link: "https://brown.columbia.edu/",
    time: "2024/06 - Now",
    role: "Researched AI news product market, interviewed academia, readers, news organizations\nDesigned business model and marketing strategy, revised and presented pitches in weekly meetings \n Built a technical pipeline using NLP and machine learning, collected privacy policy data, maintained a database\nEdited product website copy and graphics, prototyped and tested the application's UI/UX using Adobe XD",
    reflection: "",
    samples: [
      { sample_img: brown, sample_link: "" },
      { sample_img: brown2, sample_link: "" },
      { sample_img: brown3, sample_link: "" },
    ],
  },
  {
    title: "Co-founder",
    company: "Data At Large LLC.",
    company_link: "https://dataatlarge.com/",
    time: "2024/06 - Now",
    role: "Provided data communication services for organizations with limited capabilities\nDesigned visual communications through data analysis and visualizations\nExecuted social media account, created engaging data-related content",
    reflection: "",
    samples: [
      { sample_img: atlarge, sample_link: "" },
      { sample_img: atlarge2, sample_link: "" },
    ],
  },
  {
    title: "Lede Program Teaching Assistant",
    company: "Columbia Journalism School",
    company_link: "https://journalism.columbia.edu/",
    time: "2024/06 - Now",
    role: "Held office hours for data journalism students. \nAnswer questions about scraping, mapping, data analysis, vsiualization, and more\nMentored students on final data reporting projects",
    reflection: "",
    samples: [
      {
        sample_img: lede,
        sample_link: "",
      },
    ],
  },
  {
    title: "Research Assistant",
    company: "Columbia CGUI Lab",
    company_link: "https://graphics.cs.columbia.edu/home",
    time: "2024/01 - 2024/05",
    role: "Implemented a headset-based XR application to visualize radar diagrams in polar areas\nInterviewed geologists from Lamont-Doherty Earth Observatory, wrote XR user experience reports\nConducted literature review about navigation in VR, proposed optimization on user interactions and mechanics\nBuilt VR navigation with MRTK in Unity, including vertical movement, miniature, bookmark system, and more",
    reflection: "",
    // samples: "",
  },
  {
    title: "Teaching Assistant",
    company: "Columbia Engineering School",
    company_link: "https://www.engineering.columbia.edu/",
    time: "2024/01 - 2024/05",
    role: "Answered students' questions on Ed discussion, published announcements and email communication\nHeld weekly office hours for tutoring C++ homework, delivered reviews and clarification of class materials\nAccessed students' homework within a week after deadlines, tracked class progress and extension records",
    reflection: "",
    sample: "",
  },
  {
    title: "Graphics Designer Intern",
    company: "United Nations, Office of Rule of Law And Security institution",
    company_link:
      "https://peacekeeping.un.org/en/office-of-rule-of-law-and-security-institutions",
    time: "Feb 2023 - Aug 2023",
    role: "Designed posters and website graphic elements for campaigns by the SSR Unit for global audiences\nRendered layouts of Policy Briefs, proposals, and CrossRoad brochures with Illustrator, Word, and Photoshop\nBrainstormed and proposed cross-department collaboration for creative ideation process of graphic products",
    reflection: "",
    samples: [
      { sample_img: un, sample_link: "" },
      { sample_img: un1, sample_link: "" },
      { sample_img: un2, sample_link: "" },
      { sample_img: un3, sample_link: "" },
    ],
  },
  {
    title: "Social Media Marketing Intern",
    company: "Halara",
    company_link: "https://www.instagram.com/halara_official/?hl=en",
    time: "Mar 2022 - Aug 2022",
    role: "Drafted daily social media (Instagram/Facebook) graphics and copy, monitored comments and DMs\nResearch fashion trends, wrote weekly marketing strategy proposals\nIncreased brand awareness and highly interactive followers by 10k, maintained a positive image of the brand",
    reflection: "",
    samples: [
      { sample_img: halara, sample_link: "" },
      { sample_img: halara1, sample_link: "" },
      { sample_img: halara2, sample_link: "" },
      { sample_img: halara3, sample_link: "" },
    ],
  },
  {
    title: "Video Editing Specialist",
    company: "Shanghai Dihua Culture Media Ltd.",
    company_link: "",
    time: "May 2021 - May 2023",
    role: "Communicated with customers and logistics team to summarize the deadline, purpose, and details of projects\nProposed creative editing plans, made detailed and responsive changes based on the feedback from customers\nProduced 20+ videos with Premiere and After Effects, including short series, color corrections, and animaitons\nDelivered high-quality projects with 90% positive feedback",
    reflection: "",
    samples: [
      { sample_img: dihua, sample_link: "" },
      { sample_img: dihua1, sample_link: "" },
      { sample_img: dihua2, sample_link: "" },
      { sample_img: dihua3, sample_link: "" },
      { sample_img: dihua4, sample_link: "" },
    ],
  },
  {
    title: "Technical Content Editor Intern",
    company: "ByteDance Ltd.",
    company_link: "https://www.bytedance.com/en/",
    time: "Dec 2020 - Mar 2021",
    role: "Assigned translation tasks to individuals in team, summarized task progression in weekly report\nTranslated 7-10 technical articles per week, checked with authors for quality feedback,\nProofread subtitles for technology course videos, English documents, platform UI to improve user experience\nPlanned large-scale events in Technology Academy, including workshops and Tech Academy 4th Anniversary",
    reflection: "",
    samples: [
      { sample_img: bd, sample_link: "" },
      // { sample_img: un1, sample_link: "" },
      // { sample_img: un2, sample_link: "" },
      // { sample_img: un3, sample_link: "" },
    ],
  },
  {
    title: "Python Teaching Assistant",
    company: "Beijing Yuan'Li Education Technology Ltd.",
    company_link: "https://www.yuanfudao.com/",
    time: "Sep 2020 – Dec 2020",
    role: "Held weekly individual advising and Q&A sessions, crafted students' personalized study plans\nProvided precise and accurate feedback to 125 students' work, tracked students' learning progression\nDesigned and proofread course material, suggested content improvement and engagement for K-12 education",
    reflection: "",
    sample: "",
  },
];
