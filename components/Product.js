import { ProductStyle } from "../styles/ProductStyle";

export default function Product({product}) {

    //Extract info from props
    const {title, price, image} = product.attributes;
    // console.log(product)

    return (
        <ProductStyle>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </ProductStyle>
    )
}