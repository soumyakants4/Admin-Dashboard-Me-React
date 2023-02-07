export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "username", headerName: "User", width: 220, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: "email", headerName: "Email", width: 260 },
    { field: "age", headerName: "Age", width: 60 },
    { field: "status", 
    headerName: "Status", 
    width: 100,
    renderCell:(params) => {
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
 }

];

export const userRows = [
    {
        id: 1,
        username: "Yashraj",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "Active",
        email: "rey.yash@gmail.com",
        age: 23,
    },
    {
        id: 2,
        username: "Yash Yaduvanshi",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "yaduvanshi.yash@gmail.com",
        status: "Pending",
        age: 22,
    },
    {
        id: 3,
        username: "Sudhanshu Kumar",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "kumar.sudhanshu@gmail.com",
        status: "Pending",
        age: 24,
    },
    {
        id: 4,
        username: "Pratik Behera",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tamylv.pb@gmail.com",
        status: "Active",
        age: 22,
    },
    {
        id: 5,
        username: "Soumyakant Sahoo",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "soumyakants4@gmail.com",
        status: "Active",
        age: 23,
    },
];
