import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <h1>Menu</h1>
        <nav className="card">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            
      </nav>
      <Outlet />
      </>
    )
}