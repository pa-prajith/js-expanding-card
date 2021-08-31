(function () {
  const imgElements = document.querySelectorAll(".panel");
  let activeElement = imgElements[0];
  const clickHandler = function () {
    if (activeElement) {
      if (activeElement.classList.contains("active")) {
        activeElement.classList.remove("active");
      }
    }
    if (activeElement !== this) {
      activeElement = this;
      this.classList.add("active");
    } else {
      activeElement = null;
    }
  };

  imgElements.forEach((ele) => ele.addEventListener("click", clickHandler));
})();
