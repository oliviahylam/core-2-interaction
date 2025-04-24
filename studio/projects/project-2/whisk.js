gsap.registerPlugin(Draggable);

// get the button element
var button = document.querySelector('button[name="submit"]');

// track cumulative rotation
let totalRotation = 0;
let lastRotation = 0;

// make the whisk draggable in rotation
Draggable.create(".whisk", {
  type: "rotation",
  onDrag: function () {
    let delta = this.rotation - lastRotation;

    // Normalize rotation direction
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    totalRotation += Math.abs(delta);
    lastRotation = this.rotation;

    // For debug
    console.log("Total rotation:", totalRotation);

    // Show the button after enough whisking
    if (totalRotation > 1000) {
      button.style.opacity = 1;
    }
  },
});
