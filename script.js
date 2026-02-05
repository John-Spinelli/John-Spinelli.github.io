// Small interaction: make cards open on Enter when focused
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    const active = document.activeElement;
    if (active && active.classList.contains('card')){
      const link = active.querySelector('.card-link');
      if (link) link.click();
    }
  }
});

// Make each card focusable for keyboard users
document.querySelectorAll('.grid .card').forEach(card => {
  card.setAttribute('tabindex', '0');
});
