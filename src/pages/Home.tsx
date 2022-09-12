import { Fragment, useEffect, useState } from "react";
import "../styles/home.scss";
import { useSelector, useDispatch } from "react-redux";
import { ICat } from "../Models/CatListModel";
import { AppDispatch } from "../redux/store";
import { getListCat, loadCatList } from "../redux/reducers/catsListReducer";

export const Home = () => {
  const [page, setPage] = useState(1);
  const catListData: Array<ICat> = useSelector(getListCat);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCatList(page));
  }, [page]);

  const showMore = () => {
    setPage((prev) => {
        return prev + 1;
      });
  };

  return (
    <Fragment>
      <div className="main_block_home">
        <h1 className="home_title">Cat program</h1>

        <div className="catInfoBlock">
          {catListData.map((data: ICat) => {
            return (
              <div className="catInfoBlock__image" key={data[`id`]}>
                <img src={data[`url`]} width="100" height="100" />
              </div>
            );
          })}
        </div>

        <div className="showMore_block">
          <button onClick={showMore}>Show more..</button>
        </div>
      </div>
    </Fragment>
  );
};
