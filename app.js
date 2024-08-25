let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let forwardBtnBtn = document.getElementById("forwardBtn")

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

forwardBtnBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehaviour = "smooth"
  scrollContainer.scrollLeft += 1275;
})

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehaviour = "smooth"
  scrollContainer.scrollLeft -= 1275;
})