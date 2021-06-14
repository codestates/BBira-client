import React, { useEffect, useState } from 'react';
import Item from '../component/Item.js';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import Edititem from "../component/EditItem.js";

function Itemlist({ isLoggedIn, setLoggedIn }) {
  const [itemData, setItemData] = useState({
    isLoad: true,
    data: [],
  });
  const [isEdititem, setEdititem] = useState({
    isEdititem: false,
    key: -1,
  });
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/mystore`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isLoggedIn.accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data.items);
        setItemData({
          isLoad: false,
          data: res.data.data.items,
        });
        console.log(itemData.isLoad);
      });
  }, []);

  return (
    <div className="itemlist container center">
      {itemData.isLoad ? (
        <div className="container center">
          <form>
            <h1>상품 리스트</h1>
            <div className="loadimg">
              <div className="bouncybox">
                <div className="bouncy"></div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="container center">
          <button
            className="mediumBtn reverse"
            onClick={() => {
              history.push('/create');
            }}
          >
            상품 등록
          </button>
          <form>
            <h1>상품 리스트</h1>
            <div className="itemlist">
              {itemData.data.length !== 0 ? (
                itemData.data.map((el, i) => {
                  return <Item key={i} item={el} />;
                })
              ) : (
                <div>
                  <div>{itemData.data.length}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    enableBackground="new 0 0 512.005 512.005"
                    height="512"
                    viewBox="0 0 512.005 512.005"
                    width="512"
                  >
                    <g>
                      <path d="m512.004 192.508c0-10.448-8.501-18.949-18.949-18.949h-47.216c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h47.216c2.177 0 3.949 1.771 3.949 3.949v259.951l-103.457-127.207c-3.614-4.443-8.972-6.992-14.7-6.992h-87.397c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h87.396c1.194 0 2.31.531 3.063 1.457l106.828 131.351h-368.172c-1.194 0-2.311-.531-3.064-1.458l-101.59-124.91c-1.42-1.747-.824-3.51-.502-4.187.322-.678 1.315-2.253 3.566-2.253h235.448c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-131.801v-57.471c1.064.029 2.131.047 3.202.047h88.14c6.291 0 11.912-3.755 14.319-9.567 2.407-5.813 1.089-12.442-3.36-16.891l-12.683-12.683c17.591-19.995 27.565-45.138 28.461-71.862h24.729c1.055 0 2.047.411 2.792 1.156l21.044 21.044c-1.673 4.111-2.604 8.601-2.604 13.306 0 19.527 15.886 35.413 35.413 35.413 18.44 0 33.627-14.171 35.26-32.193h51.477c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-53.346c-4.866-13.751-17.993-23.632-33.39-23.632-9.329 0-17.822 3.632-24.154 9.55l-19.093-19.094c-3.579-3.579-8.337-5.55-13.399-5.55h-25.201c-1.839-19.271-8.462-37.674-19.464-53.761-2.339-3.419-7.006-4.295-10.425-1.957s-4.295 7.006-1.957 10.425c11.377 16.635 17.391 36.12 17.391 56.346 0 26.697-10.397 51.797-29.275 70.675-2.929 2.929-2.929 7.678 0 10.606l17.817 17.817c.126.126.236.236.108.544-.127.308-.282.308-.46.308h-88.14c-55.112 0-99.949-44.837-99.95-99.949 0-26.671 10.403-51.763 29.295-70.655s43.984-29.296 70.655-29.296c21.175 0 41.41 6.543 58.517 18.919 3.357 2.429 8.046 1.676 10.473-1.68 2.428-3.356 1.676-8.045-1.68-10.473-19.681-14.24-42.957-21.767-67.31-21.767-30.678 0-59.537 11.964-81.262 33.689-21.724 21.726-33.688 50.586-33.688 81.263 0 57.19 41.984 104.752 96.748 113.503v58.87h-88.647c-7.383 0-13.94 4.142-17.112 10.81-3.171 6.667-2.248 14.367 2.411 20.095l101.59 124.911c3.614 4.444 8.973 6.993 14.701 6.993h383.939c4.031.05 7.565-3.467 7.499-7.504v-281.057zm-189.928-27.581c11.255 0 20.413 9.157 20.413 20.413s-9.157 20.413-20.413 20.413-20.413-9.157-20.413-20.413 9.157-20.413 20.413-20.413z" />
                      <path d="m276.722 406.47 25.889 34.017c3.289 4.322 8.495 6.902 13.926 6.902h101.018c4.784 0 9.075-2.663 11.2-6.949s1.645-9.314-1.252-13.122l-25.889-34.017c-3.289-4.322-8.495-6.902-13.926-6.902h-101.019c-4.784 0-9.076 2.663-11.2 6.95-2.124 4.288-1.644 9.315 1.253 13.121zm110.966-5.07c.776 0 1.52.369 1.989.986l22.834 30.003h-95.974c-.776 0-1.52-.369-1.989-.986l-22.834-30.003z" />
                      <path d="m202.618 439.887c0 4.142 3.358 7.5 7.5 7.5h45.887c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-45.887c-4.142 0-7.5 3.358-7.5 7.5z" />
                      <path d="m239.259 422.511c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-19.477c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
                      <path d="m178.918 115.292c0-6.01-2.341-11.661-6.59-15.909-4.25-4.25-9.9-6.591-15.91-6.591s-11.661 2.341-15.91 6.591l-14.685 14.685-14.683-14.686c-4.25-4.25-9.9-6.59-15.91-6.59s-11.661 2.341-15.91 6.59c-4.25 4.25-6.59 9.9-6.59 15.91s2.34 11.66 6.59 15.91l14.684 14.685-14.684 14.684c-4.25 4.25-6.59 9.9-6.59 15.91s2.341 11.661 6.59 15.909c4.25 4.25 9.9 6.591 15.91 6.591s11.661-2.341 15.91-6.59l14.684-14.685 14.685 14.685c4.25 4.25 9.9 6.59 15.91 6.59s11.66-2.34 15.91-6.59 6.59-9.9 6.59-15.91-2.34-11.66-6.59-15.91l-14.685-14.685 14.685-14.685c4.249-4.249 6.589-9.899 6.589-15.909zm-17.197 5.303-19.988 19.988c-2.929 2.929-2.929 7.678 0 10.606l19.988 19.988c1.417 1.417 2.197 3.3 2.197 5.303s-.78 3.887-2.197 5.303-3.3 2.197-5.303 2.197-3.887-.78-5.303-2.197l-19.988-19.988c-1.406-1.407-3.314-2.197-5.303-2.197s-3.897.79-5.303 2.197l-19.988 19.988c-1.416 1.416-3.299 2.196-5.303 2.196s-3.887-.78-5.303-2.197c-1.417-1.416-2.197-3.299-2.197-5.303 0-2.003.78-3.887 2.197-5.303l19.987-19.988c2.929-2.929 2.929-7.678 0-10.606l-19.987-19.988c-1.417-1.417-2.197-3.3-2.197-5.303s.78-3.887 2.197-5.303c1.416-1.417 3.299-2.197 5.303-2.197s3.887.78 5.303 2.197l19.987 19.988c1.406 1.407 3.314 2.197 5.303 2.197s3.897-.79 5.303-2.197l19.988-19.988c1.417-1.417 3.299-2.197 5.303-2.197s3.886.78 5.303 2.198c1.417 1.416 2.197 3.299 2.197 5.303.001 2.003-.779 3.886-2.196 5.303z" />
                      <path d="m419.83 159.372c16.281 0 29.527-13.246 29.527-29.527s-13.246-29.527-29.527-29.527-29.527 13.246-29.527 29.527 13.246 29.527 29.527 29.527zm0-44.054c8.01 0 14.527 6.517 14.527 14.527s-6.517 14.527-14.527 14.527-14.527-6.517-14.527-14.527 6.517-14.527 14.527-14.527z" />
                      <path d="m344.229 104.248c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l4.058-4.058 4.058 4.058c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.677 0-10.606l-4.058-4.058 4.058-4.058c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.678-2.929-10.606 0l-4.058 4.058-4.058-4.058c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.677 0 10.606l4.058 4.058-4.058 4.058c-2.93 2.929-2.93 7.678 0 10.606z" />
                      <path d="m28.317 295.193c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l7.065-7.065 7.065 7.065c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-7.065-7.065 7.065-7.065c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.678-2.929-10.606 0l-7.065 7.065-7.065-7.065c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l7.065 7.065-7.065 7.065c-2.93 2.928-2.93 7.677 0 10.606z" />
                    </g>
                  </svg>
                  <h1>It`s Empty....</h1>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Itemlist;
