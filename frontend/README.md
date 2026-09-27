# CivicAI — Smart Road Hazard Detection Frontend

A camera-first React/Vite MVP prototype for the Smart Road Hazard Detection & Citizen Reporting System.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Camera and GPS permissions work on `localhost` or HTTPS.

## Demo flow

1. Open `/report`.
2. Allow camera access.
3. Capture a live photo.
4. Allow GPS access.
5. Click **Analyze captured image**.
6. Review the demo pothole result.
7. Submit the complaint.
8. Open **Government** to update its status.
9. Open **My Complaints** to track it.

## Important

The current AI output is a demo/mock response in `src/services/demoAI.js`. Replace that function with a `fetch()` request to your FastAPI `/predict` endpoint when the YOLO model is ready.

This is a frontend prototype, not a production-ready secure application. Authentication, server-side validation, real database persistence, role-based access control, and real AI inference must be added in the backend integration phase.
