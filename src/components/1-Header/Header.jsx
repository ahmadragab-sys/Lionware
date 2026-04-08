import "./Header.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Header = () => {
    return (
    <header className=' flex'>
       <div className='LogoSection'> 
        <img className='Logo' src="Logo.png" alt="Golden Lion Logo"  />
        <p className="Text typing" >LionWare</p>
       </div>
        <div className="IconSection ">
           <a href="https://www.facebook.com/ahmad.ragab.35" target="_blank"><FacebookIcon className="F"/></a>
           <a href="https://www.instagram.com/ahmad_ragab0" target="_blank"><InstagramIcon className="I"/></a>
           <a href="https://wa.me/01007675974" target="_blank"><WhatsAppIcon  className="W"/></a> 
            
        </div>
           
        </header>
    );
}

export default Header;
