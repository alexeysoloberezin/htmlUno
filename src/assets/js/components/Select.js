import customSelect from 'custom-select';

export default function selectInit(){
  const selects = document.querySelectorAll('select')
  if(selects.length === 0) return null

  addLinks()

  customSelect('select');
}

function addLinks() {
  // Создаем <link> элемент
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = `/assets/css/select.min.css`;

  // Получаем <head> элемент
  const headElement = document.head || document.getElementsByTagName('head')[0];

  // Добавляем <script> и <link> элементы в <head>
  headElement.appendChild(linkElement);
}