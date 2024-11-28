// tarefa realizada utilizando Bun Js

class List {
    private items: number[] = [];

    add(item: number) {
        this.items.push(item);
    }

    remove(): number | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

class Stack {
    private items: number[] = [];

    push(item: number) {
        this.items.push(item);
    }

    pop(): number | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

class Queue {
    private items: number[] = [];

    enqueue(item: number) {
        this.items.push(item);
    }

    dequeue(): number | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Passo 1
const list = new List();
[1, 2, 3, 4, 5].forEach(num => list.add(num));

// Passo 2
const stack = new Stack();
while (!list.isEmpty()) {
    const item = list.remove();
    if (item !== undefined) {
        stack.push(item);
    }
}

// Passo 3
const queue = new Queue();
while (!stack.isEmpty()) {
    const item = stack.pop();
    if (item !== undefined) {
        queue.enqueue(item);
    }
}

// Passo 4
[6, 7, 8, 9, 10].forEach(num => list.add(num));

// Passo 5
while (!list.isEmpty()) {
    const item = list.remove();
    if (item !== undefined) {
        stack.push(item);
    }
}

while (!stack.isEmpty()) {
    const item = stack.pop();
    if (item !== undefined) {
        queue.enqueue(item);
    }
}

// Passo 6
const result: number[] = [];
while (!queue.isEmpty()) {
    const item = queue.dequeue();
    if (item !== undefined) {
        result.push(item);
    }
}

console.log(result);

