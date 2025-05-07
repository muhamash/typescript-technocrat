// Test Case 3: Edge case - Numeric model
const futureCar = new Car("Tesla", 2030, "Model 3");
console.log(futureCar.getInfo());    // Make: Tesla, Year: 2030
console.log(futureCar.getModel());   // Model: Model 3

// Test Case 4: Unicode/Emoji in make and model
const funCar = new Car("🚗 EmojiCar", 2022, "Smile😊");
console.log(funCar.getInfo());       // Make: 🚗 EmojiCar, Year: 2022
console.log(funCar.getModel());      // Model: Smile😊

// Test Case 5: Long string values
const longCar = new Car("SuperLongCarCompanyNameLtd", 2021, "ModelWithAVeryLongName123456789");
console.log(longCar.getInfo());      // Make: SuperLongCarCompanyNameLtd, Year: 2021
console.log(longCar.getModel());     // Model: ModelWithAVeryLongName123456789