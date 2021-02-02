//Task_3
document.body.onload = addElement;

function addElement () {
    // susikuriam ir pridedam elementams id//
    const newBtn = document.createElement("Button");
    newBtn.setAttribute("id", "KARAMBA");

    const frame = document.createElement("iframe");
    frame.setAttribute("src", "https://www.youtube.com/embed/v=tYZ98vdV8yA&ab_channel=KlaidasMeidus");
    frame.style.display = "none"
    frame.style.width = "640px";
    frame.style.height = "480px";
    frame.style.position = "relative"
    frame.style.left = "30%"
    frame.style.right = "30%"
    
    // Text Node //
    const newBtnContent = document.createTextNode("Nespausk cia!!!");

    // pridedam Node //
    newBtn.appendChild(newBtnContent)
    document.body.appendChild(frame);
  
    // gauaname elementus //
    const currentBtn = document.getElementById("KARAMBA")
    // idedam i elemetu viduri
    document.body.insertBefore(newBtn, currentBtn);

    // gaunam jau esamus elementus //
    var btn = document.getElementById("KARAMBA");

    // Frame styles///
    btn.onclick = function () {destroy(frame)};
  }

  function destroy(frame) {
    frame.style.display = "block"
    
  }