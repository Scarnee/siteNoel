import Image from "next/image";

export default function Banner() {
    return (
        <div className="relative h-screen overflow-hidden">
            <div id="banner" className="absolute inset-0 -z-10">
                <Image src="/baniere2.jpeg" alt="Bannière des Illuminés de la Moutillière" width={1500} height={1500} className="w-full h-full object-cover" priority />

                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
            </div>

            <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Les Illuminés de la Moutillière</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl">Plongez dans la magie de Noël avec nos créations lumineuses uniques et notre passion sans limites !</p>
            </div>
        </div>
    );
}
