const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('Blog.db',(err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log('connected to the blog database');
});

/*db.run('CREATE TABLE Articles(ArticleID INTEGER PRIMARY KEY ,ArticleName TEXT, Author TEXT , Date TXT)', function(err){
    if (err){
        return console.error(err.message);
    }
    console.log('table one created');
});

db.run('CREATE TABLE Comments(CommentID INTEGER PRIMARY KEY , Name TEXT , Content TEXT,Date TEXT,ArticleID INTEGER,FOREIGN KEY (ArticleID) REFERENCES Articles(ArticleID))',function(err){

if (err){
    return console.error(err.message);
}
console.log('table two created');
});*/


/*db.run('INSERT INTO Articles(ArticleID,ArticleName,Author,Date)'+
'VALUES(111,"PHP","AHMAD","2020"),'+
      '(222,"PYTHON","AMJAD","2022"),'+
      '(333,"JAVA","AYSAR","2019"),'+
      '(444,"RUBY","DEAA","2020"),'+
      '(555,"JAVA","TAEK","2021"),'+
      '(666,"C#","MOHAMAD","2021")',function(err){
        if (err){
            return console.error(err.message);
        }
        console.log('Data inserted to Articles table');
    });*/

   /* db.run('INSERT INTO Comments(Content,Name,Date,ArticleID)'+
'VALUES("مقال ممتاز","morhaf","2023",111),'+
       '("مقال غني جدا ","ali","2022",333),'+
       '("شكرا على هذا المقال","saeed","2021",444),'+
       '("شكرا على هذا المقال","waeel","2023",555),'+
       '("شكرا على هذا المقال","jamal","2022",666),'+
       '("اتمنا التوسع بالشرح","rahaf","2019",333)',function(err){
        if (err){
            return console.error(err.message);
        }
        console.log('Data inserted to Comments table');
    });*/

    db.all('SELECT  Comments.Name, Comments.Content,'+
'Articles.ArticleName,Articles.Date FROM Comments INNER JOIN Articles ON Comments.ArticleID = Articles.ArticleID', function(err,table){
    if(err){
        return console.log(err.message);
    }
    console.log(table);
});


db.close( (err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log('close the database connection');
});