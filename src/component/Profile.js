import React from 'react';

function Profile({ userinfo, setEditModeHandler }) {
  const { name, email, storename, address, phone } = userinfo;
  return (
    <div className="mypage container center">
      <div className="subNav">
        <button
          className="mediumBtn reverse marginR"
          onClick={setEditModeHandler}
        >
          프로필 편집
        </button>
        <button className="mediumBtn reverse">상품 관리</button>
      </div>
      <h1>마이페이지</h1>
      <div className="grid userInfo">
        <div className="tag">name</div>
        <div className="data">{name}</div>

        <div className="tag">email</div>
        <div className="data">{email}</div>

        <div className="tag">store name</div>
        <div className="data">{storename}</div>

        <div className="tag">address</div>
        <div className="data">{address}</div>

        <div className="tag">phone</div>
        <div className="data">{phone}</div>
        <div>
          <button className="smallBtn red dropOutBtn">Drop out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
