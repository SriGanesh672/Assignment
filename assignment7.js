//1
const prompt = require("prompt-sync")();
let person = prompt("Please enter your name: ");
if(person.length>4)
{
    /*let result=" "
    for(i=0;i<4;i++)
    {
        result=result+person[i]
    }
    console.log(result)*/
    let trun=person.substring(0,4)
    console.log(trun)
}
else
{
    console.log(person)
}
//2
let white = prompt("Please enter a string: ");
let a=white.split(" ")
console.log(a.join(""))
//3
let replace = prompt("Please enter a string: ");
a=replace.split(" ")
if(a.length>=2)
{
    let h=a[0]
    a[0]=a[1]
    a[1]=h
}
let c=a.join(" ")
console.log(c)
//4
let chara = prompt("Please enter a string: ");
c=chara.split("")
for(i=0;i<c.length;i++)
{
    if(c[i]==='a')
    {
        c[i]='x'
    }
}
let out=c.join("")
console.log(out)
//5
//Split can be used to convert string into array
let k="Hello Everyone"
console.log(k.split(" "))
console.log(k.split(""))
//6
//Includes is used to check whether text is specified in a string or not
k="hello namaste"
h="hello"
console.log(k.includes(h))
//7
// '\n' Can be used to break a string to newline
const strings = "Hello\nnamsate!";
console.log(strings);
//8
//Write a Javascript function to test whether the first character of a string is lowercase
const lower=(a)=>
{
    const new1=a.charAt(0);
    return new1===new1.toLowerCase()
}
console.log(lower("hello"))
//9
//Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.
const variables=prompt("Enter a input ")
const yess=(variables)=>
{
    c=variables.toLowerCase()
    if(c==="yes")
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(yess(variables))
//10
let s="hello Everyone"
//a-- Convert the String into upper case.
let d=s.toUpperCase()
console.log(d)
//b--Convert only the first character to uppercase
const new1=s.charAt(0);
let l=new1.toUpperCase()
let p=s.slice(1)
let final=l+p
console.log(final)
//c--Convert the String into lower case.
const low=s.toLowerCase()
console.log(low)
//d--Break the string into two halves and swap them.
a=s.split(" ")
if(a.length>=2)
{
    let h=a[0]
    a[0]=a[1]
    a[1]=h
}
c=a.join(" ")
console.log(c)
//e-- Count the repeating characters.
function count(string) {
    var charCounts = {};
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
      if (!char.match(/[a-zA-Z]/) || char === " ") {
        continue;
      }
      char = char.toLowerCase();
      if (char in charCounts) {
        charCounts[char]++;
      } else {
        charCounts[char] = 1;
      }
    }
    return charCounts;
  }
var result = count(s);
console.log(result);
//f--Reverse the string
let y=s.split('').reverse().join('');
console.log(y)
