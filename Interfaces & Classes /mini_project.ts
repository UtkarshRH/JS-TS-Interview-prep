// Project: User Management System (CLI based). 

interface IUser {
    readonly id: number;
    name: string;
}

class User implements IUser {
    readonly id: number;
    name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    
    // public method 
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }

    // public method to update age
    updateAge(newAge: number): void {
        this.age = newAge;
    }
}
// manager class

    class Usermanager{
        private users: User[] = [];

        addUser(user: User): void {
            this.users.push(user);
        }
        getAllUsers(): void {
            this.users.forEach(user => console.log(user.getDetails()));
        }
    }

// Usage

    const manager = new Usermanager();

    const user1 = new User(1, "Utkarsh", 24);
    const user2 = new User(2, "Bob", 25);

    manager.addUser(user1);
    manager.addUser(user2);

    console.log("All Users:");
    manager.getAllUsers();


    // to run this code 
    // 1. Save the code in a file named mini_project.ts
    // 2. Open terminal and navigate to the directory where the file is saved
    // 3. Run the command: tsc mini_project.ts
    // 4. This will generate a file named mini_project.js
    // 5. Run the command: node mini_project.js to see the output in the terminal

// Output:
// All Users:
// ID: 1, Name: Utkarsh, Age: 24
// ID: 2, Name: Bob, Age: 25