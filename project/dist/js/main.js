const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
  }
  showMenu = !showMenu;
}

const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll("[id^='project-']");
const closeBtn = document.querySelector(".close");

openModal.forEach(m => {
  m.addEventListener("click", () => {
    modal.showModal();
    document.querySelectorAll(`.${m.id}`).forEach(element => {
      element.classList.add("project-info");
    });
  });
});

if(closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.setAttribute("closing", "");
    modal.addEventListener(
      "animationend",
      () => {
        resetModal();
      },
      { once: true }
    );
  });
}

function outsideClick(e) {
  if (e.target == modal) {
    resetModal();
  }
}

function resetModal() {
  modal.removeAttribute("closing");

  const openProject = document.querySelectorAll(".project-info");
  openProject.forEach(element => {
    element.classList.remove("project-info");
  })

  modal.close();
}

window.addEventListener("click", outsideClick);