# dev.jamovi.org

The official developer hub for **jamovi**. This project contains the documentation, tutorials, and API references for building jamovi modules.

## Project Overview

The site is built with **Astro**, providing a high-performance, statically generated experience for developers. It features:

- **Modern Design**: A brand-consistent Jamovi aesthetic with support for Light and Dark modes.
- **Interactive Code Blocks**: Syntax highlighting with `github-light` and `github-dark` themes, including copy-to-clipboard functionality.
- **GitHub Alerts**: Integrated support for standard Markdown alerts (`> [!NOTE]`, `> [!WARNING]`, etc.).
- **Responsive Layout**: Optimized for both desktop and mobile viewing, ensuring a seamless experience across devices.
- **API Updates**: A dedicated changelog for notifying developers about important changes and new features.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- **Node.js**: Version 24 (LTS) or higher is recommended.
- **npm**: Usually comes bundled with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jamovi/dev.jamovi.org.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dev.jamovi.org
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with hot-module reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

To generate the static production bundle:

```bash
npm run build
```

The output will be located in the `dist/` directory, ready for deployment.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Contributing

We welcome contributions from the community! If you'd like to improve the documentation or add new tutorials:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a Pull Request with a clear description of your improvements.

For technical discussions, join us on the [jamovi forums](https://forum.jamovi.org) or [Slack](https://jamovi.slack.com/).