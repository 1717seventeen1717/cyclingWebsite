

export function showProductCenterMountain(data) {
    return {
        type: "showProductCenterMountain",
        payload: data
    }
}

export function showProductCenterRoad(data) {
    return {
        type: "showProductCenterRoad",
        payload: data
    }
}

export function showProductCenterFold(data) {
    return {
        type: "showProductCenterFold",
        payload: data
    }
}


export function getThisId(Id){
    console.log(Id);
    return{
        type:'getThisId',
        data:Id
    }
}

export function getProductCenter(data) {
    // console.log(baseUrl);
    if(data){
        return dispatch => {
            var url = '';
            url = `${baseUrl}/product/showProductByCategory?cid=${data}`;
            // console.log(url);
            return fetch(url).then(res => {
                // console.log(data);
                return res.json();
            }).then(result => {
                // console.log(url);
                if(data=="1")
                {
                    // console.log(result);
                    dispatch(showProductCenterMountain(result));
                }
                else if(data=="2"){
                    // console.log(result);
                    
                    dispatch(showProductCenterRoad(result));
                }
                else if(data=="3"){
                    // console.log(result);
                    
                    dispatch(showProductCenterFold(result));
                }
                // console.log(pro);
            });
    
        }
    }
}

//产品展示
// export function showNewproduct(data) {
//     return {
//         type: "NEWPRO",
//         payload: data
//     }
// }

// export function getNewproduct() {
//     return dispatch => {
//         var url = '';
//         url = `http://localhost:3000/homeNewProduct`;
//         return fetch(url).then(res => {
//             return res.json();
//         }).then(data => {
//             dispatch(showNewproduct(data));
//         });

//     }
// }
// //产品中心
// export function showNewsCenter(data) {
//     return {
//         type: "NEWSCENTER",
//         payload: data
//     }
// }
// export function getNewsCenter() {
//     return dispatch => {
//         var url = '';
//         url = `http://localhost:3000/homeNewsCenter`;
//         return fetch(url).then(res => {
//             return res.json();
//         }).then(data => {
//             dispatch(showNewsCenter(data));
//         });

//     }
// }