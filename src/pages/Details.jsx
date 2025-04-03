import { useEffect } from "react";
import { useParams } from "react-router";
import useSingleProduct from "../hooks/useSingleProduct";
import PageMargin from "../components/common/PageMargin";
import DetailsContent from "../components/deatilsComponenets/DetailsContent";
import SectionDivider from "../components/common/SectionDivider";
import LoaderSipnner from "../components/common/LoaderSipnner";
import useProduct from "../hooks/useProduct";
import Slider from "../components/slider/Slider";
import SliderTitle from "../components/slider/SliderTitle";

const Details = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { product, productLoading, singleRefetch } = useSingleProduct(id);
  const { productData, isLoading } = useProduct(`${product?.category}`, 7, "recent");
  const discount =
    parseFloat(product?.price) * (parseFloat(product?.discount) / 100);

  return (
    <div className="py-6 px-4 ">
      <PageMargin />
      <DetailsContent
        product={product}
        discount={discount}
        productLoading={productLoading}
      />
      <div className="divider"></div>
      {/* similar product */}
      <div className="container mx-auto">
        <div className="">
          <SliderTitle title={"Related Products"} />
        </div>
        <div className="">
          {isLoading ? (
            <LoaderSipnner />
          ) : (
            <Slider data={productData} class1={"prev-4"} class2={"next-4"} />
          )}
        </div>
      </div>
      <SectionDivider />
    </div>
  );
};

export default Details;
