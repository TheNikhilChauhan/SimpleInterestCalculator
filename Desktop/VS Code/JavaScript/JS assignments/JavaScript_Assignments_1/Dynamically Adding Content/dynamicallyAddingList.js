const learn =["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"]

let learnIndex = 0;
// const text = document.getElementById('text');
const button = document.getElementById('click');
const addingListItem = () =>{
    button.addEventListener("click", function(event){
        event.preventDefault();
        if(learnIndex< learn.length){
            const learnItem = document.createElement("li");
            learnItem.innerHTML = ` ${learn[learnIndex]}`;
            document.getElementById('text').appendChild(learnItem);
            learnIndex++;
        }
        else{
            alert("All the items have been added.")
        }
    });
}

addingListItem();