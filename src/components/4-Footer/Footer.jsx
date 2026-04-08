import './Footer.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
      <div className='Footer'>
  <div className='ProfileSection'>
    <img className="profile" src='profilepic-photoaidcom-cropped.jpg' alt='my pic' />
    <p className='myname'>Ahmed Ragab</p>
  </div>

  <div className='RatingSection'>
    <Stack spacing={1}>
      <div className='texts'>
        <p>HTML</p><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        <p>JS</p><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        <p>CSS</p><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        <p>Django</p><Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        <p>React JS</p><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        <p>Next JS</p><Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
      </div>
    </Stack>
  </div>

  <div className='ContactSection'>
    <p>Email:Ahmad.161.ragab@gmail.com</p>
    <p>LinkedIn:<a href='http://linkedin.com/in/ahmad-ragab-14a714235' target='_blank'>http://linkedin.com/in/ahmad-ragab-14a714235</a></p>
    <p>GitHub:<a href='https://github./ahmadragab-sys' target='_blank'>https://github.com/ahmadragab-sys</a></p>
  </div>
</div>
    );
}

export default Footer;
