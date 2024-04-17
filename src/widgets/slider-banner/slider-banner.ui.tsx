import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function SliderBanner() {
  return (
    <div className="flex flex-col md:flex-row gap-5  md:max-h-[450px]">
      <div className="slider-banner md:w-[65%]">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div
              className="swiper-card rounded p-1"
              style={{
                backgroundSize: 'cover',
                height: '450px',
                backgroundImage: `url('https://i.pinimg.com/564x/a9/a6/92/a9a692e48d3887d66938f26930e412a9.jpg')`,
              }}
            >
              <h3 className="text-pc-100 font-bold text-xl p-3 md:p-8">
                Как дизайнеру и любителю технологий жить после Apple Vision Pro
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-card bg-center bg-cover rounded"
              style={{
                height: '450px',
                backgroundImage: `url('https://habrastorage.org/r/w780/getpro/habr/upload_files/453/128/8f0/4531288f06638490cc72b5a387d92412.jpg')`,
              }}
            >
              <h3 className="text-pc-100 font-bold text-xl p-3 md:p-8">
                Трансляция видео посредством P2P-сетей
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-card bg-center bg-cover rounded"
              style={{
                height: '450px',
                backgroundImage: `url('https://habrastorage.org/r/w780/getpro/habr/upload_files/840/4b8/7ce/8404b87ced286d27eda1425c08e022ab.jpg')`,
              }}
            >
              <h3 className="text-pc-100 font-bold text-xl p-3 md:p-8">
                История геймдизайна от классических игр до современных
                технологий
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col justify-between gap-2 md:gap-0">
        <div
          className="h-[200px] md:h-[48%] bg-center bg-cover rounded slider-card"
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/02/58/db/0258dbaa164be3099767cc7fa830e604.jpg')`,
          }}
        >
          <h3 className="text-pc-100 font-bold">
            4 Кастомных React хука которые должен знать каждый Developer
          </h3>
        </div>
        <div
          className="h-[200px] md:h-[48%] bg-center bg-cover rounded slider-card"
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/7b/fb/98/7bfb98ac655ba6b6e912211808c516f2.jpg')`,
          }}
        >
          <h3 className="text-pc-100 font-bold">
            12 Лайвхаков как учиться эффективно
          </h3>
        </div>
      </div>
    </div>
  );
}
