"use client";
import { Button, Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Fonction pour fermer le menu après un clic sur un lien
    const closeMenu = () => setMenuOpen(false);

    return (
        <Navbar isBordered className="bg-transparent shadow-lg w-full">
            <NavbarContent justify="center" className="flex flex-wrap items-center w-full px-4 md:px-8">
                {/* Logo ou Titre */}
                <div className="flex items-center justify-between w-full md:w-auto text-center ">
                    <h1 className="text-lg sm:text-2xl font-bold w-full text-red-500 text-center">🎄 Les Illuminés</h1>
                </div>

                {/* Liens de navigation */}
                <div className={`${menuOpen ? "block" : "hidden"} md:flex md:items-center md:gap-6 w-full md:w-auto`}>
                    <NavbarItem>
                        <Link
                            href="#a-propos"
                            className="block py-2 md:py-0 font-bold text-sm sm:text-lg hover:text-red-300 transition-colors"
                            onClick={closeMenu} // Ferme le menu
                        >
                            À propos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="#gallery"
                            className="block py-2 md:py-0 font-bold text-sm sm:text-lg hover:text-red-300 transition-colors"
                            onClick={closeMenu} // Ferme le menu
                        >
                            Galerie
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="#localisation"
                            className="block py-2 md:py-0 font-bold text-sm sm:text-lg hover:text-red-300 transition-colors"
                            onClick={closeMenu} // Ferme le menu
                        >
                            Localisation
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="#contact"
                            className="block py-2 md:py-0 font-bold text-sm sm:text-lg hover:text-red-300 transition-colors"
                            onClick={closeMenu} // Ferme le menu
                        >
                            Contact
                        </Link>
                    </NavbarItem>
                </div>

                {/* Bouton Soutenez-Nous */}
                <div className="hidden md:block">
                    <Link href="https://www.leetchi.com/fr/c/les-illumines-de-la-moutilliere-3203563" target="_blank">
                        <Button
                            className="bg-red-500 text-white font-bold text-sm sm:text-lg hover:bg-red-600 hover:text-white transition-transform transform hover:scale-105"
                            variant="solid"
                            size="md"
                            radius="lg">
                            🎁 Soutenez-nous !
                        </Button>
                    </Link>
                </div>
            </NavbarContent>
        </Navbar>
    );
}

export default Header;
