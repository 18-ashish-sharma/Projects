import { Switch, Route } from 'react-router-dom';

import routes from './routes';
import Layout from './containers/Layout';
import ColorContext from './context/ColorContext';
// import AppNav from './components/AppNav';
// import Footer from './components/Footer';
// import Layout from './containers/Layout';

const App = () => {
  return (
    <>
      <ColorContext.Provider value="danger">
      <Layout>
    <Switch>
        {
          routes.map((route,idx) => {
            return (
              <Route key={idx} {...route} />
            )
          })
        }
      </Switch>
    </Layout>
      </ColorContext.Provider>

    </>
  )
}

export default App;
