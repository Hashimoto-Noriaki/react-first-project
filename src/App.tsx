import { UserDetail } from "./UserDetail";
import { Breadcrumb } from "./components/Breadcrumb";
import { PrimaryButton } from "./components/PrimaryButton";
import { Like } from "./components/Like";
import { UserList } from "./components/UserList"; 
import { Form } from "./components/Form";

const App = () => {
  const items1 = ["Home1", "Library1", "Date1"];
  const items2 = ["Home2", "Library2", "Date2"];
  return (
    <div>
      <Breadcrumb items={items1} />
      <Breadcrumb items={items2} />
      <Breadcrumb items={[]} />
      <UserDetail />
      <PrimaryButton>button1</PrimaryButton>
      <PrimaryButton>button2</PrimaryButton>
      <div>
        <Like />
      </div>
      <UserList />
      <Form />
    </div>
  );
};

export default App;
