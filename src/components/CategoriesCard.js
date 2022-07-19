import React from "react";
const CategoriesCard = (props) => {
    const { categories } = props;
   
    return (
        <>
            <h4 className="font-semibold pl-3 mt-4">Interior de Vehículos</h4>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">

                {categories ? categories["INTERIOR DE VEHICULOS"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-4">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">

                                <div class="flex flex-wrap">
                                    <div class="flex items-center mr-4">
                                        <input id={"bueno" + idx} type="radio" value="" name={'interior' + idx} className="w-4 h-4" />
                                        <label htmlFor={"bueno" + idx} class="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div class="flex items-center mr-4">
                                        <input id={"malo" + idx} type="radio" value="" name={'interior' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malo" + idx} class="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                    <div class="flex items-center">
                                        <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">Comentar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                }) : null}
            </div>

            <h4 className="font-semibold pl-3 mt-4">Parte Frontal</h4>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">
                {categories ? categories["PARTE FRONTAL"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-4">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">

                                <div class="flex flex-wrap">
                                    <div class="flex items-center mr-4">
                                        <input id={"buenopf" + idx} type="radio" value="" name={'frontal' + idx} className="w-4 h-4" />
                                        <label htmlFor={"buenopf" + idx} class="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div class="flex items-center mr-4">
                                        <input id={"malopf" + idx} type="radio" value="" name={'frontal' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malopf" + idx} class="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                    <div class="flex items-center">
                                        <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">Comentar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>

            <h4 className="font-semibold pl-3 mt-4">Parte Trasera</h4>
            <div className="pl-3 mt-2 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 bg-slate-50">
                {categories ? categories["PARTE TRASERA"].map((item, idx) => {
                    return (
                        <div key={idx} className="bg-white max-w-sm rounded overflow-hidden shadow-lg my-2 mr-2">
                            <div className="px-6 py-4">
                                <div className="mb-2">
                                    <p className="font-semibold">{item.name}</p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">

                                <div class="flex flex-wrap">
                                    <div class="flex items-center mr-4">
                                        <input id={"buenopt" + idx} type="radio" value="" name={'trasera' + idx} className="w-4 h-4" />
                                        <label htmlFor={"buenopt" + idx} class="ml-2 text-sm font-medium text-green-600">Bueno</label>
                                    </div>
                                    <div class="flex items-center mr-4">
                                        <input id={"malopt" + idx} type="radio" value="" name={'trasera' + idx} className="w-4 h-4" />
                                        <label htmlFor={"malopt" + idx} class="ml-2 text-sm font-medium text-red-600">Malo</label>
                                    </div>
                                    <div class="flex items-center">
                                        <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">Comentar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }) : null}
            </div>
        </>
    );
}

export default CategoriesCard;