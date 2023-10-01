import { useState } from 'react'
import { BurgerSwipe } from "react-icons-animated";
import { motion } from "framer-motion";
import "../../styles/Home.css"
import {
    UilWhatsapp,
    UilInstagramAlt,
    UilLinkedinAlt,
    UilEnvelopeEdit,
    UilEstate,
    UilClapperBoard,
    UilMusic,
    UilImages,
    UilPuzzlePiece
} from '@iconscout/react-unicons'

/* Navigation List that we are going to iterate through */
const navs = [
    { id: 1, title: 'Home', link: './', icon: UilEstate },
    { id: 2, title: 'Games', link: './', icon: UilPuzzlePiece },
    { id: 3, title: 'Movies', link: './', icon: UilClapperBoard },
    { id: 4, title: 'Musics', link: './', icon: UilMusic },
    { id: 5, title: 'Pictures', link: './', icon: UilImages },


]
const Gsapp = () => {

    const [isClosed, setIsClosed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [isHidden, setIsHidden] = useState(true)

    /* Mobile navigation Style */
    const isHiddenStyle = 'hidden';
    const isVisibleStyle = 'absolute space-y-10 bg-white w-full p-6 left-0  right-0 top-0 min-h-screen text-black';

    /* Framer Motion animation properties for the children of the parent motion container */

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 500, damping: 24 }
        },
        closed: { opacity: 0, y: -120, transition: { duration: 0.2 } }
    };
    return (
        <div >


            {/* Responsive Menu */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className='flex flex-col w-full reative'>

                {/* React Icons Animated Container */}
                <motion.button
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                    onClick={() => { setIsClosed(!isClosed); setIsOpen(!isOpen); setIsHidden(!isHidden) }}
                    className={isHidden ? "p-2 absolute top-3 right-3 grid w-[50px] h-[40px] place-items-center bg-slate-900 " : "z-50 p-2 absolute top-3 right-3 grid w-[50px] h-[50px] place-items-center bg-blue-500 "}
                >
                    <BurgerSwipe isClosed={isClosed} />
                </motion.button>

                <motion.ul
                    /* Here is our animation property for the Framer Motion Navigation Menu Container */
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 0px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 0px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            }
                        }
                    }}
                    layout
                    className={isHidden ? isHiddenStyle : isVisibleStyle}>

                    <div className='mt-20 flex flex-col gap-2 justify-center font-bold text-3xl lg:text-5xl'>
                        {
                            navs.map((nav, index) => (
                                <div key={index + 1}>
                                    <motion.li variants={itemVariants} className="font-normal font-poppins">
                                        <a href={nav.link} className="flex gap-5 lg:gap-10 items-center hover:text-slate-500 hover:font-bolder hover:text-3x1">
                                            <nav.icon className="h-8 w-8 md:h-10 md:-w-10 lg:h-12 lg:w-12" /> {nav.title}
                                        </a>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className='h-[0.5px] bg-black w-full my-5'></motion.li>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {/* Social Links  */}
                        <motion.div variants={itemVariants} className='flex flex-wrap gap-4 font-normal'>
                            <a href='https://www.linkedin.com/in/samuel-oduro-boakye-9b8913237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='text-black'>
                                <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                    <UilLinkedinAlt className='w-6 h-6' /> LinkedIn
                                </span>
                            </a>
                            <a href='https://instagram.com/s.a.m.u.e.l.6?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' className='text-black'>
                                <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                    <UilInstagramAlt className='w-6 h-6' /> Instagram
                                </span>
                            </a>
                            <a href='mailto:sboakye1796@gmail.com@example.com?subject=Hello%20Boss&body=Message%20Here' className='text-black'>
                                <span className='bg-slate-300 hover:bg-slate-400 shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                    <UilEnvelopeEdit className='w-6 h-6' /> Email
                                </span>
                            </a>
                            <a href='https://wa.link/5qnu8c' className='text-black'>
                                <span className='bg-slate-300 hover:bg-slate-400  shadow-md py-3 px-5 rounded-full flex items-center gap-2'>
                                    <UilWhatsapp className='w-6 h-6' /> WhatsApp
                                </span>
                            </a>

                        </motion.div>
                    </div>
                </motion.ul>
            </motion.div>
        </div >

    )
}

export default Gsapp
