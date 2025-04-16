// About.jsx
export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-40 flex flex-row items-center gap-20">
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-gray-600">
                        As a Professor of Computer Science at Biola University,
                        I spend my days shaping the next generation of
                        developers. My mornings often begin with preparing
                        engaging lectures on advanced programming concepts, from
                        data structures to machine learning algorithms. I'm
                        particularly passionate about React development and
                        modern web technologies, which I incorporate into my
                        teaching to ensure students are well-prepared for
                        real-world applications.
                    </p>
                    <p className="text-lg text-gray-600">
                        Beyond the classroom, I'm deeply involved in research
                        projects focusing on full-stack development and cloud
                        architecture. I regularly contribute to open-source
                        projects and mentor students in their coding journey. My
                        expertise spans across various programming languages,
                        but I find myself most at home working with JavaScript
                        and Python. When I'm not coding or teaching, I'm usually
                        exploring new technologies or writing technical articles
                        to share my knowledge with the wider developer
                        community.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="/drguziabout.png"
                        alt="Dr. Guzi working"
                        className="rounded-2xl shadow-xl w-96 h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
