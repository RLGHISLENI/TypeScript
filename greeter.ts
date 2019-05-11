class Student {
    public FullName : string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.FullName = firstName + " " + middleInitial + " " + lastName; 
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterPerson(person: Person) {
    return "Olá, " + person.firstName + " " + person.lastName + "<br/>";
}

function greeterStudent(student: Student) {
    return "Olá aluno, " + student.FullName;
}

let person = {
    firstName: "Robertinho",
    lastName: "Ghisleni"
};

let html = greeterPerson(person) + 
           greeterStudent(new Student(
               "Roberto",
               "Luis",
               "Ghisleni"
           ));

document.body.innerHTML = html;