import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav"
import Table from "../components/Table";
import TopDiv from "../components/TopDiv";
import '../styles/style.css'
import details from '../dummy_data/data'
import { useGetEmployeeByNameQuery } from "../services/api";

const EmployeeList = () => {

    const {data,error,isLoading} = useGetEmployeeByNameQuery();

    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Employee List'} />
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (<><Table employeeDetails={data.data} /></>
                ) : null}
            </main>
        </>
        
    )
}

export default EmployeeList;

