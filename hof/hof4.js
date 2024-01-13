let books = [
    {
        name:"human",
        author:"Akash",
        publish:2000

    },
    {
        name:"being",
        author:"MAdhav",
        publish:2023

    },
    {
        name:"restart",
        author:"Rakesh",
        publish:2014

    },
]
const booksPublish = books.filter((book) =>{
    return book.publish <= 2000;
})

const remainingbooks = booksPublish.map((book) =>({
    ...book,
    author: book.author.toUpperCase()

}))
console.log(remainingbooks);