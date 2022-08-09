import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeadSection from "../components/HeadSection";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import SideNav from "../components/SideNav"
import TopDiv from "../components/TopDiv";
import UploadFile from "../components/UploadFile";
import { useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation } from "../services/api";

const UpdateEmployee = () => {

    const {id} = useParams();
    
    const {data, error, isLoading} = useGetEmployeeByIdQuery(id);

    const [state, setState] = useState(
        {
            name:'',
          //   id:'',
            joiningDate:'',
          //   experience:'',
            role:'',
            status:'',
            departmentId:'535f21fa-e6fc-4d4a-ac08-e2272bab1149',
            address:{
                line1:'ksdf'
            }
          }
    );
    useEffect(()=>{
        if(data?.data){
            setState(data.data)
        }
        },[data])

    const [updateEmployee, result] = useUpdateEmployeeByIdMutation();

    const onChangeValue = (key,value) => {
        setState(
          {...state,
          [key]:value}
        )
      }

    


    const navigate = useNavigate();

    const goToNextPage = () => {
        
            navigate('/list')
    }

    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Edit Employee'} />
                <section className="mainsection">
                    <form id="details" onSubmit={() => {updateEmployee(state); goToNextPage();}}>
                        <InputField value={state.name} label={'Employee Name'} id={'name'} placeholder={'Employee Name'}  onChange={(value)=> onChangeValue("name",value)}/>
                        {/* {console.log(state)} */}
                        <InputField value={state.id} label={'Employee ID'} id={'id'} placeholder={'Employee ID'}  onChange={(value)=> onChangeValue("id",value)}/>
                        <InputField value={state.joiningDate} label={'Joining Date'} id={'joiningDate'} placeholder={'Joining Date'}  onChange={(value)=> onChangeValue("joiningDate",value)}/>
                        <InputSelect value={state.role} label={'Role'} id={'role'} 
                            options = {[
                                {key:'DEV', label:'Developer'},
                                {key:'HR', label:'HR'}
                            ]}   onChange={(value)=> onChangeValue("role",value)}/>
                        <InputSelect value={state.status} label={'Status'} id={'status'} 
                            options = {[
                                {key:'ACTIVE', label:'Active'},
                                {key:'INACTIVE', label:'Inactive'},
                                {key:'PROBATION', label:'Probation'}
                            ]}  onChange={(value)=> onChangeValue("status",value)}/>
                        <InputField label={'Experience'} id={'experience'} placeholder={'Experience'} />
                        <InputField label={'Address'} id={'address'} placeholder={'Address'}  />
                        <UploadFile />
                    </form>
                    <input type="submit" form="details" value="Update" id="create-button" />
                    <button id="myBtn" onClick={() => {goToNextPage();}}>Cancel</button>
                </section>
            </main>
        </>

    )
}

export default UpdateEmployee;