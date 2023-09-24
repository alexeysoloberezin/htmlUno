export default function popupInit(){
  const popupToggles = document.querySelectorAll('.popup-toggle');
  const popupOverlays = document.querySelectorAll('.popup-overlay');

  if(popupToggles.length === 0) return null

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      console.log('Нажата клавиша ESC');
      popupOverlays.forEach(item => item.classList.remove('active'))
    }
  });


  popupToggles.forEach(function(button) {
    button.addEventListener('click', function() {
      const popupId = button.dataset.popup;
      const popupOverlay = document.getElementById(popupId);

      popupOverlay.classList.add('active');
    });
  });

  popupOverlays.forEach(function(popupOverlay) {
    const closeButton = popupOverlay.querySelector('.close-popup');

    popupOverlay.addEventListener('click', function (e){
      if(e.target.classList.contains('popup-overlay')){
        popupOverlay.classList.remove('active');
      }
    })
    if(closeButton){
      closeButton.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
      });
    }
  });
}