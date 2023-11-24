import React from 'react';
import SignUp from './Router/SignUp'
import SignIn from './Router/SignIn'
import AddTodo from './Router/AddTodo'
import UpdateTodo from './Router/UpdateTodo'
import DeleteTodo from './Router/DeleteTodo'
import SignOut from './Router/SignOut'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/addtodo">Add Todo</Link>
          </li>
          <li>
            <Link to="/updatetodo">Update Todo</Link>
          </li>
          <li>
            <Link to="/deletetodo">Delete Todo</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="addtodo" element={<AddTodo />} />
        <Route path="updatetodo" element={<UpdateTodo />} />
        <Route path="deletetodo" element={<DeleteTodo />} />
        <Route path="signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
