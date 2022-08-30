const initialState={
   Prize:3.63,
   DiscountPrize:2.97
}
const changefollowersValue=(state=initialState,action)=>
{
    switch (action.type) {
                case 'Move1':
                    return {Prize:2.97,DiscountPrize:3.63};
                case 'Move2':
                     return {Prize:5.49,DiscountPrize:9.07};   
                case 'Move3':
                      return {Prize:7.99,DiscountPrize:18.15};
                case 'Move4':
                      return {Prize:13.09,DiscountPrize:36.30};
                case 'Move5':
                      return {Prize:28.99,DiscountPrize:90.75};
                case 'Move6':
                      return {Prize:49.99,DiscountPrize:181.50};
                default:
                      throw new Error();
             }    
}

export default changefollowersValue;