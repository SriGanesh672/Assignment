//1]Can we put duplicate values in the set object ?
//Answer to this is actually set is a collection of unique values..so set doesnt allow duplicate values

//2]Write the syntax for
//a) Creating new set object
const newset1=new Set()

//b) Adding new element to set object
newset1.add(1)
newset1.add(2)
newset1.add(3)
newset1.add(2)
console.log(newset1)
console.log([...newset1])
//c) Deleting element from set object
newset1.delete(1)
console.log([...newset1])
//3]Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.
const Set1=new Set()
for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    Set1.add(randomNum);
}
console.log([...Set1])
if(Set1.has(8))
{
    console.log("8 is present in the given set")
}
else
{
    console.log("8 is not present in the set")
}