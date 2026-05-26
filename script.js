const button = document.querySelector("button")
const heading = document.querySelector("h1")
 
//1. Take the button and wait for a prompt using the addEventListener 
const moodParagraph =document.querySelector("Mood");
button.addEventListener("click", function (){
    
    button.textContent = "Clicked!";
});
   //2. Waiting on the prompt to be triggered, a name will be asked
   //3. When the prompt is triggered, a name will be asked 
   const name = prompt("What is your name?");
   const mood = prompt("How are you?");
   //4.The heading with change due to the textContent
    heading.textContent = 'Hi{name}';
    moodParagraph.textContent = `Todays mood${mood}`
    button.textContent = "Dankie";
    //console.log allows us to see the output in the console via inspect 
    console.log("The button has been clicked");
    console.log("Script loaded and ready");


//Instruction
//change the butto text after it is clicked 
//add a second paragraph that updates with today's mood
//style the button in CSS
//Add one console.log message of your choice

// Change button text after click

// Add second console message (if you want it separate from yours)


