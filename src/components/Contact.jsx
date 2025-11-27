import './Contact.css';
export default function Contact({texts}) {
    return (
        <section id='contact' class="contact-section">

            <div class="contact-content">
                <h2 class="section-title">{texts.title}</h2>
                <div class="contact-body">
                    <p class="contact-heading">
                        {texts.heading}
                    </p>
                    <p class="contact-subtext">
                        {texts.subtext}
                    </p>
                </div>

            </div>
        </section>
    )
}