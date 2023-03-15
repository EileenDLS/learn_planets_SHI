window.addEventListener("DOMContentLoaded", (event) => {
  const planetSet = new Set();

  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target
    const planetId = ev.dataTransfer.getData("text/plain");
    const planet_transfered = transfer(planetId);
    const dropZoneId = ev.target.id;
    // if the planet is dragged into correct zone, add it to the target's DOM
    if (planet_transfered == dropZoneId) {
      planetSet.add(planetId);
      ev.target.appendChild(document.getElementById(planetId));
    } else {
      alert("Wrong position!");
    }
    // if all planets are put into set, game over
    if (planetSet.size == 10) {
      document.getElementById("cgrts").style.display = "";
    }
  }
  // 0. Sun     1. Mercury  2. Venus   3. Earth   4. Mars
  // 5. Jupiter 6. Saturn   7. Uranus  8. Neptune 9. Pluto
  function transfer(planetId) {
    switch (planetId) {
      case "sun":
        return 0;
      case "mercury":
        return 1;
      case "venus":
        return 2;
      case "earth":
        return 3;
      case "mars":
        return 4;
      case "jupiter":
        return 5;
      case "saturn":
        return 6;
      case "uranus":
        return 7;
      case "neptune":
        return 8;
      case "pluto":
        return 9;
    }
  }
  const planets = document.querySelectorAll(".planet");
  planets.forEach((planet) => {
    planet.addEventListener("dragstart", dragstart_handler);
  });
  const dropZones = document.querySelectorAll(".dropzone");
  dropZones.forEach((dropZone) => {
    dropZone.addEventListener("drop", drop_handler);
    dropZone.addEventListener("dragover", dragover_handler);
  });

  var resetBtn = document.getElementById("Reset");
  resetBtn.addEventListener("click", () => {
    window.location.reload();
  });
    
});
