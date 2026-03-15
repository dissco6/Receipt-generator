import logo from '../assets/generate-receipts-logo-white.svg';

export default function Footer() {
    return (
        <footer className="bg-dark-primary mt-8">
            <div className="min-width">
                <div className="grid justify-center text-center py-16">
                    <img src={logo} alt="Generate receipts logo" className="mx-auto" />
                    <ul className="pt-8 flex gap-8 text-base leading-6 font-medium text-gray-400">
                        <li><a href="" className="!text-inherit">Templates</a></li>
                        <li><a href="" className="!text-inherit">Examples</a></li>
                        <li><a href="" className="!text-inherit">Blog</a></li>
                        <li><a href="" className="!text-inherit">About</a></li>
                        <li><a href="" className="!text-inherit">Contact</a></li>
                        <li><a href="" className="!text-inherit">Privacy Policy</a></li>
                        <li><a href="" className="!text-inherit">Terms & conditions</a></li>
                    </ul>
                </div>
                <div className="border-t-1 border-t-solid border-t-dark-grey pt-6 pb-12 text-gray-400 text-base leadgin-6 font-normal">
                    © 2026 GenerateReceipts. All rights reserved.
                </div>
            </div>
        </footer>
    );
}