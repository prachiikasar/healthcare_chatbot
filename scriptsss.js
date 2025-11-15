const chatbotBody = document.getElementById("chatbot-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Health data object
const healthData = {
    "cough": "For a cough, try drinking warm water with honey and lemon. Avoid cold drinks and rest. If the cough persists for more than a week or is accompanied by fever, consult a doctor.",
    "cold": "For a cold, drink plenty of fluids, rest, and consider over-the-counter remedies like saline nasal drops. If symptoms worsen or last more than 10 days, see a doctor.",
    "fever": "For a fever, rest and stay hydrated. You can take paracetamol to reduce the fever. If the fever is above 102°F or lasts more than 3 days, consult a doctor.",
    "sore throat": "For a sore throat, gargle with warm salt water and drink warm liquids like herbal tea. If the pain persists for more than 3 days, consult a doctor.",
    "headache": "For a headache, rest in a dark room, drink water, and consider taking a pain reliever like ibuprofen. If the headache is severe or persistent, consult a doctor.",
    "stomach ache": "For a stomach ache, avoid heavy meals and drink herbal tea like peppermint or ginger tea. If the pain is severe or lasts more than a day, consult a doctor.",
    "diarrhea": "For diarrhea, drink plenty of fluids to stay hydrated and eat bland foods like bananas, rice, and toast. If it lasts more than 2 days, consult a doctor.",
    "constipation": "For constipation, drink plenty of water, eat fiber-rich foods like fruits and vegetables, and exercise regularly. If it persists, consult a doctor.",
    "back pain": "For back pain, rest, apply a warm compress, and do gentle stretches. If the pain is severe or lasts more than a week, consult a doctor.",
    "leg pain": "For leg pain, rest, elevate your legs, and apply a warm compress. If the pain is severe or persists, consult a doctor.",
    "period pain": "For period pain, try the following remedies: \n1. Apply a heating pad or hot water bottle to your lower abdomen. \n2. Take over-the-counter pain relievers like ibuprofen or paracetamol. \n3. Drink herbal teas like chamomile or ginger tea. \n4. Exercise lightly, such as walking or yoga, to improve blood flow. \n5. Avoid caffeine and salty foods. \nIf the pain is severe or disrupts your daily activities, consult a doctor.",
    "acid reflux": "For acid reflux, avoid spicy and fatty foods, eat smaller meals, and avoid lying down immediately after eating. You can also try over-the-counter antacids. If symptoms persist, consult a doctor.",
    "allergies": "For allergies, avoid allergens, take antihistamines, and use a saline nasal spray. If symptoms are severe or you experience difficulty breathing, seek medical attention immediately.",
    "anxiety": "For anxiety, practice deep breathing exercises, meditation, or yoga. Avoid caffeine and try to get enough sleep. If anxiety persists or worsens, consult a mental health professional.",
    "asthma": "For asthma, use your inhaler as prescribed. Avoid triggers like smoke, dust, or pollen. If you experience severe difficulty breathing, seek emergency medical help.",
    "bladder infection": "For a bladder infection, drink plenty of water and cranberry juice. Avoid caffeine and alcohol. If symptoms like pain or burning persist, consult a doctor.",
    "bruises": "For bruises, apply a cold compress to reduce swelling. After 24 hours, use a warm compress to improve blood flow. If the bruise is large or painful, consult a doctor.",
    "burns": "For minor burns, run cool water over the area for 10-15 minutes and apply aloe vera gel. Avoid popping blisters. If the burn is severe, seek medical attention.",
    "chickenpox": "For chickenpox, keep the skin clean and dry, and use calamine lotion to relieve itching. Avoid scratching to prevent scarring. If symptoms worsen, consult a doctor.",
    "dehydration": "For dehydration, drink plenty of water and oral rehydration solutions. Avoid caffeine and alcohol. If symptoms like dizziness or confusion occur, seek medical help.",
    "earache": "For an earache, apply a warm compress to the affected ear. Avoid inserting objects into the ear. If the pain persists or is accompanied by fever, consult a doctor.",
    "eye strain": "For eye strain, follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Use artificial tears if your eyes feel dry. If symptoms persist, consult an eye doctor.",
    "food poisoning": "For food poisoning, stay hydrated by drinking water or oral rehydration solutions. Eat bland foods like bananas, rice, and toast. If symptoms like vomiting or diarrhea persist, consult a doctor.",
    "hair loss": "For hair loss, maintain a healthy diet rich in vitamins and minerals. Avoid excessive heat styling and harsh chemicals. If hair loss is sudden or severe, consult a dermatologist.",
    "insect bites": "For insect bites, clean the area with soap and water, and apply a cold compress to reduce swelling. Use antihistamine cream to relieve itching. If you experience an allergic reaction, seek medical help.",
    "joint pain": "For joint pain, apply a warm compress to the affected area and take over-the-counter pain relievers like ibuprofen. If the pain persists or worsens, consult a doctor.",
    "motion sickness": "For motion sickness, sit in the front seat of a car or over the wing of a plane. Focus on the horizon and avoid reading. You can also take over-the-counter motion sickness medication.",
    "nosebleed": "For a nosebleed, sit upright and lean slightly forward. Pinch your nose just below the bridge for 10-15 minutes. Avoid tilting your head back. If the bleeding doesn't stop, seek medical help.",
    "poison ivy": "For poison ivy, wash the affected area with soap and water immediately. Apply calamine lotion or hydrocortisone cream to relieve itching. If the rash spreads or worsens, consult a doctor.",
    "sinus infection": "For a sinus infection, use a saline nasal spray and apply a warm compress to your face. Drink plenty of fluids and rest. If symptoms persist for more than 10 days, consult a doctor.",
    "sunburn": "For sunburn, apply aloe vera gel, take a cool bath, and stay hydrated. Avoid further sun exposure. If the burn is severe or blisters form, consult a doctor.",
    // Add more entries here
};

// Function to add a message to the chat
function addMessage(message, isUser) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chatbot-message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, true); // Add user message to chat
    userInput.value = ""; // Clear input field

    // Bot response logic
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage.toLowerCase());
        addMessage(botResponse, false); // Add bot response to chat
    }, 500);
}

// Function to generate bot responses
function getBotResponse(userMessage) {
    // Check if the user message contains any keyword from healthData
    for (const keyword in healthData) {
        if (userMessage.includes(keyword)) {
            return healthData[keyword]; // Return the corresponding response
        }
    }

    // Default response if no keyword is found
    return "I'm here to help! Please describe your symptoms or ask for health tips.";
}

// Event listeners
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserInput();
});