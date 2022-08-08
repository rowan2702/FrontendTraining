import { MdOutlineEdit } from "react-icons/md";
import { useParams } from "react-router-dom";
import HeadButton from "../components/HeadButton";
import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav";
import TextField from "../components/TextField";
import TopDiv from "../components/TopDiv";
import { useGetEmployeeByIdQuery } from "../services/api";

const EmployeeDetails = () => {

    const {id} = useParams();

    const {data,error,isLoading} = useGetEmployeeByIdQuery(id);

    

    return (
        <>
        <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Employee Details'} button={<HeadButton label={'Edit'} hyperlink={"/details"} icon={<MdOutlineEdit className="headsectionicon" />}/>} />
                <section className="detailsection">
                    <TextField label={'Employee Name'} value={data?.data?.name} />
                    <TextField label={'Employee ID'} value={data?.data?.id} />
                    <TextField label={'Role'} value={data?.data?.role} />
                    <TextField label={'Status'} value={data?.data?.status} classname={data?.data?.status}/>
                    <TextField label={'Joining Date'} value={data?.data?.joiningDate} />
                </section>
            </main>
        </>

    )
}

export default EmployeeDetails;