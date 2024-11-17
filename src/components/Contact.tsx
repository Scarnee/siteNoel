"use client";
import { Button } from "@nextui-org/react";

import { sendEmails } from "@/utils/send-emails";
import { useForm } from "react-hook-form";

export type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit } = useForm<ContactFormData>();
    function onSubmit(data: ContactFormData) {
        sendEmails(data);
    }
    return (
        <div id="contact" className="flex flex-col items-center gap-6 mb-10 p-6 text-white">
            {/* En-tête */}
            <h1 className="text-4xl font-bold text-center">🎅 Vous voulez nous envoyer un message ? 🎄</h1>
            <h2 className="text-2xl font-semibold text-center">C&rsquo;est par ici ! ✨</h2>

            {/* Formulaire */}
            <form className="flex flex-col gap-4 w-full max-w-lg bg-gradient-to-b from-red-700 via-red-500 to-red-400 p-6 rounded-lg shadow-lg border border-red-800" onSubmit={handleSubmit(onSubmit)}>
                {/* Nom */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold text-white">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Votre nom"
                        {...register("name", { required: true })}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300 text-black"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Votre email"
                        {...register("email", { required: true })}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300 text-black"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="font-semibold text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Votre message"
                        {...register("message", { required: true })}
                        className="p-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring focus:ring-red-300 text-black"
                    />
                </div>

                {/* Bouton */}
                <Button type="submit" className="py-2 px-4 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 focus:ring focus:ring-red-300 transition">
                    🎁 Envoyer 🎄
                </Button>
            </form>
        </div>
    );
}
