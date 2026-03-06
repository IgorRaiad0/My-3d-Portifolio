import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-primary py-8 border-t border-[#2a2a2a] mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Direitos Autorais */}
                <div className="text-secondary text-[14px]">
                    &copy; 2026 Igor Ryan. Todos os direitos reservados.
                </div>

                {/* E-mail */}
                <div className="text-secondary text-[14px] hover:text-white transition-colors">
                    <a href="mailto:igorryanbacelarfrota@gmail.com" className="flex items-center gap-2">
                        <i className="fas fa-envelope"></i>
                        igorryanbacelarfrota@gmail.com
                    </a>
                </div>

                {/* Redes Sociais */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/IgorRaiad0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white hover:bg-[#0000E8] transition-colors"
                        title="GitHub"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/igor-ryan-596a8b3aa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white hover:bg-[#0000E8] transition-colors"
                        title="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/ig0rryan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white hover:bg-[#0000E8] transition-colors"
                        title="Instagram"
                    >
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a
                        href="https://www.youtube.com/@igorryanbacelarfrota5567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center text-white hover:bg-[#0000E8] transition-colors"
                        title="YouTube"
                    >
                        <i className="fab fa-youtube text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
