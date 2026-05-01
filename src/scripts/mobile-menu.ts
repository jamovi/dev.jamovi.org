export function initGlobalMobileMenu() {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const toggleBtn = document.getElementById('mobile-menu-btn');

    if (!sidebar || !backdrop || !toggleBtn) return;

    const isToggleClick = toggleBtn.contains(target);
    const isBackdropClick = target === backdrop;
    
    // Elements that should NOT close the menu when clicked
    const headerActions = document.querySelector('.header-actions');
    const searchTrigger = document.querySelector('.search-wrapper.variant-icon');
    const searchDialog = document.getElementById('search-dialog');
    const searchClose = document.getElementById('search-close');
    
    const isActionClick = 
      headerActions?.contains(target) || 
      searchTrigger?.contains(target) || 
      target === searchDialog || 
      searchClose?.contains(target);

    if (isToggleClick) {
      // Prevent event from bubbling up to the "outside click" handler
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        sidebar.classList.remove('open');
        backdrop.classList.remove('open');
        document.documentElement.classList.remove('mobile-menu-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        sidebar.classList.add('open');
        backdrop.classList.add('open');
        document.documentElement.classList.add('mobile-menu-open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    } else if (isBackdropClick || (sidebar.classList.contains('open') && !sidebar.contains(target) && !isActionClick)) {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      document.documentElement.classList.remove('mobile-menu-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

export function resetMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const toggleBtn = document.getElementById('mobile-menu-btn');
  
  if (sidebar && backdrop && toggleBtn) {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.documentElement.classList.remove('mobile-menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
}
