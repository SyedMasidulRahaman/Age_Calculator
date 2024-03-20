const inputBox = document.querySelector('input');
inputBox.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');
let calculate = () => {
  let birthDate = new Date(inputBox.value);

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth() + 1;
  let birthDay = birthDate.getDate();

  let currentDate = new Date();

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  let yearDiff, monthDiff, dayDiff;

  yearDiff = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    monthDiff = currentMonth - birthMonth;
  } else {
    yearDiff--;
    monthDiff = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) {
    dayDiff = currentDay - birthDay;
  } else {
    monthDiff--;
    dayDiff = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (monthDiff < 0) {
    monthDiff = 11;
    yearDiff--;
  }

  result.innerHTML=`You are <span>${yearDiff}</span> Years, <span>${monthDiff}</span> Months and <span>${dayDiff}</span> Days old`;
};


let getDaysInMonth=(year, month)=>{
  return new Date(year, month , 0).getDate();
}
