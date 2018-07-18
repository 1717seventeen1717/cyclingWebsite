export function showRidingLine(data) {
    return {
        type: "RSL",
        payload: data
    }
}

export function getRidingLine() {
    return dispatch => {
        var url = '';
        url = `http://10.31.166.33:8080/ssh/show/showRoadWay`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showRidingLine(data));
        });

    }
}