let pagefind: any;
let isSearchReady = false;

const getElements = () => {
  return {
    dialog: document.getElementById('search-dialog') as HTMLDialogElement | null,
    input: document.getElementById('search-input') as HTMLInputElement | null,
    resultsContainer: document.getElementById('search-results') as HTMLElement | null
  };
};

async function initSearch() {
  if (isSearchReady) return;
  try {
    const pagefindPath = '/pagefind/pagefind.js';
    // Use a new Function to bypass Vite's static analysis of the import()
    // which allows loading the file from /public during development.
    const pagefindModule = await (new Function(`return import("${pagefindPath}")`))();
    pagefind = pagefindModule;
    await pagefind.init();
    isSearchReady = true;
  } catch (e) {
    console.warn("Search index not found.");
  }
}

const openSearch = async () => {
  const { dialog, input } = getElements();
  if (!dialog) return;
  
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  input?.focus();
  await initSearch();
};

const closeSearch = () => {
  const { dialog, input, resultsContainer } = getElements();
  if (!dialog) return;
  
  dialog.close();
  document.body.style.overflow = '';
  if (input) input.value = '';
  if(resultsContainer) {
    resultsContainer.innerHTML = '<div class="search-empty-state"><p>Type to start searching...</p></div>';
  }
};

export function setupSearch() {
  const { input, resultsContainer, dialog } = getElements();
  const form = dialog?.querySelector('.search-form');

  // Global listeners (only once)
  if (!(window as any)._searchInitialized) {
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const { dialog } = getElements();
      
      if (target.closest('.search-trigger')) {
        e.preventDefault();
        openSearch();
      } else if (dialog && (target === dialog || target.closest('.search-close'))) {
        closeSearch();
      }
    });

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      const { dialog, input, resultsContainer } = getElements();
      
      if (e.key === 'Escape' && dialog?.open) {
        e.preventDefault();
        closeSearch();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === '/' && document.activeElement !== input) {
        e.preventDefault();
        openSearch();
      }

      // Arrow navigation
      if (dialog?.open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        const items = Array.from(resultsContainer?.querySelectorAll('.search-result-item') || []) as HTMLElement[];
        if (!items.length) return;

        const currentIdx = items.indexOf(document.activeElement as HTMLElement);
        
        if (e.key === 'ArrowDown') {
          if (currentIdx === -1 || currentIdx === items.length - 1) {
            items[0]?.focus();
          } else {
            items[currentIdx + 1]?.focus();
          }
        } else if (e.key === 'ArrowUp') {
          if (currentIdx === -1 || currentIdx === 0) {
            input?.focus();
          } else {
            items[currentIdx - 1]?.focus();
          }
        }
      }
    });
    (window as any)._searchInitialized = true;
  }

  form?.addEventListener('submit', (e) => e.preventDefault());
  
  // Per-page load listeners
  input?.addEventListener('input', async (e) => {
    const val = (e.target as HTMLInputElement).value;
    if (!val.trim()) {
      if(resultsContainer) resultsContainer.innerHTML = '<div class="search-empty-state"><p>Type to start searching...</p></div>';
      return;
    }
    if (!isSearchReady) return;
    
    const search = await pagefind.search(val);
    if(resultsContainer) {
      if (search.results.length === 0) {
        resultsContainer.innerHTML = `<div class="search-empty-state"><p>No results found for "${val}"</p></div>`;
        return;
      }

      const topResults = search.results.slice(0, 8);
      const list = document.createElement('ul');
      list.className = 'search-result-list';

      for (const result of topResults) {
        const data = await result.data();
        const li = document.createElement('li');
        li.style.cssText = 'list-style: none !important; margin: 0; padding: 0;';
        
        const a = document.createElement('a');
        a.href = data.url;
        a.className = 'search-result-item';
        a.addEventListener('click', closeSearch);
        
        const rawTitleText = data.meta?.title || data.url.replace(/^\//, '');
        a.innerHTML = `
          <div class="search-result-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-result-icon">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>${rawTitleText}</span>
          </div>
          <div class="search-result-excerpt">${data.excerpt}</div>
        `;
        
        li.appendChild(a);
        list.appendChild(li);
      }
      
      resultsContainer.innerHTML = '';
      resultsContainer.appendChild(list);
    }
  });
}
