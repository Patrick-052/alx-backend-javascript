// Blueprint for a student object
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 18,
	location: "New York",
};

const student2: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 19,
	location: "New Jersey",
};

const studentsList: Array<Student> = [student1, student2];

//Creating a table and populating it with the student objects
function renderTable(): void {
	//creating table, table body and table header
	const table = document.createElement("table");
	const tableBody = document.createElement("tbody");
	const tablehead = document.createElement("thead");

	//row header
	const rowHead = document.createElement("tr");
	const firstNamecellHead = document.createElement("th");
	const firstNamecellHeadText = document.createTextNode("first Name");
	firstNamecellHead.appendChild(firstNamecellHeadText);
	rowHead.appendChild(firstNamecellHead);

	const lastNamecellHead = document.createElement("th");
	const lastNamecellHeadText = document.createTextNode("last Name");
	lastNamecellHead.appendChild(lastNamecellHeadText);
	rowHead.appendChild(lastNamecellHead);

	tablehead.appendChild(rowHead);
	table.appendChild(tablehead);


	//creating table rows and populating with cells
	studentsList.forEach((student) => {
		const row = document.createElement("tr");

		//creating row cells and populating with values
		const firstNamecell = document.createElement("td");
		const firstNamecellText = document.createTextNode(student.firstName);
		firstNamecell.appendChild(firstNamecellText);
		row.appendChild(firstNamecell);

		const lastNamecell = document.createElement("td");
		const lastNamecellText = document.createTextNode(student.lastName);
		lastNamecell.appendChild(lastNamecellText);
		row.appendChild(lastNamecell);
		tableBody.appendChild(row);
	});

	//appending tablebody to the table and table to tablebody
	table.appendChild(tableBody);
	document.body.appendChild(table);
}

renderTable();
