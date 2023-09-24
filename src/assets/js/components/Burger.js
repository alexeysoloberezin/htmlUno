export default function burger(){
  const burger = document.querySelector('.burger');
  if(!burger) return null

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--open');
  });
}