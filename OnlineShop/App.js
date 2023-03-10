import Book from "./classes/Book.js";
import Shoe from "./classes/Shoe.js";
import Hat from "./classes/Hat.js";

let book1 = new Book(
    "Ulysses", 
    "Ulysses tells of the diverse events which befall Leopold Bloom and Stephen Dedalus in Dublin on 16 June 1904, during which Blooms voluptuous wife, Molly, commits adultery", 
    "978-1840226355", 
    736, 
    ["James Joyce"], 
    [
        "Fiction", 
        "Classics", 
        "Irish Literature"
    ], 
    "2010-01-15",
    3.50, 
    4.5, 
    [
        "The greatest twentieth century novel",
        "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, 16 June 1904",
        "Best taken in small doses"
    ]
);

let book2 = new Book(
    "The Great Gatsby", 
    'Generally considered to be F. Scott Fitzgerald\'s finest novel, The Great Gatsby is a consummate summary of the "roaring twenties", and a devastating expose of the "Jazz Age"', 
    "978-1853260414", 
    144, 
    ["F. Scott Fitzgerald"], 
    [
        "Fiction", 
        "Classics", 
        "American Literature"
    ], 
    "1992-05-05",
    3.50, 
    4.6, 
    [
        "A great story that has been cherished for years",
        "The editor's comments are useful for students of the novel",
        "The story evokes the shallow extravagance of the wealthy in 1920s America"
    ]
);

let book3 = new Book(
    "The Sound and the Fury", 
    "Ever since the first furore was created on its publication in 1929, The Sound and the Fury has been considered one of the key novels of this century", 
    "978-0099475019", 
    288, 
    ["William Faulkner"], 
    [
        "Fiction", 
        "Classics", 
        "American Literature"
    ], 
    "1995-01-19",
    3.50, 
    4.0, 
    [
        "Can great literature really be unintelligible?",
        "Very hard work!",
        "This book is a testament to Faulkner's immense shrewdness as a writer"
    ]
);

let Shoe1 = new Shoe(
    "Air Force 1", 
    "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.", 
    "12",
    ["White"], 
    "Nike",
    "1982-01-12",
    120, 
    4.8, 
    [
        "Very comfortable",
        "Love the look of these shoes, go well with all outfits and occasions",
        "Got these for my friend as a present and he loves them"
    ]
);

let Shoe2 = new Shoe(
    "Air max 95", 
    "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.", 
    "10",
    ["Black"], 
    "Nike",
    "1987-01-12",
    160, 
    4.2, 
    [
        "Very comfortable",
        "Love the look of these shoes, go well with all outfits and occasions",
        "These are my all time favourite shoes!!"
    ]
);
let Shoe3 = new Shoe(
    "Air Force 1", 
    "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.", 
    "12",
    ["White"], 
    "Nike",
    "1982-01-12",
    120, 
    4.8, 
    [
        "Very comfortable",
        "Love the look of these shoes, go well with all outfits and occasions",
        "Got these for my friend as a present and he loves them"
    ]
);




let products1 = [
    book1,
    book2,
    book3,

    shoe,
    shoe2,
    shoe3,
];

for (let i = 0; i < products.length; i++) {
    let b = products[i];
    console.log(b.getDetails());
}