import './Contact.css';
export default function Contact({texts}) {
    return (
        <section id='contact' className="contact-section">

            <div className="contact-content">
                <h2 className="section-title">{texts.title}</h2>
                <div className="contact-body">
                    <p className="contact-heading">
                        {texts.heading}
                    </p>
                    <p className="contact-subtext">
                        {texts.subtext}
                    </p>
                </div>

            </div>
        </section>
    )
}