# GTH TASK

This project is built using the Next.js framework, which is recommended by the React 18 documentation for all new React projects. It includes several configurations to help maintain the project in an organized manner, especially when collaborating with others.

## Problem Description
Going to embed a webpage as an iframe within this web application. This webpage is programmed to post messages to the parent window every 2 seconds. The data provided with each message is an object of the following structure: { randomNumber: X }, where X is a random integer between 1-9. Will use these numbers to increment a counter and display a list of the last 5 received numbers.




## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/nunatass/nextjs-simple-boilerplate
```


2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Provide a .env.local file
  ```
  NEXT_PUBLIC_IFRAME_SRC = "your iframe src"
  ```

4. Run project:

```bash
npm run dev
# or
yarn dev
```

## Project Features
- `Next.js Framework`: Utilized for its powerful features and seamless integration with React.
- `Husky and Commitlint`: Configured to ensure commit message conventions and pre-commit hooks for maintaining code quality.
Conventional Commits: Enforced commit message standards to keep project history clean and readable.
- `State Management`: Implemented using Zustand for efficient and scalable state handling.

- `Reusable Custom Hooks`: Includes use-iframe-data for handling iframe communication and use-counter-store for state management.

## Project Structure

```.
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   └── layouts
│       └── pages
│           └── home
│               ├── counter.tsx
│               ├── digits-history.tsx
│               ├── home-area.tsx
│               └── random-numbers-iframe.tsx
├── config
│   └── index.ts
├── hooks
│   ├── store
│   │   └── use-counter-store.ts
│   └── use-iframe-data.ts
└── types
    └── index.ts

```

## Hooks
- `use-iframe-data`: A custom hook to receive data from iframes.
- `use-counter-store`: Manages the state of the counter, leveraging Zustand for a simplified and performant state management solution.

## Components
All components are organized in the components folder. Key components include:

- `counter.tsx`: Displays the current count.
- `digits-history.tsx`: Shows the history of the last five received numbers.
- `home-area.tsx`: Main area component for the home page.
- `random-numbers-iframe.tsx`: Embeds an iframe and handles incoming messages to update the state.


## Environment Variables
To run the project, create a `.env.local` file. An example file `.env.example` is provided to guide you on the necessary environment variables.

## Running Scripts
- `dev`: Start the Next.js development server.
- `build`: Build the Next.js application for production.
- `start`: Start the production server.
- `lint`: Lint all JavaScript and TypeScript files.
- `lint:fix`: Automatically fix linting issues where possible.
- `format`: Format all JavaScript and TypeScript files using Prettier.

