Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message: false
        }
    },
    methods: {
        saveWord(word) {
            if (word)
                this.words.push(word),
                this.words.push(word.toLowerCase()),
                this.words.push(word.toUpperCase())
        },
        ShowWords() {
            if (this.message == false){
                this.message = true
            } else
                this.message = false
        },
    }
}).mount("#app")