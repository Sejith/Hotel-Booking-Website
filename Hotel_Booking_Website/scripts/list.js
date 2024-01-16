// The header template
let displayHeaderTemplate = () => {
	let headerTemplate = `<a href="../index.html" class="logo"><img src="../assests/images/logo.png" id="headerLogo" class="logo"
    alt="logo"></a>
<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#login-modal" onclick="mainLogin(event)">LOGIN</button>
<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="login-modal-label">Please Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="login-form">
                <div class="login-field">
                    <label for="username">Username: </label>
                    <input type="text" id="username" name="username" placeholder="Enter Username"
                        required>
                </div>
                <div class="login-field">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder="Enter Password"
                        required>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button id="login-button" type="button" class="btn btn-primary"
                data-dismiss="modal" onclick="login(event)">Login</button>
        </div>
    </div>
</div>
</div>`;
	document.getElementById('headerID').innerHTML += headerTemplate;
};

// The footer template
let displayFooterTemplate = () => {
	let footerTemplate = `<div id="contact">
    <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false"
        data-target="#contact-modal">Contact Us</button>
    <!-- Contact Us modal -->
    <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog"
        aria-labelledby="contact-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <p>
                            Thank you for reaching out!!! <br>
                            Please enter you email and we will get back to you.
                        </p>
                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email" placeholder="Enter your email id"
                            required>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="copyright_text">
    &copy; 2022 ROOM SEARCH PVT. LTD.
</div>
<div id="socialMediaImages">
    <a href="https://www.facebook.com" target="_blank">
        <img src="../assests/images/facebook.png" class="socialMedia">
    </a>
    <a href="https://www.instagram.com" target="_blank">
        <img src="../assests/images/instagram.png" class="socialMedia">
    </a>
    <a href="https://twitter.com" target="_blank">
        <img src="../assests/images/twitter.png" class="socialMedia">
    </a>
    <a href="https://wa.me/9515806719" target="_blank">
        <img src="../assests/images/whatsapp.png" class="socialMedia">
    </a>
    <a href="mailto:sejith.kv124578@gmail.com" target="_blank">
        <img src="../assests/images/Gmail.png" class="socialMedia">
    </a>
</div>`;

	document.getElementById('footerID').innerHTML += footerTemplate;
};

//display the loader until the page loads
// displayLoader();
// display header and footer templates
displayHeaderTemplate();
displayFooterTemplate();