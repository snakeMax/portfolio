type Project = {
    title: string;
    summary?: string;
    tech?: string[];
    repo?: string;
    live?: string;
};

const LOCAL_PROJECTS: Project[] = [
    // Eksempel (kan slettes):
    // {
    //   title: "Auth Gateway",
    //   summary: "Central auth + rate limiting for microservices.",
    //   tech: ["Node.js", "Fastify", "JWT", "Redis", "Kubernetes"],
    //   repo: "https://github.com/bruker/auth-gateway",
    //   live: "https://auth.example.com",
    // },
];

export default async function Page() {
    const REMOTE = process.env.NEXT_PUBLIC_PROJECTS_JSON || "";
    let projects: Project[] = LOCAL_PROJECTS;

    if (REMOTE) {
        try {
            const res = await fetch(REMOTE, { cache: "no-store" });
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) projects = data as Project[];
            }
        } catch {}
    }

    const EmptyState = () => (
        <div className='w-full rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-5 text-white/80'>
            <h2 className='text-xl font-semibold text-white mb-2'>Projects</h2>
            <p className='text-sm'>
                Ingen prosjekter publisert enda. Koble til Hetzner senere via en
                JSON-URL i{" "}
                <code className='mx-1 rounded bg-black/40 px-1'>
                    NEXT_PUBLIC_PROJECTS_JSON
                </code>
                .
            </p>

            <div className='mt-4 text-xs'>
                <p className='mb-1 opacity-80'>Forventet JSON-format:</p>
                <pre className='overflow-auto rounded bg-black/60 p-3'>
                    {`[
  {
    "title": "Tittel på prosjektet",
    "summary": "Oppsummering av prosjektet",
    "tech": ["hvilke techstacks som brukes"],
    "repo": "https://github.com/bruker/metrics-service",
    "live": "https://metrics.example.com"
  }
]`}
                </pre>
            </div>
        </div>
    );

    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='bg-black/80 w-full max-w-[800px] rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8 my-8'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-bold my-4 text-white'>
                        Projects
                    </h1>

                    {projects.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <ul className='grid w-full gap-4'>
                            {projects.map((p) => (
                                <li
                                    key={p.title}
                                    className='rounded-2xl border-2 border-white/20 bg-gray-800/80 p-4'
                                >
                                    <h2 className='text-xl font-semibold text-white'>
                                        {p.title}
                                    </h2>
                                    {p.summary ? (
                                        <p className='mt-2 text-white/90'>
                                            {p.summary}
                                        </p>
                                    ) : null}

                                    {p.tech?.length ? (
                                        <div className='mt-3 flex flex-wrap gap-2'>
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className='rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/85'
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    <div className='mt-3 flex gap-3'>
                                        {p.repo ? (
                                            <a
                                                href={p.repo}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-sm underline text-white/90 hover:text-white'
                                            >
                                                Repo
                                            </a>
                                        ) : null}
                                        {p.live ? (
                                            <a
                                                href={p.live}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-sm underline text-white/90 hover:text-white'
                                            >
                                                Live
                                            </a>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

//husk å sette NEXT_PUBLIC_PROJECTS_JSON i .env.local når de er klare til det!
//opprett en .env.local i rotmappa med innhold som inneholder:
//NEXT_PUBLIC_PROJECTS_JSON=https://your-domain.example.com/projects.json osv....
