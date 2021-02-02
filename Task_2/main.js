//Task_2
document.body.onload = addElement;

function addElement () {
    // susikuriam ir pridedam elementams id//
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "moku");
    const newBtn = document.createElement("Button");
    newBtn.setAttribute("id", "spauduliukas");
  
    // Text Node //
    const newContent = document.createTextNode("Valio pavyko");
    const newBtnContent = document.createTextNode("Nespausk cia!!!");

    // pridedam Node //
    newDiv.appendChild(newContent);
    newBtn.appendChild(newBtnContent)
  
    // gauaname elementus //
    const currentDiv = document.getElementById("moku");
    const currentBtn = document.getElementById("spauduliukas")
    // idedam i elemetu viduri
    document.body.insertBefore(newDiv, currentDiv);
    document.body.insertBefore(newBtn, currentBtn);

    // gaunam jau esamus elementus //
    var element = document.getElementById("moku");
    var btn = document.getElementById("spauduliukas");
    // moku element styles///
    element.style.backgroundColor = "green";
    element.style.width = "300px"
    element.style.height = "300px"
    element.style.position = "relative"
    element.style.left = "40%"
    element.style.right = "40%"
    
    btn.onclick = function () {destroy(btn,element)};
  }

  function destroy(btn,div) {
    btn.style.display = "none"
    div.style.display = "none"
  }