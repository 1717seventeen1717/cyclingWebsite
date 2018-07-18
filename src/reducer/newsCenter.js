var initialState = { newsList: [] };
//2.第二步  状态树
function news(state = initialState, action) {
    switch (action.type) {
        case 'NEWS':
            return { ...state, newsList: action.payload };

        default:
            return state;
    }
}

export default news;