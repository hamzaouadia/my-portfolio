import ProfileImage from '../assets/images/profile.jpeg';

const AboutText = [
  "Hamza Ouadia, a passionate full-stack developer based in Mohammedia, Morocco, with a drive to build, learn, and push boundaries. I specialize in modern web development, primarily using React, Node.js, Django, Docker, and PostgreSQL, but I’m equally comfortable going deep into C/C++, systems-level programming, and networking concepts.",
  "What sets me apart is my ability to bridge frontend creativity with backend logic, bringing both worlds together seamlessly in scalable, performant applications.",
  "Whether working solo or in a team, I bring a mix of technical skill, creative insight, and calm perseverance. I know how to lead my own learning, collaborate across disciplines, and adapt to fast-changing environments. My time at 1337 taught me to embrace failure as a teacher. I learned to persist, to debug with patience, and to collaborate with others to find elegant solutions.",
  "Today, whether I’m writing low-level C code, designing interactive React interfaces, or deploying containerized microservices, I do it with the mindset 1337 instilled in me: Be bold. Stay curious. Learn by doing."
];

export default function About() {

    return (
        <section id="About" className="h-full bg-black text-white flex flex-col justify-center items-center">
            <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
                <div className='h-full lg:w-2/5 w-full flex flex-row justify-center items-center'>
                    <div className="lg:h-full h-1/2 flex items-center">
                        <img src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='h-full lg:w-3/5 flex lg:px-20 px-4 flex-col justify-center items-start '>
                    <div className=' w-full flex flex-row justify-start items-center border-b-2 border-white'>
                        <p className='text-start lg:text-[8vw] text-6xl whitespace-nowrap py-5 peace-font-medium'>WHO AM'I?</p>
                    </div>
                    {AboutText.map((text, index) => (
                        <p key={index} className="text-lg font-light py-2">
                            {text}
                        </p>
                    ))}
                </div>     
            </div>
        </section>
    )
}