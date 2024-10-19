import React from "react";
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLaravel, FaNodeJs } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
export interface ProjectInterface {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string[];
  repo?: string[];
  demo?: {
    name: string;
    link: string
  }[];
  client?: string;
}

let size: number = 70
let color: string = '#009e66'
export const projectData: ProjectInterface[] = [
  {
    icon: <TbBrandNextjs color={color} size={size} />,
    title: 'Ideal courier Client',
    description: 'commercial project for the the client ideal courier service pvt ltd build on the top of next js',
    tag: ['nextjs', 'axios', 'tailwindcss'],
    repo: [],
    demo: [{
      name: 'demo',
      link: 'https://ideal.jitbahadurrana.com.np/'
    }]
  },
  {
    icon: <FaLaravel color="#EF5913" size={size} />,
    title: 'Ideal Courier Admin',
    description: 'Ideal courier server for rest api service build on the top of larave framework  and nestjs admin ui',
    tag: ['laravel', 'nextjs', 'tailwind', 'axios'],
    repo: [],
    demo: [
      {
        link: 'https://admin.jitbahadurrana.com.np/',
        name: 'demo'
      }],
  },
  {
    icon: <TbBrandNextjs color={color} size={size} />,
    title: 'Billboard Score Display',
    description: 'BillBoard score display for football with time, player list and team . Two screen is provided for display and settings . The web application save data in browser storage',
    tag: ['nextjs', 'tailwind'],
    repo: [],
    demo: [
      { name: 'screen', link: 'https://billboard.jitbahadurrana.com.np' },
      { name: 'setting', link: 'https://billboard.jitbahadurrana.com.np/setting' }],
  },
  {
    icon: <FaNodeJs color={color} size={size} />,
    title: 'NoteSansar ',
    description: 'Notesansar is web application which allow students under various universities to share , exchange , distribute study materials',
    tag: ['nextjs', 'tailwind', 'nodejs'],
    repo: [],
    demo: [
      { name: 'demo', link: 'https://note-sharing-m98h1pubj-jit-bdr-rana.vercel.app' }]
  },
  {
    icon: <SiSpringboot color={color} size={size} />,
    title: 'CollegeApp',
    description: 'College App is web application which allow college/school to manage information system like student record,fee , result ,notice ',
    tag: ['springboot', 'jquery', 'bootstrap'],
    repo: ['https://github.com/Jit-Bdr-Rana/collegeApp'],
  },
  {
    icon: <FaLaravel color="#EF5913" size={size} />,
    title: 'HackForMe',
    description: 'Hackforme is the bug bounty platform allowing hacker and business own company to interact and let hacker user to test the vulnerabilities in their system and reward in return. this concept is relevant to hackerone ,hacker rank platform',
    tag: ['laravel', 'jquery', 'bootstrap'],
    repo: [
      'https://gitlab.com/jitu1234687/hackforme'
    ],
  }



]
