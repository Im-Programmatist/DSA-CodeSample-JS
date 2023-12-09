/*
Sort objects on property, sort these objects on descending order of grade.
Input: [{"name":"Anam","grade":"A"},{"name":"Arjun","grade":"A+"},
    {"name":"Iram","grade":"B+"},{"name":"Zia","grade":"C"},
    {"name":"Reah","grade":"B"},{"name":"Karan","grade":"A"},
    {"name":"Mithum","grade":"B"},{"name":"Ankur","grade":"B+"}]
    
Output: [{"name":"Arjun","grade":"A+"},{"name":"Anam","grade":"A"},
    {"name":"Karan","grade":"A"},{"name":"Ankur","grade":"B+"},
    {"name":"Iram","grade":"B+"},{"name":"Reah","grade":"B"},
    {"name":"Mithum","grade":"B"},{"name":"Zia","grade":"C"}]
*/

const arr = [{"name":"Anam","grade":"A"},{"name":"Arjun","grade":"A+"},
{"name":"Iram","grade":"B+"},{"name":"Zia","grade":"C"},
{"name":"Reah","grade":"B"},{"name":"Karan","grade":"A"},
{"name":"Mithum","grade":"B"},{"name":"Ankur","grade":"B+"}]

const len = arr.length;

const result = arr.sort(function(a, b) {
    if(a.grade < b.grade) { return -1; }
    if(a.grade > b.grade) { return 1; }
    return 0;
})
console.log(result);

const result2 = arr.sort(function(a, b) {
    return a.grade - b.grade;
})
console.log(result2);