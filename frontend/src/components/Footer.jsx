import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <p className='text-gray-400 '>Made with ❤ by Araf</p>
        <div className='space-y-4 flex flex-row'>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
               <FaXTwitter size={22} />

            <FiLinkedin size={22} />

            <FiFacebook size={22} />

            <FiGithub size={22} />




        </div>
        </div>
        
    </div>
  )
}

export default Footer