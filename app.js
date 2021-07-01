
//create socials

const socialSection = document.querySelector(".socials");
const socialList = ["instagram", "linkedin", "twitter"];
const urlList = ["https://www.instagram.com/littletailsinlife/",
"https://www.linkedin.com/in/mschreijenberg/",
"https://twitter.com/littletailsinl1"
]

for(let i=0; i<socialList.length; i++){
    let container = document.createElement("div");
    container.className="social-container";
    container.innerHTML =
    `
    <a href="${urlList[i]}" target="_blank"><img src="svgs/${socialList[i]}.svg" alt="${socialList[i]} logo"></a>
    `
    socialSection.appendChild(container);
}


{/* <div class="social-container">              
<a href="https://www.instagram.com/littletailsinlife/"  class="social-img" target="_blank"><img src="svgs/instagram.svg" alt="instagram logo"></a>
</div> 
<div class="social-container">   
<a href="https://www.linkedin.com/in/mschreijenberg/" class="social-img" target="_blank"><img src="svgs/linkedin.svg" alt="linkedin logo"></a>
</div>
<div class="social-container">   
<a href="https://twitter.com/littletailsinl1" class="social-img" target="_blank"><img src="svgs/twitter.svg" alt="twitter logo"></a>
</div> */}

//function to create a card
const section = document.querySelector(".webdev")

function createCard(languages, img, url, text, alt, projectTitle){
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    
    cardDiv.innerHTML =
    `
    <a href="${url}"  target="_blank">
        <img src="images/${img}" alt="${alt}">
    </a>
    <h3>${projectTitle}</h3>
    <p>${text}</p>                
    `
    let languageList = document.createElement("ul");
    languageList.className="languages";
    for(let i = 0; i<languages.length; i++){
        let li = document.createElement("li")
        li.textContent = languages[i];
        languageList.appendChild(li);
    }
    
    cardDiv.appendChild(languageList);

    section.appendChild(cardDiv);
}

//create cards with content for Web development page
let currentPage = window.location.pathname;
console.log(currentPage);

if(currentPage == "/webdevelopment.html"){
    createCard(["CSS", "SASS"], "sass.PNG", 
    "https://mschreijenberg.github.io/Techdegree_Unit_4/", 
    "Using Sass to create an awesome styled site", 
    "Screenshot of Sass Styling project", "Sass styling project");
    
    createCard(["HTML", "CSS", "Javascript"], "photogallery.PNG", 
    "https://mschreijenberg.github.io/Techdegree_Unit_5/", 
    "In this project we had to implement an existing javascript feature called 'baguetteBox'.I also wrote Javascript code to make a custom search bar.", 
    "Screenshot of Photo gallery project", "Photo gallery project");
    
    createCard(["HTML", "CSS", "Javascript"], "wheelofsucces.PNG", 
    "https://mschreijenberg.github.io/Techdegree_Unit_6/",
    "For this project I used Javascript to build a working guessing game, called Wheel of Succes",
    "Screenshot of Wheel of Success project", "Wheel of Success");
    
    createCard(["HTML", "CSS", "Javascript"], "webapp.PNG", 
    "https://mschreijenberg.github.io/Techdegree_Unit_7/", 
    "Writing lots of CSS and using Javascript to make the page function like a dashboard", 
    "screenshot of the WebApp project", "WebApp project");
}


//create changing card for