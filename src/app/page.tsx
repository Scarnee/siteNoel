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
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
                <div className="snowflake">
                    <div className="inner">❅</div>
                </div>
            </div>
        </div>
    );
}
