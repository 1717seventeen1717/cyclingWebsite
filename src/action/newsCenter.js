//新闻中心
export function showNews(data) {
    return {
        type: "NEWS",
        payload: data
    }
}
export function getNews(limit) {
    return dispatch => {
        var url = '';
        limit = limit ? limit : 6;
        url = `http://localhost:3000/newsCenter?_limit=${limit}`;
        return fetch(url).then(res => {
            return res.json();
        }).then(data => {
            dispatch(showNews(data));
        });

    }
}