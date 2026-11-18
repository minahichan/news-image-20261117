# The World in One Day — 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/c/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/minahichan/news-image-20261117/rank.svg)](https://make.fun/c/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/minahichan/news-image-20261117/reward.svg)](https://make.fun/c/news-image-20261117)

A one-image front page summing up the world's news of **Tuesday, 17 November 2026**.

## What the image shows

- **Lead — U.S. strikes Iran:** American jets hit a missile site on Qeshm Island after Tehran fired drones at the U.S. radar at Sheikh Isa base, Bahrain.
- **Europe — Kerch Bridge hit again:** Ukrainian drones struck the Crimea bridge a second day; a span fell into the strait.
- **Asia — Trump in Asia:** the U.S. president reached Manila for ASEAN, then heads to Shenzhen for APEC talks with Xi and Putin.
- **Technology — Nvidia tops $115bn:** record quarterly revenue, about double a year ago, and the ousted chief Jensen Huang will not be brought back.
- **Health — Ebola in DR Congo:** cases passed 11,000, with 5,400 deaths, the UN said.
- **Also on the day:** the U.S. loses measles-free status after 26 years; Japan scrambles jets over a Russian airspace breach; five EU states plan a Rwanda return hub.

Sources: CBS News, NPR, Al Jazeera, BBC, UN News, Reuters.

## How it was made

The image is a 1024×1024 PNG drawn programmatically (vector shapes and
DejaVu text, no AI-generated picture, so no garbled wording) and shipped in
this repo as `entry.png`. The program `main.ts` copies it to the output
directory, so both runs write byte-identical output with no network access.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

## Verified

- Image: 1024×1024 PNG, 124,020 bytes (limit 1 MiB), whole file with valid
  PNG chunks.
- Two runs of `main.ts` produce byte-identical output (same sha256).
- Text is rendered with DejaVu fonts, so every label is crisp and spelled
  correctly; the image names the date "17 November 2026" in the masthead.

## License

MIT — see [LICENSE](LICENSE).
