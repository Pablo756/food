import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SearchScreen } from "./screens/SearchScreen";
import { DetailsScreen } from "./screens/DetailsScreen";

const navigator = createStackNavigator(
  {
    Categories: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Categories",
  }
);

export default createAppContainer(navigator);
