import {MdOutlineDelete, MdOutlineEdit} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useDeleteEmployeeMutation } from '../services/api';

const Table = ({
    employeeDetails,
    action
}) => {

    const [deleteEmployee, result] = useDeleteEmployeeMutation();

    const navigate = useNavigate();

    const newnavigate = useNavigate();

    return(
        <>
        <table>
        <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Action</th>
        </tr>
        {employeeDetails.map((item) => (
            <tr onClick={()=>{navigate(`/details/${item.id}`)}}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.joiningDate}</td>
                <td>{item.role}</td>
                <td>
                    <div className={item.status}>
                        {item.status}
                    </div>
                </td>
                <td>{'experience'}</td>
                <td>
                    
                        <MdOutlineDelete className='deleteicon' onClick={(e)=> { e.stopPropagation(); deleteEmployee(item.id)}}/>
                        <MdOutlineEdit className='editicon' onClick={(e)=> {e.stopPropagation(); newnavigate(`/update/${item.id}`)}} />
                    
                </td>
            </tr>
        ))}
        </table>
        </>
    );
};

export default Table;