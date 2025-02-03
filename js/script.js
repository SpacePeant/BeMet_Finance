document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.querySelector('input[type="text"]').value;
  let password = document.querySelector('input[type="password"]').value;

  if (username === "owner" && password === "12345") {
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
});
