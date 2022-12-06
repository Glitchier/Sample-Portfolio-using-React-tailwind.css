import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin,AiFillGithub,AiFillBehanceCircle} from 'react-icons/ai'
import prat from '../public/profile-avatar.jpeg'
import ps from '../public/photoshop.png'
import ai from '../public/illustrator.png'
import figma from '../public/figma.png'
import ae from '../public/after-effects.png'
import cpp from '../public/cpp.png'
import css from '../public/css.png'
import flutter from '../public/flutter.png'
import html from '../public/html.png'
import java from '../public/java.png'
import js from '../public/javascript.png'
import py from '../public/python.png'
import sass from '../public/sass.png'
import rc from '../public/react.png'
import node from '../public/node.png'
import spD from '../public/Dark-theme-desktop-spotify.png'
import spL from '../public/Light-theme-desktop-spotify.png'
import ofw from '../public/ofw.png'
import cw from '../public/cw.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import { useState } from 'react'

//Dark : #0e051f
//Blue : #5879db

export default function Home() {
  const [ darkMode, setDarkMode ] = useState(false);
  return (
    <div className={darkMode ? "dark" : "" }>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/p-logo-with-circle.png" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 dark:bg-[#0e051f] dark:text-white'>
        <section className="min-h-screen">
          <nav className='py-8 flex justify-between'>
            <h1><a href='#'><img className='h-14' src="../p-logo-with-circle.png"/></a></h1>
            <ul className='flex items-center text-md'>
              <li className='ml-6 cursor-pointer'><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} /></li>
              <li className='ml-6'><a className='bg-[#5879db] text-white rounded-md px-4 py-2' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-6'>            
            <h2 className='text-5xl py-2 text-[#5879db] font-medium'>Pratyush Kumar</h2>
            <h3 className='text-2xl py-2'>Developer & Designer</h3>
            <p className='text-md leading-8 pb-5 text-gray-800 dark:text-gray-400'>
              Hello! I'm Pratyush, a Developer and a Designer.
              I stand on a sweet spot where design and code intersects.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <a className='hover:text-[#5879db] duration-200' href='https://www.linkedin.com/in/pratyush-kumar-2059071b6/' target='_blank'><AiFillLinkedin/></a>
            <a className='hover:text-[#5879db] duration-200' href='https://github.com/Glitchier' target='_blank'><AiFillGithub/></a>
            <a className='hover:text-[#5879db] duration-200' href='https://www.behance.net/pratyushkumar8' target='_blank'><AiFillBehanceCircle/></a>
          </div>
          <div className='relative mx-auto py-10 overflow-hidden'>
            <Image className='rounded-full mx-auto w-60 h-60' src={prat}/>
          </div>
        </section>
        <section>
          <div className='pt-8 text-center text-3xl'>
            <h3>Design tools I use</h3>
          </div>
          <div className='text-center mx-auto grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-evenly p-10'>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={ps} />Photoshop</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={ai} />Illustrator</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={ae} />After Effects</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={figma} />Figma</div>
          </div>
        </section>
        <section>
          <div className='pt-8 text-center text-3xl'>
            <h3>Skills</h3>
          </div>
          <div className='text-center mx-auto grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-evenly p-10'>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={html} />HTML</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={css} />CSS</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={js} />JavaScript</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={flutter} />Flutter</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={cpp} />C/C++</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={java} />Java</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={py} />Python</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={rc} />React</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={sass} />SASS</div>
            <div className='m-4 text-center mx-auto h-32 w-32 shadow-lg p-5 rounded-xl dark:shadow-gray-800 dark:shadow-md'><Image className='mx-auto h-12 w-auto mb-2' src={node} />Node.js</div>            
          </div>
        </section>
        <section className="px-10 mb-12">
          <div className='text-center shadow-lg p-12 rounded-xl dark:shadow-gray-800 dark:shadow-md'>
            <h3 className="text-3xl py-1">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-[#5879db]"> agencies </span>
              consulted for <span className="text-[#5879db]">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design & programming.
            </p>
          </div>
          <div className='text-center text-xl flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap xl:flex-row xl:flex-wrap 2xl:flex-row 2xl:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={spD} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={spL} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={cw} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={ofw} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-xl object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>            
          </div>
        </section>
      </main>
    </div>
  )
}