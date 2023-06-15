function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jonnysins.shtc08@gmail.com",
        Password : "jonnysins@08",
        To : 'iamnikhil0415@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: "+document.getElementById("name").value
        + "<br> Email: "+document.getElementById("email").value
        + "<br> Subject: "+document.getElementById("subject").value
        + "<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Email send Successfully...")
    );
}