(function() {
    var names = ["Pavitra", "John", "Jen", "Jason", "Namitha", "Niveditha", "Laura", "Pavan", "Raquel"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
