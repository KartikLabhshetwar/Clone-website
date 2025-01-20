import { FaWindows } from "react-icons/fa";

export default function Navbar() {
    const menuItems = [
        { name: 'Cursor', link: "/" },
        { name: 'PRICING', link: '/pricing' },
        { name: 'FEATURES', link: '/features' },
        { name: 'BLOG', link: '/blog' },
        { name: 'FORUM', link: '/forum' },
        { name: 'CAREERS', link: '/careers' },
        { name: 'SIGN IN', link: '/signin' },
        { name: 'DOWNLOAD', link: '/download' }
    ];

    return (
        <nav>
            <div className="bg-black px-4 py-4 flex items-center justify-between rounded-2xl">
                
                <div className="flex items-center space-x-2">
                    <img src="../../public/cursor.webp" className="h-8" />
                    <a className="text-white" href="/">
                        <svg
                            className="h-[13px] text-brand-foreground lg:h-[17px]"
                            fill="currentColor"
                            viewBox="0 0 69 13"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434ZM12.0472 8.41982V.96549h2.1834v7.00164c0 1.35676.702 1.83964 1.8554 1.83964h1.3095c1.139 0 1.8554-.48288 1.8554-1.83964V.96549h2.1677v7.47008c0 2.35533-1.5588 3.47723-3.6648 3.47723h-2.0273c-2.1205 0-3.6806-1.1232-3.6806-3.49298h.0013ZM23.7734.96549h6.4716c2.2149 0 3.3223 1.18487 3.3223 3.08749 0 1.21636-.5773 2.19917-1.4971 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378H31.275V8.65338c0-.57734-.1719-.9828-.9513-.9828h-4.3511v4.24222h-2.1992V.96548Zm6.1763 4.66338c.9986 0 1.404-.53011 1.404-1.30952 0-.84241-.4054-1.29379-1.4341-1.29379h-3.9457v2.60463h3.9772l-.0014-.00132ZM35.5162 9.83815h6.0359c.7334 0 1.2006-.40545 1.2006-1.13895 0-.76367-.4829-1.06022-1.2479-1.1232l-3.0416-.23356c-1.9183-.1404-3.2278-1.10746-3.2278-3.16623 0-2.04302 1.4499-3.21214 3.3525-3.21214h5.9729v2.07451h-5.8482c-.8424 0-1.2794.40545-1.2794 1.1232 0 .74793.4684 1.06022 1.2951 1.13895l3.0875.21781c1.8869.14041 3.1347 1.13895 3.1347 3.15048 0 1.93408-1.3252 3.24368-3.2436 3.24368h-6.1921V9.83815h.0014ZM46.0576 6.42277c0-3.32237 2.4013-5.64488 5.6147-5.64488h.0315c3.2122 0 5.6305 2.32382 5.6305 5.64488 0 3.3368-2.417 5.67633-5.6305 5.67633h-.0315c-3.2121 0-5.6147-2.33953-5.6147-5.67633Zm5.6305 3.55593c1.98 0 3.4312-1.404 3.4312-3.54018 0-2.12044-1.4499-3.54019-3.4312-3.54019-1.9656 0-3.4156 1.41975-3.4156 3.54019 0 2.13618 1.45 3.54018 3.4156 3.54018ZM59.0635.96549h6.4715c2.2149 0 3.3224 1.18487 3.3224 3.08749 0 1.21636-.5774 2.19917-1.4972 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378h-2.1991V8.65338c0-.57734-.1719-.9828-.9514-.9828h-4.3511v4.24222h-2.1991V.96548Zm6.1763 4.66338c.9985 0 1.404-.53011 1.404-1.30952 0-.84241-.4055-1.29379-1.4342-1.29379H61.264v2.60463h3.9771l-.0013-.00132Z">
                            </path>
                        </svg>
                    </a>
                </div>

                <div className="flex-1 flex justify-center pl-24">
                    <div className="flex gap-10 items-center">
                        {menuItems.slice(1, 6).map((item) => (
                            <a
                                className="text-gray-300 font-mono font-semibold hover:text-white transition"
                                key={item.name}
                                href={item.link}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="flex-shrink-0">
                        <a className="text-white font-mono font-semibold rounded-lg border border-gray-700 px-3 py-3 hover:border-gray-400 transition" href="/signin">
                            SIGN IN
                        </a>
                    </div>
                    
                    <div className="flex-shrink-0">
                        <a className="bg-white font-mono font-semibold rounded-lg border border-gray-700 px-3 py-3 hover:border-white transition" href="/download">
                            <FaWindows className="inline-block mr-1" /> DOWNLOAD
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}