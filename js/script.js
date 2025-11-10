document.addEventListener('DOMContentLoaded', function(){
  // Modal
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');

  window.openModal = function(content){
    modalContent.innerHTML = content;
    modal.classList.add('open');
  }
  window.closeModal = function(){
    modal.classList.remove('open');
  }

  modal.addEventListener('click', e => {
    if(e.target.id==='modal') closeModal();
  });
  document.addEventListener('keydown', e => {
    if(e.key==='Escape') closeModal();
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target=document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
