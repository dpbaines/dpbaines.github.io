import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import experiencesData from '../data/experiences.json';
import type { Experience } from '../types';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';

const { experiences } = experiencesData satisfies { experiences: Experience[] };

const Home = () => {
    return (
        <div className="space-y-24 pb-12">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col justify-center items-center text-center space-y-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-sky-400 shadow-lg shadow-sky-400/20"
                >
                    <img
                        src="/res/img/davidquality.jpg"
                        alt="David Baines"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 tracking-tight">
                        David Baines
                    </h1>
                    <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Software Development Engineer at Amazon. Passionate about solving complex problems and building scalable systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-8 pt-4"
                >
                    <a href="https://github.com/dpbaines" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                        <Github size={36} />
                    </a>
                    <a href="https://www.linkedin.com/in/dpbaines/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                        <Linkedin size={36} />
                    </a>
                    <a href="mailto:david.baines@mail.utoronto.ca" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
                        <Mail size={36} />
                    </a>
                </motion.div>
            </section>

            {/* About Section */}
            <PageContainer>
                <section className="space-y-8">
                    <PageHeader as="h2" bordered>About Me</PageHeader>
                    <div className="text-slate-300 leading-relaxed space-y-6 text-lg">
                        <p>
                            I'm a Software Development Engineer at <span className="text-sky-400 font-semibold">Amazon</span>, based in Vancouver.
                            I graduated with a BASc in Electrical and Computer Engineering from the University of Toronto.
                        </p>
                        <p>
                            I have a passion for solving interesting problems, optimization, and figuring things out.
                            Currently at Amazon, I work for the Access team doing fullstack development.
                        </p>
                    </div>
                </section>
            </PageContainer>

            {/* Experience Section */}
            <PageContainer>
                <section className="space-y-8">
                    <PageHeader as="h2" bordered>Experience</PageHeader>
                    <div className="relative ml-1 sm:ml-2">
                        <div
                            aria-hidden
                            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-800"
                        />
                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={`${exp.title}-${exp.time}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-10 group"
                                >
                                    <div
                                        aria-hidden
                                        className="absolute left-[7px] top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-600 bg-slate-950 transition-colors group-hover:border-sky-400"
                                    />
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <span className="text-sm font-mono text-slate-500">{exp.time}</span>
                                    </div>
                                    <p className="text-sky-400 font-medium text-lg mb-3">{exp.role}</p>
                                    <p className="text-slate-300 text-lg leading-relaxed">{exp.description}</p>
                                    {exp.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </PageContainer>
        </div>
    );
};

export default Home;
