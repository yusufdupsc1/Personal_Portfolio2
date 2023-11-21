
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,} from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";

const SocialIcons = () => {
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 p-3 rounded-2xl flex gap-3'>
      <a href="https://github.com/yusufdupsc1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/EsrafilSaikot" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100007791609164" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/yusuf-ali-16b890216/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/tashfinyusuf/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="mailto:yusufdupsc1@gmai.com" target="_blank" rel="noopener noreferrer">
        <MdOutgoingMail />
      </a>
    </div>
  );
};

export default SocialIcons;
