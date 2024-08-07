import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Login from './page/login';
import CreateAccount from './page/signup';

import * as HomeV2 from './page/social/home/home';
import RecentMessaageList from './page/social/message/messages';
import Notifications from './page/social/notifications/Notifications';
import AcademicsHome from './page/academics/home/academicsHome';
import CourseProfile from './page/academics/profile/courseprofile';
import CourseCreation from './page/academics/courseEdit/courseedit';
import PostDetails from './page/social/post/postDetails';
import PrivacyPolicy from './page/policy/privacy_policy';
import Settings from './page/social/settings/settings';
import PostCompose from './page/social/post/postCompose';
import UserProfile from './page/social/user/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/:username/post/:postId' element={<PostDetails />}/>
      <Route path='/postcompose' element={<PostCompose />}/>

      <Route path='/sign-up' element={<CreateAccount />}/>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/policy-privacy' element={<PrivacyPolicy />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/postdetails' element={<PostDetails/>} />
      <Route path='/profile' element={<UserProfile />} />

      <Route path='/home' element={<HomeV2.default />}/>
      <Route path="/message" element={<RecentMessaageList />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path='/posts/:id' element={<PostDetails />}/>
      <Route path='/academics' element={<AcademicsHome />}/>
      <Route path='/academics/explore' element={<CourseProfile />}/>
      <Route path='/academics/dashboard' element={<CourseProfile/>}/>
      <Route path="/course-creation" element={<CourseCreation />} />
    </Routes>
  </Router>
);

reportWebVitals();