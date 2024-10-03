const url = 'http://localhost:3001';

const url_login = url + '/login';

export async function loginUser (username, password) {
    return fetch(url_login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({username, password}),
    })
}