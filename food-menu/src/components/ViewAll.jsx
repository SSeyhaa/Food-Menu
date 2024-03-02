import {ChevronRightRounded} from "@mui/icons-material";
import React from "react";

function ViewAll() {
    return (
        <div className='view-all flex items-center'>
            <h5 className='view-all-header font-semibold text-orange-400 hover:text-orange-600'>
                View All
            </h5>
            <button className="chevron-right-icon bg-orange-400 hover:bg-orange-600 text-white font-bold pb-0.5 px-1 rounded ms-2">
                <ChevronRightRounded />
            </button>
        </div>
    );
}
export default ViewAll;