" use strict ";

var phoneEntry = [];
var phoneNumbers = []
phoneEntry["min"] = [5555,6666];
phoneEntry["joe"] = [1111,2222];

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

function listAllNumbers(){
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

function showAdd(){
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneEntry[name].push(number);
};

function showAddEntry(){
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneEntry[name] = [];
  phoneEntry[name].push(number);
};

function showRemoveRecord() {
  var remove = prompt("Enter name to remove");
  delete phoneEntry[remove];
};
function showRemoveNumber() {
  var remove = prompt("Enter a number to remove");
  var index;
  for(var i in phoneEntry){
    for(j = 0; j < phoneEntry[i].length; j++){
      if(phoneEntry[i][j]==remove){
        phoneEntry[i].splice(index,1);
      }
    }
  }
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
    for(j = 0; j < phoneEntry[i].length; j++){
      if(phoneEntry[i][j]==lookup){
        output = i;
      }
    }
  }
  if(output!="")
    display.innerHTML = output;
  else
    display.innerHTML = "That number is not found";
};

var display = document.getElementById("display");
