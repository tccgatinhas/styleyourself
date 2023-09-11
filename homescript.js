// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.col')

  grid.classList.add('active')

  gridColumns.forEach(element => {
    element.classList.remove('animate-before', 'animate-after')
  })

  heading.classList.remove('animate-before', 'animate-after')
}

function exitScreen(index, exitDelay) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.col')

  gridColumns.forEach(element => {
    element.classList.add('animate-after')
  })

  heading.classList.add('animate-after')

  setTimeout(() => {
    grid.classList.remove('active')
  }, exitDelay)
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
  const cycleTime = timePerScreen + exitDelay
  let nextIndex = 0

  function nextCycle() {
    const currentIndex = nextIndex

    enterScreen(currentIndex)

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

    nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
  }

  nextCycle()

  setInterval(nextCycle, cycleTime)
}

setupAnimationCycle({
  timePerScreen: 2000, // ms
  exitDelay: 200 * 7 // ms
})


