/*
**Scenario -  suppose there are 5 people doing handshakes & you are one of them start with you, 
for you how many choices are there, off course you can not do handshake with your self  - it's 4.

1. For you out of 5, 4 people available, handshakes - 4 
2. at the time of first handshake for that next person, possibility of handshakes with you ends as you have done handshake already
   means for next person, 2 peoples are down(you and self), it will happen same with each person with whom you are handshaking.
3. Next time second person starts, with other except you and himself
   means out of 5 he has only 3 handshakes
4. third person, has only 2 handshakes
5. fourth person, has only 1 handshakes
6. last person, no need to do any handshake as he already done with all person before.

**lets try to get some logic & put in formula 
*** we are counting handshakes not individuals handshakes

--> 1. first obvious thing is, skip last person, don't count him in calculation
       suppose 5 people are there then only  4 people have  chance to initiate handshake
       which is out of n have (n-1) chances
--> 2. suppose n people are there then for individuals have (n-1) handshakes 
       5 people, do 5x4 = 20 handshakes(individually) but we are not counting for individuals

--> 3. as the first person handshakes with other one possibility of handshakes reduce and 
       in second person's chance possibility of handshakes reduces by 2, for third person possibility reduce by 3 and so on
       
    total handshakes  = (n-1) + (n-2) + (n-3) + (n-4) + 0(skip last person)
           
    Hence, this is the formula to calculate sum of 'n' natural numbers. n(n+1)/2
    in our case, n people and n-1 handshakes ---> then 
    n * (n - 1)/2 ---> arithmetic progressions, 
    handshake(n) = (n-1) + handshake(n-1)
             = (n-1) + (n-2) + handshake(n-2)
             = (n-1) + (n-2) + .... 1 + 0
             = n * (n - 1)/2 

** Lets try to put in code
** If we think deep, get to know that we need continues reduction of given number,
for we may have function which reduce the number by one till come to zero, 
for that we will make function and call it in loop or best way to use it in 'Recursion'
*/

//Using recursion -->
const handshakeRec = (n) => {
    if(n==0)
        return 0;
    else
        return (n-1) + handshakeRec((n-1));
}
console.log(handshakeRec(30));

//using formula -->
const handshake = (n) => {
    return n * parseFloat((n - 1) / 2, 2);
}
//scene from super 30 movie, 30 student of Hritik doing handshakes then how many handshakes are there ..? 
const result = handshake(30);
console.log(result);

