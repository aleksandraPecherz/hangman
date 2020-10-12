import {
    Quote
} from './Quote.js';
export class Game {
    currentStep = 1;
    lastStep = 8;
    quotes = [{
            text: 'Birds of a feather flock together',
            category: 'proverbs'
        },
        {
            text: 'Better an open enemy than a false friend',
            category: 'proverbs'
        },
        {
            text: 'Every man has his faults',
            category: 'proverbs'
        },
        {
            text: 'Harry Potter',
            category: 'movie'
        },
        {
            text: 'Pirates of the Caribbean',
            category: 'movie'
        },
        {
            text: 'Fight club',
            category: 'movie'
        }

    ]
    constructor(chosenLetter, drawnCategory, word, output) {
        this.chosenLetter = chosenLetter;
        this.drawnCategory = drawnCategory;
        this.word = word;
        this.output = output;
        const {
            text,
            category
        } = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.drawnCategory.innerHTML = category;
        console.log(this.quotes[Math.floor(Math.random() * this.quotes.length)])

        this.quote = new Quote(text);

    }
    drawQuote() {
        const content = this.quote.getContent();
        this.word.textContent = content;
        if (!content.includes("-")) {
            this.winning()
        }
    }
    winning() {
        this.word.textContent = "YOU WON!";
        this.word.style.color = "green";
    }
    lossing() {
        this.word.textContent = "YOU LOST! TRY AGAIN"
        this.word.style.color = "red";
    }
    guess(letter, e) {
        e.target.disabled = true;
        if (this.quote.guessLetter(letter)) {
            this.drawQuote();
            e.target.classList.add("good");
        } else {
            this.currentStep++;
            e.target.classList.add("bad");
            if (this.currentStep === this.lastStep) this.lossing()
            document.querySelector(".step img").src = `images/${this.currentStep}.png`
        }

    }
    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const letter = (i + 10).toString(36);
            const button = document.createElement('button');
            button.textContent = letter;
            this.chosenLetter.appendChild(button);
            button.addEventListener("click", (e) => this.guess(letter, e))
        }
    }
    restart() {
        window.location.reload(false);
    }
    start() {
        this.drawLetters()
        this.drawQuote()

    }

}