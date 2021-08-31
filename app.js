/*(function () {
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
})();*/

(function () {
  const containerEle = document.querySelector(".container");
  let activeElement = document.querySelector(".active");

  const divClickHandler = function () {
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

  containerEle.addEventListener("click", (e) => {
    if (e.target.classList.contains("panel")) {
      divClickHandler.call(e.target);
    }
    return false;
  });
})();
