import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectPage: string;
    projectColor: string;
}

const resolveAssetUrl = (src?: string) => {
    if (!src) return src;
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
        return src;
    }
    return `/${src}`;
};

const ProjectModal = ({ isOpen, onClose, projectPage, projectColor }: ProjectModalProps) => {
    const [content, setContent] = useState<string>('Loading...');

    useEffect(() => {
        if (!isOpen || !projectPage) return;

        const controller = new AbortController();
        setContent('Loading...');

        fetch(`/${projectPage}`, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.text();
            })
            .then((text) => setContent(text))
            .catch((err) => {
                if (err instanceof Error && err.name === 'AbortError') return;
                setContent('Error loading project details.');
            });

        return () => controller.abort();
    }, [isOpen, projectPage]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-slate-900 rounded-xl border-2 shadow-2xl p-4 sm:p-8"
                        style={{ borderColor: projectColor }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-slate-300" />
                        </button>

                        <div className="pt-10 sm:pt-0 sm:pr-12 max-w-none">
                            <ReactMarkdown
                                components={{
                                    h1: ({ ...props }) => (
                                        <h1 className="text-4xl font-bold mb-6 text-slate-100" {...props} />
                                    ),
                                    h2: ({ ...props }) => (
                                        <h2
                                            className="text-3xl font-bold mt-8 mb-4 pb-2 border-b-2 text-slate-100"
                                            style={{ borderColor: projectColor }}
                                            {...props}
                                        />
                                    ),
                                    h3: ({ ...props }) => (
                                        <h3 className="text-2xl font-bold mt-6 mb-3 text-slate-200" {...props} />
                                    ),
                                    p: ({ ...props }) => (
                                        <p className="text-slate-300 leading-relaxed mb-4" {...props} />
                                    ),
                                    a: ({ ...props }) => (
                                        <a
                                            className="text-sky-400 hover:text-sky-300 underline transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...props}
                                        />
                                    ),
                                    img: ({ src, alt, ...props }) => (
                                        <img
                                            className="rounded-lg my-6 w-full shadow-lg"
                                            src={resolveAssetUrl(src)}
                                            alt={alt}
                                            {...props}
                                        />
                                    ),
                                    ul: ({ ...props }) => (
                                        <ul className="list-disc list-inside mb-4 text-slate-300" {...props} />
                                    ),
                                    ol: ({ ...props }) => (
                                        <ol className="list-decimal list-inside mb-4 text-slate-300" {...props} />
                                    ),
                                    code: ({ ...props }) => (
                                        <code
                                            className="bg-slate-800 px-2 py-1 rounded text-sm text-sky-400"
                                            {...props}
                                        />
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
