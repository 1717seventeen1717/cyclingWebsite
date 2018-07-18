var initialState = { Mountain:[],Road:[],Fold:[],Id:''};
//2.第二步  状态树
function product(state = initialState, action) {
    switch (action.type) {
        case 'showProductCenterMountain':
            // console.log(action.payload);
            return { ...state, Mountain: action.payload };
        case 'showProductCenterRoad':
            return { ...state, Road: action.payload };
        case 'showProductCenterFold':
            return { ...state, Fold: action.payload };
        case 'getThisId':
            return{...state,Id:action.data};
        default:
            return state;
    }
}

export default product;