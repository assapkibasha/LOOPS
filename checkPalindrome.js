function checkIsPalindrome(word){
    let cleanword = word.toLowerCase().replace(/\s+/g, '')
        let reversedWord = cleanword.split('').reverse().join('');
        return word === reversedWord;
}
let word = "122"

if(checkIsPalindrome(word)){
    console.log(`${word} is a palindorme` )
}else{
    console.log(`${word} is not palindorme`)
}