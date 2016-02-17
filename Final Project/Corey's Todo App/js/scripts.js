/* Geekwise - JavaScript I
 * Final Project Example
 * Corey Shuman
 * 12/15/2015
 *
 *
 */
 
 var listArray = [];
 var itemId = 1;
 var editing = false;
 var curItem = null;
 
 $(function() {
	var newItemButton = document.getElementById("NewItemButton");
	var itemInput = document.getElementById("ItemInput");
	var itemID = document.getElementById("ItemID");
	var itemEditButton = document.getElementById("ItemButton");
	var listNode = document.getElementById("ListNode");
	
	function handleNewItemClick(evt) {
		showEditWindow(true);
	}
	
	function handleEditClick(evt) {
		showEditWindow(false);
		if(itemID.value === "0") {
			addItemToList(itemInput.value);
		} else {
			editItem(parseInt(itemID.value), itemInput.value);
		}
		itemInput.value = "";
		itemID.value = "0";
		printList();
	}
	
	function addItemToList(itemText) {
		if(!itemText) return;
		var itemObj = {};
		itemObj.id = itemId++;
		itemObj.done = false;
		itemObj.text = itemText;
		listArray.push(itemObj);
	}
	
	function setupEditAction(id) {
		itemID.value = id;
		// find item and update
		for(var i=0; i<listArray.length; i++) {
			var item = listArray[i];
			if(item.id === id) {
				itemInput.value = item.text;
				break;
			}
		}
		showEditWindow(true);
	}
	
	function editItem(id, text) {
		// find item and update
		for(var i=0; i<listArray.length; i++) {
			var item = listArray[i];
			if(item.id === id) {
				item.text = text;
				break;
			}
		}
	}
	
	function deleteItem(id) {
		// find item and stop for loop so i is our item's index
		for(var i=0; i<listArray.length; i++) {
			var item = listArray[i];
			if(item.id === id) {
				break;
			}
		}
		// if i is < length then it found our item
		if(i < listArray.length) {
			listArray.splice(i,1);
		}
	}
	
	function markItem(id) {
		// find item and update
		for(var i=0; i<listArray.length; i++) {
			var item = listArray[i];
			if(item.id === id) {
				item.done = !item.done;
				break;
			}
		}
	}
	
	function handleListItemButtons(evt) {
		var target = evt.target;
		evt.preventDefault();
		console.log(target)
		if(target.hasAttribute("data-action")) {
			var action = target.getAttribute("data-action");
			var itemId = target.parentNode.parentNode.getAttribute("rel");
			itemId = parseInt(itemId);
			console.log(itemId);
			switch(action) {
				case "edit":
					// bring up edit window
					setupEditAction(itemId);
					break;
				case "delete":
					if(confirm("Are you sure you want to delete?")) {
						deleteItem(itemId);
						printList();
					}
					break;
				case "mark":
					markItem(itemId);
					printList();
					break;
			}
		} else if(target.hasAttribute("rel")) {
			selectItem(target);
			
		}
	}
	
	function selectItem(ref) {
		clearSelect();
		ref.setAttribute("class", "selectLite");
		curItem = ref;
	}
	
	function clearSelect() {
		var items = document.querySelectorAll("ol li a");
		for(var i = 0; i < items.length; i++) {
			items[i].removeAttribute("class");
		}
		curItem = null;
	}
	
	function printList() {
		listNode.innerHTML = "";
		listArray.forEach(function(item) {
			var newTodo = createListItem(item);
			listNode.appendChild(newTodo);
		});
	}
	
	function showEditWindow(show) {
		var wnd = document.getElementById("EditWindowDiv");
		if(show) {
			editing = true;
			wnd.style.display = "block";
			itemInput.focus();
		} else {
			editing = false;
			wnd.style.display = "none";
		}
	}
	
	function createListItem(itemObj) {
		var item = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", "");
		a.innerHTML = itemObj.text + getListControls();
		a.setAttribute("rel", itemObj.id);
		if(itemObj.done) {
			a.style.textDecoration = "line-through";
		}
		item.appendChild(a);
		return item;
	}
	
	function getListControls() {
		var html = "";
		
		html += '<span class="ListControls pull-right">';
		html += '<span class="glyphicon glyphicon-pencil" aria-hidden="true" data-action="edit"></span>';
		html += '<span class="glyphicon glyphicon-ok" aria-hidden="true" data-action="mark"></span>';
		html += '<span class="glyphicon glyphicon-remove" aria-hidden="true" data-action="delete"></span>';
		html += '</span>';
		return html;
	}
	
	newItemButton.addEventListener('click', handleNewItemClick);
	itemEditButton.addEventListener('click', handleEditClick);
	
	// handle all edit, delete, done events using a single event handler
	listNode.addEventListener('click', handleListItemButtons);
	
	// handle enter and escape keys
	document.onkeydown = function keyCheck(e) {	
		var KeyID = (window.event) ? event.keyCode : e.keyCode;
		console.log(KeyID)
		switch(KeyID) {
			case 13: // [enter]
				handleEditClick();
				break;
			case 27: // [esc]
				showEditWindow(false);
				clearSelect();
				break;
			case 78: // new (n)
				if(!editing) {
					showEditWindow(true);
					e.preventDefault()
				}
				break;
			case 69: // edit (e)
				if(!editing && curItem !== null) {
					var itemId = curItem.getAttribute("rel");
					itemId = parseInt(itemId);
					setupEditAction(itemId);
					e.preventDefault();
				}
				break;
			case 68: // delete (d)
				if(!editing && curItem !== null) {
					var itemId = curItem.getAttribute("rel");
					itemId = parseInt(itemId);
					if(confirm("Are you sure you want to delete?")) {
						deleteItem(itemId);
						printList();
					}
				}
				break;
			case 70: // mark (f)
				if(!editing && curItem !== null) {
					var itemId = curItem.getAttribute("rel");
					itemId = parseInt(itemId);
					markItem(itemId);
					printList();
				}
				break;
		}
		
	}
 });
 

	
	
