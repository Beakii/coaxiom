import React from 'react'
import Landing from './pages/landing';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Landing} />
        </Router>
    )
}

export default App
