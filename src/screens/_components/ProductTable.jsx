import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = () => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Categoría</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow />
            </tbody>
        </table>
    );
}

export default ProductTable;
