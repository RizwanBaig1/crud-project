// Base URL of Mock API
const baseURL = 'https://jsonplaceholder.typicode.com/posts';

// Function to Create a Post (POST)
function createPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = `Post Created: ${JSON.stringify(data)}`;
    });
}

// Function to Read a Post (GET)
function getPost() {
    const postId = document.getElementById('postId').value;

    fetch(`${baseURL}/${postId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = `Post Fetched: ${JSON.stringify(data)}`;
    });
}

// Function to Update a Post (PUT or PATCH)
function updatePost() {
    const postId = document.getElementById('postId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch(`${baseURL}/${postId}`, {
        method: 'PUT',  // or PATCH
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = `Post Updated: ${JSON.stringify(data)}`;
    });
}

// Function to Delete a Post (DELETE)
function deletePost() {
    const postId = document.getElementById('postId').value;

    fetch(`${baseURL}/${postId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('output').innerText = `Post Deleted: ID ${postId}`;
        }
    });
}
