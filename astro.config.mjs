import { defineConfig } from 'astro/config';
import remarkGithubAlerts from 'remark-github-alerts';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.jamovi.org',

  markdown: {
    remarkPlugins: [remarkGithubAlerts],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  integrations: [sitemap()],
  redirects: {
    '/tuts0101-getting-started': '/tutorial/tuts0101-getting-started',
    '/tutorial/tuts0102-creating-a-module': '/tutorial/tuts0102-building-your-first-analysis',
    '/tutorial/tuts0103-creating-an-analysis': '/tutorial/tuts0102-building-your-first-analysis',
    '/tutorial/tuts0104-implementing-an-analysis': '/tutorial/tuts0103-implementing-an-analysis',
    '/tutorial/tuts0105-debugging-an-analysis': '/tutorial/tuts0204-debugging-an-analysis',
    '/tutorial/tuts0106-adding-plots': '/tutorial/tuts0107-adding-plots',
    '/tutorial/tuts0107-distributing-modules': '/tutorial/tuts0109-distributing-modules',
    '/tutorial/tuts0108-additional-notes': '/tutorial/tuts0110-additional-notes',
    '/tuts0201-dynamic-tables': '/tutorial/tuts0201-dynamic-tables',
    '/tuts0201-data-binding': '/tutorial/tuts0201-dynamic-tables',
    '/tuts0202-handling-data': '/tutorial/tuts0202-handling-data',
    '/tuts0203-state': '/tutorial/tuts0203-state',
    '/tutorial/tuts0204-advanced-plots': '/tutorial/tuts0301-image-state-performance',
    '/tutorial/tuts0205-plot-themes': '/tutorial/tuts0302-plot-themes',
    '/api_actions': '/api/actions',
    '/api_analysis-definition': '/api/analysis-definition',
    '/api_i18n': '/api/i18n',
    '/api_image-sizing': '/tutorial/tuts0303-responsive-image-sizing',
    '/api/image-sizing': '/tutorial/tuts0303-responsive-image-sizing',
    '/api_module-definition': '/api/module-definition',
    '/api_notices': '/api/notices',
    '/api_results-definition': '/api/results-definition',
    '/api_results-elements': '/api/results-elements',
    '/api_table': '/api/table',
    '/api_ui-definition': '/api/ui-definition',
    '/ui-basecontrol': '/ui/basecontrol',
    '/ui-basic-design': '/ui/basic-design',
    '/ui-advanced-design': '/ui/advanced-design',
    '/ui-advanced-customisation': '/ui/advanced-customisation',
    '/ui-checkbox': '/ui/checkbox',
    '/ui-collapsebox': '/ui/collapsebox',
    '/ui-combobox': '/ui/combobox',
    '/ui-custom-format': '/ui/custom-format',
    '/ui-label': '/ui/label',
    '/ui-layoutbox': '/ui/layoutbox',
    '/ui-listbox': '/ui/listbox',
    '/ui-optioncontrol': '/ui/optioncontrol',
    '/ui-parentcontrol': '/ui/parentcontrol',
    '/ui-radiobutton': '/ui/radiobutton',
    '/ui-standard-formats': '/ui/standard-formats',
    '/ui-supplier': '/ui/supplier',
    '/ui-targetlayoutbox': '/ui/targetlayoutbox',
    '/ui-termlabel': '/ui/termlabel',
    '/ui-textbox': '/ui/textbox',
    '/ui-variablelabel': '/ui/variablelabel',
    '/ui-variablesupplier': '/ui/variablesupplier',
    '/api_updates': '/misc/updates',
    '/misc-library': '/misc/library',
    '/info_project-structure': '/misc/project-structure',
  },
});
