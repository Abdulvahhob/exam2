const burgerToggler = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");

burgerToggler.addEventListener("click", function() {
  burgerToggler.classList.toggle("header__burger--opened");
  navigation.classList.toggle("header__nav--opened");
});