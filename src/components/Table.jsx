const Table = ({
    employeeDetails,
    action
}) => {
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
            <tr>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.joiningDate}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>{'experience'}</td>
                <td>{'action'}</td>
            </tr>
        ))}
        </table>
        </>
    );
};

export default Table;