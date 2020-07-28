"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var tasks = [];

var displayTaskList = function() {
    if (tasks.length === 0) {
        tasks = getStorage("tasks_10");
    }
    //display sorted task list with delete links
    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList);

    $("task").focus();
};

var addToTaskList = function() {
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {
        tasks.push(capitalizeTask(task.value));
        setStorage("tasks_10", tasks);
        
        task.value = "";
        displayTaskList();
    }
};

var deleteFromTaskList = function() {
  deleteTask(tasks, this.id);  // 'this' = clicked link
  setStorage("tasks_10", tasks);
  displayTaskList();  
};

var clearTaskList = function() {
    tasks.length = 0;
    clearStorage("tasks_10");
    $("tasks").innerHTML = "";
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    displayTaskList();
};