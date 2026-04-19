const docRows = document.querySelectorAll('.doc-row');
const docModal = document.getElementById('docModal');
const closeBtn = document.getElementById('docCloseBtn');

const modalDocId = document.getElementById('modalDocId');
const modalDocRef = document.getElementById('modalDocRef');
const modalDocTitle = document.getElementById('modalDocTitle');
const modalOrg = document.getElementById('modalOrg');
const modalStage = document.getElementById('modalStage');
const modalDate = document.getElementById('modalDate');
const modalSummary = document.getElementById('modalSummary');
const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

function openModal(row) {
  const ref = row.children[0]?.textContent.trim() || 'DOC-000';
  const title = row.querySelector('td:nth-child(2) strong')?.textContent.trim() || 'Документ';
  const org = row.children[3]?.textContent.trim() || '—';
  const date = row.children[4]?.textContent.trim() || '—';
  const stage = row.children[7]?.textContent.trim() || '—';
  const relationType = row.children[6]?.textContent.trim() || '';

  modalDocId.textContent = ref;
  modalDocRef.textContent = ref;
  modalDocTitle.textContent = title;
  modalOrg.textContent = org;
  modalStage.textContent = stage;
  modalDate.textContent = date === '—' ? '2026-04-17' : date;
  modalSummary.textContent = relationType
    ? `${title} bo'yicha topshiriq (${relationType}) ijrosi uchun javob tayyorlash.`
    : `${title} bo'yicha topshiriq ijrosi uchun javob tayyorlash.`;

  docModal.classList.add('show');
  docModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  docModal.classList.remove('show');
  docModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

docRows.forEach((row) => {
  row.addEventListener('click', () => openModal(row));
});

closeBtn?.addEventListener('click', closeModal);

docModal?.addEventListener('click', (event) => {
  if (event.target.matches('[data-close="true"]')) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && docModal.classList.contains('show')) {
    closeModal();
  }
});

accordionTriggers.forEach((trigger) => {
  const panelId = trigger.getAttribute('data-accordion-trigger');
  const panel = document.getElementById(panelId);

  if (!panel) return;

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isExpanded));
    panel.classList.toggle('open', !isExpanded);
  });
});
