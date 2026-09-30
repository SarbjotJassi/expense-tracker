let button = document.getElementById("addExpense");
let total = 0;

button.addEventListener("click", function () {
    console.log("button clicked")
    let expenseName = document.getElementById("expenseName");
    console.log(expenseName.value);
    let amount = document.getElementById("amount");
    console.log(amount.value);


    let error = document.getElementById("error");
    if (expenseName.value === "" || amount.value === "") {
        error.textContent = "Please fill both fields";
        return;
    }
    error.textContent = "";




    let newItem = document.createElement("p")
    newItem.textContent = expenseName.value + " - ₹" + amount.value;

    let expenseList = document.getElementById("expenseList");
    expenseList.append(newItem);


    let totalText = document.getElementById("total");
    total = total + Number(amount.value);
    totalText.textContent = "Total Expense: ₹" + total;

    expenseName.value = "";
    amount.value = "";

    let clearAll = document.getElementById("clearAll");
    clearAll.addEventListener("click", function () {
        expenseList.innerHTML = "";
        total = 0;
        totalText.textContent = "Total Expense: ₹" + total;
    });
});
