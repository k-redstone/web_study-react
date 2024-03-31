import menuData from "../assets/data.json";
import Menu from "./Menu";

const MenuBoard = () => {
  console.log(menuData);

  return (
    <div className="flex justify-around w-[579px] h-[400px] p-6 border rounded-xl border-border">
      <div className="flex flex-col">
        <p className="font-bold text-2xl mb-3">
          <span>20F</span>
        </p>
        <div className="flex">
          {/* 한식 */}
          <Menu data={menuData.menu[0]} />
          {/* 일품 */}
          <Menu data={menuData.menu[1]} />
        </div>
      </div>
      {/* 10층 */}
      <div className="flex flex-col">
        <p className="font-bold text-2xl mb-3">
          <span>10F</span>
        </p>
        <div className="flex">
          {/* 단품 */}
          <Menu data={menuData.menu[2]} />
        </div>
      </div>
    </div>
  );
};

export default MenuBoard;
