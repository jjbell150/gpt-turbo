# Staged free InstaBox runner migration

Two build/check workflows (`develop.yml`, `pull_request.yml`) are changed to `runs-on: instabox-medium` in this **unmerged** branch. They require the GitHub App to be authorised for `jjbell150/gpt-turbo` before merging, or the GitHub jobs will queue indefinitely.

`publish_docs.yml` stays on GitHub-hosted runners because it deploys GitHub Pages and uses `pages: write` and `id-token: write` permissions. It was not needed to eliminate Sengi spend.

This is a public repository: don't use InstaBox snapshots (officially private-only), and assume fork PRs execute untrusted code on ephemeral third-party hosts. Install the App with repository-specific permissions and first test with a harmless workflow. The actual test outcomes are pending.

[Provider details and verified x86 test in the private Plymouth lab](https://github.com/jjbell150/plymouth-benchmarks/blob/main/docs/INSTABOX_RUNNERS.md).
