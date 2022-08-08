import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadButton from "../components/HeadButton";
import HeadSection from "../components/HeadSection";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import SideNav from "../components/SideNav"
import TopDiv from "../components/TopDiv";
import UploadFile from "../components/UploadFile";
import { useCreateEmployeeMutation } from "../services/api";

const CreateEmployee = ()=> {

    const [state, setState] = useState(
        {
          name:'',
        //   id:'',
          joiningDate:'',
        //   experience:'',
          role:'',
          status:'',
          departmentId:'535f21fa-e6fc-4d4a-ac08-e2272bab1149'
        }
      );
  
    const onChangeValue = (key,value) => {
        setState(
          {...state,
          [key]:value}
        )
      }

    const[createEmployee, result] = useCreateEmployeeMutation();

    const navigate = useNavigate();

    const goToNextPage = () => {
        
            navigate('/list')
    }

    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Create Employee'} />
                <section className="mainsection">
                    <form id="details" onSubmit={() => {createEmployee(state); goToNextPage();}}>
                        <InputField label={'Employee Name'} id={'name'} placeholder={'Employee Name'} onChange={(value)=> onChangeValue("name",value)} />
                        {console.log(state)}
                        <InputField label={'Employee ID'} id={'id'} placeholder={'Employee ID'} />
                        <InputField label={'Joining Date'} id={'joiningDate'} placeholder={'Joining Date'} onChange={(value)=> onChangeValue("joiningDate",value)} />
                        <InputSelect label={'Role'} id={'role'} 
                            options = {[
                                {key:'DEV', label:'Developer'},
                                {key:'HR', label:'HR'}
                            ]}  onChange={(value)=> onChangeValue("role",value)} />
                        <InputSelect label={'Status'} id={'status'} 
                            options = {[
                                {key:'ACTIVE', label:'Active'},
                                {key:'INACTIVE', label:'Inactive'},
                                {key:'PROBATION', label:'Probation'}
                            ]} onChange={(value)=> onChangeValue("status",value)} />
                        <InputField label={'Experience'} id={'experience'} placeholder={'Experience'} />
                        <InputField label={'Address'} id={'address'} placeholder={'Address'}  />
                        <UploadFile />
                    </form>
                    <input type="submit" form="details" value="Create" id="create-button" />
                    <button id="myBtn" onClick={() => {goToNextPage();}}>Cancel</button>
                </section>
            </main>
        </>
    )
}

export default CreateEmployee;