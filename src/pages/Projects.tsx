import { useState } from 'react';
import projectsData from '../data/projects.json';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../types';
import ProjectModal from '../components/ProjectModal';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';

const getImagePath = (path: string) => `/${path}`;

const { projects } = projectsData satisfies { projects: Project[] };

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <PageContainer wide>
            <PageHeader centered>Projects</PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.page}
                        role="button"
                        tabIndex={0}
                        className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedProject(project);
                            }
                        }}
                    >
                        <div className="aspect-video overflow-hidden bg-slate-800">
                            <img
                                src={getImagePath(project.url)}
                                alt={project.title}
                                width={640}
                                height={360}
                                loading={index < 3 ? 'eager' : 'lazy'}
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-sky-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 mb-4 line-clamp-3">
                                {project.summary}
                            </p>

                            <div className="flex items-center text-sky-400 font-medium text-sm">
                                <span>Read more</span>
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity"
                            style={{ backgroundColor: project.color }}
                        />
                    </div>
                ))}
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                projectPage={selectedProject?.page || ''}
                projectColor={selectedProject?.color || '#007DC3'}
            />
        </PageContainer>
    );
};

export default Projects;
