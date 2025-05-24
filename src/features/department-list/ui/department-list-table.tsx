import { TableCell, TableColumn, TableRow, Table, TableBody, TableHeader } from "@/shared/ui";

export const DepartmentListTable = () => {
    return (
        <div className="border border-slate-300 rounded-md overflow-hidden shadow-lg">
            <Table  aria-label="Users" selectionMode="multiple">
                <TableHeader>
                    <TableColumn isRowHeader>Name</TableColumn>
                    <TableColumn>Position Department</TableColumn>
                    <TableColumn>Members</TableColumn>
                    <TableColumn>Hire Date</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Ivan Petrov</TableCell>
                        <TableCell>Software Engineer</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>05/12/2019</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Elena Smirnova</TableCell>
                        <TableCell>HR Manager</TableCell>
                        <TableCell>Human Resources</TableCell>
                        <TableCell>03/22/2018</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Alexey Volkov</TableCell>
                        <TableCell>Product Manager</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>11/15/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Maria Ivanova</TableCell>
                        <TableCell>UX Designer</TableCell>
                        <TableCell>Design</TableCell>
                        <TableCell>07/08/2021</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dmitry Sokolov</TableCell>
                        <TableCell>DevOps Engineer</TableCell>
                        <TableCell>Infrastructure</TableCell>
                        <TableCell>09/30/2017</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Olga Kuznetsova</TableCell>
                        <TableCell>Marketing Specialist</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell>02/14/2022</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sergey Mikhailov</TableCell>
                        <TableCell>QA Engineer</TableCell>
                        <TableCell>Quality Assurance</TableCell>
                        <TableCell>04/05/2019</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anna Fedorova</TableCell>
                        <TableCell>Financial Analyst</TableCell>
                        <TableCell>Finance</TableCell>
                        <TableCell>08/19/2016</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pavel Novikov</TableCell>
                        <TableCell>Team Lead</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>12/01/2015</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ekaterina Vorobieva</TableCell>
                        <TableCell>Recruiter</TableCell>
                        <TableCell>Human Resources</TableCell>
                        <TableCell>10/11/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Maxim Orlov</TableCell>
                        <TableCell>Backend Developer</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>06/24/2021</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Natalia Petrova</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>01/30/2019</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Artem Lebedev</TableCell>
                        <TableCell>System Administrator</TableCell>
                        <TableCell>IT Support</TableCell>
                        <TableCell>03/17/2017</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Yulia Semenova</TableCell>
                        <TableCell>Content Manager</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell>05/09/2022</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Andrey Pavlov</TableCell>
                        <TableCell>Data Scientist</TableCell>
                        <TableCell>Analytics</TableCell>
                        <TableCell>11/08/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tatiana Romanova</TableCell>
                        <TableCell>Office Manager</TableCell>
                        <TableCell>Administration</TableCell>
                        <TableCell>07/22/2018</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Viktor Zaitsev</TableCell>
                        <TableCell>CTO</TableCell>
                        <TableCell>Management</TableCell>
                        <TableCell>09/05/2014</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Alina Morozova</TableCell>
                        <TableCell>UI Designer</TableCell>
                        <TableCell>Design</TableCell>
                        <TableCell>04/18/2021</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Denis Voloshin</TableCell>
                        <TableCell>Mobile Developer</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>02/27/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kristina Belova</TableCell>
                        <TableCell>Sales Manager</TableCell>
                        <TableCell>Sales</TableCell>
                        <TableCell>08/15/2019</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Roman Sokolov</TableCell>
                        <TableCell>Database Administrator</TableCell>
                        <TableCell>Infrastructure</TableCell>
                        <TableCell>10/03/2017</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Vera Popova</TableCell>
                        <TableCell>Business Analyst</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>12/12/2021</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Gleb Frolov</TableCell>
                        <TableCell>Security Engineer</TableCell>
                        <TableCell>Security</TableCell>
                        <TableCell>05/21/2018</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Larisa Ivanova</TableCell>
                        <TableCell>Accountant</TableCell>
                        <TableCell>Finance</TableCell>
                        <TableCell>06/30/2016</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stanislav Petrov</TableCell>
                        <TableCell>Technical Writer</TableCell>
                        <TableCell>Documentation</TableCell>
                        <TableCell>03/08/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Daria Smirnova</TableCell>
                        <TableCell>Customer Support</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>09/14/2021</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Nikolay Orlov</TableCell>
                        <TableCell>Fullstack Developer</TableCell>
                        <TableCell>Development</TableCell>
                        <TableCell>11/05/2019</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Margarita Volkova</TableCell>
                        <TableCell>PR Manager</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell>07/19/2020</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anton Semyonov</TableCell>
                        <TableCell>QA Lead</TableCell>
                        <TableCell>Quality Assurance</TableCell>
                        <TableCell>04/22/2017</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Polina Kuzmina</TableCell>
                        <TableCell>HR Director</TableCell>
                        <TableCell>Human Resources</TableCell>
                        <TableCell>01/15/2015</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}