export const getWhatsAppUrl = (message = "Olá, gostaria de falar com a equipe sobre o CineMenu!") => {
    const numbers = [
        "5511970741310",
        "5511913997770"
    ];

    // Pick a random number index (0 or 1)
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const selectedNumber = numbers[randomIndex];

    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${selectedNumber}?text=${encodedMessage}`;
};
