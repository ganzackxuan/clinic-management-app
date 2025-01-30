"use client";

import { useState } from 'react';
import Login from './pages/login';
import Home from './pages/home';

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div>
          {isAuthenticated ? <Home /> : <Login />}
        </div>
      </body>
    </html>
  );
}