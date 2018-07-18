import { baseUrl } from "../../common/api";

export function showCarousel(data) {
    return {
        type: "CAROUSEL",
        payload: data
    }
}

export function getCarousel() {
    return dispatch => {
        var url = '';
        url = `${baseUrl}/show/showAllImageByType?tid=12`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showCarousel(data));
        });

    }
}

//新品展示
export function showNewproduct(data) {
    return {
        type: "NEWPRO",
        payload: data
    }
}

export function getNewproduct() {
    return dispatch => {
        var url = '';
        url = `${baseUrl}/show/showAllImageByType?tid=20`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showNewproduct(data));
        });

    }
}
//新闻中心
export function showNewsCenter(data) {
    return {
        type: "NEWSCENTER",
        payload: data
    }
}
export function getNewsCenter() {
    return dispatch => {
        var url = '';
        url = `${baseUrl}/news/showAllNews`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showNewsCenter(data));
        });

    }
}