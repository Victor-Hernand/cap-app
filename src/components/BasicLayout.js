import React from "react";
import NavBar from "./NavBar";

const BasicLayout = (props) => {
    const { children } = props;

    return (
        <div className="bg-slate-50">
            <NavBar />
            {children}

        </div>
    );
}

export default BasicLayout;