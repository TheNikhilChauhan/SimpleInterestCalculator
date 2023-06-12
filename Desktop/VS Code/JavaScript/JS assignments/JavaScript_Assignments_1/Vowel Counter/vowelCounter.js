const name = "aightoeruuiiuuii";
let countVowel = 0;
let characterInName;

function vowel(name){
    for(let i = 0; i< name.length; i++){
        let characterInName = name[i];
        if(characterInName === 'a'|| characterInName === 'e'|| characterInName === 'i'|| characterInName === 'o'|| characterInName ==='u'){
            countVowel++;
        }
    }console.log("The number of vowels are: " +countVowel);
}
vowel(name);