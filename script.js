{
//Footer dynamic date
const date = new Date();
const year = date.getFullYear();

document.getElementById("displayDate").innerHTML = year;
}

{
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

}


{
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

}


{
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
}

{
  const links = document.querySelector("header .stretch-btns > .drop-down");
  const btn = document.querySelector("header .stretch-btns button");
  const icon = document.querySelector("header .stretch-btns i");
  
  btn.addEventListener("click", function() {
    const tog = links.classList.toggle("show-top-links");

    if (tog) {
      icon.setAttribute("class", "fa-solid fa-chevron-up");
    } else {
      icon.setAttribute("class", "fa-solid fa-chevron-down");
    }
  });
}