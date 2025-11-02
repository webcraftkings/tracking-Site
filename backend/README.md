Backend for Excel Secure (minimal scaffold)

Quick start

- Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
- Run the server:

```
npm install
npm run dev
```

API Endpoints (examples)
- POST /api/auth/register { name, email, password }
- POST /api/auth/login { email, password }
- GET /api/tracking/:number
- POST /api/tracking (protected) { trackingNumber, carrier, status }
- POST /api/tracking/:number/update (protected) { status, location }
- POST /api/contact { name, email, subject, message }

Notes
- Uses MongoDB (Mongoose) and JWT for auth.
