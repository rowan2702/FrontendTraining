import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav"
import Table from "../components/Table";
import TopDiv from "../components/TopDiv";
import '../styles/style.css'
import { useGetEmployeeByNameQuery } from "../services/api";
import HeadButton from "../components/HeadButton";
import {MdOutlineAdd} from 'react-icons/md'

const EmployeeList = () => {

    const {data,error,isLoading} = useGetEmployeeByNameQuery();

    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Employee List'} button={<HeadButton label={'Create Employee'} hyperlink={"/create"} icon={<MdOutlineAdd className="headsectionicon" />}/>} />
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

