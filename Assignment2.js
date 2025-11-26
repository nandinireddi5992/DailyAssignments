function createBankAccount() {
    let balance = 0;
    let transactionHistory = []; // also private

    return {
        deposit(amount) {
            balance += amount;
            transactionHistory.push({ type: "deposit", amount });
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push({ type: "failed-withdraw", amount });
            } else {
                balance -= amount;
                transactionHistory.push({ type: "withdraw", amount });
                console.log(`Withdrawn: ${amount}`);
            }
        },

        getBalance() {
            console.log(`Balance: ${balance}`);
            return balance;
        },

        getTransactionHistory() {
            return [...transactionHistory]; // return a copy for safety
        }
    };
}

