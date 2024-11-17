import Image from "next/image";

export default function APropos() {
    return (
        <div id="a-propos" className="flex flex-col md:flex-row items-center justify-between w-4/5 mx-auto my-10 gap-10">
            <div className="w-full md:w-1/2">
                <Image src="/megaTree.jpeg" alt="megaTree" width={1000} height={1000} className="rounded-lg shadow-lg" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left gap-4">
                <h1 className="text-4xl font-bold text-red-700">Une Famille Folle de Noël : La Magie au Rendez-vous</h1>
                <h2 className="text-lg">
                    Depuis 2018, notre maison et son jardin se transforment en un véritable royaume de Noël, où chaque détail est pensé pour partager la magie et la joie de cette fête.
                </h2>
                <h2 className="text-lg font-semibold">Nos installations en quelques chiffres impressionnants :</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>
                        <span className="font-bold text-red-700">5 kilomètres de câbles</span> soigneusement installés, tissant un réseau lumineux féérique.
                    </li>
                    <li>
                        <span className="font-bold text-red-700">Des milliers de LEDs et lumières</span> scintillant pour émerveiller petits et grands.
                    </li>
                    <li>
                        <span className="font-bold text-red-700">Des centaines d'heures de travail</span>, investies avec amour et dévouement.
                    </li>
                    <li>
                        <span className="font-bold text-red-700">Une passion sans limites</span>, qui unit toute la famille autour de ce projet unique.
                    </li>
                </ul>
                <p className="text-lg">Venez découvrir notre univers enchanté et laissez-vous emporter par l'esprit de Noël ! ✨</p>
            </div>
        </div>
    );
}
