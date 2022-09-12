import React, { Fragment, useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import axios from "axios";

export const Sidebar = () => {

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/categories`)
            .then(res => {
                const newCategories = res.data;
                setCategoryData(newCategories);
            })
    }, [])

    return (
        <Fragment>
            <div className="sideBarBlock">
                <ol>
                    {
                        categoryData.map((data) => {
                            return <div key={data[`id`]}>
                                <li className="category_list">{data[`name`]}</li>
                            </div>
                        })
                    }

                </ol>
                {/* <Link to='/'>Home</Link> ' '
                <Link to='/about'>About</Link> */}

            </div>
        </Fragment>
    )
}