# xprod _ is a work in progress _

![xprod](https://github.com/user-attachments/assets/6408ffd3-433f-4b90-aad2-d1d847222f13)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/xprod) ![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/xprod)

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

**xprod** is an all-in-one productivity application designed to streamline task and event management for individuals or teams. It combines modern web technologies for a fast, efficient, and user-friendly experience.

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/), [JavaScript (React)](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Radix UI](https://www.radix-ui.com/)
- **Date Management**: [date-fns](https://date-fns.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Icons**: [lucide-react](https://lucide.dev/)

## Features

- **Event Calendar**: View and manage events seamlessly.
- **Task Management**: Create, edit, and delete tasks efficiently.
- **Responsive Design**: Works on all device sizes.
- **Light/Dark Mode Support**: Toggle between themes using `next-themes`.
- **UI Components**: Built with Radix UI for accessible and customizable components.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended for package management)

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/xprod.git
   ```

2. Navigate to the project directory:

   ```bash
   cd xprod
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

- To run the development server:

  ```bash
  pnpm dev
  ```

- To build the project for production:

  ```bash
  pnpm build
  ```

- To start the production server:

  ```bash
  pnpm start
  ```

- To lint the project:

  ```bash
  pnpm lint
  ```

- To format code with Prettier:
  ```bash
  pnpm format
  ```

## **Linting**

`pnpm run next-lint`: a backup of the original next.js linting command

`pnpm run lint`: to manually use our (custom) linting command, it will scan our code and help us find problems in it (gets used by the build command before building)

`pnpm run lint-nocache`: same as **lint** command without cache, takes longer but can be useful when testing changes

`pnpm run lint-fix`: the **lint** command with the **fix** flag activated (to automatically fix errors and warnings if it can), you probably want to create a new branch before running this as it might produce a big quantity of changed files

`pnpm run lint-debug-config`: will print debugging information about what gets loaded by our ESLint config

`pnpm run lint-print-config`: print out a json representation of what is in our ESLint config

`pnpm run lint-inspect-config`: will open `http://localhost:7777/` in your browser, which is a tool to help you visualize the content of our ESLint config

## **Deployment**

Deploy the project on a hosting platform that supports Next.js, such as Vercel, Netlify, or any other cloud provider. Ensure you have set up your environment variables correctly on the hosting platform.

## **Contributing**

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## **License**

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## **Contact**

If you have any questions or need further assistance, feel free to reach out via GitHub: [egarrisxn](https://github.com/egarrisxn) and/or Email: [egarrisxn@gmail.com](mailto:egarrisxn@gmail.com).
