# Arabic Language Toggle Fix - Task List

## ✅ Completed Steps

- [x] Analyze code and identify issues
- [x] Get user approval on plan

## 🔲 Steps to Complete

### Step 1: Fix `--font-arabic` CSS variable in `index.css`

- Add `--font-arabic: "Tajawal", sans-serif;` definition in the `@theme` block

### Step 2: Update `<html lang="...">` dynamically in `LanguageContext.jsx`

- Add `useEffect` to update `document.documentElement.lang` when language changes

### Step 3: Add RTL layout adjustments in `index.css`

- Add proper text alignment, spacing, and flex direction overrides for RTL mode

### Step 4: Fix Menu arrow directions for RTL

- In `Menu.jsx`, adjust arrow images when in Arabic (RTL) mode

### Step 5: Test and verify

- [x] Ensure the app runs without errors (build successful)
