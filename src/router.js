import {
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
    Route //will be put into the helper 
} from 'react-router-dom';
import App from './App';
import Show from './pages/Show'
import Landing from './pages/Index';
import { peopleLoader, personLoader } from './loaders';
import { createAction, updateAction, deleteAction } from './actions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<Landing/>} loader={peopleLoader}/>
            <Route path=':id' element={<Show/>} loader={personLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction}/>
            <Route path='delete/:id' action={deleteAction}/>

        </Route>
    )
)

export default router;