const initialState={
    Prize:1.99,
    DiscountPrize:1.47
 }
 const changeLikeValue=(state=initialState,action)=>
 {
     switch (action.type) {
                 case 'Move1':
                     return {Prize:1.99,DiscountPrize:1.47};
                 case 'Move2':
                      return {Prize:3.98,DiscountPrize:2.97};   
                 case 'Move3':
                       return {Prize:9.95,DiscountPrize:5.49};
                 case 'Move4':
                       return {Prize:19.90,DiscountPrize:7.99};
                 case 'Move5':
                       return {Prize:39.80,DiscountPrize:12.99};
                 case 'Move6':
                       return {Prize:99.51,DiscountPrize:28.99};
                 case 'Move7':
                        return {Prize:199.02,DiscountPrize:49.99};
                  case 'Move8':
                        return {Prize:398.05,DiscountPrize:88.99};
                 default:
                       throw new Error();
              }    
 }
 export default changeLikeValue;