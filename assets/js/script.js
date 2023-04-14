document.getElementById('btnAdd').addEventListener('click', function(event) {
    event.stopPropagation();
    var elementos = document.querySelectorAll('.btn--hide');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].classList.add('btn--show');
      elementos[i].classList.remove('btn--hide');
    }
  
    document.addEventListener('click', function onClick(event) {
      event.stopPropagation();
      if (!event.target.closest('.btnGroup')) {
        var elementos = document.querySelectorAll('.btn--show');
        for (var i = 0; i < elementos.length; i++) {
          elementos[i].classList.add('btn--hide');
          elementos[i].classList.remove('btn--show');
        }
        document.body.classList.remove('btn--show');
        document.removeEventListener('click', onClick);
      }
    });
  });