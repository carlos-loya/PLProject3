/**
 * Created by carlosloya on 3/6/16.
 */
var person = function(){
    
    var data = {

        firstName:'',
        $firstName: function(n){ data.firstName = n },
        lastName:'',
        $lastName: function(n){ data.lastName = n },
        email:'',
        $email: function(n){ data.email = n }

    };

    var F = function(){};
    f = new F();

    f.run = function (e) {
        return data[e];
    };

    f.getDisplayText = function(){

        document.writeln('Name: ' + data.firstName + " " + data.lastName + "<BR>");
        document.writeln('Email: ' + data.email + "<BR>");

    }

    return f;
}();

var customer = function(p){

    var data = {
        customerNumber: '',
        $customerNumber: function(n){ data.customerNumber = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    f.displayName = data.name
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    f.getCustomerText = function () {
        f.getDisplayText()
        document.writeln("Customer Number: " + data.customerNumber + "<BR>")
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
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    f.getEmployeeText = function () {
        f.getDisplayText()
        document.writeln("Social security number: " + data.socialSec + "<BR>")
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