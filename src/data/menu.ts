// Shared menu structure used by Sidebar and PageNav components
export const menu = [
  {
    section: 'learn',
    category: 'Tutorial',
    items: [
      { text: '1 - Getting Started', href: '/tutorial/tuts0101-getting-started' },
      { text: '2 - Building Your First Analysis', href: '/tutorial/tuts0102-building-your-first-analysis' },
      { text: '3 - Implementing an Analysis', href: '/tutorial/tuts0103-implementing-an-analysis' },
      { text: '4 - Input Checks', href: '/tutorial/tuts0104-input-checks' },
      { text: '5 - The jamovi Results Model', href: '/tutorial/tuts0105-results-mental-model' },
      { text: '6 - Creating Rich Results', href: '/tutorial/tuts0106-creating-rich-results' },
      { text: '7 - Adding Plots', href: '/tutorial/tuts0107-adding-plots' },
      { text: '8 - Summary & Next Steps', href: '/tutorial/tuts0108-getting-started-summary' },
    ]
  },
  {
    section: 'learn',
    category: 'Intermediate',
    items: [
      { text: '1 - The Analysis Lifecycle', href: '/tutorial/tuts0200-analysis-lifecycle' },
      { text: '2 - Dynamic Tables', href: '/tutorial/tuts0201-dynamic-tables' },
      { text: '3 - Advanced Table Techniques', href: '/tutorial/tuts0201a-advanced-table-techniques' },
      { text: '4 - Handling Data', href: '/tutorial/tuts0202-handling-data' },
      { text: '5 - State', href: '/tutorial/tuts0203-state' },
      { text: '6 - Module Translation', href: '/tutorial/tuts0204-translation' },
    ]
  },
  {
    section: 'learn',
    category: 'Plotting',
    items: [
      { text: '1 - Image State Performance', href: '/tutorial/tuts0301-image-state-performance' },
      { text: '2 - Plot Themes', href: '/tutorial/tuts0302-plot-themes' },
      { text: '3 - Responsive Image Sizing', href: '/tutorial/tuts0303-responsive-image-sizing' },
    ]
  },
  {
    section: 'learn',
    category: 'Advanced & Distribution',
    items: [
      { text: '1 - Unit Testing your Analysis', href: '/tutorial/tuts0109-unit-testing' },
      { text: '2 - Distributing Modules', href: '/tutorial/tuts0110-distributing-modules' },
      { text: '3 - Additional Notes', href: '/tutorial/tuts0111-additional-notes' },
    ]
  },
  {
    section: 'learn',
    category: 'User Interface',
    items: [
      { text: '1 - Basic UI Design', href: '/ui/basic-design' },
      { text: '2 - Advanced UI Design', href: '/ui/advanced-design' },
      { text: '3 - Advanced Customisation', href: '/ui/advanced-customisation' },
    ]
  },
  {
    section: 'reference',
    category: 'API (yaml)',
    items: [
      { text: 'Module Definition', href: '/api/module-definition' },
      { text: 'Analysis Definition', href: '/api/analysis-definition' },
      { text: 'Results Definition', href: '/api/results-definition' },
      { text: 'UI Definition', href: '/api/ui-definition' },
    ]
  },
  {
    section: 'reference',
    category: 'Options API (R)',
    items: [
      { text: 'Options API', href: '/api/options-api' },
      { text: 'Data', href: '/api/option-data' },
      { text: 'Bool', href: '/api/option-bool' },
      { text: 'Integer', href: '/api/option-integer' },
      { text: 'Number', href: '/api/option-number' },
      { text: 'List', href: '/api/option-list' },
      { text: 'Variable', href: '/api/option-variable' },
      { text: 'Variables', href: '/api/option-variables' },
      { text: 'Terms', href: '/api/option-terms' },
      { text: 'Group', href: '/api/option-group' },
      { text: 'Action', href: '/api/option-action' },
    ]
  },
  {
    section: 'reference',
    category: 'Results API (R)',
    items: [
      { text: 'Results Elements', href: '/api/results-elements' },
      { text: 'Table', href: '/api/table' },
      { text: 'Image', href: '/api/image' },
      { text: 'Group', href: '/api/group' },
      { text: 'Array', href: '/api/array' },
      { text: 'Preformatted', href: '/api/preformatted' },
      { text: 'Html', href: '/api/html' },
      { text: 'Notice', href: '/api/notice' },
    ]
  },
  {
    section: 'reference',
    category: 'UI Controls',
    items: [
      { text: 'BaseControl', href: '/ui/basecontrol' },
      { text: 'CheckBox', href: '/ui/checkbox' },
      { text: 'CollapseBox', href: '/ui/collapsebox' },
      { text: 'ComboBox', href: '/ui/combobox' },
      { text: 'Label', href: '/ui/label' },
      { text: 'LayoutBox', href: '/ui/layoutbox' },
      { text: 'ListBox', href: '/ui/listbox' },
      { text: 'OptionControl', href: '/ui/optioncontrol' },
      { text: 'ParentControl', href: '/ui/parentcontrol' },
      { text: 'RadioButton', href: '/ui/radiobutton' },
      { text: 'Supplier', href: '/ui/supplier' },
      { text: 'TargetLayoutBox', href: '/ui/targetlayoutbox' },
      { text: 'TermLabel', href: '/ui/termlabel' },
      { text: 'TextBox', href: '/ui/textbox' },
      { text: 'VariableLabel', href: '/ui/variablelabel' },
      { text: 'VariableSupplier', href: '/ui/variablesupplier' },
    ]
  },
  {
    section: 'resources',
    category: 'Resources',
    items: [
      { text: 'Module Showcase', href: '/showcase' },
      { text: 'Cheat Sheet', href: '/misc/cheat-sheet' },
    ]
  },
  {
    section: 'resources',
    category: 'Misc',
    items: [
      { text: 'Project Structure', href: '/misc/project-structure' },
      { text: 'API Updates', href: '/misc/updates' },
    ]
  }
];

// Flatten all items into a single ordered list for prev/next navigation
export const allPages = menu.flatMap(section => section.items);
