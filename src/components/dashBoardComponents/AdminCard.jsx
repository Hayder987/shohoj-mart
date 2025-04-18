import { motion } from "framer-motion";
import dollar from "../../assets/icons/dollar.png";
import user from "../../assets/icons/user.png";
import order from "../../assets/icons/order.png";
import product from "../../assets/icons/product.png";
import review from "../../assets/icons/review.png";
import CountUp from "react-countup";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AdminCard = ({ allInfo }) => {
  return (
    <motion.div
      className="grid gap-8 grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Card Template */}
      {[
        {
          id: 1,
          title: "Revenue",
          icon: dollar,
          bg: "bg-green-200",
          count: Math.floor(allInfo?.TotalIncome),
          duration: 2.5,
        },
        {
          id: 2,
          title: "All User",
          icon: user,
          bg: "bg-purple-200",
          count: allInfo?.allUser,
          duration: 2.8,
        },
        {
          id: 3,
          title: "All Products",
          icon: product,
          bg: "bg-red-200",
          count: allInfo?.allProduct,
          duration: 4,
        },
        {
          id: 4,
          title: "Total Order",
          icon: order,
          bg: "bg-yellow-200",
          count: allInfo?.allOrder,
          duration: 4,
        },
        {
          id: 5,
          title: "All Review",
          icon: review,
          bg: "bg-fuchsia-200",
          count: allInfo?.allReviewCollection,
          duration: 5,
        },
      ].map(({ id, title, icon, bg, count, duration }) => (
        <motion.div
          key={id}
          variants={cardVariants}
          transition={{ duration: 0.4 }}
          className={`flex items-center w-full gap-4 py-8 px-5 rounded-md ${bg}`}
        >
          <div className="w-5/12">
            <img src={icon} alt={title} className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
              <CountUp start={1} end={count} duration={duration} />
            </span>
            <p className="text-xl font-semibold">{title}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AdminCard;
