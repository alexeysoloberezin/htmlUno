import IMask from 'imask';

export default function phoneMask(){
  // https://codelab.pro/maska-dlya-vvoda-telefona-na-javascript/

  // Считываем поле ввода
  const phoneInput = document.querySelectorAll(".phone");
  console.log('phoneInput', phoneInput)
  if(phoneInput.length === 0) return null

  phoneInput.forEach(item => {
    const phoneMask = new IMask(item, {
      mask: "+{7} (000) 000-00-00",
    });
  })
}