
export default function Footer() {
    return (
        <footer className="bg-dark footer-section" id="contact">
            <div className="section" style={{ paddingBottom: "40px", paddingTop: "0px" }}>
                <div className="container">
                {/* Section title */}
                <div className="row">
                    <h2 className="section-title" style={{ color: "white" }}>
                    Contact Info
                    </h2>
                </div>

                {/* Contact Details */}
                <div className="row">
                    <div className="col-md-4">
                    <h5 className="text-light">Email</h5>
                    <a href="mailto:danindum@outlook.com">
                        <p className="text-white paragraph-lg font-secondary">danindum@outlook.com</p>
                    </a>
                    </div>
                    <div className="col-md-4">
                    <h5 className="text-light">Phone</h5>
                    <a href="tel:16476324584">
                        <p className="text-white paragraph-lg font-secondary">+1 (647) 632-4584</p>
                    </a>
                    </div>
                    <div className="col-md-4">
                    <h5 className="text-light">Location</h5>
                    <a
                        href="https://www.google.ca/maps/place/Brampton,+ON/@43.7248485,-79.8996272,11z/data=!3m1!4b1!4m5!3m4!1s0x882b15eaa5d05abf:0x352d31667cc38677!8m2!3d43.7315479!4d-79.7624177"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-white paragraph-lg font-secondary">Brampton, ON</p>
                    </a>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-lg-8 text-center">
                    <a href="https://github.com/danindugit" className="fa custom-icon fa-github" target="_blank" rel="noopener noreferrer"></a>
                    <a
                        href="https://www.linkedin.com/in/danindu-marasinghe-ab94051a6/"
                        className="fa custom-icon fa-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100010162722755"
                        className="fa custom-icon fa-facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                    <a
                        href="https://www.instagram.com/danindu_mara01/"
                        className="fa custom-icon fa-instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                    <a
                        href="https://twitter.com/dan_witha_twist"
                        className="fa custom-icon fa-twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                </div>
            </div>
        </footer>
    );
}