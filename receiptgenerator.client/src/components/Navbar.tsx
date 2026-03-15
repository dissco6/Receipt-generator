import "./styles/Navbar.css"
import logo from "../assets/generate-receipts-logo.svg"
import Button from "./Button"
import arrow from "../assets/arrow-right-white.svg"

function Navbar() {
    return (
        <nav className="navbar py-5 border-b border-b-solid border-b-gray-200">
            <div className="min-width flex">
                <div className="grid nav-left flex-grow gap-8 items-center">
                    <img src={ logo } alt="Generate receipts logo" className="logotype" />
                </div>
                <div className="nav-right">
                    <Button color="primary" size="lg" iconTrailing={<img src={arrow} alt="go" className="h-2.5 w-auto" />} className="gap-2 cursor-pointer">Generate Receipt</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;