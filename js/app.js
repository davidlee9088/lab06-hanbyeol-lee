'use strict';

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m',];

let cityArray = [];
function City(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customersThisHour = [];
  this.cookiesSoldThisHour = [];
  this.dailyTotal = 0;
  cityArray.push(this);
}

new City('Seattle', 23, 65, 6.3);
new City('Tokyo', 3, 24, 1.2);
new City('Dubai', 11, 38, 3.7);
new City('Paris', 20, 38, 2.3);
new City('Lima', 2, 16, 4.6);

City.prototype.getRandomCustomers = function () {
  for (let i = 0; i < hour.length; i++) {
    this.customersThisHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
  }
};

City.prototype.calCookiesPerHour = function () {
  this.getRandomCustomers();
  for (let i = 0; i < hour.length; i++) {
    const eachHour = Math.ceil(this.customersThisHour[i] * this.avg);
    this.cookiesSoldThisHour.push(eachHour);
    this.dailyTotal += eachHour;
    console.log(this.cookiesSoldThisHour);
  }
};

City.prototype.render = function () {
  this.getRandomCustomers();
  this.calCookiesPerHour();
  let tbody = document.querySelector('tbody');
  let tRow1 = document.createElement('tr');
  tbody.appendChild(tRow1);
  let tRow1City = document.createElement('td');
  tRow1City.textContent = this.name;
  tRow1.appendChild(tRow1City);
  for (let i = 0; i < hour.length; i++) {
    let sale1 = document.createElement('td');
    sale1.textContent = this.cookiesSoldThisHour[i];
    tRow1.appendChild(sale1);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  tRow1.appendChild(tdTotal);
};

let topSection = function () {
  let headT = document.querySelector('tr');
  for (let i = 0; i < hour.length; i++) {
    let hoursDaily = document.createElement('th');
    headT.appendChild(hoursDaily);
    hoursDaily.textContent = hour[i];
  }
  let totalCityName = document.createElement('th');
  headT.appendChild(totalCityName);
  totalCityName.textContent = 'Daily Location Total';
};

function makeFootRow() {
  let tfoot = document.querySelector('tfoot');
  let totalRow = document.createElement('tr');
  tfoot.appendChild(totalRow);
  let totalData = document.createElement('td');
  totalData.textContent = 'totals';
  totalRow.appendChild(totalData);
  for (let i = 0; i < hour.length; i++) {
    let totalData2 = document.createElement('td');
    let hourlyTotal = 0;
    for (let j = 0; j < cityArray.length; j++) {
      hourlyTotal += cityArray[j].cookiesSoldThisHour[i];
    }
    totalData2.textContent = hourlyTotal;
    totalRow.appendChild(totalData2);
  }
  let grandTotal = 0;
  for (let i = 0; i < cityArray.length; i++) {
    grandTotal += cityArray[i].dailyTotal;
  }
  let grandTotalData = document.createElement('td');
  grandTotalData.textContent = grandTotal;
  totalRow.appendChild(grandTotalData);
}

topSection();
for (let i = 0; i < cityArray.length; i++) {
  cityArray[i].render();
}
makeFootRow();
