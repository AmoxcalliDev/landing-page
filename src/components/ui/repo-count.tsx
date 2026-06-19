"use client";

import { useEffect, useState } from "react";

type Repo = { name: string };

export default function RepoCount() {
    const [count, setCount] = useState<string>("...");

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                const res = await fetch("/api/repos", { cache: "no-store" });
                if (!res.ok) throw new Error("failed");
                const data = (await res.json()) as Repo[];
                if (mounted) setCount(String(data.length));
            } catch {
                if (mounted) setCount("--");
            }
        };

        load();
        return () => {
            mounted = false;
        };
    }, []);

    return <>{count}</>;
}