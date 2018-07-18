var initialState = { homeCarousel: [], newprocuctList: [], newscenterList: [] };
//2.第二步  状态树
function home(state = initialState, action) {
    switch (action.type) {
        case 'CAROUSEL':
            return { ...state, homeCarousel: action.payload };
        case 'NEWPRO':
            return { ...state, newprocuctList: action.payload };
        case 'NEWSCENTER':
            return { ...state, newscenterList: action.payload };

        default:
            return state;
    }
}

export default home;