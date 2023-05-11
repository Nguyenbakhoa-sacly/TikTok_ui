
//layouts
import {HeaderOnly} from '~/componrnts/Layout'

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// ko dang nhap van vao xem duoc
const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
// phai dang nhap moi vao duoc
const privateRouter = [
  // {
  //     path:'/login',
  //     component:login
  // }
];

export { privateRouter, publicRouter };
