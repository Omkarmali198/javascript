
const bank = {
    bankname: `State bank of india`,
    accountNumber: 123456789,
    ifscCode: `SBI7895467`,
    interestRate: `8%`
}
console.table(bank);

console.log(`--------Creating an objet banklocation-------------`);

const object = {
    street: `Hinjawadi`,
    city: `Pune`,
    pin: `456781`
}
console.table(object);

console.log(`--------Creating an Object Rate of interast---------`);
const interastRates ={
    homeLoan: `7.1%`,
    personalLoan: `9.5%`,
    educationLoan: `8.3%`
} 
console.table(interastRates);

Object.assign(bank,object);

const mergedObject = Object.assign({ }, bank, object);
console.table(mergedObject);

Object.assign(bank,object,interastRates)
const mergedinterastRates = Object.assign({ },bank,interastRates,object)
console.table(mergedinterastRates);

