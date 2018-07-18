var initialState = {comment:[],four:[],totalComment:[]};
//2.第二步  状态树
function comment(state = initialState, action) {
    switch (action.type) {
        case 'selectThisId':
            // console.log(action.payload);
            return { ...state, comment: action.payload };
        case 'getFour':
            // console.log(action.payload);
            return { ...state, four: action.payload };
        case 'getComment':
            // console.log(action.payload);
            return { ...state, totalComment: action.payload };
        default:
            return state;
    }
}

export default comment;