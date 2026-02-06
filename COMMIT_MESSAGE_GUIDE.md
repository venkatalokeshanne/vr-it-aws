# Commit Message Quick Reference

## Format
```
<type>: <subject>
```

## Types

| Type | When to Use | Example |
|------|------------|---------|
| `feat` | New feature | `feat: add user profile page` |
| `fix` | Bug fix | `fix: resolve login redirect issue` |
| `docs` | Documentation only | `docs: update API documentation` |
| `style` | Code style/formatting | `style: fix indentation in header` |
| `refactor` | Code restructuring | `refactor: simplify authentication logic` |
| `perf` | Performance improvement | `perf: optimize image loading` |
| `test` | Add or update tests | `test: add unit tests for user service` |
| `build` | Build system changes | `build: update webpack configuration` |
| `ci` | CI/CD changes | `ci: add GitHub Actions workflow` |
| `chore` | Maintenance tasks | `chore: update dependencies` |

## Subject Guidelines

✅ **DO:**
- Use imperative mood: "add" not "added"
- Start with lowercase after colon
- Keep under 50 characters
- Be specific and descriptive

❌ **DON'T:**
- End with a period
- Use past tense
- Be vague (e.g., "update", "fix bug")
- Capitalize after colon

## Examples

### Good
```
feat: add JWT authentication
fix: resolve map rendering on mobile
docs: add contributing guidelines
refactor: extract validation logic
perf: lazy load course images
test: add integration tests for API
```

### Bad
```
❌ update
❌ Fix Bug
❌ changes
❌ WIP
❌ feat: Added new feature.
```

## Setup

Enable the commit template:
```bash
git config commit.template .gitmessage
```

## Validation

The project automatically validates commit messages using commitlint. Invalid messages will be rejected.

Test a message:
```bash
echo "feat: my feature" | npx commitlint
```
