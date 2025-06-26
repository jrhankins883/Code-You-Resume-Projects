const username = "jrhankins883";
const url = `https://api.github.com/users/${username}/repos`;
const list = document.getElementById("repo-list");

fetch(url) 
    .then(response => response.json())
    .then(repos => {
        repos
            .filter(repo => repo.description)
            .forEach(repo => {
                const li = document.createElement("li");
                li.classList.add("repo-item");
                li.innerHTML = `
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    ${repo.name}</a> - ${repo.description}
                    `;
                    list.appendChild(li);
            });
        })
        .catch(error => console.log("Error load repos:", error));