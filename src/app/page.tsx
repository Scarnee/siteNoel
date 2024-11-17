import APropos from "@/components/APropos";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Gallerie from "@/components/Gallerie";
import dynamic from "next/dynamic";

export default async function Home() {
    const Map = dynamic(() => import("@/components/Map"), {
        ssr: false,
    });
    return (
        <div className=" w-full flex flex-col gap-3 ">
            <Banner />
            <APropos />
            <Gallerie />
            <div id="localisation" className="flex justify-center self-center w-full h-full -z-40">
                <Map />
            </div>
            <Contact />
            <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-red-600">Nous soutenir</span>
            </h1>

            <a
                href="https://www.leetchi.com/fr/c/les-illumines-de-la-moutilliere-3203563"
                target="_blank"
                className="flex justify-center items-center mb-8 text-lg sm:text-xl font-semibold text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105 mx-auto">
                Cagnotte Leetchi
            </a>
        </div>
    );
}
