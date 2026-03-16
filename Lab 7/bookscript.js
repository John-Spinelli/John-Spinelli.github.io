var express = require('express');
var app = express();

app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

app.get('/', function(req, res){
   res.redirect('/bookinventory/list');
});

var books = [       // title, author, publisher, date, and website
  {'title':'Dune', 'author':'Frank Herbert', 'publisher':'Ace Books', 'date':'1965-08-01', 'website':'https://en.wikipedia.org/wiki/Dune_(novel)'},
  {'title':'The Hitchhiker\'s Guide to the Galaxy', 'author':'Douglas Adams', 'publisher':'Pan Books', 'date':'1979-10-12', 'website':'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'},
  {'title':'1984', 'author':'George Orwell', 'publisher':'Secker & Warburg', 'date':'1949-06-08', 'website':'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four'},
  {'title':'Neuromancer', 'author':'William Gibson', 'publisher':'Ace Books', 'date':'1984-07-01', 'website':'https://en.wikipedia.org/wiki/Neuromancer'},
  {'title':'Foundation', 'author':'Isaac Asimov', 'publisher':'Gnome Press', 'date':'1951-05-01', 'website':'https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)'},
]

// List of books, iterates through each JSON in the above list
app.get('/bookinventory/list', function(req, res){

   var html = '<p>'
   for (var i = 0; i < books.length; i++) {
      html = html + books[i].title + ' by ' + books[i].author + '<br>';
      html = html + 'Publisher: ' + books[i].publisher + '<br>';
      html = html + 'Date: ' + books[i].date + '<br>';
      html = html + 'Website: ' + '<a href="' + books[i].website + '">' + books[i].website + '</a><br><br>';
    }
    html += '</p>'

   res.send('List of Johnathan Spinelli\'s books: ' + html + '<br><a href="/bookinventory/add">Add a new book</a> ');
});

// Prompts user with a form to give new book information.
app.get('/bookinventory/add', function(req, res){

  var html = '<br><form action="/bookinventory/addbook" method="post"><label for="title">Title:</label><br><input type="text" id="title" name="title"><br><label for="author">Author:</label><br><input type="text" id="author" name="author"><br><label for="publisher">Publisher:</label><br><input type="text" id="publisher" name="publisher"><br><label for="date">Date:</label><br><input type="text" id="date" name="date"><br><label for="website">Website:</label><br><input type="text" id="website" name="website"><br><br><input type="submit" value="Submit"><br></form>'

  res.send('Insert a new book: ' + html + '<br><a href="/bookinventory/list">List of books</a>');
});

app.post('/bookinventory/addbook', function(req, res){

    console.log(req.body);
    // title, author, publisher, date, and website
    var new_title = req.body.title;
    var new_author = req.body.author;
    var new_publisher = req.body.publisher;
    var new_date = req.body.date;
    var new_website = req.body.website;

    var new_json = {'title': new_title, 'author': new_author, 'publisher': new_publisher, 'date': new_date, 'website': new_website};
    books.push(new_json);
    res.send('Book: ' + new_title + ' is added!<br> <a href="/bookinventory/list">list of books</a>');
});

app.listen(3001);