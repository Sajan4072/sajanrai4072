import React from 'react'
import { animateEnum, navItem } from '../datas/home.data'
import Close from './close'

const Container = ({ nav, navCurrent, changeNav, animate, title1, title2, children }: { nav: string, changeNav: (nav: string) => void, animate: animateEnum, title1: string, title2: string, children: React.ReactNode, navCurrent: string }) => {
    return (
        <div className={`fixed w-full h-full top-0 left-0   ${nav === navCurrent ? 'z-[9999] opacity-100 ' : '-z-[9999] opacity-0'} duration-[0s]   opacity-100 overflow-y-auto delay-[0.5s] bg-[#212428] ${animate === animateEnum.up ? 'animate-fadeIn ' : 'animate-fadeOut '}`}>
            {
                nav === navCurrent &&
                <div className="container mx-auto font-poppin-sans">
                    <Close changeNav={changeNav} />
                    <div className='text-white mt-10 animate-slideup'>
                        <div className="flex justify-center">
                            <div className="w-full md:mx-10 mx-3">
                                <div className="section-heading page-heading text-center">
                                    <p className="section-description text-base text-center text-gray-500">{title1}</p>
                                    <h2 className="section-title text-4xl my-5 font-bold ">{title2}</h2>
                                    <div className="  h-[4px] left-0 relative right-0 bg-[#009e66] mx-auto mt-0 w-[75px] before:bg-[#212428] before:h-full before:absolute  before:animate-barAnimation before:top-0 before:w-[4px] before:left-[8px] after:bg-[#101010] after:h-full after:absolute  after:animate-barAnimation after:top-0 after:w-[4px] after:left-0"></div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Container