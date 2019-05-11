var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.FullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeterPerson(person) {
    return "Olá, " + person.firstName + " " + person.lastName + "<br/>";
}
function greeterStudent(student) {
    return "Olá aluno, " + student.FullName;
}
var person = {
    firstName: "Robertinho",
    lastName: "Ghisleni"
};
var html = greeterPerson(person) +
    greeterStudent(new Student("Roberto", "Luis", "Ghisleni"));
document.body.innerHTML = html;
