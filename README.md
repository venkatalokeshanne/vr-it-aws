# 🚀 Next.js Application

This is a React-based application built with the Next.js framework.

---

## 📦 Requirements

- Node.js v18+
- npm or yarn
- (Optional) Docker

---

## 🧪 Local Development

To run the app in development mode with hot reloading:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open your browser at:
http://localhost:3000
```

---

## 📝 Contributing

We follow conventional commit message format to maintain a clear and meaningful commit history.

### Quick Start for Contributors

1. **Set up commit message template:**
   ```bash
   git config commit.template .gitmessage
   ```

2. **Commit message format:**
   ```
   <type>: <subject>
   ```

   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

3. **Examples:**
   - `feat: add user authentication with JWT`
   - `fix: resolve map rendering issue on mobile devices`
   - `docs: update installation instructions`
   - `refactor: simplify data fetching logic`

📖 **Resources:**
- [Quick Reference Guide](./COMMIT_MESSAGE_GUIDE.md) - Fast lookup for commit types and examples
- [Contributing Guidelines](./CONTRIBUTING.md) - Detailed contribution guidelines

### Commit Message Validation

This project uses commitlint to enforce commit message conventions. The commit-msg hook will automatically validate your commit messages.

**Good commit messages:**
- ✅ `feat: add course search functionality`
- ✅ `fix: resolve broken navigation on mobile`
- ✅ `docs: add API documentation`

**Bad commit messages:**
- ❌ `update` (too vague)
- ❌ `Fix Bug` (should be lowercase after colon)
- ❌ `WIP` (not descriptive)

---

## 🧹 Linting

```bash
npm run lint
