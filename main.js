async function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);

    const json = await response.json();
    return json
    
}

async function main() {
    const data = await fetchUsers();
    for (let i = 0; i < data.length; i++) {
        console.log(`Name: ${data[i].name}, Email: ${data[i].email}`);
    }
}

main();



