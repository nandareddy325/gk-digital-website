# Pricing Page — Premium Upgrade

## Em add chesamu

- **Monthly / Yearly toggle** — prices switch live, yearly shows ~17%
  savings badge
- **Icons per plan** (Rocket / TrendingUp / Crown)
- **Comparison table** below the cards — feature-by-feature checklist
  across all 3 tiers
- **Mini FAQ strip** (3 pricing-specific questions)
- **Scroll animations** (uses the `Reveal` component you already have)
- Hover lift effect on plan cards
- Gradient "Most popular" badge and button (matches logo colors)

## Install cheyyi

**Requires** `components/Reveal.tsx` to already exist in your project
(you added this earlier for the About page — if not, let me know and
I'll re-send it).

1. `components/PricingPlans.tsx` → copy into your `components/` folder
   (this is a NEW file)
2. `app/pricing/page.tsx` → **replace** your existing file
3. Restart:
   ```powershell
   Remove-Item -Recurse -Force .next
   npm run dev
   ```
4. Hard refresh, go to `/pricing`, try the toggle and scroll down

## Note on prices

Prices (₹15,000 / ₹35,000 / ₹65,000 monthly) are still placeholders —
update the `monthly` and `yearly` numbers in
`components/PricingPlans.tsx` with your real pricing before publishing
live.
