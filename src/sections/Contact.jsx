import {useRef, useState} from "react";
import  emailjs from'@emailjs/browser';
import {toast} from "react-hot-toast/headless";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = ({ target: { name,value }}) =>  {
        setForm({
            ...form,
            [name]:value
        })
    }

    // service_0v0il9b
    const handleSubmit = async (e) =>  {
        e.preventDefault();
        setLoading(true);

        try{

        emailjs.send('service_0v0il9b',
                    'template_2i8jvvs',
            {
                from_name: form.name,
                to_name: 'Pratik',
                from_email: form.email,
                to_email: 'jsilverhand279@gmail.com',
                message: form.message
            },'iA-ibv1L3qkeEtaZP')
        setLoading(false);
        setForm({});
        toast.success("Thank you for your message. I'll get back to you as soon as possible.");
        }catch (error){
            console.log(error);
        }
    }


    return (
        <section className={"c-space my-20"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src={"/assets/terminal.png"} alt={"terminal"} className={"absolute inset-0 min-h-screen sm:block hidden"}/>
                <div className={"contact-container"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className={"head-text"}>Let's Talk</h2>
                    <p className={"text-lg text-white-600 mt-3"}>
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}
                          className={"mt-12 flex flex-col space-y-2"}
                    >
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="John Doe"
                                className={"field-input"}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="JohnDoe@gamil.com"
                                className={"field-input"}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Your Message</span>
                            <textarea
                                type="text"
                                name="message"
                                value={form.message}
                                className={"field-input"}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>
                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src={"/assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Contact
