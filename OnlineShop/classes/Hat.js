class Hat {
    constructor(_ttl, _dscrptn, _size, _color, _brnd, __releaseDate, _prc, _rtng, _rvws) {
        this.title = _ttl;
        this.description = _dscrptn;
        this.size = _size;
        this.color = _color;
        this.brand = _brnd;
        this.releaseDate = _releaseDate;
        this.price = _prc;
        this.rating = _rtng;
        this.reviews = _rvws;
    }

    getDetails() {
        return `
        Title: ${this.title}
        Description: ${this.description}
        Size: ${this.size}
        Color: ${this.color}
        Brand: ${this.brand}
        Release Date: ${this.releaseDate}
        Price: ${this.price}
        Rating: ${this.rating}
        Reviews: ${this.reviews}
        `;
    }
}

export default Hat;