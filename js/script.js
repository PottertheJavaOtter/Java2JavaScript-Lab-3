" use strict ";

var phoneEntry = [];
phoneEntry["min"] = 222;
phoneEntry["joe"] = 333;

function PhoneBook(){

};

function listAllNames() {
  // code to list all names
  var output = "";
  for(var i in phoneEntry){
    output+= i + "<br/>"
  }
  display.innerHTML = output;
};

function listAllNumbers() {
  var output = "";
  for(var i in phoneEntry){
    output+= phoneEntry[i] + "<br/>"
  }
  display.innerHTML = output;
  // code to list all numbers
};

function listAllEntries(){
  var output = "";
  for(var i in phoneEntry){
    output+= i+ "<br/>" +phoneEntry[i] + "<br/>"
  }
  display.innerHTML = output;
  // code to list all entries
}

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneEntry[name] = number;
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  delete phoneEntry[remove];
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  if(phoneEntry[lookup]!=undefined)
    display.innerHTML = phoneEntry[lookup];
  else
    display.innerHTML = "That name is not found";
};

function reverseLookup() {
  var lookup = prompt("Enter a number to lookup");
  var output = "";
  for(var i in phoneEntry){
    if(phoneEntry[i]==lookup)
      output = i;
  }
  if(output!="")
    display.innerHTML = output;
  else
    display.innerHTML = "That number is not found";
};

var display = document.getElementById("display");
