export interface Project {
    title: string;
    summary: string;
    url: string; // Image path
    page: string; // Markdown file path
    color: string;
}

export interface Experience {
    title: string;
    role: string;
    time: string;
    description: string;
    tags: string[];
    color: string;
}
