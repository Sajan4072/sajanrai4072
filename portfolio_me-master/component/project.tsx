import React from 'react'
import { FaReact } from 'react-icons/fa'
import { animateEnum, navItem } from '../datas/home.data'
import Container from './container'
import { GoGlobe } from 'react-icons/go'
import { AiFillGithub } from 'react-icons/ai'
import { projectData } from '../datas/project.data'
const Project = ({ nav, changeNav, animate }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum }) => {
    return (
        <Container navCurrent={navItem[6]} nav={nav} changeNav={changeNav} animate={animate} title1={'so far i have done'} title2={'My Project'}>
            {
                nav === navItem[6] &&
                <div className='my-8 p-8'>
                    <h3 className="font-bold md:text-[1.65rem] text-[1.3rem] mb-8">My Project and Contribution</h3>
                    {
                        projectData.map((data, index) => {
                            return (
                                <div key={index} className='shadow-custom  animate-slideup  p-10 rounded-md mb-6'>
                                    <div className='flex justify-between flex-wrap gap-y-6 md:gap-y-0 items-center'>
                                        <div className='flex w-full gap-10 md:w-[70%] items-center'>
                                            <p className='w-full md:w-auto'>
                                                {data?.icon || <FaReact size={70} className="text-[#009e66]" />}
                                            </p>
                                            <div>
                                                <p className='text-2xl'>{data.title}</p>
                                                <p className='text-base text-gray-500 mt-1 leading-5'>{data.description}</p>
                                                <div className='mt-2 flex gap-1 flex-wrap'>
                                                    {
                                                        data?.tag?.length > 0 &&
                                                        data.tag.map((_, index) => {
                                                            return (
                                                                <p key={index} className='rounded-2xl px-3 bg-slate-500 p-1 inline-block text-xs'>{_}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='animate-slideup md:w-[30%] w-full flex justify-end gap-3 '>
                                            {
                                                data?.demo && data?.demo?.length > 0
                                                &&
                                                data.demo?.map((_, i) => {
                                                    return (
                                                        <a target={'_blank'} href={_.link} key={i} className=' bg-custom text-[16px] rounded-md gap-1 transition-all duration-500 flex items-center ease-in-out  shadow-custom p-3 px-5 hover:-translate-y-1 text-[#009e66]'><GoGlobe />{_.name}</a>
                                                    )
                                                })
                                            }
                                            {
                                                data?.repo && data?.repo?.length > 0
                                                &&
                                                data.repo?.map((_, i) => {
                                                    return (
                                                        <a target={'_blank'} href={_} key={i} className=' bg-custom text-[16px] rounded-md gap-1 transition-all duration-500 flex items-center ease-in-out  shadow-custom p-3 px-5 hover:-translate-y-1 text-[#009e66]'><AiFillGithub />repo</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </Container>
    )
}

export default Project