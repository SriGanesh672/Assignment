//loop pattern
const loop=()=>
{
    a="",b=1;
    for(let i=1;i<=4;i++)
    {
        for(let j=1;j<=i;j++)
        {
            a+=b;;
            b++;
        }
      a+="\n"
    }
    console.log(a);
}
loop()

//armstrong number:
const armstrong=()=>
{
    let a=0;
    let b="153"
    let d=b.length;
    let sum=0;
    num=parseInt(b)
    let e=num
    for(let i=0;i<d;i++)
    {
        a=e%10;
        sum+=a*a*a;
        e=parseInt(e/10);
    }
    if(num==sum)
    {
        console.log("GIVEN NUMBER "+num+ " IS ARMSTRONG")
    }
    else
    {
        console.log("GIVEN NUMBER "+num+"IS NOT AN ARMSTRONG")
    }
}
armstrong()
//specialnumber
const number = 145
function Special(num) {
    function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
    let d= 0;
    let temp = num;
    while (temp > 0) {
      let digit = temp % 10;
      d += factorial(digit);
      temp = Math.floor(temp / 10);
    }
    return num === d;
  }
  if (Special(number)) 
  {
    console.log("THE GIVEN NUMBER "+number+" IS SPECIAL");
  } 
  else 
  {
    console.log("THE GIVEN NUMBER "+number+" IS NOT SPECIAL");
  }
  

