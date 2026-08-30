let employees = [
    {
        id: 1,
        name: "Carlos Silva",
        email: "carlos@verdevida.com"
    },
    {
        id: 2,
        name: "Ana Souza",
        email: "ana@verdevida.com"
    },
    {
        id: 3,
        name: "Marcos Oliveira",
        email: "marcos@verdevida.com"
    }
];

function generateId() {
    if (employees.length === 0) {
        return 1;
    }

    return Math.max(...employees.map(employee => employee.id)) + 1;
}

module.exports = {
    employees,
    generateId
};