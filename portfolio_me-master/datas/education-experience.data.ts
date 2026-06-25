export interface AcademicInterface {
  title: string;
  shortDetails: string;
  description: string;
  marks?: string;
}

export interface ExperienceInterface {
  office: string;
  experience: string;
  responsibility: string;
  roles: string;
  site?: string;
  description: string;
  stack: string;
  type: Type[];
  workinghour?: string;
}

export enum Type {
  Web = "Web",
  Desktop = "Desktop",
  App = "App",
}
const educationData: AcademicInterface[] = [
  {
    title: "Post Graduate Degree-DevOps for Cloud Computing",
    shortDetails: "Lambton College, Toronto, Canada",
    description:
      "Aug 2023 to Apr 2025",
    marks: "",
  },
 
  {
    title: "Bachelor Degree-Bachelor In Information Technology (BIT)",
    shortDetails:
      "Purbanchal University-Aryan School of Engineering, Kathmandu, Nepal",
    description:
      "2017 to 2021",
    marks: "",
  },
];

const experienceData: ExperienceInterface[] = [
  {
    office: "Free Geek Toronto, Toronto, Canada",
    experience: "07/2025 - 09/2025",
    responsibility:
      "Diagnostics and hardware repair on 40+ desktop/laptop systems; Windows 10/11 installation and configuration; system imaging and QA before redeployment; device inventory tracking.",
    description: "",
    roles: "Technology Reuse Volunteer [07/2025 - 09/2025]",
    site: "",
    stack: "Windows 10/11, Hardware Diagnostics, System Imaging",
    type: [Type.Desktop],
    workinghour: "Volunteer",
  },
  {
    office: "Yuvoice, Toronto, Canada",
    experience: "11/2024 - 06/2025",
    responsibility:
      "Supported production web app maintenance, user access issues, and platform troubleshooting; WordPress administration; deployment coordination via Jira.",
    description: "",
    roles: "Full Stack Developer [11/2024 - 06/2025]",
    stack: "WordPress, Jira, Application Support",
    type: [Type.Web],
    workinghour: "Full Time",
  },
  {
    office: "Uniaxle software Pvt Ltd, Kathmandu, Nepal",
    experience: "05/2022 - 06/2023",
    responsibility:
      "",
    description:
      "",
    roles: "Junior DevOps Engineer [05/2022 - 06/2023]",
    site: "http://www.uxlsoft.com/",
    stack: "Ansible, Terraform, Jenkins, Docker, Google Kubernetes Engine, Grafana",
    type: [Type.Web],
    workinghour: "Full Time",
  },
  {
    office: "Tech Up Pvt. Ltd.,Kathmandu, Nepal",
    experience: "02/2023 - 11/2023",
    responsibility: "",
    description:
      "",
    roles: "Software Engineer[02/2023 - 11/2023]",
    stack: "Django,Flask,React/Nextjs,Nestjs",
    site: "https://www.techup.com.np/",
    type: [Type.Web],
    workinghour: "Part Time",
  },

  {
    office: "Susankya Tech Pvt. Ltd.,Kathmandu, Nepal",
    experience: "01/2022 - 04/2022",
    responsibility: "",
    description:
      "",
    roles: "Backend Developer[01/2022 - 04/2022]",
    site: "https://www.susankya.com/",
    stack: "Django,Flask",
    type: [Type.Web],
    workinghour: "full time",
  },  
  {
    office: "Mokshya Tech & I.T. Solutions, Kathmandu, Nepal",
    experience: "09/2020 - 03/2021",
    responsibility:
      "Tier 1/2 technical support for 50+ end users; AD user management, password resets, onboarding/offboarding; TCP/IP, DNS, DHCP, VPN, Wi-Fi troubleshooting; desktop imaging and workstation setup.",
    description: "",
    roles: "IT Support Technician [09/2020 - 03/2021]",
    stack: "Windows 10, Active Directory, TCP/IP, VPN, ITSM Ticketing",
    type: [Type.Desktop],
    workinghour: "Full Time",
  },

];
export { educationData, experienceData };
