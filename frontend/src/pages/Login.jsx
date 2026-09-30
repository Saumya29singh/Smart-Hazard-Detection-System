
import { useState } from "react";
import "./Login.css";

export default function Login({ onLogin, onNavigate }) {
  const [role, setRole] = useState("citizen");

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-info">

          <div className="brand">
            <div className="brand-icon">🛡️</div>
            <span>RoadGuard AI</span>
          </div>

          <div className="info-content">

            <span className="small-badge">
              AI-Powered Civic Infrastructure
            </span>

            <h1>
              Making Roads
              <br />
              <span>Safer Together.</span>
            </h1>

            <p>
              Report road hazards instantly and help authorities
              create safer and smarter communities.
            </p>

            <div className="features">
              <div>✓ AI Hazard Detection</div>
              <div>✓ GPS-Based Reporting</div>
              <div>✓ Real-Time Complaint Tracking</div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-card">

          <div className="login-heading">
            <h2>Welcome Back</h2>
            <p>Choose your account type to continue</p>
          </div>

          {/* ROLE SELECTION */}
          <div className="role-selection">

            <button
              type="button"
              className={`role-btn ${
                role === "citizen" ? "active" : ""
              }`}
              onClick={() => setRole("citizen")}
            >
              <span className="role-icon">👤</span>

              <div>
                <strong>Citizen</strong>
                <small>Report & track issues</small>
              </div>
            </button>

            <button
              type="button"
              className={`role-btn ${
                role === "government" ? "active" : ""
              }`}
              onClick={() => setRole("government")}
            >
              <span className="role-icon">🏛️</span>

              <div>
                <strong>Government</strong>
                <small>Manage civic complaints</small>
              </div>
            </button>

          </div>

          {/* LOGIN FORM */}
          {role === "citizen" ? (
            <CitizenLogin onLogin={() => onLogin('citizen')} />
          ) : (
            <GovernmentLogin onLogin={() => onLogin('government')} />
          )}

        </div>
      </div>
    </div>
  );
}


/* =========================
   CITIZEN LOGIN
========================= */

function CitizenLogin({ onLogin }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login successful
    onLogin();
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >

      <div className="form-group">
        <label>Email or Mobile Number</label>

        <input
          type="text"
          placeholder="Enter your email or mobile"
          required
        />
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="form-options">

        <label>
          <input type="checkbox" />
          Remember me
        </label>

        <a href="#forgot">
          Forgot Password?
        </a>

      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="login-submit"
      >
        Login as Citizen
      </button>

      <p className="signup-text">
        Don't have an account?
        <a href="#signup"> Create Account</a>
      </p>

    </form>
  );
}


/* =========================
   GOVERNMENT LOGIN
========================= */

function GovernmentLogin({ onLogin }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login successful
    onLogin();
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >

      <div className="official-badge">
        🏛️ Government Authorized Access
      </div>

      <div className="form-group">
        <label>Official Email</label>

        <input
          type="email"
          placeholder="name@department.gov.in"
          required
        />
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="form-group">
        <label>Department</label>

        <select required>
          <option value="">
            Select Department
          </option>

          <option>
            Public Works Department (PWD)
          </option>

          <option>
            Municipality
          </option>

          <option>
            Electricity Department
          </option>

          <option>
            Water & Sewage Department
          </option>

          <option>
            Transport Department
          </option>

        </select>
      </div>

      <div className="form-options">

        <label>
          <input type="checkbox" />
          Remember me
        </label>

        <a href="#forgot">
          Forgot Password?
        </a>

      </div>

      <button
        type="submit"
        className="login-submit"
      >
        Government Login
      </button>

      <p className="security-text">
        🔒 Authorized government personnel only
      </p>

    </form>
  );
}
