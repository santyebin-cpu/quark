# Hosting and domain setup

How the Qark Energy website is hosted and how `qarkenergy.com` is connected to it. Set up on 2026-10-08.

## At a glance

| What | Where |
| --- | --- |
| Live site | https://qarkenergy.com (also https://www.qarkenergy.com) |
| Cloudflare Pages URL | https://quark-6qs.pages.dev |
| Source code | GitHub `santyebin-cpu/quark`, branch `main` |
| Hosting | Cloudflare Pages (free plan), project `quark` |
| DNS | Cloudflare (free plan), zone `qarkenergy.com` |
| Domain registrar | Squarespace Domains (renews 2027-06-08) |
| Email | Google Workspace (MX records in Cloudflare DNS) |
| SSL | Automatic, issued by Cloudflare (Google Trust Services) |
| Cost | $0 for hosting and DNS; only the domain renewal is paid |

## How a change goes live

1. Push or merge a commit to `main` on GitHub.
2. Cloudflare Pages builds it (`npm run build`, Node 22) and publishes `dist/`. Takes about a minute.
3. The new version is live on qarkenergy.com.

Pushes to any other branch get their own preview URL on `*.quark-6qs.pages.dev`; they do not change the live site.

Build status and logs: Cloudflare dashboard → **Workers & Pages → quark → Deployments**.

## What was done, in order

### 1. Site code moved to `main` (GitHub)

- The Astro site was originally on branch `cursor/quark-smr-website-bf37`; `main` only had a README.
- [PR #2](https://github.com/santyebin-cpu/quark/pull/2) merged the site into `main` and deleted the GitHub Pages workflow (`.github/workflows/deploy-pages.yml`), since Cloudflare builds directly from the repo. [PR #1](https://github.com/santyebin-cpu/quark/pull/1) (the original site PR) was marked merged automatically.

### 2. Cloudflare Pages project created

- Cloudflare dashboard → Workers & Pages → Create → Pages → Import an existing Git repository.
- Installed the **Cloudflare Workers and Pages** GitHub app on the `santyebin-cpu` account, limited to the `quark` repo.
- Project settings:
  - Project name: `quark` (the `quark.pages.dev` name was taken, so Cloudflare assigned `quark-6qs.pages.dev`)
  - Production branch: `main`
  - Framework preset: Astro
  - Build command: `npm run build`
  - Build output directory: `dist`
  - Environment variable: `NODE_VERSION=22`
- No extra config needed: Cloudflare serves `/hadron` from `hadron.html` and uses `404.html` for missing pages.

### 3. Site URL set to the real domain

- [PR #3](https://github.com/santyebin-cpu/quark/pull/3) changed `site` in `astro.config.mjs` from the placeholder `https://quark.energy` to `https://qarkenergy.com`, so canonical URLs point at the real domain.

### 4. Domain DNS moved from Google Cloud DNS to Cloudflare

Note the spelling: the domain is **qarkenergy.com** (no "u"). `quarkenergy.com` belongs to someone else (a parked domain for sale).

Before the move, the domain used Google Cloud DNS nameservers (`ns-cloud-b1`…`b4.googledomains.com`) and pointed at a Squarespace "under construction" page.

1. Cloudflare → Add a site → Connect a domain → `qarkenergy.com`, Free plan, automatic DNS record import.
2. Checked that Cloudflare imported the Google Workspace email records (see the record table below).
3. Squarespace → Domains → qarkenergy.com → DNS → Domain Nameservers → **Use custom nameservers**:
   - `alexis.ns.cloudflare.com`
   - `ullis.ns.cloudflare.com`

   DNSSEC was already off (no DS record), so nothing to disable.
4. Cloudflare showed the zone as **Active** once the nameserver change propagated.

### 5. Old Squarespace website records removed

Deleted in Cloudflare → qarkenergy.com → DNS → Records:

- `A  qarkenergy.com → 198.49.23.144` (Squarespace)
- `CNAME  www → ext-sq.squarespace.com` (Squarespace)

### 6. Custom domains added to the Pages project

Cloudflare → Workers & Pages → quark → Custom domains → Set up a custom domain:

- `qarkenergy.com`: Active, SSL enabled
- `www.qarkenergy.com`: Active, SSL enabled

Cloudflare created proxied CNAME records for both pointing at `quark-6qs.pages.dev`.

### 7. Verified

- All 14 pages return 200 with the right titles; unknown paths return the custom 404.
- CSS assets and favicon load; internal links resolve.
- `http://` redirects to `https://`; `/hadron.html` redirects to `/hadron`.
- Canonical URLs use `https://qarkenergy.com`.
- The content on qarkenergy.com matches the `quark-6qs.pages.dev` deployment exactly.
- Public resolvers (1.1.1.1, 8.8.8.8, 9.9.9.9, OpenDNS) return Cloudflare addresses, and all 5 Google MX records are intact.

## Current DNS records (Cloudflare zone `qarkenergy.com`)

| Type | Name | Value | Proxy | Purpose |
| --- | --- | --- | --- | --- |
| CNAME | `qarkenergy.com` | `quark-6qs.pages.dev` | Proxied | Website |
| CNAME | `www` | `quark-6qs.pages.dev` | Proxied | Website |
| MX | `qarkenergy.com` | `aspmx.l.google.com` (priority 1) | DNS only | Email |
| MX | `qarkenergy.com` | `alt1.aspmx.l.google.com` (5) | DNS only | Email |
| MX | `qarkenergy.com` | `alt2.aspmx.l.google.com` (5) | DNS only | Email |
| MX | `qarkenergy.com` | `alt3.aspmx.l.google.com` (10) | DNS only | Email |
| MX | `qarkenergy.com` | `alt4.aspmx.l.google.com` (10) | DNS only | Email |
| TXT | `qarkenergy.com` | `v=spf1 include:_spf.google.com ~all` | DNS only | Email (SPF) |
| TXT | `qarkenergy.com` | `google-site-verification=…` | DNS only | Google Workspace / Search Console verification |
| CNAME | `_domainconnect` | `_domainconnect.domains.squarespace.com` | Proxied | Leftover from Squarespace; harmless |

Do not delete the MX or TXT records: Google Workspace email depends on them.

## Troubleshooting

**The domain still shows the old "under construction" page.** Your computer cached the old address (the old record had a 4-hour TTL). Other people already see the new site. To clear it on a Mac:

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

In Chrome, also open `chrome://net-internals/#dns` and click **Clear host cache**. To check from outside your network, open the site on a phone using mobile data.

**Check what the world sees, bypassing your local cache:**

```bash
dig +short qarkenergy.com @1.1.1.1
```

It should return Cloudflare addresses (`188.114.96.x` / `188.114.97.x`), not `198.49.23.144`.

**A build failed.** Open Cloudflare → Workers & Pages → quark → Deployments, open the failed deployment and read the build log. The previous successful version stays live until a build succeeds.

## Open items

- Contact and legal pages still show placeholder addresses like `hello@quark.energy`. Replace them with real `@qarkenergy.com` mailboxes.
- The build log warns that Node 22 is nearing end of life. Later, change `NODE_VERSION` to `24` in Pages → Settings → Variables and secrets.
- Optional: redirect `www.qarkenergy.com` to `qarkenergy.com` (currently both serve the same site; pages already declare `qarkenergy.com` as canonical).
- Optional: add a DMARC record (Cloudflare suggests one) to reduce spoofed email from `@qarkenergy.com`.
