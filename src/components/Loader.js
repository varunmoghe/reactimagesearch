import React from 'react';

const Loader = theme => {
    var loaderClass =""
    if (theme.theme === "light") {
        loaderClass = "ui active loader";
    } else {
        loaderClass = "ui active inverted loader";
    }
    return (
            <div className={loaderClass}>
                <div className="ui text loader">Loading</div>
            </div>
    );
}

export default Loader;