import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter } from '~/routes';
import { DefaultLayout } from './componrnts/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            //lan dau la home, lan sau la following
            const Page = route.component;

            //mac dinh la defaulayout: la home, following, profile
            let Layout = DefaultLayout

      
            if(route.layout){
                    //upload
              Layout = route.layout
            }else if(route.layout === null){
              //fragment la ko co header,following, profile
                Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                //page la chilren cua Layout - duoc dua sang defaultlayout
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
