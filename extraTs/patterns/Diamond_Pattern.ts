export function diamond_print() {
    let n=5;
    let space = n - 1;

    for (let i = 0; i < n; i++)  
    {  
        // loop for initially space,  
        // before star printing  
        for (let j = 0;j < space; j++)  
            process.stdout.write(" ");  
  
        // Print i+1 stars  
        for (let j = 0; j <= i; j++)  
            process.stdout.write("* ");  
  
        console.log();  
        space--;  
    }  
  
    // Repeat again in reverse order  
    space = 0;  
  
    // run loop (parent loop)  
    // till number of rows  
    for (let i = n; i > 0; i--)  
    {  
        // loop for initially space,  
        // before star printing  
        for (let j = 0; j < space; j++)  
             process.stdout.write(" ");  
  
        // Print i stars  
        for (let j = 0;j < i;j++)  
             process.stdout.write( "* "); 
  
        console.log(); 
        space++;  
    }  
 
}
