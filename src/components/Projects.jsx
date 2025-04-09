// Projects.jsx
export default function Projects() {
    const projects = [
        {
            title: "AI-Powered Learning Platform",
            description:
                "An educational platform that uses machine learning to personalize student learning paths. Built with React, Python, and TensorFlow.",
            tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
            github: "https://github.com/drguzi/ai-learning-platform",
            live: "https://ai-learning.demo.com",
        },
        {
            title: "Cloud Development Environment",
            description:
                "A containerized development environment that allows students to code in their browser. Implemented using Docker and Kubernetes.",
            tech: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
            github: "https://github.com/drguzi/cloud-dev-env",
            live: "https://cloud-dev.demo.com",
        },
        {
            title: "Research Data Visualization Tool",
            description:
                "Interactive visualization tool for computer science research data, featuring real-time collaboration capabilities.",
            tech: ["D3.js", "Vue.js", "Express", "Redis"],
            github: "https://github.com/drguzi/data-viz-tool",
            live: "https://data-viz.demo.com",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-32">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
            <div className="h-48 bg-gray-200">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Project Preview
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex justify-center items-center font-medium hover:bg-gray-800"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-gray-300 px-4 py-2 rounded-lg flex justify-center items-center font-medium text-sm hover:bg-gray-100"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
