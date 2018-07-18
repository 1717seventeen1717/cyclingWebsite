export function selectThisId(data) {
    return {
        type: "selectThisId",
        payload: data
    }
}

export function getFour(data) {
    return {
        type: "getFour",
        payload: data
    }
}

export function getComment(data) {
    return {
        type: "getComment",
        payload: data
    }
}



export function getThisDetail(data) {
    if(data){
        return dispatch => {
            var url = '';
            url = `${baseUrl}/product/buyProductWithDetailByPid?pid=${data}`;
            // console.log(url);
            return fetch(url).then(res => {
                // console.log(url);
                return res.json();
            }).then(result => {
                // console.log(result);
                // console.log(url);
                dispatch(selectThisId(result));
                // console.log(pro);
            });    
        }
    }
}

export function getFourDetail() {
        return dispatch => {
            var url = '';
            url = `${baseUrl}/product/showAllProduct`;
            // console.log(url);
            return fetch(url).then(res => {
                return res.json();
            }).then(result => {
                dispatch(getFour(result));
            });    
        }
}

export function getComments() {
    return dispatch => {
        var url = '';
        url = `${baseUrl}/product/showEvaluationByPid?pid=1`;
        // console.log(url);
        return fetch(url).then(res => {
            return res.json();
        }).then(result => {
            // console.log(result);
            dispatch(getComment(result));
        });    
    }
}