import React from "react";

const Category = ({title, children}) => (
    <div>
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
);
export default Category;