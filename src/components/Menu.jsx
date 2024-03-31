import PropTypes from "prop-types";

const Menu = ({ data }) => {
  return (
    <div className="flex flex-col w-40 mr-2">
      <p className=" w-20 font-semibold text-xl mb-2 border-b-2 border-black">
        {data.menu_course_type}
      </p>
      <ul className="font-semibold">
        {data.set_menu_name.map((item) => (
          <li className="py-1" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Menu;
