# Staged free InstaBox runner migration

Three Linux workflows (`develop.yml`, `pull_request.yml`, `publish_docs.yml`) are changed to `runs-on: instabox-medium` in this **unmerged** branch. They require the GitHub App to be authorised for `jjbell150/gpt-turbo` before merging, or the GitHub jobs will queue indefinitely.

`publish_docs.yml` also uses InstaBox. GitHub Pages `pages: write` and OIDC `id-token: write` remain enabled and require a successful real deployment before this specific flow can be considered verified.

This is a public repository: don't use InstaBox snapshots (officially private-only), and assume fork PRs execute untrusted code on ephemeral third-party hosts. Install the App with repository-specific permissions and first test with a harmless workflow. The actual test outcomes are pending.

[Provider details and verified x86 test in the private Plymouth lab](https://github.com/jjbell150/plymouth-benchmarks/blob/main/docs/INSTABOX_RUNNERS.md).

**GitHub App prerequisite:** The InstaBox App must be authorised for this public repository. A branch smoke run has been created to verify runner pickup. If it stays queued in GitHub, inspect the InstaBox CI dashboard refusal reason and grant repo access before merging. The deployment workflow only triggers when `master` changes, so its actual deployment still needs independent verification.
