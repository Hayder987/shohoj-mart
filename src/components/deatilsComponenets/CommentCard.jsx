import RatingReadOnly from "./RatingReadOnly";
import { format } from "date-fns";

const CommentCard = ({ item }) => {
  const formattedDate = item?.date
    ? format(new Date(item?.date), "dd MMM yyyy HH:mm")
    : "";


  return (
    <div className="border-y py-6 px-4 border-gray-300">
      {/* rating and date */}
      <div className="flex mb-4 items-center justify-between">
        <RatingReadOnly rating={item?.rating} />
        <p>{formattedDate}</p>
      </div>
      <p className="flex mb-3 items-center gap-2">
        <span className="p-2 rounded-full bg-gray-200 font-semibold">
          {item?.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="">{item?.name}</span>
      </p>
      <p className="">{item?.comment}</p>
    </div>
  );
};

export default CommentCard;
