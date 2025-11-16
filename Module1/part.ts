//Stack using Array By Typescript

class Stack {
  items: number[];

  constructor() {
    this.items = []; 
  }

   // Add element
  push(element: number): void {
    this.items.push(element);
  }

  // Remove and return last element
  pop(): number | undefined {
    if(this.isEmpty()){
        return undefined
    }
    return this.items.pop();
  }

  peek() : number | undefined{
    if(this.isEmpty()){
        return undefined
    }
    return this.items[this.items.length -1]
  }

  isEmpty():boolean{
    return this.items.length === 0
  }
  // Get size
  size(): number {
    return this.items.length;
  }

 print(): void {
  if (this.isEmpty()) {
    console.log("Stack is empty");
  } else {
    console.log(this.items.slice().reverse().join(" -> "));
  }
}

}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print()

stack.pop()


stack.print()