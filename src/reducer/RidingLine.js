var initialState = { RidingLineImg: [] };
//2.第二步  状态树
function RidingLine(state = initialState, action) {
    switch (action.type) {
        case 'RSL':
            return { ...state, RidingLineImg: action.payload };

        default:
            return state;
    }
}

export default RidingLine;