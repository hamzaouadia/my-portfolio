import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, useSpring } from 'framer-motion';

const spring = { damping: 12, stiffness: 80, restDelta: 0.001 };

const Contact = () => {
    const [statusMessageParent, setStatusMessageParent] = useState('');
    const [statusMessageChilde, setStatusMessageChilde] = useState('');
    const buttonRef = useRef(null);
    const formRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    const [buttonX, setButtonX] = useState(0);
    const [buttonY, setButtonY] = useState(0);

    useEffect(() => {
        const handlePointerMove = (e) => {
            if (!isHovering) return;
            const form = formRef.current;
            if (!form) return;

            const { clientX, clientY } = e;
            console.log( "mouse: ", clientX, clientY);
            const offsetX = clientX - buttonX;
            const offsetY = clientY - buttonY;
            x.set(offsetX);
            y.set(offsetY);
        };

        window.addEventListener('pointermove', handlePointerMove);
        return () => window.removeEventListener('pointermove', handlePointerMove);
    }, [isHovering, buttonX, buttonY, x, y]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w3emcys', 'template_4082xnq', e.target, 'ak1mmxiycz3zZO3LS')
            .then(() => {
                setStatusMessageParent('Sent!');
                setStatusMessageChilde('Thank you for your message!');
                setTimeout(() => {
                    setStatusMessageParent('');
                    setStatusMessageChilde('');
                }, 3000);
            })
            .catch(() => {
                setStatusMessageParent('Oops!');
                setStatusMessageChilde('Something went wrong. Please try again.');
                setTimeout(() => {
                    setStatusMessageParent('');
                    setStatusMessageChilde('');
                }, 3000);
            });
    
        setFormData({ name: '', email: '', message: '' });
    };
    

    return (
        <section className="h-screen w-screen flex items-center justify-center text-center p-16 overflow-hidden">
            {!statusMessageParent && (
            
            <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ x, y }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex w-250 h-150 bg-white rounded-2xl flex-row justify-center items-center"
            >
                <div className='flex items-center justify-center rounded-2xl mr-2 bg-black w-150 h-full'>
                    <h1 className='text-white p-0 font-bebas-6rem text-center'>Contact me!</h1>
                </div>
                <div className='flex flex-col p-2 m-2 items-center justify-center px-4 rounded-2xl w-1/2 h-full'>
                    <div className="flex flex-col justify-center gap-4 w-full h-full">
                        <div className="outline-none">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='text-black border-2 rounded border-black p-2 w-full'
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='text-black border-2 rounded border-black p-2 w-full'
                            />
                        </div>

                        <div >
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="8"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className='text-black border-2 rounded resize-none  border-black p-2 w-full'
                            />
                        </div>

                        <div>
                            <button
                                ref={buttonRef}
                                type="submit"
                                onMouseEnter={() => {
                                    if (buttonRef.current) {
                                        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
                                        console.log("button: ", left + Math.floor(width / 2), Math.floor(top + height / 2));
                                        setButtonX(left + width / 2);
                                        setButtonY(top + height / 2);
                                    }
                                    setIsHovering(true);
                                }}
                                onMouseLeave={() => setIsHovering(false)}
                                className='text-black rounded border-2 hover:cursor-pointer hover:bg-black hover:border-0 hover:text-white transform  transition-colors duration-500 border-black p-2 w-full'
                                >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </motion.form>
            )}
            {statusMessageParent && (
                <div className='flex flex-col items-center justify-center rounded-2xl bg-black w-1/3 h-2/3'>
                    <div className='flex flex-col justify-center items-start gap-0'>
                        <h1 className="h1 font-bebas-15rem text-9xl font-bold border-b-2 text-white border-white">
                            {statusMessageParent}
                        </h1>
                        <h1 className='text-white font-medium text-2xl'>
                            {statusMessageChilde}
                        </h1>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
