"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import EditProfile from './EditProfile';

const Profile: React.FC = () => {

    const routes = ["Home", "Matches", "Mailbox", "Chat", "Search", "Notification"];
    // const edit = ["Edit Profile"]
    const profile_buttons = [["Edit Profile", "Edit Preferences", "Generate Horoscopes"], ["Settings", "Help", "Safe Matrimony", "Success Stories"]]
    const [selectedOption, setSelectedOption] = useState("")

    const Navbar = () => {
        return (
            <div className='w-full h-[5rem] shadow-md flex justify-center items-center '>
                <div className='w-[70%] flex justify-around items-center'>
                    <div className='text-slate-500'>
                        Tamil Matrimani
                    </div>
                    <div className='flex space-x-6'>
                        <div className='flex space-x-12'>
                            {
                                routes.map(route => {
                                    return (
                                        <button className='font-semibold focus:text-green-700'>{route}</button>
                                    )
                                })
                            }
                        </div>
                        <div className='w-[3rem] h-[3rem] rounded-full bg-black'>

                        </div>

                    </div>
                </div>
            </div>
        )
    }

    const Hero: React.FC = () => {
        return (
            <div className='w-full h-full flex flex-col items-center justify-start space-y-4 mt-4'>
                <button className='font-semibold rounded-2xl text-[14px] text-orange-500 bg-orange-100 border-orange-500 w-fit px-4 py-2'>Regular</button>

                <div className='w-[55%] h-screen flex flex-row items-start'>
                    <div className='w-[30%] h-fit border-2 border-slate-200 shadow-md rounded-lg flex flex-col'>
                        <div className='w-full flex flex-col items-center border-b-2 py-6 space-y-2'>
                            <div className='w-[3rem] h-[3rem] rounded-full bg-black'>

                            </div>
                            <p>Good Afternoon!</p>
                            <h3 className='text-[1.25rem] font-semibold'>Gautam</h3>
                            <h4>M10705022</h4>
                        </div>
                        <div className='w-full flex flex-col items-start px-4 py-6 space-y-2 border-b-2'>
                            {
                                profile_buttons[0]?.map((edit,idx) => {
                                    return (
                                        <button key={idx} id={String(idx)} className='text-[14px] text-slate-500 focus:font-semibold'
                                        onClick={()=>{setSelectedOption(edit)}}><Link href={selectedOption === "Edit Profile" ?  "" :    "/edit"}>{edit}</Link></button>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full flex flex-col items-start px-4 py-6 space-y-2 border-b-2'>
                            {
                                profile_buttons[1]?.map(edit => {
                                    return (
                                        <button className='text-[14px] text-slate-500 focus:font-semibold'>{edit}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className='w-full h-full'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Profile