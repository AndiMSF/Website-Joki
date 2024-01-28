import "./ordersAdmin.css";
import NavbarAdmin from "../../../components/admin/NavbarAdmin/NavbarAdmin";
import DataTables from "../../../components/admin/DataTables/DataTables";

const OrdersAdmin = () => {
  return (
    <div className="orders__container__admin">
      <NavbarAdmin title="Orders"/>
      <DataTables />
    </div>
  );
};

export default OrdersAdmin;
