document.addEventListener('DOMContentLoaded', function() {
    let emailIcon = document.getElementById('email-icon-container');

    emailIcon.addEventListener('click', function(event) {
        event.preventDefault();
        let user = "virgileblais";
        let domain = "gmail";
        let tld = "com";
        window.location.href = "mailto:" + user + "@" + domain + "." + tld;
    });
});