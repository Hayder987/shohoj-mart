import useAllInformation from "../../../hooks/useAllInformation";
import LoaderSipnner from "../../common/LoaderSipnner";
import AdminCard from "../AdminCard";
import AdminChartVertical from "../AdminChartVertical";
import BestSellingTree from "../BestSellingTree";

const AdminDashBoard = () => {
  const { allInfo, allinfoLoading } = useAllInformation();

  console.log(allInfo);
  return (
    <div className="py-10 px-4">
      {allinfoLoading ? (
        <LoaderSipnner />
      ) : (
        <div className="">
          <AdminCard allInfo={allInfo} />
          <div className="mt-20">
            <AdminChartVertical allInfo={allInfo}/>
            <h1 className="mt-8 text-2xl font-semibold text-center">
              Most Selling Product
            </h1>
          </div>
          {/* tree */}
          <div className="">
            <BestSellingTree/>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
