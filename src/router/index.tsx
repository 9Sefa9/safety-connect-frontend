import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../views/Home/Home'
import NotFound from '../views/NotFound/NotFound'
import Blog from '../components/blog/Blog'
import MarketingPage from '../components/marketing-page/MarketingPage'
import SignUp from '../components/sign-up/SignUp'

enum Route {
    ROOT = '/',
    BLOG = '/blog',
    SIGNUP = '/signup',
    MARKETING = '/marketing',
    NOTFOUND = '*',
}

const publicRoutes = [
    {
        path: Route.ROOT,
        element: <Home />,
    },
    {
        path: Route.BLOG,
        element: <Blog />,
    },
    {
        path: Route.MARKETING,
        element: <MarketingPage />,
    },
    {
        path: Route.SIGNUP,
        element: <SignUp />,
    },
    {
        path: Route.NOTFOUND,
        element: <NotFound />,
    },
]

const routes = [
    {
        path: Route.ROOT,
        element: <App />,
        children: [...publicRoutes],
    },
]

const router = createBrowserRouter(routes)

export { router, Route }
