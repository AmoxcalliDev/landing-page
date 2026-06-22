import AppIcon from "@/components/ui/app-icon";

type Repo = {
    name: string;
    description: string | null;
    language: string | null;
    langColor: string;
    stars: number;
    url: string;
    topics: string[];
};

type RepoCardProps = {
    repo: Repo;
};

export default function RepoCard({ repo }: RepoCardProps) {
    return (
        <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
            <div className="flex items-start justify-between">
                <AppIcon icon="solar:folder-with-files-bold" className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-emerald-500 dark:text-zinc-500" />
                {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-amber-400">
                        <AppIcon icon="solar:star-bold" className="h-3.5 w-3.5" />
                        {repo.stars}
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-emerald-500 dark:text-zinc-100">
                    {repo.name}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{repo.description ?? "Sin descripción aún."}</p>
            </div>
            <div className="mt-auto flex items-center gap-2">
                {repo.language && (
                    <>
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                        <span className="text-xs text-zinc-500 dark:text-zinc-500">{repo.language}</span>
                    </>
                )}
                {repo.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {topic}
                    </span>
                ))}
            </div>
        </a>
    );
}