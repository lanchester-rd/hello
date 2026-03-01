import React from 'react'

const companies = [
    { name: 'bunq', url: 'https://www.bunq.com/', logo: 'https://static.cdnlogo.com/logos/b/47/bunq.svg' },
    { name: 'xpate', url: 'https://xpate.com/', logo: 'https://files.readme.io/758b9ac746af92cf16ec77eb9ec9e315a0ad6c35e9dba50420a64c2b052597b3-xpate_logo_invert.svg' },
    { name: 'Eagle Eye Networks', url: 'https://www.een.com/', logo: 'https://www.een.com/wp-content/uploads/2026/01/EEN-A-Brivo-Solution_Logo.png' },
    { name: 'Mendix', url: 'https://www.mendix.com/', logo: 'https://images.squarespace-cdn.com/content/v1/5dfa2c39017ba35b991218b8/3e463634-586c-43f3-b914-7df2ddf9e707/Mendix-Wordmark-RGB-Midnight-ExtraLarge.png' },
    { name: 'Checkit', url: 'https://www.checkit.net/', logo: 'https://www.checkit.net/hubfs/website/img/brand/checkit-logo-horizontal-standard-rgb-blue.svg' },
    { name: 'Ireckonu', url: 'https://ireckonu.com/', logo: 'https://ireckonu.com/app/uploads/Ireckonu-The-Middleware-CDP-for-Hospitality.jpg' },
    { name: 'Big Brother', url: 'https://www.bigbrother.nl/en/', logo: 'https://www.bigbrother.nl/app/themes/big-brother/dist/images/BB_logo.99a4f826b603eddcd696.svg' },
    { name: 'bloomon', url: 'https://www.bloomon.nl/', logo: 'https://www.bloomon.nl/assets/branded-icons/logo.svg' },
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
                                className="h-8 md:h-12 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center shrink-0"
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-full w-auto object-contain"
                                />
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
