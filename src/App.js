import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import appStore from './utils/store/appStore';
import Browse from './components/Browse';
import LoginPage from './components/LoginPage';

function App() {

  const routePaths = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage/>,
    },
    {
        path: '/browse',
        element: <Browse />
    }

  ]);

  return (
    <div className=''>
      <Provider store={appStore}>
        <RouterProvider router={routePaths}>
          <Body/>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
