document.getElementById('btnAdd').addEventListener('click', function(event) {
  event.stopPropagation();

    var overlay = document.createElement('div');
    document.body.appendChild(overlay);
    overlay.setAttribute('id', 'overlay');
    
    overlay.style.display = 'block';

  var elementos = document.querySelectorAll('.btn--hide');
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].classList.add('btn--show');
    elementos[i].classList.remove('btn--hide');
  }
  
  function onClick(event) {
    if (!event.target.closest('.btn--show')) {
      var elementos = document.querySelectorAll('.btn--show');
      for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove('btn--show');
        elementos[i].classList.add('btn--hide');
      }

      overlay.style.display = 'none';
      document.removeEventListener('click', onClick);
      document.body.removeChild(overlay);
      
      document.removeEventListener('click', onClick);
    }
  }
  
  document.addEventListener('click', onClick);
});
