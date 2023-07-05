let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

//Email Integration
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_6u81vhq';
   const templateID = 'template_j2mosbj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      showPopup(true);
      document.getElementById("name").value=null;
      document.getElementById("email").value=null;
      document.getElementById("phone").value=null;
      document.getElementById("message").value=null;
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});

//Pop up
function showPopup(bool) {
  if(bool)
  {
    document.getElementById('popup').style.visibility = 'visible'
  }
  else 
  {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}