"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RepoCard from "@/components/ui/repo-card";

type Repo = {
    name: string;
    description: string | null;
    language: string | null;
    langColor: string;
    stars: number;
    url: string;
    topics: string[];
};

export default function ProjectsSection() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                const res = await fetch("/api/repos", { cache: "no-store" });
                if (!res.ok) throw new Error("failed");
                const data = (await res.json()) as Repo[];
                if (mounted) {
                    setRepos(data);
                    setHasError(false);
                }
            } catch {
                if (mounted) setHasError(true);
            } finally {
                if (mounted) setIsLoading(false);
            }
        };

        load();
        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        if (!gridRef.current || repos.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        const cards = gridRef.current.querySelectorAll("a");
        gsap.set(cards, { opacity: 0, y: 22 });

        gsap.fromTo(
            cards,
            { opacity: 0, y: 22 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                    end: "top 45%",
                    scrub: 0.8,
                },
            }
        );
    }, [repos]);

    return (
        <section id="projects" data-section className="bg-zinc-100/70 px-6 py-24 dark:bg-zinc-900/30">
            <div className="mx-auto max-w-6xl">
                <div data-reveal className="mb-12 flex flex-col gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Proyectos</span>
                    <h2 className="text-4xl font-bold">
                        Lo que estamos <span className="gradient-text">construyendo</span>
                    </h2>
                    <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Herramientas reales, codigo abierto, listos para usar y mejorar.</p>
                </div>

                {isLoading && <p className="text-sm text-zinc-500 dark:text-zinc-500">Cargando repositorios...</p>}
                {hasError && !isLoading && (
                    <p className="text-sm text-rose-400">No pudimos cargar los repositorios por ahora. Intenta recargar.</p>
                )}

                {!isLoading && !hasError && (
                    <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {repos.map((repo) => (
                            <RepoCard key={repo.name} repo={repo} />
                        ))}
                    </div>
                )}

                <div data-reveal className="mt-8 text-center">
                    <a
                        href="https://github.com/orgs/AmoxcalliDev/repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-emerald-500 dark:text-zinc-400"
                    >
                        Ver todos los repositorios →
                    </a>
                </div>
            </div>
        </section>
    );
}