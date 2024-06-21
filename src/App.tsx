import { UserDetail } from "./UserDetail";
import { Breadcrumb } from "./components/Breadcrumb";

const App = () => {
  const items1 = ["Home1", "Library1", "Date1"];
  const items2 = ["Home2", "Library2", "Date2"];
  return (
    <div>
      <Breadcrumb items={items1}/>
      <Breadcrumb items={items2}/>
      <UserDetail/>
    </div>
  );
};

export default App;