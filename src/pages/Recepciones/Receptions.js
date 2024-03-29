import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { getReceptions, searchReception } from "../../services/ReceptionService";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import CardReception from "./CardReceptions";
import { ReceptionContext } from "../../context/Reception";

const Receptions = () => {
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);
    const [user, setUser] = useContext(UserContext);
    const {receptions, setReceptions} = useContext(ReceptionContext);

    const getAllReceptions = async () => {
        try {
            setLoading(true);
            const result = await getReceptions(25, 25 * page);
            setData(result.reverse().slice(0,49));
            setReceptions(result.reverse().slice(0,49));
            setTotal(Math.ceil(result.length / 25));
            setLoading(false);
            setNotFound(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (!searching) {
            getAllReceptions();
        }
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setUser(user);
        }
    }, [page]);
    

    const onSearch = async (param) => {
        if (!param) {
            return getAllReceptions();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        const result = await searchReception(param);
        if (result.length == 0) {
            setNotFound(true);
            setLoading(false);
            return;
        } else {
            setData(result.reverse().slice(0,49));
            
        }
        setLoading(false);
        setSearching(false);
    };

    return (
        <BasicLayout>
            <div className="grid grid-cols-1 p-4 solid text-2xl text-gray-500">
                <h1>Recepciones de vehículos</h1>
            </div>
            <div className="px-3 mb-4">
                <Link to="/receptions/edit" className="py-2 px-4 flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white w-18 transition ease-in duration-200 text-center text-base font-semibold rounded-md ">
                    Recepción de vehículo
                    <svg width="20" height="20" fill="currentColor" className="ml-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1408 960V832q0-26-19-45t-45-19h-320V448q0-26-19-45t-45-19H832q-26 0-45 19t-19 45v320H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z">
                        </path>
                    </svg>
                </Link>
            </div>
            <Search onSearch={onSearch} />
            {notFound ? (
                <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                        <div className="max-w-md text-center">
                            <p className="text-2xl font-semibold md:text-3xl">Lo sentimos, no se encontraron resultados para esta búsqueda</p>
                            <p className="mt-4 mb-8 dark:text-gray-400">Asegúrate de escribir correctamente el nombre del cliente o número de factura</p>
                        </div>
                    </div>
                </section>
            ) : (
                <CardReception
                    loading={loading}
                    data={data}
                />
            )}
            {/*<Pagination
                page={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />*/}

        </BasicLayout>
    )
}

export default Receptions;
