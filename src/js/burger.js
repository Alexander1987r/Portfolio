//навигация
const navigation=document.querySelector('.navigation');
const  navigationLink=navigation.querySelectorAll('.navigation__link');
console.log(navigationLink);
//тогл бургера
const headerButton=document.querySelector('.header__button');

//тогл бургера
const headerButtonContent=headerButton.querySelector('.header__button-content');

//функция открытия закрытия бургера
export const getBurger=()=>{
 //открытие закрытие на различных диапазонах
const changeBurger=()=>{
  if(!navigation.classList.contains('navigation_open')){
    navigation.classList.add('navigation_open');
    headerButtonContent.classList.add('header__button-content_open');
    navigation.style.display='block';
  } else {
    navigation.classList.remove('navigation_open');
    headerButtonContent.classList.remove('header__button-content_open');
  }
  navigationLink.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      navigation.style.display='none';
    });
  });

}
const changes=(screen)=>{
  if(screen.matches){
    headerButton.addEventListener('click',changeBurger);
  }else{
    headerButton.removeEventListener('click',changeBurger);
  }
}
if(matchMedia){
  const screen=window.matchMedia("(max-width:768px)");
  screen.addEventListener('change',changes);
  changes(screen)
}
}

