class Calculator {
    addition(value1,value2) {
      var a =value1;
      var b =value2;
      var c = a+b;
      console.log("Result = "+c);
    }
    subtraction(value1,value2) {
      var a =value1;
      var b =value2;
      var c = a-b;
      console.log("Result = "+c);
    }
    multiplication(value1,value2) {
      var a =value1;
      var b =value2;
      var c = a*b;
      console.log("Result = "+c);
    }
    division(value1,value2) {
      var a =value1;
      var b =value2;
      var c = a/b;
      console.log("Result = "+c);
    }
  }
  
  console.log("1:Addition");
  console.log("2:Subtraction");
  console.log("3:Multiplication");
  console.log("4:Division");
  
  const Myvalues = new Calculator()
  var choice = 4;
  
  var a = 10;
  var b = 5;
  switch(choice) {
    case 1:
      //Addition
          Myvalues.addition(a,b);
          break;
    case 2:
      //Subtraction
          Myvalues.subtraction(a,b);
          break;
    case 3:
      //Multiplication
          Myvalues.multiplication(a,b);
          break;
    case 4:
      //Division
          Myvalues.division(a,b);
          break;
    default:
      console.log("incorrect choice");
  } 