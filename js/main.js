const mainBtn = document.querySelector("#mainbtn");
const mainCard = document.querySelector(".card-rating");
const thanksCard = document.querySelector(".card-thanks");
const option = document.querySelector(".select");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const tree = document.querySelector("#tree");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
var number = "";

function select() {
  option.innerHTML = "You selected 4 out of 5";
  one.addEventListener("click", () => {
    number = document.querySelector("#one").value;
  });
  two.addEventListener("click", () => {
    number = document.querySelector("#two").value;
  });
  tree.addEventListener("click", () => {
    number = document.querySelector("#tree").value;
  });
  four.addEventListener("click", () => {
    number = document.querySelector("#four").value;
  });
  five.addEventListener("click", () => {
    number = document.querySelector("#five").value;
  });
}
select();

function exit() {
  mainCard.classList.toggle("dn");
  thanksCard.classList.toggle("show");
  option.innerHTML = `You selected ${number} out of 5`;
}

mainBtn.addEventListener("click", () => {
  exit();
});
