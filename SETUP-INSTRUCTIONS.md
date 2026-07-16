# GK Digital Solutions — New Pages Setup

## Ela install cheyali

1. Ee zip ni extract chesi, anni files ni nee existing project (`GK-DIGITAL-WEBSITE`) lo
   correct paths lo copy/paste cheyyi (same folder structure — `app/...`,
   `components/...`).

2. Terminal lo (project root nunchi) ee package install cheyyi:
   ```
   npm install @supabase/supabase-js
   ```

3. `.env.local` file (project root, `package.json` pakkane) create cheyyi,
   idi ippudu ki optional — Supabase configure cheyaka poyina form pani
   chestundi (console lo log avutundi matrame):
   ```
   SUPABASE_URL=https://ixbqgosbzrezsonjzlej.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

4. `supabase-leads-table.sql` file ni copy chesi, gk-digital-marketing-crm
   Supabase project SQL Editor lo run cheyyi — idi `leads` table create
   chestundi.

5. Dev server restart cheyyi:
   ```
   npm run dev
   ```

## Em add chesamu

- 8 new pages: About, Services (overview + 11 sub-pages), Why Choose Us,
  Process, Industries, Portfolio, Testimonials, Pricing, FAQ, Contact
- Working contact form (`/contact`) — API route `/api/lead-capture` ki
  submit avutundi
- Navbar update chesi real routes (`/about`, `/services` etc.) ki point
  chestundi (ee file already ne icham, already apply chesav)

## Next steps (marchipoku)

- [ ] Real phone number — Footer.tsx mariyu CTA.tsx lo `+91XXXXXXXXXX`
      unna chota replace cheyyi
- [ ] Pricing page lo prices (`₹15,000` etc.) — real prices tho replace
      cheyyi
- [ ] Portfolio mariyu Testimonials pages lo placeholder content undi —
      real client data vachaka replace cheyyi (live lo fake numbers
      pettoddu)
- [ ] `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` set cheyyi form ni DB
      ki connect cheyadaniki
