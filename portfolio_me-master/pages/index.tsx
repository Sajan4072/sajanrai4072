import type { NextPage } from 'next'
import Head from 'next/head'
import { FaFacebookF } from 'react-icons/fa'
import { GiMoebiusTriangle } from 'react-icons/gi'
import { BsLinkedin, BsList } from 'react-icons/bs'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import React, { useCallback, useEffect, useState } from 'react'
import { animateEnum, navItem } from '../datas/home.data'
import Container from '../component/container'
import { frameworkData, skillData } from '../datas/skills.data'
import contactData from '../datas/contact.data'
import { educationData, AcademicInterface, ExperienceInterface, experienceData } from '../datas/education-experience.data'
import { AcademicCard, ExperienceCard } from '../component/card'
import Link from 'next/link'
import Portfolio from '../component/portfolio'
import Project from '../component/project'
const index: NextPage = () => {
  return (
    <div className="font-poppin-sans ">
      <Head>
        <title>Sajan Rai</title>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name='description' content='Sajan Rai' />
        <meta name='description' content='Sajan Rai' />
        <meta name='description' content='portfolio' />
        <link rel="canonical" href="https://www.sajanrai4072.com.np/" key="canonical" />
        <meta property="og:description" content="Sajan Rai" />
        <meta property="og:description" content="Sajan Rai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Common />
      </main>
    </div>
  )
}
export default index

const Common = () => {
  const [nav, setNav] = useState<string>(navItem[0]);
  const [animate, setAnimate] = useState<animateEnum>(animateEnum.no);
  const changeNav = (nav: string) => {
    setNav(nav)
    if (animate === animateEnum.no) {
      setAnimate(animateEnum.up)
    } else {
      if (animate === animateEnum.up) {
        setAnimate(animateEnum.down)
      }
      else {
        setAnimate(animateEnum.up)
      }
    }
  }

  return (
    <React.Fragment>
      <Home animate={animate} changeNav={changeNav} />
      <Aboutme animate={animate} nav={nav} changeNav={changeNav} />
      <Resume animate={animate} nav={nav} changeNav={changeNav} />
      <Project animate={animate} nav={nav} changeNav={changeNav} />
      <Portfolio animate={animate} nav={nav} changeNav={changeNav} />
      <Blog animate={animate} nav={nav} changeNav={changeNav} />
      <Contact animate={animate} nav={nav} changeNav={changeNav} />
    </React.Fragment>
  )
}


const Home = ({ changeNav, animate }: { changeNav: (nav: string) => void, animate: animateEnum }) => {
  const skillType = [' ', 'Backend Developer', '', 'Cloud Developer', '', 'Freelancer']
  const [skill, setSkill] = useState("")
  const [closeNav, setCloseNav] = useState<boolean>(true);
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * skillType.length);
    setSkill(skillType[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1500);
    return () => clearInterval(intervalID);
  }, [shuffle])



  return (
    <div className=''>
      <div className={`bottom-0 fixed block top-0 translate-y-[100%] w-full z-[999999999]  bg-[#181818] ${animate != animateEnum.no && (animate === animateEnum.up ? 'animate-up' : 'animate-down')} `}></div>
      <nav className="flex items-center justify-between fixed bg-transparent inset-x-0 right-0 z-[1030] mt-1.5 md:mt-3 mx-5 md:mx-10 py-5 text-white" id="navbar">
        <div className=''>
          <a className="transition-all" data-scroll="" href="#home-area">
            <h5 className='text-green-500 text-5xl font-bold'><GiMoebiusTriangle /></h5>
          </a>
        </div>
        <div className="flex justify-end items-center">
          <div className=" z-[99]  md:right-[4vw] top-[35px] ">
            <div className="cursor-pointer md:hidden" onClick={() => setCloseNav(!closeNav)}>
              <BsList color="white" className={`text-white text-5xl ${!closeNav && 'hidden'}`} />
            </div>
          </div>
          <div className={`md:static  fixed w-2/3 md:p-0 p-5 md:gap-8  md:w-full transition-all duration-1000 inset-0 z-[99999] h-[100vh] md:h-0 bg-black ${closeNav ? 'hidden md:block' : ' transition-all duration-1000 block'} `}>
            <div className={` md:hidden text-right ${!closeNav ? 'block' : 'hidden'} pb-16 md:pb-0 `}>
              <div onClick={() => { setCloseNav(!closeNav) }} className="cursor-pointer p-3">
                <span className="before:bg-white after:bg-white before:h-[2rem] after:h-[2rem] before:w-[4px] after:w-[4px] before:absolute after:absolute after:-rotate-45 before:rotate-45 relative">
                </span>
              </div>
            </div>
            <ul className={`flex-col  md:flex md:flex-row gap-12 `}>
              <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[1]) }}><a className="nav-link" href="#about">About</a></li>
              <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[2]) }}><a className="nav-link" href="#resume">Resume</a></li>
              <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[4]) }}><a className="nav-link" href="#portfolio">Portfolio</a></li>
              {/* <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[6]) }}><a className="nav-link" href="#portfolio">Project</a></li> */}
              {/* <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[5]) }}><a className="nav-link" href="#blog">Blog</a></li> */}
              <li className="md:p-0 p-3 cursor-pointer" onClick={() => { changeNav(navItem[3]) }}><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>
      <section className="bg-black !bg-cover !bg-no-repeat !bg-[url(/bgmain.png)] before:bg-black before:bg-opacity-80  bg-center h-[100vh] overflow-hidden before:h-full before:left-0 before:absolute before:top-0 before:w-full relative px-5 md:px-10" id="home" >
        <div className="container z-10 h-full mx-auto px-0">
          <div className="relative flex h-full items-center justify-center">
            <div className="  home-content text-center">
              <h1 className="text-white text-[40px] md:text-[70px] font-bold mb-3">Sajan <span>Rai</span></h1>
              <h4 className="text-[20px] md:text-[32px] font-normal text-white">
                <span className="relative  after:bg-green-500 after:h-full after:w-[2px] after:animate-pulse  after:top-0 afer:right-0  after:absolute" >
                  <b>I{"'"}m a </b>
                  <b className="is-visible mr-2 font-normal  animate-pulse text-green-500">{skill}</b>
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="relative md:mx-5">
          <div className="absolute right-0 bottom-8  ">
            <ul className="pb-3" >
              <li><Link target={'_blank'} href={'https://github.com/Sajan4072'}><a title="github"><BsGithub className='text-white text-2xl mb-5' /></a></Link></li>
              <li><Link target={'_blank'} href={'https://www.linkedin.com/in/sajan-rai4072/'}><a title="linkedin" ><BsLinkedin className='text-white text-2xl mb-5' /></a></Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


const Aboutme = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
  interface DetailInterface {
    title: string;
    description: string;
    className: string;
  }
  const detaisData: DetailInterface[] = [
    {
      title: 'Name',
      description: 'Sajan Rai',
      className: ''
    },

    // {
    //   title: 'Age',
    //   description: `${new Date().getFullYear() - new Date('1998-10-28').getFullYear()}`,
    //   className: ''
    // },
    {
      title: 'Email',
      description: 'rai4072@gmail.com',
      className: 'text-green-500'
    },
    {
      title: 'From',
      description: 'Toronto, Ontario,Canada',
      className: ''
    }

  ]
  return (
    <Container navCurrent={navItem[1]} nav={nav} changeNav={changeNav} animate={animate} title1={'Get to know me'} title2={'About Me'}>
      <div className='grid grid-cols-12 md:gap-10  m-5 md:m-10'>
        <div className="col-span-12 md:col-span-5 ">
          <div className='md:mx-5  overflow-hidden rounded-md shadow-custom'>
            <img src="/mypicture.jpeg" className='w-50 hover:scale-[1.2]  hover:transition hover:delay-300 hover:ease-in-out scale-[1]' alt="" />
          </div>
        </div>
        <div className='col-span-12 md:col-span-7'>
          <div className='md:mx-4 mt-4 md:mt-0'>
            <h1 className='pb-4 text-lg text-green-500 text-[24px] animate-slideup'> Hi!</h1>
            <h1 className='pb-4 font-bold text-xl md:text-3xl animate-slideup'>I{"\'"}am Sajan Rai</h1>
            <p className='text-gray-400 animate-slideup'>A Software engineer with keen interest and proficiency in Backends, Microservices, Devops and more. I am based at Toronto,Onatrio.<br/><br/>
              I have experience with various backend technological stacks and practices and I currently work primarily on Django and Devops projects to build scalable backend solutions.<br/>

              Get to know about me more on my <a href="https://www.linkedin.com/in/sajan-rai-4a40b9171/" target="blank"><b>Linkedin</b></a> or my <a href="https://github.com/Sajan4072" target="blank"><b>Github</b></a> <br/><br/>

              I am currently pursuing my PostGraduate Degree in Cloud Computing ,I have worked previously at <a href="https://www.susankya.com/" target="blank"><b>Susankya Global LLC</b></a>, <a href="https://www.uxlsoft.com/" target="blank"><b>UniAxial Softwares</b></a>, <a href="https://www.techup.com.np/" target="blank"><b>TechUp Pvt Ltd</b></a>, and more. </p>
            <hr className='my-5 text-gray-400' />
            <div className='grid grid-cols-4 md:grid-cols-2 gap-3'>

              {
                detaisData.map((data, index) => {
                  return (
                    <div key={index} className={`${index === 2 ? 'col-span-4 md:col-span-1' : 'col-span-2 md:col-span-1'} animate-slideup`}>
                      <p className=''>{data.title}:<span className={`${data.className} ml-2`}>{data.description}</span></p>
                    </div>
                  )
                })
              }
            </div>
            <div className='md:text-left text-center'>
              {/* <button type='button' className='mt-5 justif gap rounded-full bg-[#009e66] hover:bg-[#036945] px-5 py-3'>Download my cv</button> */}
            </div>
          </div>
        </div>
      </div>
    </Container>

  )
}


const Resume = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
  return (
    <Container navCurrent={navItem[2]} nav={nav} changeNav={changeNav} animate={animate} title1={'Check out my Resume'} title2={'Resume'}>
      <div className='md:m-5'>
        <div className="grid w-full md:gap-10 grid-cols-12 md:mt-1 mt-8">
          <div className="md:col-span-6 mx-3 md:mx-0 col-span-12">
            <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] my-5 mb-8">Academic Qualification</h3>
            {
              educationData.map((data: AcademicInterface, index: number) => {
                return (
                  <AcademicCard data={data} key={index} />
                )
              })
            }
          </div>
          <div className="md:col-span-6 mx-3 md:mx-0 col-span-12">
            <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] my-5 mb-8">Experience</h3>
            {
              experienceData.map((data: ExperienceInterface, index: number) => {
                return (
                  <ExperienceCard data={data} key={index} />
                )
              })
            }
          </div>
        </div>
        <div className='mt-16 mx-3 md:mx-0'>
          <div className="md:mb-10 mb-5">
            <p className="text-base text-gray-500 mb-4"></p>
            <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] "></h3>
          </div>
          <div className='grid grid-cols-12 md:gap-8 gap-y-10'>
            {
              skillData.map((data, index) => {
                return (
                  <Skill percentage={data.percentage} title={data.title} key={index} />
                )
              })
            }
          </div>
          <div className="md:my-10 my-5">
            <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] "></h3>
          </div>
          <div className='grid grid-cols-12 md:gap-8 gap-y-10'>
            {
              frameworkData.map((data, index) => {
                return (
                  <Skill percentage={data.percentage} title={data.title} key={index} />
                )
              })
            }
          </div>
        </div>
   
      </div>
    </Container>
  )
}

const Contact = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
  return (
    <Container navCurrent={navItem[3]} nav={nav} changeNav={changeNav} animate={animate} title1={'Feel free to contact me anytimes'} title2={'Get in Touch'}>
      <div className='md:m-10 mt-5 mx-3'>
        <div className="grid grid-cols-12 md:gap-10 gap-y-5 w-full">
          <div className="col-span-12 md:col-span-7">
            <h1 className='text-2xl'>message me</h1>
            <form action="#" className='mt-5' onSubmit={(e)=>{e.preventDefault(); alert("Thank you for your message")}}>
              <div className='grid gap-y-6 grid-cols-12 gap-3'>
                <div className='col-span-6'>
                  <input type="text" className='focus:outline-none border border-transparent focus:border-b-[#00d187] focus:border p-2 bg-[#161616] placeholder:text-[#777] text-[#777] text-base w-full h-[44px]' placeholder='Name' />
                </div>
                <div className='col-span-6'>
                  <input type="text" className='focus:outline-none border border-transparent focus:border-b-[#00d187] focus:border p-2 bg-[#161616] placeholder:text-[#777] text-base w-full h-[44px]' placeholder='Email' />
                </div>
                <div className='col-span-12'>
                  <input type="text" className='focus:outline-none border border-transparent focus:border-b-[#00d187] focus:border p-2 bg-[#161616] placeholder:text-[#777] text-base w-full h-[44px]' placeholder='Subject' />
                </div>
                <div className='col-span-12'>
                  <textarea placeholder='Message' className="focus:outline-none border border-transparent focus:border-b-[#00d187] focus:border p-2 bg-[#161616] placeholder:text-[#777] text-base w-full h-40" ></textarea>
                </div>
                <div className='col-span-12'>
                  <input type="submit" className="focus:outline-none p-2 md:p-3 px-6 bg-[#00d187] rounded-full hover:bg-[#009762] " value="send message" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className='pb-5'>
              <h1 className='text-2xl'>Contact Info</h1>
              <p className='text-gray-500 mt-3 leading-8'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
              <div className='mt-3'>
                {
                  contactData.map((data, index) => {
                    return (
                      <div key={index} className='flex gap-3 items-start'>
                        {data.icon}
                        <div className='border-l px-5   pb-5 last:pb-2  border-l-gray-500'>
                          <p>{data.title}</p>
                          <p className='text-gray-500'>{data.value}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}



const Skill = ({ percentage, title }: { percentage: number, title: string }) => {
  return (
    <div className="md:col-span-6 col-span-12" >
      <div className="text-[#cecece] flex text-base justify-between mb-2">
        <span className="skill-name">{title}</span>
        <span className="text-[#cecece] text-base" style={{ marginRight: `${100 - percentage}%` }}>{percentage}%</span>
      </div>
      <div className="bg-[#e9ecef] h-2 flex">
        <div className='h-2 flex' style={{ width: `${percentage}%` }}>
          <div className="bg-[#009e66] animate-ltr" ></div>
        </div>
      </div>
    </div>
  )
}




const Blog = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
  return (
    <Container navCurrent={navItem[5]} nav={nav} changeNav={changeNav} animate={animate} title1={'Feel free to contact me anytimes'} title2={'my portfolio'}>
      sorry under maintenance
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}