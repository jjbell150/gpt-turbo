# InstaBox Free CI rollout (17 November 2026)

All three Linux GitHub Actions workflows on the default `develop` branch now use **`instabox-medium`**:
- `develop.yml`: `develop` branch package build/check.
- `pull_request.yml`: PR package build/check.
- `publish_docs.yml`: docs build and GitHub Pages deployment, retaining `pages:write` and OIDC `id-token:write`.

[PR #1](https://github.com/jjbell150/gpt-turbo/pull/1) was merged after the actual [InstaBox PR build 44031575445](https://github.com/jjbell150/gpt-turbo/actions/runs/44031575445) **passed**, using runner `instabox-gh-job-133864538476` in GitHub logs. GitHub App authorisation is therefore proven for this repository. The separate branch smoke test may have been queued, but the full PR build is stronger evidence.

**Not proven:** `publish_docs.yml` actually publishing to GitHub Pages. It only triggers when `master` changes, and the private/third-party execution trust boundary must be respected when granting Pages/OIDC tokens. This is a public repository: InstaBox CI snapshots are documented as private-repository only, and untrusted fork PRs must not receive elevated permissions.

One free InstaBox VM is shared across all linked repositories, so queue delays are normal. Official limits and setup: [verified InstaBox runbook](https://github.com/jjbell150/plymouth-benchmarks/blob/main/docs/INSTABOX_RUNNERS.md).
