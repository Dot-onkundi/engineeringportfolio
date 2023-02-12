import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'
import ProfilePic from './images/profilepic.jpg'
import ImageOne from './images/design.svg'
import ImageTwo from './images/power.png'
import ImageThree from './images/robin.png'
import {Link} from 'react-router-dom'



import {TiTick} from 'react-icons/ti'




const Allcomponents = () => {

  return (
    <div>
      <div className='text-[#000] bg-white px-10 '>
      <section className=' h-screen '>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-lg'> Developed by Felix</h1>
          <ul className='flex items-center justify-between'>
            <li>
              <BsFillMoonStarsFill  className='cursor-pointer text-2xl'/>
            </li>
            <li> 
              <Link target='_blank' to='https://drive.google.com/file/d/1lSlpEhNYkSLMlSZJfTah1VnAvab1Kci_/view?usp=sharing'><button className='bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8 '> Resume </button>  </Link>
            </li>            
           </ul>
        </nav>
        
        <div className='text-center p-10 '>
          <h2 className='text-5xl text-teal-500 font-medium '>Onkundi Felix</h2>
          <h3 className='tet-2xl py-2 uppercase'>Electrical Engineer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'> Onkundi is a competent Electrical Engineer with comprehensive knowledge in leadership, management, designing and development of software and maintaining electrical systems to the desired specifications, emphasising reliability,sustainability, quality, and safety. I have exemplary communication skills with an innate ability to analyze, coordinate and synthesize data. </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
        
        
        <Link target='_blank' to='//www.linkedin.com/in/onkundifelix'>    <FaLinkedin   className=''/>   </Link>
        <Link target='_blank' to='//github.com/Dot-onkundi'>        <FaGithubSquare  className=''/> </Link>
        <Link  target='_blank' to='//www.linkedin.com/in/onkundifelix'>        < FaInstagramSquare className=''/> </Link>
        <Link target='_blank' to='//twitter.com/Onkundi_Felix'>        <FaTwitterSquare  className=''/> </Link>
        


        </div>
        <div className=''>
          <img src={ProfilePic} alt='none' className='-rotate-[45] rounded-full mx-auto w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96' />
        </div>
        <section>

        <div >
          <h3 className="text-3xl ">Experience </h3>
          <p className='text-md py-2 leading-8 text-gray-600'> In my journey as an engineer, I have worked both remotely and onsite for <span className='text-teal-500'> Companies </span> and <span className='text-teal-500'> Startups </span>  and colloborated with teams to deliver products and solutions for both business and consumers.</p>
          <p className='text-md py-2 leading-8 text-gray-600'> I have the following eperience </p>
        </div>

        {/*Experience Cards */}

        <div className='w-full py-[4rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10 ">
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={ImageOne} alt='none' />
                <h2 className='text-2xl font-bold text-center'>State House Nakuru</h2>
                <p className=' text-center text-md '>July 2019-October 2019 </p>
                <div className="text-gray-600">
                  <p className='py-2 flex  mt-8'> < TiTick  className='fill-[#051b61]'/>Installed a 250kVA standby generator complete with switchboard, stabiliser and ATS switch.</p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Read, interpreted designs and installed security system.</p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Installed metal detectors and CCTV security system.</p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61] font-bold'/>Set up and programmed communication and security equipment in the control room. </p>
                </div>



            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] rounded' src={ImageTwo} alt='none' />
                <h2 className='text-2xl font-bold text-center'>Kenya Power</h2>
                <p className=' text-center text-md '>January 2021-April 2022 </p>
                <div className="text-gray-600">
                  <p className='py-2 flex  mt-8'> < TiTick className='fill-[#051b61]'/>Installed, dismantled, assembled, tested, and analysed results from various transformers. </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Participated in troubleshooting of various protection system equipment </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Actively gave recommendations to improve workflow. </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Installed an 11kV metering circuit breaker, and an assortment of protection equipment. </p>
                </div>



            </div>
            <div className="w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-500">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={ImageThree} alt='none' />
                <h2 className='text-2xl font-bold text-center'>Robin Spin Knit</h2>
                <p className=' text-center text-md '>January 2022-April 2022 </p>
                <div className="text-gray-600">
                  <p className='py-2 flex  mt-8'> < TiTick  className='fill-[#051b61]'/>Troubleshoot and repaired various machines along the textile production line. </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Performed autonomous maintenance of machines </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Reconciled daily KWH readings and ECL logs </p>
                  <p className='py-2 flex'> <TiTick  className='fill-[#051b61]'/>Actively gave recommendations aimed at reducing machine power consumption. </p>
                </div>



            </div>
        

        </div>


    </div>
    <div className='w-full py-8 px-4 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3  ">
            <div className="lg:col-span-2">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Do you wish to make an inquiry? </h1>
                <p> Let me get in touch </p>
            </div>
            <div className="my-4">
                <div className='flex flex-col  sm:flex-row items-center justify-between w-full '>
                <input className=' p-3 w-full rounded-md ' type='email' placeholder='Enter email'/>
                <button className='bg-white text-gray-700 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 hover:text-[#051b61]' > Submit </button>

                </div>      
            </div>

        </div>

    </div>

      </section>  

     
      <div className='mx-auto text-md py-5 text-center ' >
          <h3 className="text-3xl ">Contact me </h3>
          <p className='text-md py-2 leading-8 text-gray-600'> Hi there? My inbox is open to all. Request for a free open source collaboration and let us discuss a project. </p>
          <p className='text-md py-2 leading-8 text-gray-600'> My services range from electrical and software engineering to leadership for teams. Let us connect! </p>
          <p className='text-md pt-2 leading-8 text-gray-600'> onkundifelix@outlook.com</p>
          <p className='text-md leading-8 text-teal-700'> +254710834128</p>
        </div>
      </section>     
    </div>
      
    </div>
    
  )
}

export default Allcomponents