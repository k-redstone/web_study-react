const Login = () => {
  return (
    // 로고
    <div>
      <div className="flex text-2xl font-bold">
        <p className="text-theme text-stroke mr-3">SSAFY</p>
        <p>싸피인</p>
      </div>
      <div>
        <form action="#" className="flex flex-col w-auto h-96 justify-around">
          <input
            type="text"
            placeholder="아이디"
            className="w-96 h-20 border border-border rounded-md"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-96 h-20 border border-border rounded-md"
          />
          <input
            type="submit"
            value="로그인"
            className="w-96 h-20 bg-theme text-white font-bold text-2xl border-theme rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
