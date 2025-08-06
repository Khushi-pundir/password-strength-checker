import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[@$!%*?&#]/.test(pwd)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    return "Strong";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(getStrength(value));
  };

  const getColor = () => {
    switch (strength) {
      case "Weak": return "bg-red-400";
      case "Medium": return "bg-yellow-400";
      case "Strong": return "bg-green-400";
      default: return "bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4">
      <div className="bg-white shadow-lg rounded-2xl px-6 py-8 sm:px-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">🔐 Password Strength Checker</h1>
        
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder="🔐 Choose a strong password..."
          className="w-full border-2 border-gray-300 rounded px-4 py-2 mb-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="text-sm text-purple-600 hover:underline mb-4"
        >
          {showPassword ? "🙈 Hide Password" : "👁 Show Password"}
        </button>

        {password && (
          <>
            <div className="w-full h-3 mb-2 rounded-full bg-gray-200">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${getColor()}`}
                style={{ width: strength === "Weak" ? '33%' : strength === "Medium" ? '66%' : '100%' }}
              />
            </div>
            <p className={`text-center font-semibold ${getColor().replace("bg", "text")}`}>
              {strength === "Weak" && "🔴 Weak Password"}
              {strength === "Medium" && "🟠 Medium Password"}
              {strength === "Strong" && "🟢 Strong Password"}
            </p>
          </>
        )}

        <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
          <li>Use at least 8 characters</li>
          <li>Mix uppercase and lowercase letters</li>
          <li>Include numbers and symbols</li>
        </ul>
      </div>
    </div>
  );
}
