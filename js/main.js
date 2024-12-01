var websiteNameInput = document.getElementById("Bookmarkname");
var websiteUrlInput = document.getElementById("WebsiteURL");
var inputArray = [];
function submitUrl() {
  var inputValue = {
    Bookmarkname: websiteNameInput.value,
    WebsiteURL: websiteUrlInput.value,
  };
  var urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;

  if (!urlRegex.test(inputValue.WebsiteURL)) {
    alert("Please enter a valid URL.");
    return;
  }
  
  inputArray.push(inputValue);
  clearInput();
  displayData();
}

function clearInput() {
  (websiteNameInput.value = ""), (websiteUrlInput.value = "");
}

function displayData() {
  var cartoona = " ";
  for (var i = 0; i < inputArray.length; i++) {
    cartoona += `<tr>
            <td>${i}</td>
            <td>${inputArray[i].Bookmarkname}</td>
            <td>
              <button class="btn btn-table rounded-3" onclick="visitUrl('${inputArray[i].WebsiteURL}')">Visit</button>
            </td>
            <td>
              <button onclick="deleteData(${i})" class="btn btn-table rounded-3">detele</button>
            </td>
          </tr>`;
  }
  document.getElementById("demo").innerHTML = cartoona;
}
function visitUrl(url) {
    window.open(url, "_blank");
  }
function deleteData(index) {
  inputArray.splice(index, 1);
  displayData();
}
