export default function Header() {
    return (
        <header className="w-full fixed top-0 flex justify-between px-40 items-center h-16 bg-white">
            <h1>Logo</h1>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </header>
    );
}
