export function showForum(data) {
    return {
        type: "FORUM",
        payload: data
    }
}

export function getForum() {
    return dispatch => {
        var url = '';
        // url = `http://10.31.154.166:8080/ssh/talks/showAllTalks`;
        url = 'http://localhost:3000/forumInfo';
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showForum(data));
        });

    }
}