// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------
function max(a,b) {
	if(a > b){
		return a
	} else {
		return b 
	}
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(a,b,c){
	if(a > b){
		return a
	} else if (b > c){
		return b
	} else {
		return c
	}
}

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------
function isVowel(a){
	if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u" || a === "A" || a === "E" || a === "I" || a === "O" || a === "U"  ){
		return true
	} else {
		return false 
	}
}

console.log(isVowel(20))

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(a){
	var newStr = ''
	if( typeof a !== 'string'){
		return a + ''
	}
	for(i=0; i < a.length; i++){
	if (isVowel(a[i]) ){
		newStr += a[i]
	} else {
		newStr += a[i]+ 'o' + a[i]
	}
}
return newStr
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------
function reverse(a){
	let newSkr = ""

	for(i = a.length - 1; i >= 0 ; i --){
		newSkr += a[i]
	}
	return newSkr 
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")