import Login from "../components/Login";
import MenuBoard from "../components/MenuBoard";

const LoginPage = () => {
  return (
    <div className="flex w-[1128px] justify-between">
      <Login />
      <MenuBoard />
    </div>
  );
};

export default LoginPage;
