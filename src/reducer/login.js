var initialState = { userinfo: [], };
//2.第二步  状态树
function user(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, userinfo: action.payload };

        default:
            return state;
    }
}

export default user;