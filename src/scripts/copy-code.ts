export function setupCopyButtons() {
  const codeBlocks = document.querySelectorAll('.astro-code');
  
  codeBlocks.forEach((block) => {
    if (block.querySelector('.code-copy-btn')) return;
    if (block.parentElement?.classList.contains('code-block-wrapper')) return;

    (block as HTMLElement).style.position = '';

    const copyButton = document.createElement('button');
    copyButton.className = 'code-copy-btn';
    copyButton.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="check-icon" style="display:none;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // Move block inside wrapper
    block.parentNode?.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    // Append button to wrapper
    wrapper.appendChild(copyButton);

    copyButton.addEventListener('click', async () => {
      const codeEl = block.querySelector('code');
      const codeText = codeEl ? codeEl.innerText : '';
      
      try {
        await navigator.clipboard.writeText(codeText);
        
        const copyIcon = copyButton.querySelector('.copy-icon');
        const checkIcon = copyButton.querySelector('.check-icon');
        
        if (copyIcon && checkIcon) {
          (copyIcon as HTMLElement).style.display = 'none';
          (checkIcon as HTMLElement).style.display = 'block';
          copyButton.classList.add('copied');
          
          setTimeout(() => {
            (copyIcon as HTMLElement).style.display = 'block';
            (checkIcon as HTMLElement).style.display = 'none';
            copyButton.classList.remove('copied');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });
  });
}
