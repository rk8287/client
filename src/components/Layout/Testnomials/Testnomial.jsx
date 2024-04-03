import React from 'react';
import { MdStarRate } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testonomials.css';
const img = require('../../assets/images/reviews-logo-2.png')
const imgL = require('../../assets/images/reviews-logo-3.png')
const imgI = require('../../assets/images/reviews-logo-1.png')


const Testnomial = () => {


  return (
    <div className='sub'>
    <div className="testnomial-header">
      <div className="headin">
        <h1 className='h-k'>Happy Customers with Planet fares</h1>
      </div>
      <div className="others">
           <div style={{display:'flex',marginTop:'12px'}} className="star">
           <img className='imgg' src={imgI} alt="" />
           </div>
      </div> |

      <div className="others">
       
           <div style={{display:'flex'}} className="star">
           <img className='imgg' src={img} alt="" />
           </div>
      </div> |

      <div className="others">
           <div style={{display:'flex'}} className="star">
           <img className='imgg' src={imgL} alt="" />
           </div>
      </div> |
    </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide' style={{margin:'2rem',maxWidth:'90vw'}}>
          <div className="main-slide">
            <h3 className='name'>Ralphin soin</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Max well</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Robert</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Mitsi Kayel</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Aleay</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Raunak</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Trivago</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'2rem'}}>
          <div className="main-slide">
            <h3 className='name'>Niveya</h3>
            <div style={{display:'flex'}} className="icon">
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            <MdStarRate/>
            </div>
            <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Quia eius quae dolor recusandae ea illum iste cupiditate
               cum accusantium, error pariatur aliquam officiis dolorum
                nemo ratione expedita fuga delectus blanditiis!</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Testnomial