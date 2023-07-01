import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer-container'>
      
      <div className='footer-items'>
      <img src="/images/DH.png"></img>
      <div className='icon-footer'>
        
          <InstagramIcon />
          <FacebookIcon/>
          <WhatsAppIcon/>
        
      </div>
      </div>
    </div>
  )
}

export default Footer