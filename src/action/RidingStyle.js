export function showRidingStyleTOP(data) {
    return {
        type: "RST",
        payload: data
    }
}

export function getRidingStyleTOP() {
    return dispatch => {
        var url = '';
        url = `http://10.31.166.33:8080/ssh/show/showAllImageByType?tid=14`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showRidingStyleTOP(data));
        });

    }
}

//下把位
export function showRidingStyleBOT(data) {
    return {
        type: "RSB",
        payload: data
    }
}

export function getRidingStyleBOT() {
    return dispatch => {
        var url = '';
        url = `http://10.31.166.33:8080/ssh/show/showAllImageByType?tid=15`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showRidingStyleBOT(data));
        });

    }
}
//横把位
export function showRidingStyleHOP(data) {
    return {
        type: "RSH",
        payload: data
    }
}
export function getRidingStyleHOP() {
    return dispatch => {
        var url = '';
        url = `http://10.31.166.33:8080/ssh/show/showAllImageByType?tid=16`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showRidingStyleHOP(data));
        });

    }
}