
import image_1 from '../../../assets/images/banner/1.jpg'
import image_2 from '../../../assets/images/banner/2.jpg'
import image_3 from '../../../assets/images/banner/3.jpg'
import image_4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
       <div className="carousel w-full h-[700px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image_1} className="w-full rounded-lg" />

   <div className="absolute flex items-center h-full transform left-0 bottom-0 bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
   <div className='text-[#FFF] pl-12  space-y-7 w-1/2'>
        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        {/* <button className="btn btn-active border-none bg-[#FF3811]">Discover More</button> */}
    

        <button className="btn btn-outline ml-5">Latest Project</button>
     </div>
   </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image_2} className="w-full rounded-lg" />

    <div className="absolute flex items-center h-full transform left-0 bottom-0 bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
   <div className='text-[#FFF] pl-12  space-y-7 w-1/2'>
        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className="btn btn-active border-none bg-[#FF3811]">Discover More</button>
        <button className="btn btn-outline ml-5">Latest Project</button>
     </div>
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image_3} className="w-full" />

    <div className="absolute flex items-center h-full transform left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
   <div className='text-[#FFF] pl-12  space-y-7 w-1/2'>
        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className="btn btn-active border-none bg-[#FF3811]">Discover More</button>
        <button className="btn btn-outline ml-5">Latest Project</button>
     </div>
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image_4} className="w-full" />

    <div className="absolute flex items-center h-full transform left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
   <div className='text-[#FFF] pl-12  space-y-7 w-1/2'>
        <h2 className=' text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className="btn btn-active border-none bg-[#FF3811]">Discover More</button>
        <button className="btn btn-outline ml-5">Latest Project</button>
     </div>
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    )
};

export default Banner