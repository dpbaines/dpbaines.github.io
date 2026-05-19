import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import PageContainer from '../components/PageContainer';

const Blog = () => {
    return (
        <PageContainer>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-sky-400"
                >
                    <Construction size={64} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <PageHeader centered className="mb-4">
                        Blog Under Construction
                    </PageHeader>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-400 max-w-md leading-relaxed"
                >
                    We're currently migrating our blog posts to the new platform.
                    Check back soon for updates!
                </motion.p>
            </div>
        </PageContainer>
    );
};

export default Blog;
