class Pangram {
    private alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
 
    constructor(private phrase: string) {
      this.phrase = phrase.toLowerCase();
    }
 
    isPangram(): boolean {
        for (let i: number = 0; i < this.alphabet.length; i++) {
            if (this.phrase.indexOf(this.alphabet[i]) < 0) {
                return false;
            }
        }
      
        return true;
    }
}

let phrase: Pangram = new Pangram("The quick brown fox jumps over the lazy dog.");
console.log(phrase.isPangram());