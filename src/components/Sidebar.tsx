import { Fragment, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategory,
  loadCategories,
} from "../redux/reducers/categoriesReducer";
import { AppDispatch } from "../redux/store";
import { ICategoryCat } from "../Models/CategoryModel";
import { getListCat, loadCatList } from "../redux/reducers/catsListReducer";

export const Sidebar = () => {
  const categoryData: Array<ICategoryCat> = useSelector(getCategory);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <Fragment>
      <div className="sideBarBlock">
        <ol>
          {categoryData.map((data: ICategoryCat) => {
            return (
              <div key={data[`id`]}>
                <li
                  onClick={() => {
                    dispatch(loadCatList(0, data[`id`]));
                  }}
                  className="category_list"
                >
                  {data[`name`]}
                </li>
              </div>
            );
          })}
        </ol>
        {/* <Link to='/'>Home</Link> ' '
                <Link to='/about'>About</Link> */}
      </div>
    </Fragment>
  );
};
