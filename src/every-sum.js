const employees = [{
  name: 'Jane Doe',
  salary: 100
}, {
  name: 'Donald Jones',
  salary: 300
}, {
  name: 'Donna Appleseed',
  salary: 500
}, {
  name: 'John Smith',
  salary: 893
}, {
  name: 'Richard Tea',
  salary: 948
}];

const formValues = [
  'Shaun',
  'Wassell',
  'Main',
  'developer'
]

const makeMoreThanOneThousand = employees => employees.salary > 1000;

// You have to define a new constant otherwise you won't get a new result
const moreThan = employees.every(makeMoreThanOneThousand);

const isNotEmpty = string => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

console.log(moreThan);
