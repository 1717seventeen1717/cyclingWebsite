var initialState = { forumInfo: [], };
//2.第二步  状态树
function forum(state = initialState, action) {
    switch (action.type) {
        case 'FORUM':
            return { ...state, forumInfo: action.payload };

        default:
            return state;
    }
}

export default forum;