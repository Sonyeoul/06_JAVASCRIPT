//animal

class Animal{
    constructor(name) {
        this.name = name;
    }
    speak(){
        console.log(`나는 ${this.name}`);
    }
}
class Dog extends Animal{
    constructor(name,bread) {
        super(name);
        this.bread = bread;
    }
    bark(){
        console.log(`나는 ${this.name} ${this.bread}이지`);
    }
}
const dog1= new Dog("하오","잡종");
dog1.speak();
dog1.bark();