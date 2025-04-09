export default function Skills() {
    const skills = [
        "React",
        "JavaScript",
        "Python",
        "Java",
        "NodeJS",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "VueJS",
        "TypeScript",
        "Git",
        "Postman",
    ];

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-32">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Skills & Technologies
                </h2>
                <div className="grid grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <Skill key={skill} name={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skill({ name }) {
    const iconPath = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`;

    return (
        <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
            <img src={iconPath} alt={`${name} icon`} className="w-16 h-16" />
            <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
    );
}
