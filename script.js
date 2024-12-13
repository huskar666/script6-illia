
const bankAccount = {
    ownerName: "ілля ніколаєнко",
    accountNumber: "1312321123",
    balance: 1000,
  
    deposit(amount) {
      this.balance += amount;
      console.log(`поповнено на ${amount} грн. залишок: ${this.balance} грн.`);
    },
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`знято ${amount} грн. залишок: ${this.balance} грн.`);
      } else {
        console.log("недостатньо коштів на рахунку.");
      }
    }
  };
  
  const amountToDeposit = parseFloat(prompt("введіть суму для поповнення:", "0"));
  bankAccount.deposit(amountToDeposit);
  
  const amountToWithdraw = parseFloat(prompt("введіть суму для зняття:", "0"));
  bankAccount.withdraw(amountToWithdraw);


const weather = {
    temperature: 4,  
    humidity: 50,   
    windSpeed: 10,  
    checkTemperature: function() {
        if (this.temperature < 0) {
            console.log("Температура нижче 0 градусів Цельсія");
        } else {
            console.log("Температура вище або рівна 0 градусів Цельсія");
        }
    }
};
weather.checkTemperature();


const user = {
    name: 'illia',
    email: 'illianikolaienko@gmail.com',
    password: '123456',
    login: function() {
        const inputEmail = 'illianikolaienko@gmail.com'; 
        const inputPassword = '123456'; 
        
        return (inputEmail === this.email && inputPassword === this.password) 
            ? 'успішний вхід' 
            : 'невірний email або пароль';
    }
};
console.log(user.login()); 


const movie = {
    title: 'sekundochka - ne menutochka', 
    director: 'papich',
    year: 2022,
    rating: 9,
    checkRating: function() {
        return this.rating > 8
    }
};
document.getElementById('movieTitle').textContent = movie.title;
document.getElementById('movieDirector').textContent = movie.director;
document.getElementById('movieYear').textContent = movie.year;
document.getElementById('movieRating').textContent = movie.rating;
if (movie.checkRating()) {
    document.getElementById('movieTitle').style.color = 'green';
}