function createBankAccount() {
    let balance = 0; // private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            }
        },

        getBalance() {
            console.log(`Current balance: ${balance}`);
            return balance;
        }
    };
}
