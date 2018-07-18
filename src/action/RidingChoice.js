export function showRidingChoice(data) {
    return {
        type: "RSC",
        payload: data
    }
}

export function getRidingChoice() {
    return dispatch => {
        var url = '';
        url = `http://10.31.166.33:8080/ssh/show/showAllImageByType?tid=2`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showRidingChoice(data));
        });

    }
}