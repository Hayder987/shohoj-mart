import { useParams } from "react-router"
import useSingleProduct from "../../../hooks/useSingleProduct";

const UpdateProduct = () => {
  const {id} = useParams();
  const {product, productLoading, refetch} = useSingleProduct(id);

  console.log(product)
  return (
    <div>UpdateProduct</div>
  )
}

export default UpdateProduct