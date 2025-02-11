# odp-shared-components

A collection of reusable React components.

## Project Structure

```
/odp-shared-components
├── /dist                # Compiled output
├── /src                 # Source code
│   ├── /components      # Individual components
│   │   ├── ProductName  # Example component
│   │   │   ├── index.js
│   │   │   ├── styles.module.css
│   │   ├── ...          # Other components
│   ├── index.js         # Main export file
├── package.json
├── rollup.config.js
```

## Installation

To install in your project:

```sh
npm install odp-shared-components --legacy-peer-deps
```

## Usage

```jsx
import React from "react";
import ProductName from "odp-components";

const App = () => {
    return <ProductName name="Example Product" className="custom-class" />;
};

export default App;
```

## Adding a New Component

To add a new component:

1. Create a new folder inside `src/components/`.
2. Implement the component in `index.tsx`.
3. If necessary, create a `styles.module.css` for scoped styles.
4. Export the new component in `src/index.ts`.

## Running Locally with `npm link`

To work on this package and test it in another project:

1. Inside the `odp-shared-components` directory, run:
   ```sh
   npm link
   ```
2. Inside the consuming project, run:
   ```sh
   npm link odp-shared-components
   ```
3. Restart the consuming project's development server if needed.

## Publishing to NPM

To publish a new version:

1. Ensure all changes are committed.
2. Update the version in `package.json` (e.g., `1.0.1 → 1.0.2`).
3. Run:
   ```sh
   npm publish --access public
   ```