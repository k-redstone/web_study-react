import React from "react";

{/* <input
          class="input-box"
          type="password"
          name="password"
          placeholder="비밀번호"
        /> */}


        // color: #0275d8;
        // font-weight: 700;
        // -webkit-text-stroke: 1px black;
const Login = () => {
  return (
    // 로고
    <div>

      <div className="flex text-2xl font-bold">
        <p className="text-theme text-stroke mr-3">SSAFY</p>
        <p>싸피인</p>
      </div>
      <div>
        <form action="#" className="flex flex-col w-auto h-96 justify-around" >
          <input type="text" placeholder="아이디" className="w-96 h-20 border border-border rounded-md"/>
          <input type="text" placeholder="비밀번호" className="w-96 h-20 border border-border rounded-md"/>
          <input type="submit" value="로그인" className="w-96 h-20 bg-theme text-white font-bold text-2xl border-theme rounded-md"/>
        </form>
      </div>
    


    </div>

  )
}


export default Login