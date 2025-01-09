class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    display(){
        console.log(`book name is: ${this.name}, cost is: ${this.price}.`);
    }
}
class Book extends Product{
    constructor(name,price,author) {
 super(name,price);
 this.author = author;
    }
    display(){
        super.display();
        console.log(`written by ${this.author}.`);
    }
}
b1 = new Book('js basics',450,'priti');
b1.display();