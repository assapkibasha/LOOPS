function checkIsPalindrome(word){
    let cleanword = word.replace(/\s+/g,'')
    let reversedWord = cleanword.split('').reverse().join('')
    if( cleanword == reversedWord){
        console.log(`${word} is a palindorme`)
    }else{
        console.log(`${word}, is not a plaindome`)
    }

} 


   


