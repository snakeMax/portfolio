//info om deg, endres til det du ønsker

const ABOUT = {
    title: "About Me",
    originalParagraphs: [
        `Im a developer with a passion for creating innovative solutions. I am currently working on a project that will revolutionize the way people interact with technology. In my free time i often code or play around with AI and data.`,
        `I've been coding since elementary school, with various programming languages such as Python, C++, HTML, CSS, JS, and C#, Which i used to develop various projects in my own time. In primary school i used mostly python, and found it to be quite fun. In highschool i started working with C#, which became a staple for its complexity and Microsoft's multiplatform solutions.`,
        `In the past couple years my focus has shifted towards developing new technologies and working with Artificial Intelligence. So far i hav developed many "primitive" AI's but im working on larger projects with more complexity and studying to become better.`,
    ],
    intro: [
        `Backend-first developer. I keep the UI deliberately simple — let the services tell the story.`,
        `I care about reliability, observability and shipping sane defaults. I prefer boring code that works over clever code that breaks.`,
    ],
    facts: [
        { label: "Location", value: "Norway" },
        { label: "Primary focus", value: "Backend, APIs, Observability" },
        { label: "Hosting", value: "Hetzner (mostly) & Docker" },
    ],

    //legg til flere, eller endre skills etter behov
    skills: [
        "C#",
        "Node.js",
        "Python",
        "REST",
        "Docker",
        "CI/CD",
        "PostgreSQL",
    ],

    //om du har lyst på en timeline, kan du legge til her!
    timeline: [
        { year: "2025", what: "legg til tekst" },
        { year: "2024", what: "legg til mere tekst" },
        { year: "2023", what: "og gjerne litt mer tekst" },
    ],
    paragraphs: [
        `I like to measure things. If it's not monitored, it doesn't exist (well, maybe it does, but we won't know).`,
        `I prototype quickly, then slow down and make it reliable. Little hacks are ok — as long as there's a plan to clean them up later.`,
    ],
    cta: [
        {
            label: "GitHub",
            href: "https://github.com/snakeMax",
            _target: "_blank",
        },
    ],
};
// ===================================================================

export default function Page() {
    return (
        <div className='flex flex-col items-center min-h-[calc(100dvh-64px)]'>
            <div className='my-8 w-full max-w-[1000px] rounded-xl border border-green-500/20 bg-black/80 p-6 shadow-[0_0_40px_rgba(0,255,0,0.6)]'>
                <h1 className='text-4xl font-bold text-white'>{ABOUT.title}</h1>

                <div className='mt-4 space-y-4'>
                    {ABOUT.originalParagraphs.map((t, i) => (
                        <p key={`orig-${i}`} className='text-lg text-white/95'>
                            {t}
                        </p>
                    ))}
                </div>

                <div className='mt-6 space-y-3'>
                    {ABOUT.intro.map((t, i) => (
                        <p
                            key={`intro-${i}`}
                            className='text-base text-white/90'
                        >
                            {t}
                        </p>
                    ))}
                </div>

                <div className='mt-8 grid gap-6 md:grid-cols-2'>
                    <section className='rounded-2xl border border-white/15 bg-black/60 p-4'>
                        <h2 className='mb-3 text-xl font-semibold text-white'>
                            Quick facts
                        </h2>
                        <ul className='space-y-2'>
                            {ABOUT.facts.map((f, i) => (
                                <li
                                    key={i}
                                    className='flex items-center justify-between gap-2'
                                >
                                    <span className='text-white/80'>
                                        {f.label}
                                    </span>
                                    <span className='rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-sm text-white/90'>
                                        {f.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='rounded-2xl border border-white/15 bg-black/60 p-4'>
                        <h2 className='mb-3 text-xl font-semibold text-white'>
                            Skills & stack
                        </h2>
                        <div className='flex flex-wrap gap-2'>
                            {ABOUT.skills.map((s) => (
                                <span
                                    key={s}
                                    className='rounded-lg border border-white/10 bg-gray-800/80 px-3 py-1 text-sm text-white/90'
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <section className='mt-8 rounded-2xl border border-white/15 bg-black/60 p-4'>
                    <h2 className='mb-3 text-xl font-semibold text-white'>
                        Timeline
                    </h2>
                    <ol className='relative ml-3 space-y-4'>
                        {ABOUT.timeline.map((e, i) => (
                            <li
                                key={i}
                                className='border-l border-white/20 pl-4'
                            >
                                <div className='-ml-[9px] mb-1 h-2 w-2 rounded-full bg-green-400/80 shadow-[0_0_12px_rgba(0,255,0,.6)]' />
                                <p className='text-sm text-white/70'>
                                    {e.year}
                                </p>
                                <p className='text-white/95'>{e.what}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <div className='prose prose-invert mt-8 max-w-none'>
                    {ABOUT.paragraphs.map((t, i) => (
                        <p key={`body-${i}`}>{t}</p>
                    ))}
                </div>

                <div className='mt-8 flex flex-wrap gap-3'>
                    {ABOUT.cta.map((c) => (
                        <a
                            key={c.href}
                            href={c.href}
                            className='rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:border-green-400/50 hover:shadow-[0_0_16px_rgba(0,255,0,.25)]'
                        >
                            {c.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
