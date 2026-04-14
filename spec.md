# J-Beauty-DB — Japanese Skincare Database

## Problem
J-beauty is a $40B+ global market. K-beauty dominates online discussion,
but J-beauty search volume is growing faster. People ask on Reddit/Quora
for Japanese skincare recommendations weekly — despite dozens of beauty sites
existing. Why? Because existing sites are either:
- Sales platforms (YesStyle, iHerb) — not neutral
- Community wikis (r/AsianBeauty) — unstructured
- Japanese only (@cosme) — inaccessible to English speakers

## Solution
Curated database of 60 Japanese skincare products, filterable by skin type,
ingredients, texture, and fragrance-free status. Differentiated by
**first-hand experience from someone who shops at Japanese drugstores.**

### Core features
1. **Product Database** — 60 products filterable by: skin type, category
   (cleanser/toner/sunscreen/etc), texture, key ingredients, fragrance-free
2. **Ingredient Translator** — Japanese label → English ingredients with
   explanations ("this does X for your skin")
3. **Skin Type Matcher** — "I have dry skin + redness" → top 5 picks
4. **First-hand reviews** — texture, scent, feel on skin. NOT price comparison
5. **Seasonal/Limited Edition Tracker** — "spotted at Matsukiyo this week"

### Killer differentiators (AI-proof)
- In-store texture/scent/feel reviews from Matsumoto Kiyoshi and Don Quijote
- Japanese ingredient label translations (photos of actual labels)
- Limited edition / seasonal product discovery (first-hand scouting)
- Sunscreen reformulation tracking (yearly changes, tested in person)
- SK-II dupe recommendations based on feel, not just price

### What this site does NOT do
- ~~Price comparison across retailers~~ (AI will automate this)
- ~~"Cheapest place to buy X"~~ (no moat)

## Tech Stack
- GitHub Pages (static)
- Vanilla JS + Tailwind CSS
- data/products.json (existing, needs ASIN fill)
- GA4 + Clarity

## GitHub Repos
- humancronadmin/j-beauty-db (existing)

## MVP Scope (ASIN fill + SEO articles)
1. Fill all 60 amazon_asin fields (Amazon US + Amazon.co.jp where applicable)
2. Add skin_concern field to products.json (acne, dryness, redness, aging, etc)
3. 3 SEO articles:
   - "Japanese Skincare Routine for Beginners (2026 Guide)"
   - "Best Japanese Sunscreens for Sensitive Skin"
   - "Double Cleansing with Japanese Products: Complete Guide"

## Data Sources
- Official brand sites (Hada Labo, Shiseido, Rohto, Kose)
- @cosme rankings (translated)
- Matsumoto Kiyoshi / Don Quijote in-store visits
- Amazon.co.jp product listings
- r/AsianBeauty community (verified claims only)

## Revenue Model
- Amazon US affiliate (japantool-20)
- Future: iHerb affiliate (5-10%), YesStyle affiliate (5-10%)
- Content partnerships with J-beauty importers

## SEO Keywords
| Priority | Keyword |
|---|---|
| Main | best japanese sunscreen |
| Main | japanese skincare routine |
| Long-tail | hada labo vs cerave for dry skin |
| Long-tail | japanese cleanser for oily skin |
| Long-tail | fragrance free japanese skincare |
| Long-tail | best japanese moisturizer for sensitive skin |
| Article | double cleansing guide |
| Article | japanese skincare ingredients glossary |
