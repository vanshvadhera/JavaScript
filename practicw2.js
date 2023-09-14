let Regular = /vansh/;
// let Regular = /vansh/i; //i is for case insensitive
// let Regular = /vansh/g; // g is for global flag

console.log(Regular);
console.log(Regular.source);

//functios for regular expressions
//search, match, replace, split, test, exec, compile, execAll, execAllGlobal, execAllGlobalMulti, execAllMulti, execGlobal, execGlobalMulti, execMulti, execGlobalMulti, execMulti,


//exec()---> returns an array and index of the match and returns null if no match is found
let string = "hello my name is vansh, i am a good  programmer vansh"; 
let scan = Regular.exec(string)
console.log('scan', scan);
// console.log(scan.input);
// console.log(scan.index);

//test()---> returns true or false
scan = Regular.test(string);
console.log(scan);

//match()---> returns an array of all the matches and returns null if no match is found
scan = string.match(Regular);   
console.log(scan);

//search()---> returns the index of the first match and returns -1 if no match is found
scan = string.search(Regular);
console.log(scan);

//replace()---> returns a string with the first match replaced with the given string
scan = string.replace(Regular, 'sakshi');
console.log(scan);





