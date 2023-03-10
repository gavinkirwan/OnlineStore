let book = {
    title: "Javascript for Beginners",
    isbn: "978-1234-56789-0",
    pageCount: 234,
    authors:["Joe Bloggs", "Mary Keogh"],
    genres: ["Computing", "Programming"],
    publishedDate: "2022-01-02",
    price: 23.56,
    rating: 5,
    reviews: [
        {
            "author": "Jim Kowalski",
            "content": "This is a great book"
        },
        {
            "author": "Jane Carroll",
            "content": "This is a good book"
        },
        {
            "author": "Helen Fernandez",
            "content": "This is my fdvourite book"
        }
    ],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let book2 = {
    title: "Advanced Javascript",
    isbn: "978-1234-567-987",
    pageCount: 524,
    authors:["Mary Bloggs", "Juan Fernandez"],
    genres: ["Computing", "Programming"],
    publishedDate: "2019-01-02",
    price: 63.56,
    rating: 5,
    reviews: [],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let book3 = {
    title: "Advanced CSS",
    isbn: "978-1234-5612-34",
    pageCount: 524,
    authors:["Klara Schmidt", "Juan Hughes"],
    genres: ["Computing", "Web design"],
    publishedDate: "2018-07-12",
    price: 17.56,
    rating: 5,
    reviews: [],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let shoe = {
    title: "Air Force 1",
    description: "The famous and classic, nike air force 1",
    sizes: ["8","9","10","11"],
    colors:["White", "Black"],
    brand: "Nike",
    publishedDate: "1982-07-12",
    price: 120,
    rating: 5,
    reviews: ["These are my favourite shoes of all time", "Great value for money and consitant quality"],
    getDetails() {
        return `Title: ${this.title}, description: ${this.colors}, price: ${this.price}`;
    }
}

let shoe2 = {
    title: "Jordan 4's",
    description: "The iconic, Jordan 4's",
    sizes: ["8","9","10","11"],
    colors:["Red", "Blue"],
    brand: "Nike",
    publishedDate: "1999-07-12",
    price: 90,
    rating: 5,
    reviews: ["These are my favourite shoes of all time", "Great value for money and consitant quality"],
    getDetails() {
        return `Title: ${this.title}, description: ${this.colors}, price: ${this.price}`;
    }
}

let shoe3 = {
    title: "Crocs",
    description: "The famous crocs, ready for any occasion.",
    sizes: ["8","9","10","11"],
    colors:["Black", "Green"],
    brand: "Croc",
    publishedDate: "2002-07-12",
    price: 80,
    rating: 5,
    reviews: ["These are my favourite shoes of all time", "Great value for money and consitant quality"],
    getDetails() {
        return `Title: ${this.title}, description: ${this.colors}, price: ${this.price}`;
    }
}


let products = [
    book,
    book2,
    book3,

    shoe,
    shoe2,
    shoe3
];

for (let i = 0; i != products.length; i++) {
    let bk = book[i];
    console.log(bk.getDetails());
}