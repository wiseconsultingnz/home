const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', '메뉴 열기');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('.copy-button')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const value = button.dataset.copy;
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(value);
    if (status) status.textContent = '카카오톡 아이디를 복사했습니다.';
  } catch {
    if (status) status.textContent = `카카오톡 ID: ${value}`;
  }
});
