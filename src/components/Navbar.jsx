import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-base-200">
        <div className="navbar max-w-5xl mx-auto">
            <div className="navbar-start">
                <Link to="/" className="btn btn-secondary font-bold text-2xl">TODO</Link>
            </div>
            <div className="navbar-center">
                
            </div>
            <div className="navbar-end">
            <Link to="/create" className="link link-primary">Create</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar