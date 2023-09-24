export default function createLink(url){
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = url;

  const headElement = document.head || document.getElementsByTagName('head')[0];
  // Добавляем <script> и <link> элементы в <head>
  headElement.appendChild(linkElement);
}