db = db.getSiblingDB('mydatabase');

// Array of fortune cookie messages
var fortuneCookies = [
    "A journey of a thousand miles begins with a single step.",
    "Opportunity knocks softly, listen carefully.",
    "Your future looks bright.",
    "Luck is on your side today.",
    "Adventure awaits around the corner.",
    "Good things come to those who wait, but better things come to those who go out and get them.",
    "You will soon be blessed with unexpected riches.",
    "A smile is your passport into the hearts of others.",
    "Believe in yourself and all that you are.",
    "Every exit is an entry somewhere else.",
    "Your hard work will pay off in the end.",
    "You are stronger than you think.",
    "Trust your instincts, they are usually right.",
    "The best is yet to come.",
    "Success is the result of preparation, hard work, and learning from failure.",
    "You are never too old to set another goal or to dream a new dream.",
    "The key to happiness is within yourself.",
    "Your positive attitude will lead to success.",
    "Courage is not the absence of fear, but the triumph over it.",
    "Embrace change, for it is the only constant in life."
];

// Convert each fortune cookie message to a document
var documents = fortuneCookies.map(function(message) {
    return { message: message };
});

// Insert fortune cookie messages into the database
db.fortune_cookies.insertMany(documents);