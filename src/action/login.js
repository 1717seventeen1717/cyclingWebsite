export function userLogin(data) {
    return {
        type: "LOGIN",
        payload: data
    }
}

export function checkUserLogin(params) {
    return dispatch => {
        var url = '';
        url = `http://localhost:3000/user`;
        return fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${params.email}`
        }).then(res => {
            return res.json();
        }).then(data => {
            if (data.rows.length > 0 && params.password == data.rows[0].password) {
                // console.log('true');
                dispatch(userLogin(data));
            } else {
                dispatch(userLogin('false'));
            }
        });
    }
}
