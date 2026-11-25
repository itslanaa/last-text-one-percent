# Last Text at One Percent

[![bounty](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/itslanaa/last-text-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/itslanaa/last-text-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876)

The funniest final text a dying phone sends at one percent battery, in the voice of the dying phone itself.

> battery 1%. goodbye cruel world. tell the charger i forgive it. p.s. your 6am alarm is cancelled, you're welcome.

`main.ts` writes that text (113 characters, within the 1–200 character gate) to `entry.txt` in `MAKEFUN_OUTPUT_DIR`.

## Run

```sh
MAKEFUN_INPUT_DIR=/tmp/lt-in MAKEFUN_OUTPUT_DIR=/tmp/lt-out node main.ts
cat /tmp/lt-out/entry.txt
```
