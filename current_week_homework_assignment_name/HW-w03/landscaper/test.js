var reverseString = (str) => {
    var newString = "";
    for (i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
    return newString;
}
reverseString('hello');
