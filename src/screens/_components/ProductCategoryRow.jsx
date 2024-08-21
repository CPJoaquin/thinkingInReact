import ProductRow from './ProductRow';
import ProductRow2 from './ProductRow2';

const ProductCategoryRow = () => {
    return (
        <>
            <tr>
                <td colSpan="3"><strong>Frutas</strong></td>
            </tr>
            <ProductRow />
            <tr>
                <td colSpan="3"><strong>Verduras</strong></td>
            </tr>
            <ProductRow2 />
        </>
    );
}

export default ProductCategoryRow;
