import IInventory from "../../../../core/models/IInventory.interface";
import React, { useEffect, useState } from "react";
import { InventoryRoutes } from "../../../../api/Inventory";
import axios from "../../../../axios";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import MaterialTable from "material-table";

// Importing Material UI Components - Mudasir Ali
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Importing Material Ui Components  - Mudasir Ali
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

function createData(
  name: string,
  address: string,
  email: string,
  weight: string
) {
  return { name, address, email, weight };
}

const Index = () => {
  const [inventories, setInventories] = useState<IInventory[]>();

  useEffect(() => {
    const fetchInventories = async () => {
      const request = await axios.get(InventoryRoutes.GetAll);
      setInventories(request.data);
      return request;
    };

    fetchInventories();
  }, [InventoryRoutes.GetAll]);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "Email", field: "email" },
    { title: "Weight", field: "weight" },
  ];

  const column: IInventory[] = inventories;

  const icons = {
    Search: <Search />,
    Clear: <Clear />,
  };

  return (
    <div className="out">
      <div className="page5 js-page4">
        <Topbar />

        <div className="page5__wrapper">
          <Sidebar />
          <div className="page5__container">
            <MaterialTable
              title="Store Data"
              data={column}
              columns={columns}
              options={{ filtering: true, exportButton: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
