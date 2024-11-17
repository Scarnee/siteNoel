import { ContactFormData } from "@/components/Contact";

export function sendEmails(data: ContactFormData) {
    const apiEndpoint = "/api/email";

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}
