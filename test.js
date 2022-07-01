function rev(word){
    let revw = "";
    for (let i = word.length - 1; i >= 0; i--){
        revw = revw.concat(word[i])
    }
    return revw
}

console.log(rev("Hello i am Franlin"))