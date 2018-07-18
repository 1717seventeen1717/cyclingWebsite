var initialState = { RidingStyleTOP: [], RidingStyleBOT: [], RidingStyleHOP: [] };
//2.第二步  状态树
function RidingStyle(state = initialState, action) {
    switch (action.type) {
        case 'RST':
            return { ...state, RidingStyleTOP: action.payload };
        case 'RSB':
            return { ...state, RidingStyleBOT: action.payload };
        case 'RSH':
            return { ...state, RidingStyleHOP: action.payload };

        default:
            return state;
    }
}

export default RidingStyle;