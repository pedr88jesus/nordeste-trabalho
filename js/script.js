
// -------------------------------
// MODAL
// -------------------------------
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function openModal(content) {
  modalContent.innerHTML = content;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// Fechar modal ao clicar fora da modal-card
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// -------------------------------
// SCROLL SUAVE PARA LINKS INTERNOS
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// -------------------------------
// ANIMAÇÕES ADICIONAIS OPCIONAIS
// -------------------------------
// Por exemplo, efeito de hover nas imagens dos cards
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
