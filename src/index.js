import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

import App from './App';
import Login from './page/login';
import Home from './page/home';
import Message from './page/message';
import Profile from './page/profile';
import Settings from './page/settings';
import Academics from './page/academics';
import Notification from './page/notification';
import PostDetails from './page/post_details';
import PostCompose from './page/post_compose';
import MessageCompose from './page/messageCompose';
import AcademicsExplore from './page/academicExplore';
import AcademicsDashboard from './page/academicsDashboard';
import CreateAccount from './page/signup';

import LogIn from './page/index/login';
import * as HomeV2 from './page/social/home/home';
import RecentMessaageList from './page/social/message/messages';
import Notifications from './page/social/notifications/Notifications';
import AcademicsHome from './page/academics/home/academicsHome';
import CourseProfile from './page/academics/profile/courseprofile';
import CourseCreation from './page/academics/courseEdit/courseedit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/signup' element={<CreateAccount />}/>
      <Route path='/' element={<App />} />
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/home' element={<Home />} /> */}
      {/* <Route path='/message' element={<Message />}/> */}
      <Route path='/message/compose' element={<MessageCompose />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/settings' element={<Settings />}/>
      {/* <Route path='/academics' element={<Academics />}/> */}
      {/* <Route path='/academics/explore' element={<AcademicsExplore />}/> */}
      {/* <Route path='/academics/dashboard' element={<AcademicsDashboard />}/> */}
      {/* <Route path='/notification' element={<Notification />}/> */}
      <Route path='/post/details' element={<PostDetails />}/>
      <Route path='/post/compose' element={<PostCompose />}/>
      

      <Route path='/login' element={<LogIn />}/>
      <Route path='/home' element={<HomeV2.default />}/>
      <Route path="/message" element={<RecentMessaageList />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path='/academics' element={<AcademicsHome />}/>
      <Route path='/academics/explore' element={<CourseProfile />}/>
      <Route path='/academics/dashboard' element={<CourseProfile/>}/>
      <Route path="/v2/course-creation" element={<CourseCreation />} />
    </Routes>
  </Router>
);

reportWebVitals();