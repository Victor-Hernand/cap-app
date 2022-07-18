import React from "react";

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" >
            <a href="#" onClick={onLeftClick} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </a>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700 mx-2">
                    Showing
                    <span className="font-medium mx-2">{page}</span>
                    of
                    <span className="font-medium mx-2">{totalPages}</span>
                    results
                </p>
            </div>
           
            <a href="#" onClick={onRightClick} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </a>
        </div>
    );
};

export default Pagination;
