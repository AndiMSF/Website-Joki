import "./datatables.css";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataTables = () => {
  const tableData = {
    columns,
    data,
  };

  // Set Default Data Rows When Page is Rendering
  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <div className="data_table">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          sortIcon={<FontAwesomeIcon icon={faSort} />}
          noHeader
          defaultSortField="id"
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
          paginationPerPage={30} // This is to set the perPage value for the DataTable
          paginationComponentOptions={paginationOptions}
        />
      </DataTableExtensions>
    </div>
  );
};

export default DataTables;
