# MedPulse Website

MedPulse is a healthcare product website built with React and a lightweight Node API.
It includes polished product pages and a Contact section that sends submissions to your inbox by email.

## Tech Stack

- React (Create React App)
- React Router
- Node.js + Express (Contact API)
- Nodemailer (SMTP delivery)
- Spline (`@splinetool/react-spline`) for the 3D landing experience

## Project Structure

- `src/` Frontend application
- `src/components/` Website pages and shared components
- `server/index.js` Contact API endpoint (`/api/contact`)
- `.env.example` Required environment variables for email delivery
- `public/videos/medpulse-video.mp4` Product demo video used on Services page

## Local Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root using `.env.example` as a template.

Required values:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_RECEIVER_EMAIL`
- `CONTACT_SENDER_EMAIL`

### 3) Start app and API together

```bash
npm start
```

This runs:

- Frontend on `http://localhost:3000`
- API on `http://localhost:5000`

## Scripts

- `npm start` Run frontend + backend together
- `npm run client` Run only React frontend
- `npm run server` Run only backend API
- `npm run test:ci` Run tests once in CI mode
- `npm run build` Build frontend for production

## Contact Email Flow

The Contact page sends:

- Sender email
- Reason for contact

to the mailbox set in `CONTACT_RECEIVER_EMAIL`.

The sender can be replied to directly because the API sets `replyTo` to the submitted email address.

## Deployment Notes

- Deploy frontend and backend together (same project) or as separate services.
- Set all environment variables in your hosting platform.
- Confirm your SMTP provider allows outbound mail from your configured account.

## Recommended Deployment (GitHub Student Pack Friendly)

If you have GitHub Student Pack, a practical setup is:

- Frontend: Vercel (free and easy for React static hosting)
- Backend API: Railway or Render (use your student-related credits/offers if available)
- Domain: Namecheap student domain benefit (if active in your pack)

### 1) Push your project to GitHub

```bash
git add .
git commit -m "Prepare MedPulse for production deployment"
git push
```

### 2) Deploy backend API (Railway/Render)

Use these settings:

- Root: repository root
- Start command: `npm run server`
- Build command: `npm install`
- Port: platform default (our app reads `PORT`)

Set backend environment variables:

- `PORT` (optional, platform usually injects this)
- `FRONTEND_URL` (your frontend URL, e.g. `https://your-app.vercel.app`)
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_RECEIVER_EMAIL`
- `CONTACT_SENDER_EMAIL`

After deploy, copy your backend URL, for example:

- `https://medpulse-api.up.railway.app`

### 3) Deploy frontend on Vercel

Import the same GitHub repo in Vercel.

Use these settings:

- Framework: Create React App
- Build command: `npm run build`
- Output directory: `build`

Set frontend environment variable:

- `REACT_APP_API_BASE_URL` = your backend URL (for example `https://medpulse-api.up.railway.app`)

Redeploy after adding environment variables.

### 4) Connect your custom domain

- Add your domain in Vercel (frontend).
- If you also want a custom backend domain, map a subdomain (for example `api.yourdomain.com`) to your backend provider.
- Update:
	- `FRONTEND_URL` on backend
	- `REACT_APP_API_BASE_URL` on frontend

### 5) Final checks

- Open the website in production.
- Submit Contact form.
- Confirm email arrives in `CONTACT_RECEIVER_EMAIL` inbox.
- Reply from inbox and verify it goes to the user email (via `replyTo`).

## Video Setup

Current path:

- `/public/videos/medpulse-video.mp4`

If you change the file name, update the path in `src/components/Services.js`.
