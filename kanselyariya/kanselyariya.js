const ROLE_STORAGE_KEY = 'agro_active_role_v1';
const KANSELYARIYA_PAGE = 'kanselyariya.html';
const KANSELYARIYA_PATH = 'kanselyariya/kanselyariya.html';

const roleSwitcher = document.getElementById('roleSwitcher');
const roleSwitcherBtn = document.getElementById('roleSwitcherBtn');
const roleSwitcherMenu = document.getElementById('roleSwitcherMenu');
const roleSwitcherOptions = Array.from(document.querySelectorAll('.role-switcher-option[data-role]'));

const createModal = document.getElementById('createModal');
const openCreateModalBtn = document.getElementById('openCreateModalBtn');
const createCloseBtn = document.getElementById('createCloseBtn');

function getCurrentPageName() {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] || 'index.html';
}

function persistRole(role) {
  try {
    localStorage.setItem(ROLE_STORAGE_KEY, role);
  } catch (_) {
    /* ignore storage errors */
  }
}

function getPersistedRole() {
  try {
    return localStorage.getItem(ROLE_STORAGE_KEY);
  } catch (_) {
    return null;
  }
}

function redirectByRole(role) {
  const page = getCurrentPageName();
  if (role === 'Kanselyariya' && page !== KANSELYARIYA_PAGE) {
    window.location.href = KANSELYARIYA_PATH;
    return;
  }
  if (page === KANSELYARIYA_PAGE && role !== 'Kanselyariya') {
    window.location.href = '../index.html';
  }
}

function setActiveRole(role) {
  if (roleSwitcherBtn) {
    roleSwitcherBtn.textContent = role;
  }
  roleSwitcherOptions.forEach((option) => {
    const isActive = option.getAttribute('data-role') === role;
    option.classList.toggle('active', isActive);
    option.setAttribute('aria-pressed', String(isActive));
  });
}

function openRoleSwitcher() {
  roleSwitcher?.classList.add('open');
  roleSwitcherMenu?.removeAttribute('hidden');
  roleSwitcherBtn?.setAttribute('aria-expanded', 'true');
}

function closeRoleSwitcher() {
  roleSwitcher?.classList.remove('open');
  roleSwitcherMenu?.setAttribute('hidden', '');
  roleSwitcherBtn?.setAttribute('aria-expanded', 'false');
}

function toggleRoleSwitcher() {
  if (roleSwitcher?.classList.contains('open')) {
    closeRoleSwitcher();
    return;
  }
  openRoleSwitcher();
}

function syncBodyScroll() {
  const isAnyModalOpen = createModal?.classList.contains('show');
  document.body.style.overflow = isAnyModalOpen ? 'hidden' : '';
}

function openCreateModal() {
  createModal?.classList.add('show');
  createModal?.setAttribute('aria-hidden', 'false');
  syncBodyScroll();
}

function closeCreateModal() {
  createModal?.classList.remove('show');
  createModal?.setAttribute('aria-hidden', 'true');
  syncBodyScroll();
}

roleSwitcherBtn?.addEventListener('click', toggleRoleSwitcher);
roleSwitcherOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const role = option.getAttribute('data-role');
    if (!role) return;
    setActiveRole(role);
    persistRole(role);
    closeRoleSwitcher();
    redirectByRole(role);
  });
});

openCreateModalBtn?.addEventListener('click', openCreateModal);
createCloseBtn?.addEventListener('click', closeCreateModal);

createModal?.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.matches('[data-create-close="true"]')) {
    closeCreateModal();
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (roleSwitcher && !roleSwitcher.contains(target)) {
    closeRoleSwitcher();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  closeRoleSwitcher();
  if (createModal?.classList.contains('show')) {
    closeCreateModal();
  }
});

const initialRole = getPersistedRole() || roleSwitcherBtn?.textContent?.trim() || 'Kanselyariya';
setActiveRole(initialRole);
persistRole(initialRole);
redirectByRole(initialRole);
