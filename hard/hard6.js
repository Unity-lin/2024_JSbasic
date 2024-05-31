const human = {
    name: 'Steve',
    age: 55,
    job: "student"
  };
  
  Object.freeze(human);
  
 
  human.age = 65; 
  delete human.job; 
  
  console.log(human);