export const sendRequest = (url, method, body = null, formData = false) => {
    const headers = {}
    if (!formData) {
        headers['Content-type'] = 'application/json; charset = utf-8';
    }
    return fetch(url, {
        headers,
        method,
        url,
        body,
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            throw err
        })
}


export const sendContact = (firstName, lastName, phone) => {
    const formData = new FormData();
    formData.append('name', firstName);
    formData.append('surname', lastName,);
    formData.append('phone', phone);
    return sendRequest('https://f65110d3da60.ngrok.io/api/send-contact', 'POST', formData, true)
}