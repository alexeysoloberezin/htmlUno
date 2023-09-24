export default function AccordionInit() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if(accordionItems.length === 0) return null

  accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionContent = item.querySelector('.accordion-content');

    accordionHeader.addEventListener('click', () => {
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        accordionContent.style.transition = 'max-height 0.45s ease';
      } else {
        accordionContent.style.maxHeight = '0';
        accordionContent.style.transition = 'max-height 0.45s ease';
      }
    });
  });
}
