import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <nav style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#1e9eff44"
      }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{
        padding: "10px",
        background: "#1e9eff44",
        marginTop: "20px"
      }}>
        Student Portal 2026
      </footer>
    </>
  )
}

export default Layout