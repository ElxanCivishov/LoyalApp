import withReducer from "app/store/withReducer";
import reducer from "./store";

function ProjectDashboardApp(props) {
  return <h2>dashProject</h2>;
}

export default withReducer("projectDashboardApp", reducer)(ProjectDashboardApp);
