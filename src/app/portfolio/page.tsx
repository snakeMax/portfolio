//Vi legger alle skills inn her i en variabel, så er det lett å endre på senere

const PORTFOLIO = {
    title: "Portfolio",
    intro: "Below is a quick overview of skills and relevant experience. ",
    categories: [
        {
            label: "Languages",
            items: [
                { name: "Go", level: 4 },
                { name: "C#", level: 5 },
                { name: "Node.js", level: 4 },
                { name: "Python", level: 5 },
                { name: "TypeScript", level: 3 },
            ],
        },
        {
            label: "Frameworks / APIs",
            items: [
                { name: ".NET", level: 5 },
                { name: "Fastify", level: 3 },
                { name: "gRPC", level: 4 },
                { name: "REST", level: 5 },
            ],
        },
        {
            label: "Databases & Messaging",
            items: [
                { name: "PostgreSQL", level: 4 },
                { name: "Redis", level: 4 },
                { name: "RabbitMQ", level: 3 },
            ],
        },
        {
            label: "DevOps / Infra",
            items: [
                { name: "Docker", level: 5 },
                { name: "Kubernetes", level: 3 },
                { name: "GitHub Actions", level: 4 },
            ],
        },
        {
            label: "Hosting",
            items: [
                { name: "Hetzner", level: 4 },
                { name: "Vercel", level: 2 },
            ],
        },
        {
            label: "Practices",
            items: [
                { name: "CI/CD", level: 4 },
                { name: "Observability", level: 3 },
                { name: "Testing", level: 3 },
                { name: "API Design", level: 4 },
            ],
        },
        {
            label: "Other Relevant",
            items: [
                { name: "Linux", level: 4 },
                { name: "Shell (bash/pwsh)", level: 3 },
                { name: "Git", level: 4 },
            ],
        },
    ],
    notes: ["Prefer boring code that runs."],
};
// ==============================================================================

export default function Page() {
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='bg-black/80 w-full max-w-[800px] rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8 my-8'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl font-bold my-4 text-white'>
                        {PORTFOLIO.title}
                    </h1>

                    {PORTFOLIO.intro ? (
                        <p className='text-white/90 text-center'>
                            {PORTFOLIO.intro}
                        </p>
                    ) : null}

                    <div className='mt-6 grid w-full gap-4'>
                        {PORTFOLIO.categories.map((cat) => (
                            <section
                                key={cat.label}
                                className='rounded-2xl border-2 border-white/20 bg-gray-800/80 p-4'
                            >
                                <h2 className='text-xl font-semibold text-white mb-3'>
                                    {cat.label}
                                </h2>

                                <ul className='space-y-2'>
                                    {cat.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className='flex flex-col'
                                        >
                                            <div className='flex items-center justify-between'>
                                                <span className='text-white'>
                                                    {item.name}
                                                </span>
                                                {"level" in item ? (
                                                    <span className='text-white/70 text-sm'>
                                                        Lvl {item.level}/5
                                                    </span>
                                                ) : null}
                                            </div>
                                            {"level" in item ? (
                                                <div className='mt-1 h-2 rounded bg-white/10'>
                                                    <div
                                                        className='h-2 rounded bg-green-400 shadow-[0_0_10px_rgba(0,255,0,.5)]'
                                                        style={{
                                                            width: `${Math.min(
                                                                (item.level ??
                                                                    0) * 20,
                                                                100
                                                            )}%`,
                                                        }}
                                                    />
                                                </div>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>

                    {PORTFOLIO.notes?.length ? (
                        <div className='mt-6 w-full rounded-2xl border-2 border-white/20 bg-gray-800/60 p-4'>
                            <h3 className='text-lg font-semibold text-white mb-2'>
                                Notes
                            </h3>
                            <ul className='list-disc pl-5 space-y-1 text-white/90'>
                                {PORTFOLIO.notes.map((n, i) => (
                                    <li key={i}>{n}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
