document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger');
document.addEventListener("click", function(){
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  }
  else{
    document.querySelector('.ham').style.display = 'none';
    setTimeout(function(){
      document.querySelector('.cross').style.display = 'inline';
    }, 300);
  }
});


async function fetchGitHubProfile() {
    let username = "netram75"; 
    
    let url = `https://api.github.com/users/${username}`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`GitHub API error! Status: ${response.status}`);
        }
        let data = await response.json();
        document.getElementById('github').innerHTML = `
            <strong>GitHub Profile:</strong> ${data.name || "No Name"} <br>
            <strong>Bio:</strong> ${data.bio || "No bio available"} <br>
            <strong>Public Repos:</strong> ${data.public_repos}
        `;
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        document.getElementById('github').innerText = "Error fetching GitHub data. Try again later.";
    }
}


async function fetchQuote() {
    let url = "https://api.quotable.io/random"; 

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Quote API error! Status: ${response.status}`);
        }
        let data = await response.json();
        document.getElementById('quote').innerText = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById('quote').innerText = "Error fetching quote. Try again later.";
    }
}


fetchGitHubProfile();
fetchQuote();


setInterval(fetchGitHubProfile, 60000);
setInterval(fetchQuote, 60000);

