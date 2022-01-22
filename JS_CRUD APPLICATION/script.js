/* adding the add functionality  */
let addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addchapter);
let parentList = document.getElementById("parentList");

function addchapter(e) {
  if (parentList.children[0].className == "emptyMssg") {
    parentList.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  console.log(currentInput.value);
  let currentChapterName = currentInput.value;

  let newLi = document.createElement("li");
  /* newLi.classList.add('list-group-item') */
  newLi.className = "list-group-item d-flex justify-content-between";
  newLi.innerHTML = ` <h3 class="flex-grow-1">${currentChapterName}</h3>
            <button class="btn btn-warning mx-3" type="button">Edit</button>
            <button class="btn btn-danger" type="button" onclick="removeChapter(this)">Remove</button>`;

  parentList.appendChild(newLi);
}

//functionality for remove button
function removeChapter(currElement) {
  /* console.log(currElement.parentElement) */
  currElement.parentElement.remove();
  let parentList = document.getElementById("parentList");
  if (parentList.children.length <= 0) {
    let newEmptyMssg = document.createElement("h3");
    newEmptyMssg.classList.add("emptyMssg");
    newEmptyMssg.textContent =
      "OOPS ! YOUR LIST SEEMS TO BE EMPTY  , Please add new elements ";
    parentList.appendChild(newEmptyMssg);
  }
}

//edit chapter

function editChapter(currElement) {
  /* console.log(currElement.previousElementSibling); */
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    let currentChapterName = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currentChapterName;
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Done";
    let currentChapterName = currElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Chapter Name";
    currInput.className = "form-control";
    currInput.value = currentChapterName;

    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }
}
