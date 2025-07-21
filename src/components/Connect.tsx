import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function Connect() {
    const textRef = useRef(null);
    const formRef = useRef(null);
    const buttonRef = useRef(null);

    const textInView = useInView(textRef, { once: true });
    const formInView = useInView(formRef, { once: true });
    const buttonInView = useInView(buttonRef, { once: false });
    const isMobile = useIsMobile();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = (e: HandleSubmitEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // ✅ Validate all fields are filled
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Please fill in all fields before sending.");
            return;
        }

        // ✅ Proceed with sending if validation passes
        emailjs.sendForm(
            'service_w3emcys',
            'template_4082xnq',
            e.target as HTMLFormElement,
            'ak1mmxiycz3zZO3LS'
        )
            .then(() => {
            setFormData({ name: '', email: '', message: '' });
            console.log("Email sent!");
            })
            .catch(err => {
            console.error("Email failed:", err);
            });
    };

    return (
        <section
            id="Connect"
            className="min-h-screen z-10 bg-[#111111] flex flex-col justify-center items-center"
        >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full mt-20 lg:mt-0 lg:w-1/2 flex flex-row justify-center gap-1 items-end px-4 pt-20 lg:pt-0">
                    <div className="flex flex-col items-end ">
                        <div className="">
                            <motion.p
                                ref={textRef}
                                initial={{ x: -70 }}
                                animate={textInView ? { x: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="lg:text-4xl text-white peace-font-medium lg:whitespace-nowrap"
                            >
                                I would
                            </motion.p>
                        </div>
                        <div className="lg:w-80 w-40 bg-white h-[0.2rem] lg:h-1" />
                    </div>
                        <motion.p
                            ref={textRef}
                            initial={{ opacity:0, y: -20 }}
                            animate={textInView ? { opacity:1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            className="lg:-my-[9px] -my-[3px]  lg:text-4xl text-white peace-font-medium whitespace-nowrap"
                        >
                            love to hear from you!
                        </motion.p>
                </div>


                <div className="w-full flex lg:flex-row flex-col text-white items-start justify-center lg:gap-0 gap-8 lg:px-30 px-2 py-30">
                    <div className="lg:w-100 w-full bg-[#111111] z-10">
                        <p className="w-full peace-font-medium lg:text-end text-center lg:text-[8rem] text-[3.5rem] lg:whitespace-normal whitespace-nowrap">
                            GET IN TOUCH
                        </p>
                    </div>

                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={formInView ? { opacity: 1, y: 0, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="lg:w-1/2 w-full px-4 flex flex-col items-end justify-start gap-6"
                    >
                        <div className="w-full flex lg:flex-row flex-col items-start lg:gap-10 gap-6">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    placeholder=""
                                    onChange={handleChange}
                                    className="peer w-full bg-transparent border-white/50 border-b py-2 text-white focus:outline-none focus:ring-0 focus:border-white"
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all text-sm
                                        ${formData.name ? "top-[-0.8rem] text-white text-sm" : "top-2 text-base text-gray-500"}
                                        peer-focus:top-[-0.8rem] peer-focus:text-sm peer-focus:text-white`}
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder=""
                                    onChange={handleChange}
                                    className="peer w-full border-white/50 border-b py-2 text-white focus:outline-none focus:ring-0 focus:border-white"
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 transition-all text-sm
                                        ${formData.email ? "top-[-0.8rem] text-white text-sm" : "top-2 text-base text-gray-500"}
                                        peer-focus:top-[-0.8rem] peer-focus:text-sm peer-focus:text-white`}
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="relative w-full bg-[#111111] z-10">
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                placeholder=""
                                onChange={handleChange}
                                className="peer resize-none w-full py-2 border-white/50 border-b text-white focus:outline-none focus:ring-0 focus:border-white"
                            />
                            <label
                                htmlFor="message"
                                className={`absolute left-0 transition-all text-sm
                                        ${formData.message ? "top-[-0.8rem] text-white text-sm" : "top-2 text-base text-gray-500"}
                                        peer-focus:top-[-0.8rem] peer-focus:text-sm peer-focus:text-white`}
                            >
                                Message
                            </label>
                        </div>

                        <div className="w-full flex flex-row justify-end items-center gap-10">
                            {!isMobile && (
                                <div className="w-1/2"></div>
                            )}
                            <motion.button
                                ref={buttonRef}
                                initial={{ y: -100 }}
                                animate={buttonInView ? { y: 0 } : {}}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                                type="submit"
                                className="border-white/50 border-b px-6 py-2 lg:w-1/2 w-full rounded hover:border-white hover:cursor-none hover-target"
                            >
                                Send
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
