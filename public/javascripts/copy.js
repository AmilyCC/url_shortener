if(typeof document === "undefined"){
}else{
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  const btnCopy = document.querySelector('.btn-copy');
  $(btnCopy).attr('data-bs-original-title', 'Click to copy.')
  try{btnCopy.addEventListener('click', function copyIt() {
      const text = document.querySelector('.input-text').value;
      navigator.clipboard.writeText(text)
      .then(() => {
          $(this).attr('data-bs-original-title', 'Copied!')
          $(this).tooltip('show');
          $(this).on('hidden.bs.tooltip' ,  () => {
            $(this).attr('data-bs-original-title', 'Click to copy.')
          })
      })
      .catch(err => {
          console.error('Error in copying text: ', err);
      });
    })
  }catch (error) {
  }

  
}

