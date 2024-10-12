
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import animation from '../../../assets/Animation - 1699094059456.json'
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import Lottie from 'lottie-react';
const About = () => {
    return (
        <div className="hero my-24">
        <div className="hero-content flex-col lg:flex-col">
         <div className='lg:w-1/2 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="border-8 border-white w-1/2 right-5 top-1/2 absolute rounded-lg shadow-2xl" />
         </div>
          <div className='lg:w-1/2'>
            <h4 className='text-xl text-[#FF3811] font-bold'>About Us</h4>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <AwesomeButton className='px-7 py-3'
      type="primary"
      size='large'
      cssModule={AwesomeButtonStyles}
     >
Get More Info
     </AwesomeButton>

 
          </div>

          <div>
            <Lottie className='w-[50%] mx-auto' animationData={animation}>
              
            </Lottie>
          </div>
          
        </div>
      </div>
    );
};

export default About;