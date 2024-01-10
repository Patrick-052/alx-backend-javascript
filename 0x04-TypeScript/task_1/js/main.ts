interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

//Extending an interface
interface Directors extends Teacher {
	numberOfReports: number;
}

//Function interface
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName, lastName) {
	return `${firstName.charAt(0)}. ${lastName}`;
}

//class interface
interface Studentclassinterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

//class's constructor interface
interface StudentConstructor {
	new(firstName: string, lastName: string): Studentclassinterface;
}

//Student class
class StudentClass implements Studentclassinterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName;
	}
}
