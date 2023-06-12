function solution(str){
  //Breaking the string into letters, reversing the order and joining the pieces back together 
  let reversedString = str.split("").reverse().join("");
  //Returning the result
  return(reversedString);
}