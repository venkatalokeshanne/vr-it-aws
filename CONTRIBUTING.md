# Contributing Guide

## Commit Message Guidelines

We follow conventional commit message format to ensure clear and meaningful commit history.

### Commit Message Format

Each commit message should follow this structure:

```
<type>: <subject>

<body>

<footer>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Use lowercase after the colon (e.g., "feat: add feature" not "feat: Add feature")
- No period (.) at the end
- Maximum 50 characters

### Body (Optional)

The body should include the motivation for the change and contrast this with previous behavior.

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Wrap at 72 characters

### Footer (Optional)

The footer should contain any information about Breaking Changes and references to GitHub issues.

### Examples

#### Good Commit Messages

```
feat: add user authentication with JWT

Implement JWT-based authentication system with login and logout
functionality. Users can now securely access protected routes.

Closes #123
```

```
fix: resolve map rendering issue on mobile devices

The map component was not properly sizing on smaller screens.
Updated the container styles to use 100% width and height.

Fixes #456
```

```
docs: update installation instructions in README

Add Docker setup instructions and clarify Node.js version
requirements.
```

#### Bad Commit Messages

❌ `update`  
❌ `fix bug`  
❌ `changes`  
❌ `WIP`  
❌ `asdfgh`

### Setting Up Commit Template

To use the commit message template automatically:

```bash
git config commit.template .gitmessage
```

This will show the template every time you run `git commit`.

## Pull Request Guidelines

- Keep pull requests focused on a single feature or fix
- Update documentation as needed
- Ensure all tests pass before submitting
- Write clear PR descriptions explaining the changes

## Code Style

- Follow existing code style in the project
- Run `npm run lint` before committing
- Ensure code is properly formatted

## Testing

- Add tests for new features
- Update tests when modifying existing functionality
- Run tests locally before pushing: `npm run test`

Thank you for contributing!
