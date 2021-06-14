import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Profile({ userinfo, setEditModeHandler, dropUserHandler, isLoading }) {
  const { nickname, email, storename, address, phone, tagname } = userinfo;

  return (
    <div className="mypage container center">
      <div className="subNav">
        <button
          className="mediumBtn reverse marginR"
          onClick={setEditModeHandler}
        >
          프로필 편집
        </button>
        <Link to="/mystore">
          <button className="mediumBtn reverse">상품 관리</button>
        </Link>
      </div>
      <h1>마이페이지</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid userInfo">
          <div className="tag">name</div>
          <div className="data">{nickname}</div>

          <div className="tag">email</div>
          <div className="data">{email}</div>

          {true ? (
            <>
              <div className="tag">store name</div>
              <div className="data">{storename}</div>
              <div className="tag">address</div>
              <div className="data">{address}</div>
              <div className="tag">phone</div>
              <div className="data">{phone}</div>
              <div className="tag">tag</div>
              <div className="data">{tagname}</div>{' '}
            </>
          ) : (
            <> </>
          )}
          <div>
            <button
              className="smallBtn red dropOutBtn"
              onClick={dropUserHandler}
            >
              Drop out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
