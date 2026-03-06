import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { lazy, Suspense } from "react"

import LoadingSpinner from "./components/LoadingSpinner"
import ErrorBoundary from "./components/ErrorBoundary"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Settings = lazy(() => import("./pages/Settings"))
const Profile = lazy(() => import("./pages/Profile"))

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the dashboard app.</p>
    </div>
  )
}

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <ErrorBoundary fallback={<ErrorFallback />}>

        <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Suspense fallback={<LoadingSpinner />}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </Suspense>

      </ErrorBoundary>

    </BrowserRouter>
  )
}

export default App
