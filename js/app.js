'use strict';

let hour = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m',];

let seattle = {
  name: 'Seattle',
  cookieNumberArray: [],
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookieNumberArray.push(cookiesSoldThisHour);
      console.log(cookiesSoldThisHour);
    }
  },
  render: function () {

    this.calCookiesPerHour();
    let dataSheetContainer = document.getElementById('test1');
    let ul = document.createElement('ul');
    dataSheetContainer.appendChild(ul);
    ul.setAttribute('class', 'seattleCookies1');
    ul.textContent = 'Seattle Hourly List of cookies';

    for (let i = 0; i < hour.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${hour[i]}: ${this.cookieNumberArray[i]} Cookies`;
      ul.appendChild(li);
    }

    let totalSign = document.createElement('li');
    ul.appendChild(totalSign);
    function sumArray(cookieNumberArray) {
      let sum = 0;
      for (let i = 0; i < cookieNumberArray.length; i += 1) {
        sum += cookieNumberArray[i];
      }
      console.log(`sum ${sum}`);
      return sum;
    }
    let total = sumArray(this.cookieNumberArray);
    totalSign.textContent = `Total: ${total} Cookies`;
  }

};

seattle.render();
console.log(seattle);


let tokyo = {
  name: 'Tokyo',
  cookieNumberArray: [],
  min: 3,
  max: 24,
  avg: 1.2,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookieNumberArray.push(cookiesSoldThisHour);
      console.log(cookiesSoldThisHour);
    }
  },
  render: function () {

    this.calCookiesPerHour();
    let dataSheetContainer = document.getElementById('test2');
    let ul = document.createElement('ul');
    dataSheetContainer.appendChild(ul);
    ul.setAttribute('class', 'tokyoCookies');
    ul.textContent = 'Tokyo Hourly List of cookies';

    for (let i = 0; i < hour.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${hour[i]}: ${this.cookieNumberArray[i]} Cookies`;
      ul.appendChild(li);
    }

    let totalSign = document.createElement('li');
    ul.appendChild(totalSign);
    function sumArray(cookieNumberArray) {
      let sum = 0;
      for (let i = 0; i < cookieNumberArray.length; i += 1) {
        sum += cookieNumberArray[i];
      }
      console.log(`sum ${sum}`);
      return sum;
    }
    let total = sumArray(this.cookieNumberArray);
    totalSign.textContent = `Total: ${total} Cookies`;
  }

};

tokyo.render();
console.log(tokyo);

let dubai = {
  name: 'Dubai',
  cookieNumberArray: [],
  min: 11,
  max: 38,
  avg: 3.7,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookieNumberArray.push(cookiesSoldThisHour);
      console.log(cookiesSoldThisHour);
    }
  },
  render: function () {

    this.calCookiesPerHour();
    let dataSheetContainer = document.getElementById('test3');
    let ul = document.createElement('ul');
    dataSheetContainer.appendChild(ul);
    ul.setAttribute('class', 'dubaiCookies');
    ul.textContent = 'Dubai Hourly List of cookies';

    for (let i = 0; i < hour.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${hour[i]}: ${this.cookieNumberArray[i]} Cookies`;
      ul.appendChild(li);
    }

    let totalSign = document.createElement('li');
    ul.appendChild(totalSign);
    function sumArray(cookieNumberArray) {
      let sum = 0;
      for (let i = 0; i < cookieNumberArray.length; i += 1) {
        sum += cookieNumberArray[i];
      }
      console.log(`sum ${sum}`);
      return sum;
    }
    let total = sumArray(this.cookieNumberArray);
    totalSign.textContent = `Total: ${total} Cookies`;
  }

};

dubai.render();
console.log(dubai);


let paris = {
  name: 'paris',
  cookieNumberArray: [],
  min: 20,
  max: 38,
  avg: 2.3,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookieNumberArray.push(cookiesSoldThisHour);
      console.log(cookiesSoldThisHour);
    }
  },
  render: function () {

    this.calCookiesPerHour();
    let dataSheetContainer = document.getElementById('test4');
    let ul = document.createElement('ul');
    dataSheetContainer.appendChild(ul);
    ul.setAttribute('class', 'parisCookies');
    ul.textContent = 'Paris Hourly List of cookies';

    for (let i = 0; i < hour.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${hour[i]}: ${this.cookieNumberArray[i]} Cookies`;
      ul.appendChild(li);
    }

    let totalSign = document.createElement('li');
    ul.appendChild(totalSign);
    function sumArray(cookieNumberArray) {
      let sum = 0;
      for (let i = 0; i < cookieNumberArray.length; i += 1) {
        sum += cookieNumberArray[i];
      }
      console.log(`sum ${sum}`);
      return sum;
    }
    let total = sumArray(this.cookieNumberArray);
    totalSign.textContent = `Total: ${total} Cookies`;
  }

};

paris.render();
console.log(paris);

let lima = {
  name: 'Seattle',
  cookieNumberArray: [],
  min: 2,
  max: 16,
  avg: 4.6,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookieNumberArray.push(cookiesSoldThisHour);
      console.log(cookiesSoldThisHour);
    }
  },
  render: function () {

    this.calCookiesPerHour();
    let dataSheetContainer = document.getElementById('test5');
    let ul = document.createElement('ul');
    dataSheetContainer.appendChild(ul);
    ul.setAttribute('class', 'limaCookies');
    ul.textContent = 'Lima Hourly List of cookies';

    for (let i = 0; i < hour.length; i++) {
      let li = document.createElement('li');

      li.textContent = `${hour[i]}: ${this.cookieNumberArray[i]} Cookies`;
      ul.appendChild(li);
    }

    let totalSign = document.createElement('li');
    ul.appendChild(totalSign);
    function sumArray(cookieNumberArray) {
      let sum = 0;
      for (let i = 0; i < cookieNumberArray.length; i += 1) {
        sum += cookieNumberArray[i];
      }
      console.log(`sum ${sum}`);
      return sum;
    }
    let total = sumArray(this.cookieNumberArray);
    totalSign.textContent = `Total: ${total} Cookies`;
  }

};

lima.render();
console.log(lima);


//grab the element in Dom
// let dataSheetContainer = document.getElementById('test1');
// let ul = document.createElement('ul');
// ul.textContent = `${hour[0]} ${cookiesSoldThisHour}`;
// dataSheetContainer.appendChild(ul)


//console.log(dataSheetContainer);
// console.log(seattle.calCookiesPerHour());
// console.log(`${hour[0]}: ${cookiesSoldThisHour}Cookies ` );
