import React from "react"; 
import { AiFillGitlab, AiOutlineAntDesign } from 'react-icons/ai'
import { BsGithub } from "react-icons/bs";
import { FaAngular, FaJava, FaLaravel, FaNodeJs, FaReact, FaDocker,FaPython, FaGit, FaSass,FaWindows, FaServer, FaNetworkWired, FaHeadset, FaTicketAlt } from "react-icons/fa";
import { SiJavascript, SiJquery, SiMongodb, SiMysql, SiNestjs, SiPhp, SiSpringboot, SiTailwindcss, SiTypescript, SiGooglecloud, SiMicrosoftazure, SiDjango, SiFlask, SiScikitlearn, SiPostgresql, SiRedis, SiRabbitmq, SiTerraform, SiSelenium, SiAnsible, SiTensorflow,SiPowershell,SiJira, SiMicrosoftteams } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiAws } from "react-icons/di"; // AWS Icon



export interface SkillInteface {
  title: string;
  percentage: number;
  icon?: React.ReactNode;
}

const skillData: SkillInteface[] = [
 
];

const frameworkData: SkillInteface[] = [

];


let size = 40
const primarySkill: Omit<SkillInteface, 'title' | 'percentage'>[] = [
  {
    icon: <FaWindows color="#00ADEF" size={size} /> // Windows Server / Windows 10-11
  },
  {
    icon: <FaServer color="#4B5563" size={size} /> // Active Directory / Server Administration
  },
  {
    icon: <FaNetworkWired color="#2D9CDB" size={size} /> // Networking / TCP-IP / DNS-DHCP
  },
  {
    icon: <SiPowershell color="#5391FE" size={size} /> // PowerShell scripting
  },
  {
    icon: <SiMicrosoftteams color="#6264A7" size={size} /> // Microsoft 365 / Teams / SharePoint
  },
  {
    icon: <SiJira color="#0052CC" size={size} /> // Ticketing: Jira / ServiceNow / Freshdesk
  },
  {
    icon: <FaHeadset color="#16A34A" size={size} /> // Service Desk / End-User Support
  },
  {
    icon: <FaTicketAlt color="#EA580C" size={size} /> // Incident Management / SLA Resolution
  },
  {
    icon: <BsGithub color="#181717" size={size} /> // GitHub
  },
  {
    icon: <AiFillGitlab color="#E84A27" size={size} /> // GitLab
  },
  {
    icon: <FaPython color="#306998" size={size} /> // Python
  },
  {
    icon: <SiDjango color="#05261B" size={size} /> // Django
  },
  {
    icon: <SiFlask color="#343B48" size={size} /> // Flask
  },
  {
    icon: <SiMysql color="#00758F" size={size} /> // MySQL
  },
  {
    icon: <SiPostgresql color="#336791" size={size} /> // PostgreSQL
  },
  {
    icon: <SiMongodb color="#47A248" size={size} /> // MongoDB
  },
  {
    icon: <SiJavascript color="#F7DF1E" size={size} /> // JavaScript
  },
  {
    icon: <SiJquery color="#0769AD" size={size} /> // jQuery
  },
  {
    icon: <FaReact color="#61DAFB" size={size} /> // React
  },
  {
    icon: <FaDocker color="#2496ED" size={size} /> // Docker
  },
  {
    icon: <SiTerraform color="#623CE4" size={size} /> // Terraform
  },
  {
    icon: <SiAnsible color="#A50027" size={size} /> // Ansible
  },
  {
    icon: <SiRedis color="#D52B1E" size={size} /> // Redis
  },
  {
    icon: <SiRabbitmq color="#FF6600" size={size} /> // RabbitMQ
  },
  {
    icon: <SiSelenium color="#43B02A" size={size} /> // Selenium
  },
  {
    icon: <SiGooglecloud color="#4285F4" size={size} /> // Google Cloud
  },
  {
    icon: <DiAws color="#FF9900" size={size} /> // AWS
  },
  {
    icon: <SiMicrosoftazure color="#007FFF" size={size} /> // Microsoft Azure
  },
  {
    icon: <SiScikitlearn color="#A8D34F" size={size} /> // Scikit-learn
  },
  {
    icon: <SiTensorflow color="#FF6F20" size={size} /> // TensorFlow
  },
  {
    icon: <SiPhp color="#777BB4" size={size} /> // PHP
  },
  {
    icon: <FaJava color="#007396" size={size} /> // Java
  }


]
export { skillData, frameworkData, primarySkill };
