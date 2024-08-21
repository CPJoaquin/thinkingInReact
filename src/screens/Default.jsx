import Logo from './_components/Logo'; 
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import Contador from './_components/Contador';

import FilterableProductTable from './_components/FilterableProductTable';


const Default = () => {
return (
    <>
    <header className="App-header">
        <Contador />
        <Logo />
        <Description />
        <OpenLink title="Learn React" url="https://reactjs.org/" />
        <OpenLink title="mi proyecto" url="https://github.com/AFF40/desarrollo-frontend-react" />
        
        <FilterableProductTable>
          

        </FilterableProductTable>
         
      </header>
    </>
    );
};

export default Default;