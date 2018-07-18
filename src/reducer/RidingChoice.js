var initialState = { RidingChoiceImg: [] };
//2.第二步  状态树
function RidingChoice(state = initialState, action) {
    switch (action.type) {
        case 'RSC':
            return { ...state, RidingChoiceImg: action.payload };

        default:
            return state;
    }
}

export default RidingChoice;