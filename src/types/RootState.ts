import { IFarmerDetails } from "src/app/screens/todo/slice/types";

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  farmerDetails: IFarmerDetails;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
