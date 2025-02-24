// Employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Update without modifying original
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Update and modify original
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Delete without modifying original
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Delete and modify original
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

