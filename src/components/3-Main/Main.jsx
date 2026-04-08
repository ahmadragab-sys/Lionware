import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Main.css';

function Main  () {
    return (
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='image1' src="capture.png" alt='BearRoul'/>
          <br/>
          <p className='Bear'>Online shop to order Clothes with cart section to add the clothes the customer want</p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image2' src="capture2.png" alt='BearRou2'/>
          <br/>
          <p className='BearTwo'>And the Customer can order the clothes online and add or delete the clotes </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image3' src="capture3.png" alt='MovieShow'/>
          <br/>
          <p className='Movie'>Movie website to search and watch the description of the movie </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image4' src="capture4.png" alt='MovieShow2'/>
          <br/>
          <p className='MovieTwo'>You can search and read the description you want from any movie you search about </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image5' src="capture5.png" alt='OnlineResturant'/>
          <br/>
          <p className='Resturant'>Online resturant shop to order food and drinks you want from the store  </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image6' src="capture6.png" alt='OnlineResturant2'/>
          <br/>
          <p className='ResturantTwo'>You can add drinks you want to the cart (menu) and delete it with one click </p>
        </SwiperSlide>
      </Swiper>
    );
}

export default Main;
