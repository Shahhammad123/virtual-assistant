let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Function to speak the text with a female voice
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "ur-PK";  // Set the language to Hindi or English (you can change based on your need)

    // Wait for the voices to be loaded
    let voices = window.speechSynthesis.getVoices();
    let femaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female") || voice.lang.includes("hi") || voice.lang.includes("en"));

    // Fallback if female voice is not found
    if (femaleVoice) {
        text_speak.voice = femaleVoice;
    } else {
        text_speak.voice = voices[0];  // Fallback to the default voice if no female voice is found
    }

    window.speechSynthesis.speak(text_speak);  // Speak the text
}

// Function to wish based on the time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishMe();  // Call wishMe on page load
});

// Initialize speech recognition
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

// Handle the result of speech recognition
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;  // Display the transcript in the content element
    takeCommand(transcript.toLowerCase());  // Pass the transcript to the takeCommand function
};

// Start recognition when the button is clicked
btn.addEventListener("click", () => {
    recognition.start();  // Start speech recognition
    btn.style.display = "none";
    voice.style.display = "block";
});

// Function to handle the commands
function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    // Check for the different commands
    if (message.includes("hello") || message.includes("hyy")) {
        speak("Hello shah Hammad, how can I help you?");
    } else if (message.includes("who are you")|| message.includes("hu r u")) {
        speak("I am GEM, your virtual assistant, created by  shah Hammad.");
    } else if (message.includes("who is hammad")) {
        speak("He is a cricketer who is a batsman and also bowls. He is a leg-spinner bowler. Due to his university commitments, his cricket performance has suffered, but he says that he will return to his old form very soon.");
    } else if (message.includes("who is owais")|| message.includes("how is awais")) {
        speak("Owais is Shah Hammad's best friend, and they are very close friends. Their friendship started through the game, and today they have blind trust in each other.");
    }else if (message.includes("tell me about shah ubaidullah")|| message.includes(" obaidullah")) {
        speak("Shah Ubaidullah is a CA (Chartered Accountant) student, born on November 5, 1998, in Karachi. His studies are progressing well, and, Inshallah, he will complete them very soon.");
    } 
    else if (message.includes("who am i?")|| message.includes("Who am I to you")) {
        speak("You are Shah Hammad, and you are my boss who has made me. My purpose is to assist you with your work and make your tasks easier");
    }else if (message.includes("can you tell me about yourself")) {
        speak("My name is Gem. I am an AI assistant, and I can answer the questions that Hammad has taught me. Please do not ask unnecessary questions, and do not waste my time or yours. Thank you.");
    } else if (message.includes("how are you")) {
        speak("I am doing great, thank you for asking!");
    }  else if (message.includes("who is jiya")|| message.includes("who is kia")|| message.includes("who is diya")) {
        speak("Jiya is a beautiful girl with long hair, and she has dimples on her face. She is very liked by shahHammad, and shahHammad wants to make her his partner. My boss, Hammad, loves her very much, and he lovingly calls her Dimple Queen.");
    } else if (message.includes("who is hiba")) {
        speak("Hiba  is shah Hammad's younger sister, and she is very funny. Hammad is her dear brother, and she is very sweet");
    }else if (message.includes("who is hania")|| message.includes("who is hernia")|| message.includes("who is haano")|| message.includes("who is hanu")) {
        speak("Hania is a very supportive and introverted sister of Shah Hammad. Shah Hammad always lightens his heart with her. When his sister Jiya Hammad scolds or says something to him, he complains about Jiya to Hania, and Hania understands her brother very well and explains things to him in a very good way.");
    } else if (message.includes("Will you give me Hammad's number?")|| message.includes("give me a number")) {
        speak(" Okay, I will give you their number, you write it,03422699453 repeated again,03422699453 ,and last time 03422699453");
    }else if (message.includes("who is miss aqsa")|| message.includes("aqsa nadir")|| message.includes("aksa nadir")|| message.includes("who is miss")|| message.includes("best aksa")|| message.includes("can you tell me about my teacher")) {
        speak("Miss Aqsa is the batch advisor for AI, and she is a young female teacher in her early career. Although she has a quick temper, she has a very kind heart. She also forgives my boss, Shah Hammad, for his mistakes.");
    } 
    else if (message.includes("open watsapp")) {
        speak("Okay my Hammad, opening watsapp....");
        setTimeout(() => {
            window.open("https://web.whatsapp.com/", "_blank");
        }, 1000);  // Wait for 1 second after speaking
    } else if (message.includes("what time")) {
        let day = new Date();  // Get the current date and time
        let hours = day.getHours();  // Get the current hour
        let minutes = day.getMinutes();  // Get the current minutes
        
        // Format the time in 2-digit format for minutes
        minutes = minutes < 10 ? '0' + minutes : minutes;
    
        // Define time periods (Morning, Afternoon, Evening, Night) for appropriate greeting
        let timeGreeting = "";
        if (hours >= 0 && hours < 12) {
            timeGreeting = "Good Morning, ";
        } else if (hours >= 12 && hours < 16) {
            timeGreeting = "Good Afternoon, ";
        } else if (hours >= 16 && hours < 20) {
            timeGreeting = "Good Evening, ";
        } else {
            timeGreeting = "Good Night, ";
        }
    
        // Format time in 24-hour format and in Hindi (example: "10:05" becomes "das baj kar paanch minute")
        let timeInWords = `${hours} baj kar ${minutes} minute ho rahe hain`;
        
        speak(`${timeGreeting}The time is ${timeInWords}`);

    }else if (message.includes("open github")|| message.includes("open git")) {
        speak("Okay my Hammad, opening github....");
        setTimeout(() => {
            window.open("https://github.com/dashboard", "_blank");
        }, 1000);  // Wait for 1 second after speaking
    
 
    }
    else if (message.includes("open youtube")) {
        speak("Okay my Hammad, opening YouTube....");
        setTimeout(() => {
            window.open("https://www.youtube.com/", "_blank");
        }, 1000);  // Wait for 1 second after speaking
    } else if (message.includes("open google")) {
        speak("Okay my Hammad, opening Google....");
        setTimeout(() => {
            window.open("https://www.google.com/", "_blank");
        }, 1000);  // Wait for 1 second after speaking
    } else if (message.includes("open portal")) {
        speak("Okay my Hammad, opening Hamdard portal....");
        setTimeout(() => {
            window.open("https://sp.hamdard.edu.pk/", "_blank");
        }, 1000);  // Wait for 1 second after 
     } else if (message.includes("open lms")) {
        speak("Okay my Hammad, opening learning managment system....");
        setTimeout(() => {
            window.open("https://lms.hamdard.edu.pk/login/index.php", "_blank");
        }, 1000);  // Wait for 1 second after 
     }else if (message.includes("time")) {
       let time=newDate().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak()
    }else if(message.includes("open chatgpt")|| message.includes("generative ai")) {
            speak("Okay my Hammad, opening chatgpt....");
            setTimeout(() => {
                window.open("https://chatgpt.com/", "_blank");
            }, 1000);  // Wait for 1 second after speaking
            
        
        
    } else {
        // Clean the message from unwanted words like "Gem", "jan", "gam"
        let cleanedMessage = message
            .replace(/Gem|jan|gam|game|jim|jem/gi, "")  // Remove the words you don't want to search
            .trim();  // Clean any extra spaces

        let finalText = `This is what I found on the internet regarding: ${cleanedMessage}`;

        // Speak the final text
        speak(finalText);

        // Open Google search with the cleaned message
        setTimeout(() => {
            window.open(`https://www.google.com/search?q=${cleanedMessage}`, "_blank");
        }, 1000);  // Wait for 1 second after speaking
    }
}

// Wait for the voices to be loaded
window.speechSynthesis.onvoiceschanged = function() {
    // Re-run the speak function with the voices loaded
}
