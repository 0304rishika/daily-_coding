let dayNumber =3
switch (dayNumber){
case 0:
 console.log("monday");
break;
case 1:
  console.log("tuesday");
  break;
  case 2:
    console.log("wednesday");
  break;
    case 3:
      console.log("thursday");
      break;
      case 4:
        console.log("friday");
        break;
        case 5:
          console.log("saturday");
          break;
          case 6:
            console.log("sunday");
            break;
            default:
          console.log("monday");
}

// 1️⃣ Simple Calculator
// Write a program that takes two numbers and an operator (+, -, *, /, %) as input and prints the result using a switch statement.

// Example:
// Input: 10, 2, "+"  
// Output: 12  
    let x =10;
    let y=2;
    let z= "+"
    switch (z) {
    case 1:
    console.log("x+y");
    break;
    case 2:
    console.log("x-y");
     break;
    case 3:
    console.log("x*y");
     break;
     case 4:
     console.log("x/y");
     break;
     case 5:
     console.log("x%y");
      break;
     default:
     console.log("Invalid");
     }

  
// 2️⃣ Vowel or Consonant
// Write a program that takes a single letter as input and determines whether it's a vowel (a, e, i, o, u) or a consonant.

// Input: "o"  
// Output: "Vowel"  
  let letter=o;
  switch (letter) {
  case a:
	console.log("Vowel");
	break;
  case e:
	console.log("Vowel");
	break;
  case i:
	console.log("Vowel");
	break;
  case o:
  console.log("Vowel");
   break;
  case u:
  console.log("Vowel");
	break;
 default:
 console.log("Consonant");
   }

// 3️⃣ Day of the Week
// Write a program that takes a number (1-7) as input and prints the corresponding day of the week.

// Input: 3  
// Output: Wednesday  
   let daynumber =2
    switch (daynumber){
    case 0:
 console.log("monday");
  break;
  case 1:
  console.log("tuesday");
  break;
  case 2:
  console.log("wednesday");
  break;
  case 3:
  console.log("thursday");
  break;
  case 4:
  console.log("friday");
   break;
   case 5:
   console.log("saturday");
   break;
    case 6:
    console.log("sunday");
    break;
    default:
    console.log("invalid");
   }

// 4️⃣ Traffic Light System
// Write a program that takes a traffic light color as input (red, yellow, green) and prints what a driver should do.

// Example:

// Input: "red"  
// Output: "Stop"   
    let color=red
    switch (color) {
    case red:
    console.log("Stop");
    break;
    case yellow:
    console.log("be ready");
    break;
    case green:
     console.log("Go");
     break;
     default:
     console.log("Invalid color");
     }
    
// 5️⃣ Grade System
// Write a program that takes a grade (A, B, C, D, F) and prints a message.

// Example:

// Input: "B"  
// Output: "Very Good!"
     let grade  =B
     switch (grade) {
     case A:
     console.log("Excellent");
     break;
     case B:
     console.log("Very Good");
     break;
     case C:
     console.log("Good");
     break;
     case D:
     console.log("Average");
     break;
     case F:
     console.log("Fail");
     break;
    default:
    console.log("Invalid grade");
    }

// 6️⃣ Seasons Based on Month
// Write a switch-case program that takes a month (January, February, ..., December) and prints which season it belongs to.

// Example:

// Input: "June"  
// Output: "Summer"  
     let month=June;
     switch (month) {
     case January:
     console.log("spring");
     break;
     case February:
     console.log("spring");
     break;
     case March:
     console.log("spring");
     break;
     case April:
     console.log("summer");
     break;
     case May:
     console.log("summer");
     break;
     case June:
     console.log("summer");
     break;
     case july:
     console.log("rainy");
     break;
     case august:
     console.log("rainy");
     break;
     case september:
     console.log("rainy");
     break;
     case october:
     console.log("winter");
     break;
     case november:
     console.log("winter");
     break; 
     case december:
     console.log("winter");
     break;
     default:
    console.log("Invalid month");
    }

// 7️⃣ Even or Odd (Using Modulus Operator)
// Take a number as input and determine if it’s even or odd using a switch statement.

// Example:

// Input: 4  
// Output: "Even"  
    let number=4
    switch (number%2) {
     case 1:
     console.log("Even");
     break;
     case 2:
     console.log("Odd");
      break;
      default:
      console.log("Invalid number");
       }
    
// 8️⃣ Movie Rating System
// Take a movie rating (G, PG, PG-13, R) as input and print the age group that can watch it.

// Example:

// Input: "PG-13"  
// Output: "Teens and above"   
    let rating=PG-13
    switch (rating){
    case G:
    console.log("kids");
    break;
    case PG:
    console.log("childrens");
    break;
    case PG-13:
    console.log("Teens and above");
    break;
    case R:
    console.log("Adults");
    break;
    default:
    console.log("Invalid rating");
    }

// 9️⃣ Discount Based on Membership
// Take a membership type (Silver, Gold, Platinum) and print the discount percentage.

// Example:

// Input: "Gold"  
// Output: "You get a 20% discount!"  
     let type=gold
    switch(type){
    case silver:
    console.log("30% discount");
     break;
    case gold:
    console.log("20% discount");
     break;
    case platinum:
    console.log("10% discount");
     break;
     default:
     console.log("Invalid type");
    } 

// 🔟 Arithmetic Operations Based on User Choice
// Write a program where the user selects an operation (1 = Addition, 2 = Subtraction, 3 = Multiplication, 4 = Division), inputs two numbers, and gets the result.

// Example:

// Input: 1, 5, 3  
// Output: 8  
     let n,b,a =(1,5,3)
    switch (n,b,a){
    case 1:
    console.log("b+a");
     break;
    case 2:
    console.log("b-a");       
    break;
    case 3:
    console.log("b*a");      
    break;
   case 4:
     console.log("b/a");         
    break;
   default:
     console.log("invalid ");
    }