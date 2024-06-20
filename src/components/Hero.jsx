import {react} from '../assets/images/images'

const Hero = () => {
  return (
    <section className="w-full h-dvh flex flex-col sm:flex-row justify-center items-center my-4">
      <div className=' w-full sm:w-1/2'><h1 className='text-4xl text-center sm:text-6xl sm:text-left'>Transforming Visions into Virtual Reality</h1></div>
      <div className='w-full sm:w-1/2 '> <img src={react} alt="Logo" /></div>
    </section>
  );
};

export default Hero;
