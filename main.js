let theInput = document.querySelector(".get-repos input"),
getButton = document.querySelector(".get-button"),
reposData = document.querySelector(".show-data");

getButton.onclick = function(){
    getRepos();
};

function getRepos(){
    if(theInput.value == ""){
        reposData.innerHTML = "Enter Your any thing";
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((res) =>res.json())

        .then((repos) => {
            //Empty the container
            reposData.innerHTML= '';

            //Loop On repos

            repos.forEach(repo => {

                //Create the main div 
                let mainDiv = document.createElement("div");

                //Creat Repo Name Text
                let repoName = document.createTextNode(repo.name);

                //Append The Text To Main Div
                mainDiv.appendChild(repoName);

                

                //Creat Repo URL Anchor
                let theUrl = document.createElement('a');

                //Creat Repo Url Text 
                let theUrlText = document.createTextNode("Visit");

                //Append The Repo Url Text To Anchor Tag 
                theUrl.appendChild(theUrlText);

                // Add The Hypertext Reference "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                //Set Attribute Blank 
                theUrl.setAttribute('target','_blank');

                //Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);
                //Create Stars Count 
                let starsSpan = document.createElement("span");
                //Create The stars Count Text 
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);
                //Add stars text to star conut
                starsSpan.appendChild(starsText);
                //Add stars to main div
                mainDiv.appendChild(starsSpan);
                //Add class to Main Div
                mainDiv.className = 'repo-box';

                //Appent The Main Div To Container
                reposData.appendChild(mainDiv);

            });
        })
    }
}
