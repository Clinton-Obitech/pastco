const buttons = document.querySelectorAll(".course h3");
const content = document.querySelectorAll(".drop-down-course");
const icons = document.querySelectorAll(".course h3 i");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const isVisible = content[index].style.display === "block";

    content.forEach(cont => (cont.style.display = "none"));
    icons.forEach(icon => icon.setAttribute("class", "fa-solid fa-chevron-up")); 

    if (!isVisible) {
      content[index].style.display = "block";
      icons[index].setAttribute("class", "fa-solid fa-chevron-down"); 
    }
  });
});

const linkBtn = document.querySelectorAll(".drop-main");
const linkContent = document.querySelectorAll(".drop-link");

linkBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    const isVisible = linkContent[index].style.display === "block";


    linkContent.forEach(cont => {
      cont.style.display = "none";
    });

    linkBtn.forEach(lbtn => { 
      lbtn.style.display = "inline-block";
    });
 

    // If the clicked one was hidden before, show it
    if (!isVisible) {
      linkContent[index].style.display = "block";
      linkBtn[index].style.display = "block";
    }
  });
});


const adButton = document.querySelector("a.smartlink");
const time = new Date();
const hour = time.getHours();

let text;

if (hour <= 11) {

  text = "Proceed to more past questions";
  
} else if (hour >= 12 && hour <= 15) {

  text = "Open related past questions";

} else if (hour >= 16) {

   text = "Unlock additional questions";
}

adButton.innerHTML = text;

{

const adButton = document.querySelector("a.smarthome");
const time = new Date();
const hour = time.getHours();

let text;

if (hour <= 11) {

  text = "Access more study tools";
  
} else if (hour >= 12 && hour <= 15) {

  text = "View more study content";

} else if (hour >= 16) {

   text = "View recommended study materials";
}

adButton.innerHTML = text;

}

document.getElementById("close-kaaf-levels").addEventListener("click", function () {
  document.getElementById("kaaf-levels").style.display = "none";
})

document.getElementById("close-nmtcatibie-levels").addEventListener("click", function () {
  document.getElementById("nmtcatibie-levels").style.display = "none";
})


  const searchInput = document.getElementById("search");
  const courses = document.querySelectorAll("#courses > a");
  const notFound = document.getElementById("not-found");

  searchInput.addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase().trim();
    let found = false;

    courses.forEach(course => {
      const text = course.textContent.toLowerCase();

      if(text.includes(searchValue)) {
        course.style.display = "block";
        found = true;
      } else {
        course.style.display = "none";
      }
    })

    notFound.style.display = found ? "none" : "block";
  })
