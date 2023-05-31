function match(a)
{
    if(a<0)
    {
        return 0;
    }
    else if(a==1)
    {
        return 6;
    }
    else
    {
        return 5*(a)+1
    }
}
console.log(match(1))
console.log(match(4))
console.log(match(87))
