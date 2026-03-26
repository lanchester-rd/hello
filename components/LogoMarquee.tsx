import React from 'react'

const companies = [
    { name: 'bunq', url: 'https://www.bunq.com/', logo: '/images/partners/bunq.svg' },
    { name: 'xpate', url: 'https://xpate.com/', logo: '/images/partners/xpate.svg' },
    { name: 'Eagle Eye Networks', url: 'https://www.een.com/', logo: '/images/partners/eagle-eye-networks.webp' },
    { name: 'Mendix', url: 'https://www.mendix.com/', logo: '/images/partners/mendix.webp' },
    { name: 'Checkit', url: 'https://www.checkit.net/', logo: '/images/partners/checkit.svg' },
    { name: 'Ireckonu', url: 'https://ireckonu.com/', logo: '/images/partners/ireckonu.webp' },
    { name: 'Big Brother', url: 'https://www.bigbrother.nl/en/', logo: '/images/partners/big-brother.svg' },
    { name: 'bloomon', url: 'https://www.bloomon.nl/', logo: '/images/partners/bloomon.svg' },
]

export default function LogoMarquee() {
    return (
        <div className="relative border-y border-white/5 py-12 overflow-hidden bg-white/[0.01]">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-24 shrink-0">
                        {companies.map((company, idx) => (
                            <a
                                key={idx}
                                href={company.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${company.name}`}
                                className="h-8 md:h-12 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center shrink-0"
                            >
                                <img
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    className="h-full w-auto object-contain"
                                    loading="lazy"
                                    decoding="async"
                                    fetchPriority="low"
                                />
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
