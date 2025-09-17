const PORTFOLIO = {
    title: "Portfolio",
    intro: "Below is a quick overview of skills and relevant experience. ",
    categories: [
        {
            label: "Languages",
            items: [
                { name: "Python", level: 4 },
                { name: "Java", level: 2 },
                { name: "C#", level: 3 },
                { name: "C++", level: 2 },
                { name: "JavaScript", level: 2 },
                { name: "TypeScript", level: 2 },
            ],
        },
        {
            label: "Frameworks / APIs",
            items: [
                { name: ".NET", level: 3 },
                { name: "React", level: 3 },
                { name: "Matplotlib", level: 3 },
                { name: "Pytorch", level: 3 },
                { name: "REST", level: 2 },
                { name: "Node.js", level: 3 },
            ],
        },
        {
            label: "Databases & Messaging",
            items: [
                { name: "SQL", level: 3 },
                { name: "Firebase", level: 2 },
                { name: "MySQL", level: 2 },
            ],
        },
        {
            label: "DevOps / Infra",
            items: [
                { name: ".NET", level: 3 },
                { name: "Azure", level: 1 },
                { name: "GitHub Actions", level: 1 },
            ],
        },
        {
            label: "Hosting",
            items: [
                { name: "Hetzner", level: 2 },
                { name: "Vercel", level: 2 },
                { name: "Hostinger", level: 3 },
            ],
        },
        {
            label: "Practices",
            items: [
                { name: "OOP", level: 4 },
                { name: "Observability", level: 3 },
                { name: "Testing", level: 2 },
                { name: "API Design", level: 2 },
                { name: "Networking", level: 3 },
                { name: "Cyber Security", level: 3 },
            ],
        },
        {
            label: "Other Relevant",
            items: [
                { name: "Linux", level: 3 },
                { name: "Shell (bash/pwsh)", level: 3 },
                { name: "Git", level: 4 },
            ],
        },
    ],
    notes: ["Prefer clean code that runs.", "Keen and quick to learn new things.", "Enjoys thinking logistically."],
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
