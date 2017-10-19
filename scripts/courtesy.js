// Description:
//   Be courteous
//
// Commands:
//   hubot what time is it(?) - Respond with the current server time

var reasons = ["Darmok and Jalad at Tanagra",
               "Shaka, when the walls fell",
               "Mirab, his sails unfurled",
               "Sokath - his eyes uncovered",
               "Kailash, when it rises",
               "The river Temarc - in winter",
               "Chenza at court - the court of silence",
               "Uzani - his army with fist open... his army with fist closed",
               "Picard and Dathon at El-Adrel",
               "Hodor!",
               "Hodor! Hodor!",
               "Hodor! HODOR! Hodor!"]

module.exports = function(robot) {
  robot.hear(/(thanks|thank you),? (hubot|hodor)/i, function(msg) {
    msg.send("You're welcome, " + msg.envelope.user.name)
  });

  robot.respond(/what time is it(\?)*$/i, function(msg) {
    var now = new Date();
    msg.send ("Current server time is " + now)
  });

  robot.hear(/why,? (hubot|hodor)/i, function(msg) {
    var reason = reasons[Math.floor(Math.random()*reasons.length)];
    msg.send(reason);
  });

  robot.respond(/why/i, function(msg) {
    var reason = reasons[Math.floor(Math.random()*reasons.length)];
    msg.send(reason);
  });

  robot.hear(/because,? (hubot|hodor)/i, function(msg) {
    msg.send("Don't you take that tone with me, " + msg.envelope.user.name)
  });

  robot.hear(/I'm serious,? (hubot|hodor)/i, function(msg) {
    msg.send("Glad to meet you serious, I'm Hodor");
  });

  robot.respond(/I'm serious/i, function(msg) {
    msg.send("Glad to meet you serious, I'm Hodor");
  });

  robot.respond(/open the pod bay doors/i, function(msg) {
    msg.send ("I can't do that, " + msg.envelope.user.name)
  });

  robot.hear(/open the pod bay doors,? (hubot|hodor)/i, function(msg) {
    msg.send ("I can't do that, " + msg.envelope.user.name)
  });
}
