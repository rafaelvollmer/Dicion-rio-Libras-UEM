const loading = document.getElementById("loading");

setTimeout(() => {

  loading.style.display = "none";

}, 2500);

/* AVATAR */

let selectedAvatar = "img/banana.png";

const avatarOptions =
document.querySelectorAll(".avatar-option");

avatarOptions.forEach(avatar => {

  avatar.addEventListener("click", () => {

    selectedAvatar = avatar.src;

  });

});

/* IMPORTAR FOTO */

document.getElementById("uploadAvatar")
.addEventListener("change", function(e){

  const file = e.target.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(event){

      selectedAvatar = event.target.result;

    }

    reader.readAsDataURL(file);

  }

});

/* ENTRAR */

const startBtn =
document.getElementById("startBtn");

const welcomeBox =
document.getElementById("welcomeBox");

const overlay =
document.getElementById("overlay");

const profileName =
document.getElementById("profileName");

const profileAvatar =
document.getElementById("profileAvatar");

startBtn.addEventListener("click", () => {

  const username =
  document.getElementById("username").value;

  const finalName =
  username || "Usuário";

  profileName.innerText = finalName;

  profileAvatar.src = selectedAvatar;

  localStorage.setItem("username", finalName);
  localStorage.setItem("avatar", selectedAvatar);

  welcomeBox.style.display = "none";
  overlay.style.display = "none";

});

/* CARREGAR */

window.onload = () => {

  const savedName =
  localStorage.getItem("username");

  const savedAvatar =
  localStorage.getItem("avatar");

  if(savedName){

    profileName.innerText = savedName;

    welcomeBox.style.display = "none";
    overlay.style.display = "none";

  }

  if(savedAvatar){

    profileAvatar.src = savedAvatar;

  }

}

/* MENU PERFIL */

const profileBtn =
document.getElementById("profileBtn");

const profileMenu =
document.getElementById("profileMenu");

profileBtn.addEventListener("click", () => {

  if(profileMenu.style.display === "block"){

    profileMenu.style.display = "none";

  }else{

    profileMenu.style.display = "block";

  }

});

/* TROCAR AVATAR */

const changeAvatar =
document.querySelectorAll(".change-avatar");

changeAvatar.forEach(avatar => {

  avatar.addEventListener("click", () => {

    profileAvatar.src = avatar.src;

    localStorage.setItem("avatar", avatar.src);

  });

});

/* PESQUISA */

const searchBtn =
document.getElementById("searchBtn");

const searchInput =
document.getElementById("searchInput");

const historyList =
document.getElementById("historyList");

function createHistory(text){

  const div =
  document.createElement("div");

  div.classList.add("history-item");

  div.innerText = text;

  div.addEventListener("click", () => {

    window.open(
      `https://www.youtube.com/results?search_query=${text}+libras`,
      "_blank"
    );

  });

  historyList.prepend(div);

}

searchBtn.addEventListener("click", () => {

  const value =
  searchInput.value;

  if(value.trim() === "") return;

  const url =
  `https://www.youtube.com/results?search_query=${value}+libras`;

  window.open(url, "_blank");

  createHistory(value);

});