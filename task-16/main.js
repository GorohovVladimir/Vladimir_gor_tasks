

function userSalary() {
    var salary = {
        andy: 3500,
        tom: 2700,
        ban: 2000
    };
    return salary;
}

 function calcSalary() {

var  workers = userSalary();

workers.andy += 200;

workers.ban += 700;

return console.log(workers);
 }

 calcSalary();










