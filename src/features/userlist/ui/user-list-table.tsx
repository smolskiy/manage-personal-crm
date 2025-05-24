import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@/shared/ui";
import {fetchUsersData} from "@/shared/api/fetchUsersData";
import {useQuery} from "@tanstack/react-query";

export const UserListTable = () => {

  const {data: users} = useQuery({
    queryKey: ['valera-users'],
    queryFn: fetchUsersData,
  })


  return (
    <div className="border border-slate-300 rounded-md overflow-hidden shadow-lg">
      <Table aria-label="Users" selectionMode="multiple">
        <TableHeader>
          <TableColumn id="name" allowsSorting isRowHeader>Name</TableColumn>
          <TableColumn id="employmentType" allowsSorting>Position</TableColumn>
          <TableColumn id="departmentId" allowsSorting>Department</TableColumn>
          <TableColumn id="hireDate" allowsSorting>Hire Date</TableColumn>
        </TableHeader>
        <TableBody>

          {data.users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.employmentType}</TableCell>
              <TableCell>{user.departmentId}</TableCell>
              <TableCell>{user.hireDate}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </div>
  )
}