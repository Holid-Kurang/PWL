async function getUser(){
    try {
        console.log("Fetching user data...");
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

getUser();