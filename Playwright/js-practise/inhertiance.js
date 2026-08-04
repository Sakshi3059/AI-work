class Parent {
    constructor(name) {
        this.name = name;
        console.log("Parent name:", this.name);
    }
}

class Child extends Parent {
    constructor(ParentName
        , ChildName) {
        super(ParentName);
        this.name = ChildName;
       
        console.log("Child name:", this.name);
    }
}

const obj = new Child("Rahul", "Sakshi");