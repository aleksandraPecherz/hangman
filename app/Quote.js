export class Quote {
    constructor(text) {
        this.text = text
        this.guessedLetters = [];
    }
    getContent() {
        let content = ""
        const checkedText = this.text.toLowerCase();
        for (const char of checkedText) {
            if (this.guessedLetters.includes(char) || char === " ")
                content += char
            else content += "-"
        }
        return content;
    }
    guessLetter(letter) {
        const checkedText = this.text.toLowerCase();
        if (checkedText.includes(letter)) {
            this.guessedLetters.push(letter)
            return true
        } else return false



    }
}