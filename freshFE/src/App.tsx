import {RouterProvider} from 'react-router-dom';
import { mainRouter } from './Router/mainRoute';

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter}/>
    </div>
  )
}

export default App