export type Section = 'learn' | 'reference' | 'resources' | '';

export function getSectionFromPath(pathname: string): Section {
  const currentPath = pathname.replace(/\/$/, '') || '/';
  
  const isUIDesign = currentPath.startsWith('/ui/basic-design') || 
                    currentPath.startsWith('/ui/advanced-design') || 
                    currentPath.startsWith('/ui/advanced-customisation');

  if (currentPath.startsWith('/tutorial') || isUIDesign) {
    return 'learn';
  } else if (currentPath.startsWith('/api') || currentPath.startsWith('/ui')) {
    return 'reference';
  } else if (currentPath.startsWith('/showcase') || currentPath.startsWith('/misc')) {
    return 'resources';
  }
  
  return '';
}

export function isActive(pathname: string, href: string): boolean {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const normalizedHref = href.replace(/\/$/, '') || '/';
  return normalizedPath === normalizedHref;
}

export function isSectionActive(pathname: string, items: { href: string }[]): boolean {
  return items.some(item => isActive(pathname, item.href));
}
