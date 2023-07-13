document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here, you can perform further validation or send the login data to a server using AJAX
    //alert("Username: " + username + "\nPassword: " + password);
    console.log("Username: " + username);
    console.log("Password: " + password);
  });
  