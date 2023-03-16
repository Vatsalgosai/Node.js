var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHobby) {
  return (
    'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
