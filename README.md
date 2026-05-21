# Figma Assignment

A React + Vite implementation of a billing and checkout screen with a fixed top navigation bar, billing details form, order summary, wallet balance, and coupon selection.

## Features

- Fixed navbar with search, actions, profile icon, and menu
- Billing details form with reusable input and select components
- India-specific state and city dropdowns
- Order summary card with plan, totals, wallet, and coupon sections
- Component-level CSS files colocated with each component

## Tech Stack

- React 19
- Vite
- React Icons
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  App.css
  data/
    indiaLocations.js
  components/
    layout/
      Navbar/
        index.jsx
        Navbar.css
    checkout/
      BillingForm/
        index.jsx
        BillingForm.css
      OrderSummary/
        index.jsx
        OrderSummary.css
      WalletSection/
        index.jsx
        WalletSection.css
      CouponSection/
        index.jsx
        CouponSection.css
    common/
      InputField/
        index.jsx
        InputField.css
      SelectField/
        index.jsx
        SelectField.css
      Button/
        index.jsx
        Button.css
```

## India Location Data

The billing form uses local India state and city data from:

- https://github.com/dr5hn/countries-states-cities-database

The generated dataset is stored in:

- `src/data/indiaLocations.js`

It currently includes:

- 36 Indian states and union territories
- 4,199 cities

## Notes

- `State` controls the available `City` options in the billing form.
- The `Country` field is fixed to `India`.
- Styling is organized into component-specific CSS files instead of inline styles.
