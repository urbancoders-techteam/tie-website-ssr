# tie-website-ssr

New SSR for TIE website.

## Environment setup

This project uses environment-specific files at the repository root:

- `.env.development`
- `.env.production`

## Install

```bash
npm install
```

## Run locally (development)

```bash
npm run dev
```

## Build and run by environment

### Production

```bash
npm run build:prod
npm run start:prod
```

## Environment variables used

- `NEXT_PUBLIC_IMAGE_URL`
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_NAV_URL`
- `NEXT_PUBLIC_RAZORPAY_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
