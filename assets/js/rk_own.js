function toggleImage() {
  var imageElement = document.getElementById('profileImage');
  if (imageElement.src.endsWith('pic2_1.png')) {
      imageElement.src = 'assets/img/pic1_2.png';
  } else {
      imageElement.src = 'assets/img/pic2_1.png';
  }
}

function handleSelect(ev) {
  let select = ev.target;
  filterSelection(select.value)
}


filterSelection("All")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("searchable-item");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Filter projects on topic and sector
function filterProjects() {
  // Get the selected value from the dropdown
  var selectedTopic = document.getElementById('filterTopics').value;
  var selectedSector = document.getElementById('filterSectors').value;

  // Get all grid items
  var gridItems = document.querySelectorAll('.grid-project');

  // Loop through each grid item and show/hide based on the selected category
  gridItems.forEach(function(item) {
      var categories = item.className.split(' ');

      // If "All" is selected or the item belongs to the selected category, show it; otherwise, hide it
      if (selectedTopic === 'alltopics' && selectedSector === 'allsectors') {
          item.style.display = 'inline-block';
      } else if (selectedTopic === 'alltopics' && categories.includes(selectedSector)) {
          item.style.display = 'inline-block';
      } else if (categories.includes(selectedTopic) && selectedSector === 'allsectors') {
          item.style.display = 'inline-block';
      } else if (categories.includes(selectedTopic) && categories.includes(selectedSector)) {
          item.style.display = 'inline-block';
      } else {
          item.style.display = 'none';
      }
  });
}
