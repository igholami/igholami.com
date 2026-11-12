# Cloudflare cutover verification

Checked November 12, 2026, after activation at 19:38 UTC.

- The `.com` registry delegates to `chuck.ns.cloudflare.com` and
  `coco.ns.cloudflare.com`. Cloudflare reports the zone active.
- The old Google Domains DNSSEC DS record was removed before activation.
  Cloudflare signing is enabled; its replacement DS awaits registrar publication.
- All eight apex A/AAAA records and the `www` CNAME have proxying enabled.
  Mail and domain verification records are DNS-only. The saved configuration has
  16 DNS records.
- HTTPS requests to the apex succeed with normal certificate verification and
  `server: cloudflare` / `cf-ray` response headers. HTTP redirects to HTTPS.
- `https://www.igholami.com/` redirects to `https://igholami.com/`.
  A redirect test with `/publications?check=1` preserves the path and query.
- Full (strict) origin TLS and GitHub Pages HTTPS enforcement are enabled.
- The production origin build completed successfully from publication commit
  `0e47a04cc56e6a450931d3ec38f9e985a1d47ea1`.
- The CV downloaded through Cloudflare matches the November 12 academic PDF:
  SHA-256 `48e39b117bab3101921aa9fcefb2b47abd360f938218a1161688285a5835895e`.
- The current service worker contains the `v4` cache names. The CV and service
  worker bypass edge caching.

## Mail

Thirty DNS comparisons between the previous Google Domains nameserver and
Cloudflare matched. These covered the apex MX/TXT records, iCloud DKIM selectors,
DMARC, common mail hostnames, autodiscovery/SRV records, and GitHub verification.
The configured records were also checked through both `1.1.1.1` and `8.8.8.8`.

| Purpose | Preserved record |
| --- | --- |
| Incoming mail | `MX 10 mx01.mail.icloud.com`, `MX 10 mx02.mail.icloud.com` |
| SPF | `v=spf1 include:icloud.com ~all` |
| Apple verification | `apple-domain=tvc53TLc6HS1cmuk` |
| DKIM | `sig1._domainkey` CNAME to `sig1.dkim.igholami.com.at.icloudmailadmin.com` |

The SPF include/redirect chain resolves to valid Apple network records. The
DKIM target publishes a valid 2048-bit RSA public key. The mail configuration
matches [Apple's iCloud custom-domain requirements](https://support.apple.com/en-us/102374).
The old setup had no DMARC record; that policy is unchanged.

These checks verify the DNS migration. An actual send-and-reply mailbox test
has not been confirmed. An SMTP connection attempt from this host timed out,
so it does not establish mail-server reachability. No test messages were sent.
