import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

// тоглы
const worksButtons=document.querySelectorAll('.works__button');

//список меню
const worksContent=document.querySelector('.works__content');

//списки меню
const worksContentItem=worksContent.querySelectorAll('.works__content-item');

export const getSliderWork=()=>{
  //активация слайдера
  const swiper=new Swiper('.works__web',{
    modules: [Navigation, Pagination],
    spaceBetween:20,
    pagination:{
      el:'.works__web-pagination',
      clickable:true,
    },
    breakpoints: {
      768:{
        slidesPerView:2,

      },
    },
  });
  //активный тогл
  worksButtons.forEach((elem)=>{
    elem.addEventListener('click',({target})=>{
      const path=target.dataset.path;
      console.log(path);
      worksButtons.forEach((elem)=>{
       elem.classList.remove('works__button_active');
      });
      target.classList.add('works__button_active');
      worksContentItem.forEach((elem)=>{
        elem.classList.remove('active');
        worksContent.querySelector(`[data-default=${path}]`).classList.add('active');
      });
    });
  });
}
