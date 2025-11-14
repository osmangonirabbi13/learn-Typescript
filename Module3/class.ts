// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, sound: string, species: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound (){
//     console.log(`${this.name} sound like ${this.sound}`)
//   }
// }

// Parametr properties

class Animal {
  constructor(
    public name: string,
    public sound: string,
    public species?: string
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("dogesh bhai", "dog", "Ghew ghew");
const cat = new Animal("cat bhai", "cat", "mewa mewa");

dog.makeSound();
