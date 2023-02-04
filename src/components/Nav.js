export default function Nav() {
    return (
        <>
            <nav className="flex flex-col items-center justify-between bg-zinc-700
    p-2 text-slate-50 text-lg lg:flex-row text-center">
                <div className="flex flex-col justify-between items-center sm:flex-row">
                    <img src="/imgs/profile.jpg" alt="error" className="h-16 sm:m-auto border rounded-full sm:mr-1" />
                        {/* <ul>
                            <a href="#" className="mx-1 p-1">about</a>
                            <a href="#" className="mx-1 p-1">featured</a>
                            <a href="#" className="mx-1 p-1">portfolio</a>
                            <a href="#" className="mx-1 p-1">contact</a>
                        </ul> */}
                </div>
                <div id="social-links">
                    <ul>
                        <a href="https://github.com/NewbieRitesh" className="mx-1 p-1"><i className="bi bi-github"></i> <span className="text-sm">GitHub</span></a>
                        <a href="https://twitter.com/NewbieRitesh" className="mx-1 p-1"><i className="bi bi-twitter"></i></a>
                        {/* <a href="riteshsharma34567@gmail.com" className="mx-1 p-1"><i class="bi bi-envelope-at-fill"></i></a> */}
                        {/* <a href="/" className="mx-1 p-1"><i className="bi bi-linkedin"></i></a> */}
                        <a href="https://www.instagram.com/NewbieRitesh" className="mx-1 p-1"><i className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/riteshsharma.vd" className="mx-1 p-1"><i className="bi bi-facebook"></i></a>
                        <a href="https://wa.me/+919664958294" className="mx-1 p-1"><i className="bi bi-whatsapp"></i></a>
                    </ul>
                </div>
            </nav>
        </>
    );
};
