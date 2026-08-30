const { employees, generateId } = require("../data/employees");

function getEmployees(req, res) {
    return res.status(200).json({
        sucesso: true,
        usuarios: employees
    });
}

function getEmployeeById(req, res) {
    const id = Number(req.params.id);

    const employee = employees.find(employee => employee.id === id);

    if (!employee) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Usuário não encontrado."
        });
    }

    return res.status(200).json({
        sucesso: true,
        usuario: employee
    });
}

function createEmployee(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Nome e e-mail são obrigatórios."
        });
    }

    const newEmployee = {
        id: generateId(),
        name,
        email
    };

    employees.push(newEmployee);

    return res.status(201).json({
        sucesso: true,
        mensagem: "Usuário cadastrado com sucesso.",
        usuario: newEmployee
    });
}

function updateEmployee(req, res) {
    const id = Number(req.params.id);

    const index = employees.findIndex(employee => employee.id === id);

    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Usuário não encontrado."
        });
    }

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Nome e e-mail são obrigatórios."
        });
    }

    employees[index] = {
        id: employees[index].id,
        name,
        email
    };

    return res.status(200).json({
        sucesso: true,
        mensagem: "Usuário atualizado com sucesso.",
        usuario: employees[index]
    });
}

function deleteEmployee(req, res) {
    const id = Number(req.params.id);

    const index = employees.findIndex(employee => employee.id === id);

    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            mensagem: "Usuário não encontrado."
        });
    }

    const removedEmployee = employees.splice(index, 1);

    return res.status(200).json({
        sucesso: true,
        mensagem: "Usuário removido com sucesso.",
        usuario: removedEmployee[0]
    });
}

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};