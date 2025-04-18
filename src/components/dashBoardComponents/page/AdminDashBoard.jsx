import useAllInformation from "../../../hooks/useAllInformation";
import AdminCard from "../AdminCard";

const AdminDashBoard = () => {
  const { allInfo, allinfoLoading, refetch } = useAllInformation();

  console.log(allInfo);
  return (
    <div className="py-10 px-4">
      <div className="">
       <AdminCard allInfo={allInfo}/>
      </div>
    </div>
  );
};

export default AdminDashBoard;
