import Link from 'next/link';
import Image from 'next/image'
import  Slide  from '../public/slides/Slider1.jpg';
import Content from './Others';
const Header = () => {
    return (
      <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <div >
          <Image 
          className={"object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"}
            src={Slide}
            width={1260}
            height={750}

            alt=""
          />
          </div>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              JendiePlus
              <br className="hidden md:block" />
              Bima Smart{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Mkononi
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
             Changing How Insurance Works
            </p>
            <div className="flex items-center">
              
              
              <Link href="/quote">

                
              <a
                
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 bg-red"
              >
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 

                Get Quote
                </button>
              </a>
              </Link>
            </div>
          </div>
        </div>

      <Content/>


      </div>
       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
       <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
           <span className="relative inline-block">
             <svg
               viewBox="0 0 52 24"
               fill="currentColor"
               className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
             >
               <defs>
                 <pattern
                   id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                   x="0"
                   y="0"
                   width=".135"
                   height=".30"
                 >
                   <circle cx="1" cy="1" r=".7" />
                 </pattern>
               </defs>
               <rect
                 fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                 width="52"
                 height="24"
               />
             </svg>
             <span className="relative">The</span>
           </span>{' '}
           Why choose BimaPlus
         </h2>
         <p className="text-base text-gray-700 md:text-lg">
         We are relentless in striving to offer innovative products while leveraging on advancing technology for an automated, transparent and seamless processes.
         </p>
       </div>
       <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
         <div className="sm:text-center">
           <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500 sm:mx-auto sm:w-24 sm:h-24">
             <svg
               className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
               stroke="currentColor"
               viewBox="0 0 52 52"
             >
               <polygon
                 strokeWidth="3"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 fill="none"
                 points="29 13 14 29 25 29 23 39 38 23 27 23"
               />
             </svg>
           </div>
           <h6 className="mb-2 font-semibold leading-5">Best price guarantee</h6>
           <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
           Compare prices from multiple companies to get the best deals
           </p>
           <Link  href="/">
           <a
            
             aria-label=""
             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
           >
            
           </a>
           </Link>
         </div>
         <div className="sm:text-center">
           <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500 sm:mx-auto sm:w-24 sm:h-24">
             <svg
               className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
               stroke="currentColor"
               viewBox="0 0 52 52"
             >
               <polygon
                 strokeWidth="3"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 fill="none"
                 points="29 13 14 29 25 29 23 39 38 23 27 23"
               />
             </svg>
           </div>
           <h6 className="mb-2 font-semibold leading-5">Professional Team</h6>
           <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
           Our team well trained and ready to assist on any issue 24/7.
           </p>
           <Link href="/">
           <a
             
             aria-label=""
             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
           >
            
           </a>
           </Link>
         </div>
         <div className="sm:text-center">
           <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500 sm:mx-auto sm:w-24 sm:h-24">
             <svg
               className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
               stroke="currentColor"
               viewBox="0 0 52 52"
             >
               <polygon
                 strokeWidth="3"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 fill="none"
                 points="29 13 14 29 25 29 23 39 38 23 27 23"
               />
             </svg>
           </div>
           <h6 className="mb-2 font-semibold leading-5">Certificate in Minutes</h6>
           <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
           Get your insurance certificate delivered instantly to your email or whatsapp.
           </p>
           <Link  href="/">
           <a
             
             aria-label=""
             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
           >
             
           </a>
           </Link>
         </div>
       </div>
     </div>
     </>
    );
  };

  export default Header

  