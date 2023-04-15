const chocolate = document.getElementById("chocolate");
const vanilla = document.getElementById("vanilla");
const btn = document.getElementById("btn");

const getValue = () => {
  if (!chocolate.checked && !vanilla.checked) {
    alert("Pick One!");
  } else if (chocolate.checked && vanilla.checked) {
    alert(`You like Both ${chocolate.value} and ${vanilla.value}`);
  } else if (chocolate.checked) {
    alert(`You like ${chocolate.value}`);
  } else if (vanilla.checked) {
    alert(`You like ${vanilla.value}`);
  }
  chocolate.checked = false;
  vanilla.checked = false;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log('Clicked');
  getValue();
});
