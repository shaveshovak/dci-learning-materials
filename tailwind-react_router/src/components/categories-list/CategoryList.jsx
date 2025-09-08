import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { categories } from "../../assets/categories";
import { CategoryPill } from "./Category";

const CategoryList = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      controller={true}
      navigation={true}
      modules={[Navigation]}
      className={'bg-colour'}
      >
      {categories.map((category, i) => {
        return (
          <SwiperSlide key={i} className={'swiper_item'}>
            <CategoryPill label={category.category} imageUrl={category.image} />
          </SwiperSlide>
        );
      })}
    </Swiper> 
  );
};

export default CategoryList;
