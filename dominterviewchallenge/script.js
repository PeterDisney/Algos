
const apiBaseUrl = "https://jasonplaceholder.typicode.com"

async function fetchUser(userId){
    const url = `${apiBaseUrl}/users/${userId}`;
    try{
        const res = await fetch(url);
        const user = await res.json();
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function main(){
    const testUser = await fetchUser(1);
    renderUsers([testUser], document.getElementById("users-container"));
}

async function main(){
    const settledUsers = await fetchUser([2,5,7]);
    const users = settledUsers
        .filter((outcome) => outcome.status === "fulfilled")
        .map((outcome) => outcome.value);
    renderUsers(users, document.getElementById("users-container"));
}

async function fetchUsers(userIds = []){
    const userFetchPromises = userids.map((id) => fetchUser(id));
    const settleUserPromises = await Promise.allSettled(userFetchPromises);
    console.log(settleUserPromnises);
    return settleUserPromises;
}

const mockUsers = [
    {
        id: 1,
        name: "first User",
        address:{
            street: ,
            suite: ,
            city: ,
            zipcode
        }
    }
]


function makeUserNode(user) {
    const {id, name, address} = user;
    const {suite, street, city, zipcode} = address;
    const userDiv = document.createElement('div');
    userDiv.id = `user-id-${id}`;
    userDiv.classList.add("mb-sm");

    const nameHeading = document.createElement("h2");
    nameHeading.classList.add("mb-sm");
    nameHeading.innerText = name;

    const addressParagraph = document.createElement("p");
    addressParagraph.innertext = `${suite} ${street} ${city} ${zipcode}`;

    userDiv.appendChild(nameHeading);
    userDiv.appendChild(addressParagraph);

    return userDiv;
}

