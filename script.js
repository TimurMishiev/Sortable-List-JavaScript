const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const listOfDailyTasks = [
	"Brush teeth",
	"Exersize",
	"Take a shower",
	"Drink Coffee",
	"Learn JS",
	"Take a break",
	"Learn Algorithms",
	"Have a dinner with Ira",
	"Watch a movie",
	"Listen to a Lecture",
];

//Store the list items
const listItems = [];

let dragStartIndex;

createList();

// insert list items into DOM
function createList() {
	[...listOfDailyTasks]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((dailyTask, index) => {
			const listItem = document.createElement("li");

			listItem.setAttribute("data-index", index);

			listItem.innerHTML = `
    <span class="number">${index + 1} </span>
    <div class="draggable" draggable="true">
    <p class="item-name">${dailyTask} </p>
    <i class="fa fa-grip-lines"></i></div>
    `;
			listItems.push(listItem);
			draggable_list.appendChild(listItem);
		});
}
