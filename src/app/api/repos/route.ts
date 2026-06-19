import { NextResponse } from "next/server";

const LANG_COLORS: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Shell: "#89e051",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00ADD8",
    Rust: "#dea584",
    Java: "#b07219",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Kotlin: "#A97BFF",
    Swift: "#F05138",
    Dart: "#00B4AB",
};

export async function GET() {
    try {
        const res = await fetch(
            `https://api.github.com/orgs/${process.env.GITHUB_ORG}/repos?sort=updated&per_page=30&type=public`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                next: { revalidate: 3600 },
            }
        );

        if (!res.ok) {
            throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

        const data: Record<string, unknown>[] = await res.json();
        const repos = data
            .filter((repo) => !repo.fork && repo.name !== ".github")
            .map((repo) => ({
                name: repo.name as string,
                description: (repo.description as string | null) ?? null,
                language: (repo.language as string | null) ?? null,
                langColor: LANG_COLORS[(repo.language as string) ?? ""] ?? "#8b949e",
                stars: (repo.stargazers_count as number) ?? 0,
                url: repo.html_url as string,
                topics: (repo.topics as string[]) ?? [],
            }));

        return NextResponse.json(repos);
    } catch (error) {
        console.error("[api/repos]", error);
        return NextResponse.json({ error: "No se pudieron obtener los repositorios" }, { status: 500 });
    }
}
