import { IFarmerDetails } from "src/app/screens/todo/slice/types";
import { DefaultLayoutState } from "src/app/screens/defaultLayout/slice/types";

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  farmerDetails: IFarmerDetails;
  defaultLayout?: DefaultLayoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
