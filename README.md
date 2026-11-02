# doppeldiff playground

A small TypeScript library (bill splitting, money formatting, text helpers) set up with
[doppeldiff](https://github.com/7suheel/doppeldiff), so you can see what it does on a real pull request.

**Live demo:** the open pull request in this repository is a "pure refactor, no behavior change" that passes all
tests. doppeldiff's comment on it shows the inputs where the refactor changed the result.

## What is set up

- [`src/`](src): the library, with tests in [`test/`](test) (`npm test`).
- [`.github/workflows/doppeldiff.yml`](.github/workflows/doppeldiff.yml) and
  [`.github/workflows/doppeldiff-comment.yml`](.github/workflows/doppeldiff-comment.yml): copied unchanged from
  doppeldiff's [`examples/workflows/`](https://github.com/7suheel/doppeldiff/tree/main/examples/workflows). No
  secrets, no API key, and safe for pull requests from forks.
- [`.github/workflows/ci.yml`](.github/workflows/ci.yml): the usual typecheck and tests.

## Try it yourself

- **In your own repository:** copy the two doppeldiff workflow files to `.github/workflows/` on your default
  branch. Every pull request then gets one comment that is updated on each push.
- **Locally:** `npx doppeldiff --base main` compares your branch with `main`; `npx doppeldiff --refactor` fails if
  your uncommitted changes alter behavior.
- **Here:** fork this repository, change a function in `src/` on a branch, and open a pull request in your fork.
