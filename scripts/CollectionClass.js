const booksData = [
    {
        title: "The Stand",
        author: "Stephen King",
        price: 19.99,
        image: "image/Stand Stephen King.jpeg"
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        price: 8.99,
        image: "image/Jurassic Park.jpg"
    },
    {
        title: "Killing Floor",
        author: "Lee Child",
        price: 11.99,
        image: "image/Killing Floor.jpg"
    }
];

function loadData() {
    return true; 
}


class Book {
    #price; 

    constructor(title, author, price, image) {
        this.title = title;
        this.author = author;
        this.#price = price;
        this.image = image;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value < 0 ? 0 : value;
    }

    toString() {
        return this.title + " by " + this.author + " - $" + this.price;
    }

    createElement() {
        const outer = document.createElement("div");
        outer.classList.add("media-item");

         const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;
        img.width = 80;

        const titleElem = document.createElement("h3");
        titleElem.textContent = this.title;

        const authorElem = document.createElement("p");
        authorElem.textContent = "by " + this.author;

        const priceElem = document.createElement("p");
        priceElem.textContent = "Price: $" + this.price;
        
        const info = document.createElement("div");
        info.appendChild(titleElem);
        info.appendChild(authorElem);
        info.appendChild(priceElem);

        outer.appendChild(img);
        outer.appendChild(info);

        return outer;
    }
}

function updateDisplay(data) {
    const container = document.getElementById("media-container");
    container.innerHTML = ""; 

    data.forEach(obj => {
        const book = new Book(obj.title, obj.author, obj.price, obj.image);
        container.appendChild(book.createElement());
    });
}

window.onload = function () {

    let ok = loadData();

    if (ok)
        updateDisplay(booksData);
    else
        updateDisplay([{ title: "Error loading data" }]);
};