# Changelog - AirFuture Mini Special LP

## [1.3.0] - 2026-02-16

### Added
- **New Marketing Assets**: 
  - Generated high-end luxury graphics for "AirFuture mini" (Black Premium model).
  - Saved final ad graphic at `/public/marketing/airfuture_mini_black_premium_ad.png`.
- **Branding Workflow**: Established `.agent/workflows/branding_generation_rules.md` (shared reference via x-autoup) to ensure visual consistency using `favicon.png` as the master device model.

### Changed
- **DataService Synchronization**:
  - Updated `DataService` to support Japanese labels ("開発者", "一般", "BOT", "人間") in Google Sheets, synchronized with the `x-autoup` backend logic.

## [1.2.0] - 2026-02-13

### Added
- **DeepScienceSection Enhancements**:
  - Incorporated actual product visuals (white cylindrical model from favicon.png) in "Medical Grade" and "Lightning Purification" sections.
  - Doubled the text content to include detailed scientific data:
    - Ion count: 30 million/sec.
    - Ozone concentration: 0.002ppm (well below WHO standards).
    - VOC removal rate: 98%+.
    - Performance metrics: 32dB (quietness), ¥1,500/year electricity cost.
  - Added "Suction vs. Emission" comparison logic to explain technical superiority.
- **Admin Dashboard Improvements**:
  - Added a direct link button to the Google Spreadsheet for data management under the "AF-MINI LP管理画面" header.

### Changed
- **Page Layout**:
  - Repositioned the `DeepScienceSection` to appear after the Hub section (Niche LP navigation) and before Technical Specifications for better narrative flow.
- **Hero Visual**:
  - Updated hero image CSS to `object-contain` to prevent logo/product clipping.
- **Bug Fixes & Restoration**:
  - Restored all missing scene sections (Closet, Car, Bedroom, Pollen) that were accidentally removed during refactoring.
  - Fixed icon alignment and text overlap in the "Emission Type" explanation box.

### 🛡️ Governance & Rules Added
- **Mandatory Deletion Confirmation**: Added a strict rule to NEVER delete or replace existing core sections/functionalities without explicit user confirmation.
- **Visual Consistency**: Established a rule to use actual product-based imagery (favicon.png base) for all high-fidelity technical visualizations.

---

## [1.1.0] - 2026-02-11
- Integrated specialized niche pages (Dental, Hayfever).
- Fixed critical routing issue where `.html` extensions caused 404 errors.
- Standardized CTA tracking using `navigator.sendBeacon`.
