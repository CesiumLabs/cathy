const Ector = require("ector");
const defaultConfig = {
    name: "Cathy"
};

const ML = new Ector();

class Cathyjs {

    constructor(config = defaultConfig) {
        if (!config) config = defaultConfig;

        /**
         * Chatbot config
         */
        this.config = config;

        this.setBotName(this.config.name);
        this.setUsername("User");
    }

    setBotName(name) {
        if (typeof name !== "string" || name.length < 3) throw new Error("Name must be a string with 3 or more characters!");
        ML.setName(name);
    }

    setUsername(name) {
        if (typeof name !== "string" || name.length < 3) throw new Error("Name must be a string with 3 or more characters!");
        ML.setUser(name);
    }

    chat(message, username = "User") {
        if (typeof message !== "string") throw new Error("Message must be a string");
        this.setUsername(username);
        try {
            ML.addEntry(message);
            const m = ML.generateResponse();
            if (!m.sentence) return this.generateRandomResponse();
            return `${m.sentence}`;
        } catch(e) {
            return this.generateRandomResponse();
        }
    }

    generateRandomResponse() {
        const arr = [
            "I don't know.",
            "Tell me again.",
            "What do you mean?",
            "Oh?",
            "Umm",
            "Oof",
            "Ok",
            "Sus"
        ];

        return arr[Math.floor(Math.random() * arr.length - 1)];
    }

}

module.exports = Cathyjs;