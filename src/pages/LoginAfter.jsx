import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginAfter = ({ user }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-3xl text-center py-2">
        {user.id}님, 3반에 오신걸 환영합니다.
      </p>
      <p className="font-bold text-3xl text-center py-2">
        {user.password} 님, 3반에 오신걸 환영합니다.
      </p>
      <Link to="/">
        <button className="border border-black rounded-md cursor-pointer w-[400px] h-20 font-bold text-xl mt-20">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

LoginAfter.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LoginAfter;
