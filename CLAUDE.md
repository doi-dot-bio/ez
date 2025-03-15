# CLAUDE.md - Guidelines for the ez Electron App

## Build & Development Commands
- Start the app: `npm start`
- Install dependencies: `npm install`
- Add a dependency: `npm install <package-name> --save`
- Add a dev dependency: `npm install <package-name> --save-dev`

## Code Style Guidelines

### JavaScript
- Use ES6 syntax where applicable
- Use const for variables that don't need reassignment
- Use let otherwise, avoid var
- Use arrow functions for callbacks
- Indentation: 4 spaces
- Use semicolons at the end of statements

### Electron-specific
- Use main process for OS interactions
- Use renderer process for UI operations
- Handle platform-specific logic with `process.platform` checks
- BrowserWindows should have clear lifecycle management

### Naming Conventions
- camelCase for variables and functions
- PascalCase for classes and constructors
- Descriptive names that indicate purpose
- Use consistent window/reference names across files

### Error Handling
- Use try/catch blocks for error-prone operations
- Log meaningful error messages
- Gracefully handle window closing/app termination