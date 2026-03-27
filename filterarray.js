const users = [
  {
    id: "a1b2c3",
    name: "Alice Johnson",
    email: "alice@gmail.com",
    age: 25,
    role: "admin",
    isActive: true,
    createdAt: "2024-01-15T08:30:00Z",
    address: {
      city: "New York",
      country: "US"
    },
    tags: ["premium", "verified"]
  },
  {
    id: "d4e5f6",   
    name: "Bob Smith",
    email: "bob@gmail.com",
    age: 30,
    role: "user",
    isActive: false,
    createdAt: "2024-03-22T14:00:00Z",
    address: {
      city: "London",
      country: "UK"
    },
    tags: ["verified"]
  },
  {
    id: "g7h8i9",
    name: "Charlie Brown",
    email: "charlie@gmail.com",
    age: 22,
    role: "user",
    isActive: true,
    createdAt: "2024-06-10T09:15:00Z",
    address: {
      city: "Lagos",
      country: "NG"
    },
    tags: ["premium"]
  }
];
users.every(user => user.isActive === true);

const whoIsAdmin = users.find(user => user.role === "admin")
console.log(whoIsAdmin);

const userEmails = users.map(user => user.email)
console.log(userEmails); 

const activeUsers = users.filter(user=> user.isActive === true)
console.log(activeUsers);

const userRole = users.filter(user=> user.role === "user")
console.log(userRole); 



