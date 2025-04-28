# Recruitify Global

Recruitify Global is a full‑stack MERN (MongoDB, Express, React, Node.js) platform designed to streamline the recruitment lifecycle—from posting jobs to managing applicants and onboarding recruiters.

## Features

- **Job Management**: Create, update, list, and archive job postings.
- **Applicant Management**: Candidates can apply with resumes, cover letters, education, experience, skills, and languages. Admins can review, filter, and manage applications.
- **Recruiter Onboarding**: External recruiters can register, submit candidates, and track their referrals. Admins manage recruiter accounts and permissions similar to applicant management.
- **Admin Portal**: Secure dashboard for administrators to manage jobs, applicants, and recruiters.
- **Responsive React Frontend**: Tailwind CSS–powered UI, mobile-first and accessible.
- **RESTful API**: Express server with JWT authentication, file uploads (multer + Cloudinary), and role-based access control.
- **Real‑time Stats**: Animated counters for key metrics (placements done, recruiters onboarded, etc.).

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB (Atlas), Mongoose
- **Auth & Security**: JWT, bcrypt
- **Storage**: Cloudinary for file hosting
- **Dev & Tooling**: Vite, Postman, Render (deployment)

## Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/m-faisal930/RecruitifyGlobal.git
   cd RecruitifyGlobal
   ```
2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend && npm install
   # Backend
   cd ../backend && npm install
   ```
3. **Configure environment**
   - Copy `.env.example` to `.env` in both `frontend` and `backend` directories.
   - Set your variables (API_URL, MONGODB_URI, JWT_SECRET, CLOUDINARY_*).

4. **Run locally**
   ```bash
   # Start backend on port 5000
   cd backend && npm run dev

   # Start frontend on port 3000
   cd ../frontend && npm run dev
   ```
5. **Open** your browser at `http://localhost:3000`

## Environment Variables

**Frontend `.env`**
```env
VITE_API_URL=http://localhost:5000
```  

**Backend `.env`**
```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```  

## Deployment

- **Render.com** for both frontend and backend.  
- **MongoDB Atlas** for production database.  
- **Cloudinary** for file storage.

## Contributing

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feature/YourFeature`).  
3. Commit your changes (`git commit -m "feat: add new feature"`).  
4. Push to the branch (`git push origin feature/YourFeature`).  
5. Open a Pull Request.

## License

MIT © Recruitify Global

