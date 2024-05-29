//список скилов
const skillsList=document.querySelector('.skills__list');

const skillArray=[{
  title:'html',
  text:'Язык гипертекстовой разметки - это стандартизированная система разметки текстовых файлов, которая создает структуру практически для каждой страницы, которую мы находим в Интернете. Это базовый строительный блок, необходимый для разработки веб-сайта.',
  modifier:'html',
  },
  {
  title:'css',
  text:'Это один из самых популярных языков программирования для веб-разработки, который используется для создания стильных и визуально привлекательных элементов веб-сайта.',
  modifier:'css',
  },{
    title:'js',
    text:'Это самый популярный в мире упрощенный и интерпретируемый язык программирования. Также известный как язык сценариев для веб-страниц. Этот язык может использоваться как для разработки на стороне клиента, так и на стороне сервера.',
    modifier:'js',
  },
  {
    title:'react',
    text:'React — это декларативная JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами».',
    modifier:'react',
}];


export const getSkills=()=>{

skillsList.textContent='';
skillArray.forEach((elem)=>{
  const listItem=document.createElement('li');
  listItem.classList.add('skills__item');
  listItem.classList.add(`skills__item_${elem.modifier}`);

  listItem.innerHTML=`
   <h3 class="skills__item-title">
     ${elem.title}
   </h3>
   <p class="skills__text">
     ${elem.text}
    </p>
  `;
  skillsList.append(listItem);
});
}