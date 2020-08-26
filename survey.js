const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  // TODO: Log the answer in a database
  

  rl.question("What's an activity you like doing? ", (activity) => {
    // TODO: Log the answer in a database
    rl.question("What do you listen to while doing that? ", (music) => {
      // TODO: Log the answer in a database
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        // TODO: Log the answer in a database
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          // TODO: Log the answer in a database
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            // TODO: Log the answer in a database
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              // TODO: Log the answer in a database
              console.log( `${name} loves listening to ${music} while ${activity},\n devouring ${food} for ${meal}, prefers ${sport}\n over any other sport, and is amazing at ${superpower}.`)
            
              rl.close();
            });
          
            
          });
        
          
        });
      
        
      });
    
      
    });
  
    
  }); 
});










