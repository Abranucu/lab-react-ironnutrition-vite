// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider } from "antd";
import foodJson from "./food.json";

import FoodBox from "./FoodBox";

function App() {
  const [foods, setFoods] = useStates(foodJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <foodList />
      
    </div>
  );
}

export default App;
