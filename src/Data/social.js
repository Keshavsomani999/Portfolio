import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const links = [
    {
        id:1,
        child:(
            <>LinkedIn <FaLinkedin size={30} /></>
        ),
        href:'https://www.linkedin.com/in/keshav-somani-10662116b/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>GitHub <FaGithub size={30} /></>
        ),
        href:'https://github.com/Keshavsomani999',
        
    },
    {
        id:3,
        child:(
            <>Mail <HiOutlineMail size={30} /></>
        ),
        href:'mailto:Keshavsomani999@gmail.com',
    },
    {
        id:4,
        child:(
            <>Resume <BsFillPersonLinesFill size={30} /></>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    },
]

export default links;