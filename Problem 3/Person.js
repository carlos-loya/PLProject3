

/**
 * Created by carlosloya on 3/6/16.
 */
var person = function(){

    var data = {

        firstName:'',
        $firstName: function(n){
           // document.writeln(n.toString()+ "<BR>");
            data.firstName = n
        },
        lastName:'',
        $lastName: function(n){ data.lastName = n },
        email:'',
        $email: function(n){ data.email = n }

    };

    var F = function(){};
    f = new F();

    f.run = function (e) {
        //document.writeln("we are in person"  + "<BR>");
        //document.writeln(e.toString()+ "<BR>");
        return data[e];
    };

    f.getDisplayText = function(){
        document.writeln("You entered:" +"<BR>");
        document.writeln('Name: ' + data.firstName + " " + data.lastName + "<BR>");
        document.writeln('Email: ' + data.email + "<BR>");

    }

    return f;
}();

var customer = function(p){

    var data = {
        customerNumber: 'what is this',
        $customerNumber: function(n){ data.customerNumber = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    f.displayName = data.name
    f.run = function (e) {
        var r = data[e];
        if(r === undefined){
            //document.write("We enterered undefined");
            return F.prototype.run(e);
        }
        else return r;
    };

    f.getCustomerText = function () {
        f.getDisplayText()
        document.writeln("Customer Number: " + data.customerNumber + "<BR>")
        document.writeln("<BR>");
    }

    return f;
}(person);


var employee = function(p){
    var data = {
        socialSec:'',
        $socialSec: function(n){ data.socialSec = n }
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    f.run = function (e) {
        var r = data[e];
        if(r === undefined) {

            return F.prototype.run(e);
        } else return r;
    };

    f.getEmployeeText = function () {
        f.getDisplayText()
        document.writeln("Social security number: " + data.socialSec + "<BR>")
        document.writeln("<BR>");
    }

    return f;
}(person);


/*
 var customer = Object.create(customer);

 customer.run('$firstName')('Carlos');
 customer.run('$lastName')('Loya');
 customer.run('$name');
 customer.run('$email')('exsorest@gmail.com');
 customer.run('$customerNumber')('n00b');
 customer.getCustomerText();
 */

/**
 * Created by leo on 3/5/16.
 */



function myFunction() {
    //have a while loop for when it enters something else that its not a c or a e
    var correct = true;

    while(correct){
        var type = prompt("Create customer or employee? (c/e):"); 
        //lower case 
        type = type.toLowerCase();
        if(type === "c" || type === "e")
            correct = false;
    }

    //setters for the objects

    if (type === "c"){
    	//create customer
        var a1 = Object.create(customer);
        //method to get the name and email
        getNameEmail(a1);
        var customerNumber = prompt("Customer number:");
        //set the customer number
        a1.run('$customerNumber')(customerNumber);
        //display the results
        a1.getCustomerText();
    }
    if (type === "e"){
    	//create employee
        var a1 = Object.create(employee);
        //method to get the name and email
        getNameEmail(a1);
		var ssn;
        var cont = true;
        //while loop to check its a 10 character string and it includes the - at the position 3,6.
         while(cont){
         	ssn = prompt("Enter security number:");
        	if(ssn.length == 10 && ssn.charAt(3) === '-' && ssn.charAt(6) === '-'){
        		a1.run('$socialSec')(ssn);
        		cont = false;
        	}
        }
        a1.getEmployeeText();
    }



   var again = prompt("Continue? (y/n):");
   again = again.toLowerCase();
    if( again === "y"){
        myFunction();
    }
}

function getNameEmail(a1){
	var firstName = '';
	var lastName = '';
	var email = '';
	//whoile loops so the values arent empty
	while(firstName === ''){
		firstName = prompt("Enter first name:");
	}
        a1.run('$firstName')(firstName);
    while(lastName === ''){
    	lastName = prompt("Enter last name:");
    }
        a1.run('$lastName')(lastName);
    while(email === '' || !email.includes('@')){
        email = prompt("Enter email address:");
    }
        a1.run('$email')(email);
}
