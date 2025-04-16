// Hero.jsx
export default function Hero() {
    return (
        <section id="hero">
            <div className="flex justify-center items-center h-screen gap-40">
                <div>
                    <img
                        src="/drguzihero.png"
                        alt=""
                        className="h-96 w-96 object-cover rounded-full"
                    />
                </div>
                <div className="p-4 flex flex-col gap-5 max-w-3xl">
                    <h1 className="font-black text-6xl">Hi, I'm Dr. Guzi</h1>
                    <p className="text-4xl text-gray-500">
                        Full-stack developer
                    </p>
                    <p className="text-2xl">
                        I build beautiful, responsive websites using modern
                        technologies. Passionate about creating intuitive user
                        experiences and clean code.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="bg-gray-900 text-white px-4 py-3 rounded-xl font-medium items-center justify-center flex hover:bg-gray-800"
                        >
                            View My Work
                        </a>
                        <a
                            href="#about"
                            className="bg-white border-gray-300 border-2 text-gray-900 px-4 py-3 rounded-xl font-medium items-center justify-center flex hover:bg-gray-100"
                        >
                            About Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
