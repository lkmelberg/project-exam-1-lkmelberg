SSbreadcrumb.innerHTML += `<li><a href="contact.html">Contact</a></li>`;
pageTitle.innerHTML += `Contact Us`;

// form

// const

const form = document.querySelector("form");
const theName = document.querySelector("#the-name");
const theNameError = document.querySelector("#the-name-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactMessage = document.querySelector(".contact-message");

function checkIfInputValidated(event) {
  event.preventDefault();

  if (checkLength(theName.value, 5)) {
    theNameError.style.display = "none";
  } else {
    theNameError.style.display = "block";
  }

  if (checkLength(message.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  //   if (checkMaxLength(message.value, 100)) {
  //     messageError.style.display = "none";
  //   } else {
  //     messageError.style.display = "block";
  //   }

  if (validateEmail(email.value, 1)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (
    checkLength(theName.value, 5) &&
    checkLength(message.value, 25) &&
    checkLength(subject.value, 15) &&
    // checkMaxLength(message.value, 100) &&
    checkLength(email.value, 1) &&
    validateEmail(email.value)
  ) {
    contactMessage.innerHTML =
      '<div class="contact-message-success">Your message has been submitted</div>';
    form.reset();
  } else {
  }
}

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function clearMessage() {
  contactMessage.innerHTML = "";
}
// new form fill - remove success message
theName.addEventListener("keyup", clearMessage);
message.addEventListener("keyup", clearMessage);
email.addEventListener("keyup", clearMessage);

form.addEventListener("submit", checkIfInputValidated);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// keep content in html file

// content.innerHTML += `<div class="contact_main_form contact-message"></div>
//             <form>
//                 <div>
//                     <div class="form-error" id="the-name-error">Please enter your name</div>
//                     <label>
//                         Name (required)
//                         <input name="the-name" id="the-name" class="item_form" />
//                     </label>
//                 </div>
//                 <div>
//                     <div class="form-error" id="emailError">Please enter a valid email address</div>
//                     <label>
//                         Email (required)
//                         <input name="email" id="email" class="item_form" />
//                     </label>
//                 </div>
//                 <div class="form-error" id="subjectError">Please enter a valid subject</div>
//                  <label>
//                      Subject (required)
//                      <input name="subject" id="subject" class="item_form" />
//                      </label>
//                 <div>
//                     <div class="form-error" id="messageError">Message must be at least 10 characters
//                     </div>
//                     <label>
//                         Message (min 10 characters)
//                     </label>
//                     <textarea id="message" name="message" class="contact_form_message_input item_form"
//                         rows="10"></textarea>

//                 </div>

//                 <button class="button">Send</button>
//             </form>`;

// const names = document.querySelector(".names");
// const email = document.querySelector(".email");
// const subject = document.querySelector(".subject");
// const message = document.querySelector(".message");

// names.innerHTML = `<div class="form-error" id="the-name-error">Please enter your name</div>
//                     <label>
//                         Name (required)
//                         <input name="the-name" id="the-name" class="item_form" />
//                     </label>`;

// email.innerHTML += ` <div class="form-error" id="emailError">Please enter a valid email address</div>
//                     <label>
//                         Email (required)
//                         <input name="email" id="email" class="item_form" />
//                     </label>`;

// subject.innerHTML += ` <div class="form-error" id="subjectError">Please enter a valid subject</div>
//                     <label>
//                         Subject (required)
//                         <input name="subject" id="subject" class="item_form" />
//                     </label>`;

// message.innerHTML += ` <div class="form-error" id="messageError">Message must be at least 10 characters
//                     </div>
//                     <label>
//                         Message (min 10 characters)
//                     </label>
//                     <textarea id="message" name="message" class="contact_form_message_input item_form"
//                         rows="10"></textarea>`;
