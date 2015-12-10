var input1 = document.createElement("input");
input1.value = "I'm input 1";
input1.setAttribute("style", "background-color:blue; color:white;box-shadow: 6px 6px 5px #888888;border: 5px groove yellow;");
document.body.appendChild(input1);

var input2 = document.createElement("input");
input2.value = "I'm input 2";
input2.setAttribute("style", "background-color:red; color:white;box-shadow: 6px 6px 5px #888888;border: 5px groove yellow;");
document.body.appendChild(input2);

var btn = document.createElement("button");
btn.textContent = "Submit";
btn.setAttribute("style", "background-color:darkgreen; color:white;box-shadow: 6px 6px 5px #888888;border: 5px groove white;");
btn.onclick = function() { alert(input1.value + input2.value) };
document.body.appendChild(btn);
