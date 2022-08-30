const initialState={
    Prize:2.21,
    DiscountPrize:1.99
 }
 const changeViewsValue=(state=initialState,action)=>
 {
     switch (action.type) {
                 case 'Move1':
                     return {Prize:2.21,DiscountPrize:1.99};
                 case 'Move2':
                      return {Prize:9.08,DiscountPrize:6.99};   
                 case 'Move3':
                       return {Prize:23.42,DiscountPrize:14.99};
                 case 'Move4':
                       return {Prize:49.00,DiscountPrize:24.99};
                 case 'Move5':
                       return {Prize:131.55,DiscountPrize:49.99};
                 case 'Move6':
                       return {Prize:299.96,DiscountPrize:74.99};
                 default:
                       throw new Error();
              }    
 }
 export default changeViewsValue;