var set = setInterval(dynamic, 1000);
function dynamic() {
  var to = new Date();
  var tim = to.toLocaleTimeString();
  document.getElementById("time").innerHTML = tim;
}
function more() {
  document.getElementById("but2").innerHTML =
    "Robotics is an interdisciplinary research area at the interface of computer science[1] and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe. Robotics draws on the achievement of information engineering, computer engineering, mechanical engineering, electronic engineering and others." +
    "Robotics develops machines that can substitute for humans and replicate human actions. Robots can be used in many situations and for lots of purposes, but today many are used in dangerous environments (including inspection of radioactive materials, bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g. in space, underwater, in high heat, and clean up and containment of hazardous materials and radiation). Robots can take on any form but some are made to resemble humans in appearance. This is said to help in" +
    " the acceptance of a robot in certain replicative behaviors usually performed by people. Such robots attempt to replicate walking, lifting, speech, cognition, or any other human activity. Many of today's robots are inspired by nature, contributing to the field of bio-inspired robotics.";
  document.getElementById("butt").style.display = "none";
}
