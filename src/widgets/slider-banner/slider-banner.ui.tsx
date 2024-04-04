import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider-banner.ui.css';


export function SliderBanner() {
  return (
    <Box className="slider-banner">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/07/21/1b/07211b078ab5e9f537a3daeccef72279.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/f7/a8/9d/f7a89ddb7fc4dfe1dd704f0c51a5b0f5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/f4/05/e9/f405e94ace11d60ff68176590646eb25.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/95/2b/5a/952b5a371c5e0e411afaaca340f7ab8d.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
