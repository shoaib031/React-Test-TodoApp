import React from 'react';
import SignUpComponent from './Router/SignUp';
import SignInComponent from './Router/SignIn';
import AddTodo from './Router/AddTodo';
import UpdateTodo from './Router/UpdateTodo';
import DeleteTodo from './Router/DeleteTodo';
import SignOutComponent from './Router/SignOut';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const handleSignUpClick = () => {
    console.log('Clicked on Sign Up');
  };

  const handleSignInClick = () => {
    console.log('Clicked on Sign In');
  };

  const handleSignOutClick = () => {
    console.log('Clicked on Sign Out');
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup" onClick={handleSignUpClick}>Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" onClick={handleSignInClick}>Sign In</Link>
          </li>
          <li>
            <Link to="/signout" onClick={handleSignOutClick}>Sign Out</Link>
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
        </ul>
      </nav>

      <Routes>
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/signout" element={<SignOutComponent />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/updatetodo" element={<UpdateTodo />} />
        <Route path="/deletetodo" element={<DeleteTodo />} />
      </Routes>
    </Router>
  );
}

export default App;