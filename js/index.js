let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&#169 Kai ${thisYear}`;
footer.appendChild(copyright);

let skills = ["html", "css", "javascript"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

// loop all the skill inside skillsList
for (let skill of skills){
    let listItem = document.createElement("li");
    listItem.innerText = skill;
    skillsList.appendChild(listItem);
    
}
