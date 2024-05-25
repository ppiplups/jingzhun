let scrollTopButton = document.getElementById("scrollTop");
let introSection = document.getElementById("intro");
function handleScroll() {
  if (document.body.scrollTop > introSection.clientHeight || document.documentElement.scrollTop > introSection.clientHeight) {
    scrollTopButton.style.display = "block";
  } else scrollTopButton.style.display = "none";
}

document.addEventListener("scroll", handleScroll);
