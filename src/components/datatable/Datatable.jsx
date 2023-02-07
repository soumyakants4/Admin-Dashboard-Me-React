import "/Users/soumyakant.sahoo/Desktop/admin-dashboard/src/components/datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  userColumns,
  userRows,
} from "/Users/soumyakant.sahoo/Desktop/admin-dashboard/src/datatablesource";

const actionColumn = [
  {
    field: "action",
    headName: "action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
