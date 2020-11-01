
//get 조회
//post 생성
//put 수정
//delete 삭제

module.exports = function(app,Book)
{

    //get all books
    app.get('/api/books',function(req,res){
        //find : 찾기
        Book.find(function(err,books){
            if(err) return res.statue(500).send({error : 'database failur'});
            res.json(books)
        })
        
    })

    //get single book using book_id
    app.get('/api/books/:book_id', function(req, res){
        //findOne : 파라미터로 받은 값으로 id 검색 (_id 는 값 입력할때 )
        //find의 경우 : {{데이터}}
        //findeone의 경우 : {데이터} => 무조건 하나기 때문에
        Book.findOne({_id: req.params.book_id}, function(err, book){
            if(err) return res.status(500).json({error: err});
            if(!book) return res.status(404).json({error: 'book not found'});
            res.json(book);
        })
    });

    //get book by author
    app.get('/api/books/author/:author', function(req, res){
        //파라미터 값으로 받은 author로 책 검색, _id는 표시 x, title과 published_date만 나옴
        Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
            if(err) return res.status(500).json({error: err});
            if(books.length === 0) return res.status(404).json({error: 'book not found'});
            res.json(books);
        })
    });

    //create book
    app.post('/api/books', function(req, res){
        //새로운 스키마 생성
        var book = new Book();
        book.title = req.body.title;
        book.author = req.body.author;
        book.published_date = new Date(req.body.published_date);
        //save 
        book.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});

        });
    });


    //update the book
    app.put('/api/books/:book_id', function(req,res) {
        Book.findById(req.params.book_id, function(err, book){
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!book) return res.status(404).json({ error: 'book not found' });
            //수정한 값 
            if(req.body.title) book.title = req.body.title;
            if(req.body.author) book.author = req.body.author;
            if(req.body.published_date) book.published_date = req.body.published_date;
            //save 
            book.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                res.json({message: 'book updated'});
            });
    
        });  
    })

    //delete book

    app.delete('/api/books/:book_id', function(req, res){
        Book.remove({ _id: req.params.book_id }, function(err, output){
            if(err) return res.status(500).json({ error: "database failure" });

            res.status(204).end();
        })
    });

}