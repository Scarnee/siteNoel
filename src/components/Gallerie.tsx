"use client";
import bulkImagesGallerie from "@/utils/bulkImagesGallerie";
import Image from "next/image";
import { Masonry } from "react-plock";

export default function Gallerie() {
    return (
        <Masonry
            id="gallery"
            className=" w-4/5 self-center"
            items={bulkImagesGallerie}
            config={{
                columns: [1, 2, 4],
                gap: [24, 12, 6],
                media: [640, 768, 1024],
            }}
            render={(item, idx) => <Image src={item} alt={item} key={idx} width={500} height={500} className="rounded-lg" />}
        />
    );
}
