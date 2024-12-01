export default function MyMap() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "transparent",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                margin: "40px auto",
                width: "80%",
            }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.989122865927!2d-1.4076989233195742!3d46.646729653766315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480425ac45d57193%3A0x61d2fb91e5d8d146!2sLes%20illumin%C3%A9s%20de%20la%20Moutilliere!5e0!3m2!1sfr!2sfr!4v1733060603440!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{
                    border: "0",
                    borderRadius: "8px",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
