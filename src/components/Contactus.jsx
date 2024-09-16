import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contactus = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen px-36 bg-[#1F1E24] pt-4">

      <i
        onClick={() => navigate(-1)}
        className="text-white ri-arrow-left-line cursor-pointer"
      ></i>
      
      <h1 className="text-6xl mt-4 font-black text-zinc-200">Contact Us</h1>
      <p className="text-lg mt-3 font-semibold text-[#E4E4E7]">
        Feel free to reach out to us if you have any questions or need assistance.
      </p>
      <a
        target='_blank'
        href="mailto:pranavkadu2003@gmail.com"
        className="block mt-8 text-lg font-bold text-[#E4E4E7] hover:text-[#A1A1AA]"
      >
        <i className="ri-mail-fill font-light text-[#E4E4E7] mr-1"></i> Send an Email
      </a>
      <a
        target='_blank'
        href="https://github.com/PranavKadu18"
        className="block mt-2 text-lg font-bold text-[#E4E4E7] hover:text-[#A1A1AA]"
      >
        <i className="ri-github-fill font-light text-[#E4E4E7] mr-1"></i> Owners Github
      </a>
      <a
        target='_blank'
        href="https://www.instagram.com/pranavkadu2003/"
        className="block mt-2 text-lg font-bold text-[#E4E4E7] hover:text-[#A1A1AA]"
      >
        <i className="ri-instagram-line font-light text-[#E4E4E7] mr-1"></i> Instagram
      </a>
      <a
        target='_blank'
        href="https://www.linkedin.com/in/pranav-kadu-28672a270/"
        className="block mt-2 text-lg font-bold text-[#E4E4E7] hover:text-[#A1A1AA]"
      >
        <i className="ri-linkedin-box-fill font-light text-[#E4E4E7] mr-1"></i> Linkedin
      </a>
    </div>
  )
}

export default Contactus

