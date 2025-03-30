// List of random job interview questions
const questions = [
    "How to commute?",
    "¿CÓMO VIAJAR DESDE TU CASA HASTA TU TRABAJO?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Describe a challenge you faced and how you handled it.",
    "Why should we hire you?",
    "What do you know about our company?",
    "How do you handle stress and pressure?",
    "Do you prefer working alone or in a team?",
    "Tell me about a time you went above and beyond at work."





];

// Function to generate a random question
document.getElementById("generateQuestion").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("questionDisplay").innerText = questions[randomIndex];
});
