const fs = require('fs');

let readFiles = null;

fs.readdir('./',( err, files) => {
    //1 - Create a method to get all the files inside a given path 
    //2 - Create a method to Print all the files
    (err) ? console.log(err) : console.log('All files', files);

    //3 - Create a method to sort and print the files
    console.log('All files sorted', files.reverse())

    //4 - Create a method to get the amount of files starting with one letter
    let amount = 0;

        files.map((file) => {
            if(isNaN(parseInt(file.charAt(0)))) {
                amount = amount + 1;
            }
        });
            
        console.log('The amount of files starting with one letter: ' +amount);
    
});
