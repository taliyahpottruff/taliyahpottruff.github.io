var projects = [
  {
    name: 'Jay Fighter: Remastered',
    image: 'http://i.imgur.com/vmGlCIN.png',
    role: 'Lead Developer'
  }
]

$('#home-button').click(function() {
  $('.section').show();
});

$('#bio-button').click(function() {
  $('.section').hide();
  $('#bio').show();
});

$('#projects-button').click(function() {
  $('.section').hide();
  $('#projects').show();
});

$('#education-button').click(function() {
  $('.section').hide();
  $('#education').show();
});

$('#grid-display').click(function() {
  generateGrid();
});

$('#list-display').click(function() {
  generateList();
});

function generateList() {
  $('#proj').html('');

  for (var i = 0; i < projects.length; i++) {
    console.log("Object " . i);
    $('#proj').append("<div class=\"col s12\"><div class=\"card horizontal\"><div class=\"card-image\"><img src=\"" + projects[i].image + "\"/></div><div class=\"card-content\"><div class=\"card-title\">" + projects[i].name + "</div><p>Role: " + projects[i].role + "</p><p><a href=\"https://github.com/trentonpottruff/jay-fighter-remastered\" class=\"btn waves-effect port-color\">Source Code</a> <a href=\"https://github.com/trentonpottruff/jay-fighter-remastered/releases\" class=\"btn waves-effect port-color\">Download</a></p></div></div></div>");
  }
}

function generateGrid() {
  $('#proj').html('');

  for (var i = 0; i < projects.length; i++) {
    console.log("Object " . i);
    $('#proj').append("<div class=\"col s3\"><div class=\"card\"><div class=\"card-image waves-effect waves-block waves-light\"><img src=\"" + projects[i].image + "\" class=\"activator\"/></div><div class=\"card-reveal\"><div class=\"card-title\">" + projects[i].name + "</div><p>Role: " + projects[i].role + "</p><p><a href=\"https://github.com/trentonpottruff/jay-fighter-remastered\" class=\"btn waves-effect port-color\">Source Code</a> <a href=\"https://github.com/trentonpottruff/jay-fighter-remastered/releases\" class=\"btn waves-effect port-color\">Download</a></p></div></div></div>");
  }
}

generateList();
