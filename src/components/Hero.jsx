// Hero.jsx
export default function Hero() {
    return (
        <section id="hero">
            <div className="flex justify-center items-center h-screen gap-40">
                <div>
                    <img
                        src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-630c-61f6-85fb-51bea61290a5/raw?se=2025-04-09T22%3A43%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=767f484e-3c40-5718-85b0-3b2407474655&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-09T21%3A30%3A03Z&ske=2025-04-10T21%3A30%3A03Z&sks=b&skv=2024-08-04&sig=faH4OcZg8o%2BaAvugVWtotj5XgKsRpwCcDpTQG6bF7kI%3D"
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
                            href="mailto:j.d.giovannetti@biola.edu"
                            className="bg-white border-gray-300 border-2 text-gray-900 px-4 py-3 rounded-xl font-medium items-center justify-center flex hover:bg-gray-100"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
