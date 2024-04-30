
const Footer = () => {
    return (
        <div className=" bg-black">
            <footer className="footer container mx-auto p-10 text-white">
                <aside>
                    <h1 className="logo text-3xl">EuroGuide</h1>
                    <p>Providing reliable Services since 2022</p>
                </aside>
                <nav>
                    <h4 className="footer-title">Contact Us</h4>
                    <p className="link link-hover">contact@example.com</p>
                    <p className="link link-hover">+123-456-7890</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Media</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by EuroGuide Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;