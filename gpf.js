async function getProfile() {

  const username = document.getElementById("username").value;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();

  const profile = document.getElementById("profile");

  profile.innerHTML = `
    <div class="card">
      <img src="${data.avatar_url}" />
      <h2>${data.name}</h2>
      <p>${data.bio || "No bio available"}</p>

      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>

      <a href="${data.html_url}" target="_blank">
        Visit Profile
      </a>
    </div>
  `;
}