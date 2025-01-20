export default function Hero() {
    return (
        <section className="container-full h-svh min-h-[40rem] md:max-h-[min(80rem,300vw)] md:min-h-[48rem] px-4 pb-4 pt-[calc(var(--navbar-height)+32px)] text-brand-white dark:text-brand-black md:px-6 md:pb-6 lg:pt-[calc(var(--navbar-height)+48px)] mb-18 md:mb-28">
            <div className="relative flex flex-col justify-start mx-auto gap-6 pt-12 h-full max-w-[1808px] overflow-hidden rounded-2xl text-center md:justify-between md:gap-12 md:px-6 md:pt-20">
                {/* Background gradient */}
                <div className="pointer-events-none absolute left-0 top-0 bg-cover bg-center h-full w-full">
                    <img 
                        src="../../public/gradient-hero-prerender.avif"
                        alt=""
                        className="absolute left-0 top-0 h-full w-full object-cover"
                    />
                </div>

                {/* Noise texture overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[url('/noise.webp')] mix-blend-soft-light" 
                    style={{ backgroundSize: "125px 125px" }}
                />

                {/* Canvas overlay */}
                <canvas className="pointer-events-none absolute left-0 top-0 z-[1] !h-full !w-full transition-opacity opacity-100" />

                {/* Main heading */}
                <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0 relative z-50 px-4 md:px-0">
                    <h1 className="text-white text-[clamp(4.125rem,_1.6250rem_+_8.3333vw,_9.625rem)] font-semibold leading-[clamp(4.563rem,_3.0289rem_+_5.1136vw,_7.938rem)] -tracking-4">
                        The AI Code Editor
                    </h1>
                </div>

                {/* Subheading */}
                <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0 relative z-50 mb-6 px-4 md:-mb-6 md:px-0">
                    <p className="text-white [&_b]:md:font-semibold [&_strong]:md:font-semibold font-mono text-base/[1.25rem] md:text-1.5xl/[1.6875rem] !text-pretty [&>br]:hidden sm:[&>br]:inline">
                        Built to make you extraordinarily productive, <br/>
                        Cursor is the best way to code with AI.
                    </p>
                </div>

                {/* Download button */}
                <div className="absolute bottom-4 left-0 z-50 mx-auto flex w-full justify-center gap-4 md:static">
                    <button className="group relative rounded-xl p-1 -outline-offset-2 border border-white/30  hover:border-white transition">
                        <span className="relative inline-flex items-center justify-center gap-4.5 whitespace-nowrap rounded-lg uppercase shadow-[0px_4px_10px_rgba(0,0,0,0.35)] px-3.5 py-[15px] font-mono text-sm/[1rem] bg-black text-white dark:bg-white dark:text-black">
                            <span className="flex items-center gap-3 md:gap-3.5">
                                {/* Windows icon SVG */}
                                <svg className="size-4.5 md:size-6" fill="none" viewBox="0 0 14 16">
                                    <path d="M13.9984.98236c-2.53.35112-5.06001.71507-7.58521 1.10147a3272.65486 3272.65486 0 0 0 0 5.60513C8.9432 7.68094 11.4716 7.64246 14 7.63284c-.0016-2.21736 0-4.43312-.0016-6.65048ZM5.72073 2.19285C3.8112 2.43174 1.90151 2.68506 0 2.97847v4.75217c1.90792.00481 3.81601-.02405 5.72394-.02244-.00161-1.83899-.00161-3.67637-.00321-5.51535ZM5.71896 8.33028C3.81264 8.33348 1.90648 8.30302 0 8.30943v4.76497c1.90792.2582 3.81601.5049 5.72073.7873.00304-1.8438-.00177-3.6876-.00177-5.53142ZM13.9984 8.38319H6.40197c.00321 1.85501.00802 3.70841.01122 5.56201 2.53001.3429 5.06001.6941 7.58521 1.0724 0-2.2125.0032-4.4235 0-6.63441Z" fill="currentColor" />
                                </svg>
                                <span>Download for Windows</span>
                            </span>
                        </span>
                    </button>
                </div>

                {/* Demo image */}
                <div className="z-10 mx-0 -mr-4 mt-32 min-h-[42rem] max-w-[1296px] flex-1 pl-4 w-full md:relative md:mx-auto md:min-h-[unset] md:px-0">
                    <picture className="select-none">
                        <source media="(min-width: 640px)" srcSet="../../public/image.webp" type="image/webp" />
                        <source srcSet="/watch-demo-mobile.webp" type="image/webp" />
                        <img 
                            alt=""
                            className="pointer-events-none relative mx-auto h-auto w-full rounded-md bg-[#171717] object-cover object-left-top sm:block md:object-contain md:object-bottom"
                            src="../../public/image.webp"
                        />
                    </picture>
                </div>

                {/* Gradient overlays */}
                <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-80 w-full bg-gradient-to-b from-transparent to-black md:hidden" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40 max-md:hidden" />
            </div>
        </section>
    )
}