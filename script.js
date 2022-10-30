const number = document.querySelector("#productnumber");
const date = document.querySelector("#datepicker");
const style = document.querySelector("#productstyle");
const fabric = document.querySelector("#fabric");
const cotton = document.querySelector("#cotton");
const linen = document.querySelector("#linen");
const today = new Date().toISOString().split("T")[0];

const validNumber = () => {
  if (number.value > 100 || number.value < 1) {
    document.querySelector("#productnumber").style.border = "1px solid red";
    document.querySelector("#validMsgNumber").style.visibility = "visible";
  } else {
    document.querySelector("#productnumber").style.border = ".5px solid black";
    document.querySelector("#validMsgNumber").style.visibility = "hidden";
  }
};

const validDate = () => {
  if (date.value < today) {
    document.querySelector("#datepicker").style.border = "1px solid red";
    document.querySelector("#validMsgDate").style.visibility = "visible";
  } else {
    document.querySelector("#datepicker").style.border = ".5px solid black";
    document.querySelector("#validMsgDate").style.visibility = "hidden";
  }
};

const validStyle = () => {
  if (style.value === "fabric") {
    document.querySelector("#productstyle").style.border = "1px solid red";
    document.querySelector("#validMsgStyle").style.visibility = "visible";
  } else {
    document.querySelector("#productstyle").style.border = ".5px solid black";
    document.querySelector("#validMsgStyle").style.visibility = "hidden";
  }
};

const addDays = (date, days) => {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
};

const calc = () => {
  if (
    style.value === cotton.value &&
    date.value >= today &&
    number.value <= 50 &&
    number.value >= 1
  ) {
    document.querySelector("#date-p").innerHTML =
      "Your Estimated Shipping Time Is";
    document.querySelector("#date-text").style.display = "inline-block";
    document.querySelector("#date-text").innerHTML =
      "Delivery date: " +
      addDays(new Date(date.value), 2).toISOString().split("T")[0];
  } else if (
    style.value === cotton.value &&
    date.value >= today &&
    number.value >= 50 &&
    number.value <= 100
  ) {
    document.querySelector("#date-p").innerHTML =
      "Your Estimated Shipping Time Is";
    document.querySelector("#date-text").style.display = "inline-block";
    document.querySelector("#date-text").innerHTML =
      "Delivery date: " +
      addDays(new Date(date.value), 3).toISOString().split("T")[0];
  } else if (
    style.value === linen.value &&
    date.value >= today &&
    number.value <= 50 &&
    number.value >= 1
  ) {
    document.querySelector("#date-p").innerHTML =
      "Your Estimated Shipping Time Is";
    document.querySelector("#date-text").style.display = "inline-block";
    document.querySelector("#date-text").innerHTML =
      "Delivery date: " +
      addDays(new Date(date.value), 4).toISOString().split("T")[0];
  } else if (
    style.value === linen.value &&
    date.value >= today &&
    number.value >= 50 &&
    number.value <= 100
  ) {
    document.querySelector("#date-p").innerHTML =
      "Your Estimated Shipping Time Is";
    document.querySelector("#date-text").style.display = "inline-block";
    document.querySelector("#date-text").innerHTML =
      "Delivery date: " +
      addDays(new Date(date.value), 5).toISOString().split("T")[0];
  }
};

console.log(style.value);
