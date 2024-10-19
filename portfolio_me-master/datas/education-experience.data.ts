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
];
export { educationData, experienceData };
