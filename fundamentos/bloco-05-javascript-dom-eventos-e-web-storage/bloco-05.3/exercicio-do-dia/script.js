function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
 
function addDaysDez() {
    let isertingDays = document.getElementById("days");
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayList = document.createElement("li");
        if (day === 24 || day === 31) {
            dayList.className = "day holiday";
            dayList.innerHTML = day;
            isertingDays.appendChild(dayList);
        } else if (day === 4 || day === 11 || day === 18) {
            dayList.className = "day friday";
            dayList.innerHTML = day;
            isertingDays.appendChild(dayList);
        } else if (day === 25) {
            dayList.className = "day holiday friday";
            dayList.innerHTML = day;
            isertingDays.appendChild(dayList);
        } else {
            dayList.className = "day";
            dayList.innerHTML = day;
            isertingDays.appendChild(dayList);
        }
    }
};

addDaysDez();

function holidayButton(stringButton) {
    let button = document.querySelector(".buttons-container");
    let newButton = document.createElement("button");
    let newButtonId = "btn-holiday";
    newButton.innerHTML = stringButton;
    newButton.id = newButtonId;
    button.appendChild(newButton);
};

holidayButton("Feriados");

function holidayColorChange() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidayArray = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    holidayButton.addEventListener('click', function() {
      for (let index = 0; index < holidayArray.length; index += 1) {
        if (holidayArray[index].style.backgroundColor === setNewColor) {
          holidayArray[index].style.backgroundColor = backgroundColor;
        } else {
          holidayArray[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  holidayColorChange();

  function fridayButton(stringFriday) {
    let fridayButton = document.createElement("button");
    let fridayId = "btn-friday";
    let button = document.querySelector(".buttons-container");
    fridayButton.innerHTML = stringFriday;
    fridayButton.id = fridayId;
    button.appendChild(fridayButton);
  };

  fridayButton("Sexta-feira");

  function fridayTextChange(fridays) {
      let fridayArray = document.getElementsByClassName("friday");
      let fridayButton = document.querySelector("#btn-friday");
      let setNewText = "SdSaudade";

      fridayButton.addEventListener("click", function() {
        for (let index = 0; index < fridayArray.length; index += 1) {
              if (fridayArray[index].innerHTML !== setNewText) {
                fridayArray[index].innerHTML = setNewText;
              } else {
                fridayArray[index].innerHTML = fridays[index];
              }
            }
          })
  };

  let dezFridays = [ 4, 11, 18, 25 ];
  fridayTextChange(dezFridays);

  function dayMouseOver() {
    let daysZoom = document.querySelector('#days');
  
    daysZoom.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let daysNormal = document.querySelector('#days');
  
    daysNormal.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();

  function newTask(task) {
      let newTagTask = document.createElement("span");
      let newTask = task;
      let getClassName = document.querySelector(".my-tasks");


      newTagTask.innerHTML = newTask;
      getClassName.appendChild(newTagTask);
  };

  newTask("Estudar");

  function backgroundColorTask(color) {
      let newDiv = document.createElement("div");
      let getClassName = document.querySelector(".my-tasks");


      newDiv.className = "task";
      newDiv.style.backgroundColor = color;
      getClassName.appendChild(newDiv);
  };

  backgroundColorTask("cor");

  function taskSelected() {
      let getDiv = document.querySelector(".task");

      getDiv.addEventListener("click", function(event) {
          if (getDiv.className === "task selected") {
              event.target.className = "task";
          } else {
              event.target.className = "task selected";
          }
      })
  };

  taskSelected();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();