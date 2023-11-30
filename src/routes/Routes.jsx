import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Trainer from "../pages/Trainer/Trainer";
import DashboardLayout from "../layouts/DashboardLayout";
import AllSubscribers from "../components/Dashboard/Sidebar/AdminMenus/AllSubscribers";
import AllTrainers from "../components/Dashboard/Sidebar/AdminMenus/AllTrainers";
import AppliedTrainers from "../components/Dashboard/Sidebar/AdminMenus/AppliedTrainers";
import BecomeTrainer from "../components/Trainer/BecomeTrainer";
import PrivateRoute from "./PrivateRoute";
import TrainerDetails from "../components/Trainer/TrainerDetails/TrainerDetails";
import { getSingleTrainer } from "../api/trainer";
import BookPackage from "../components/Trainer/BookTrainer/BookPackage";
import Payment from "../pages/Payment/Payment";
import ActivityLog from "../components/Dashboard/Sidebar/MemberMenus/ActivityLog";
import ProfileSettings from "../components/Dashboard/Sidebar/MemberMenus/ProfileSettings";
import RecommendedClasses from "../components/Dashboard/Sidebar/MemberMenus/RecommendedClasses";
import ManageSlots from "../components/Dashboard/Sidebar/TrainerMenus/ManageSlots";
import ManageMembers from "../components/Dashboard/Sidebar/TrainerMenus/ManageMembers";
import AddNewClass from "../components/Dashboard/Sidebar/TrainerMenus/AddNewClass";
import TrainerPayment from "../pages/Payment/TrainerPayment";
import Balance from "../components/Dashboard/Sidebar/AdminMenus/Balance/Balance";
import ClassDetails from "../pages/Classes/ClassDetails/ClassDetails";
import { getSingleClass } from "../api/classes";
import AddNewForum from "../components/Dashboard/Sidebar/AddNewForumMenu/AddNewForum";

export const router = createBrowserRouter([
    // main layout 
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>page not found</h2>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'trainer',
                element: <PrivateRoute>
                    <Trainer></Trainer>
                </PrivateRoute>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path:'class-details/:id',
                element:<ClassDetails></ClassDetails>,
                loader: ({params}) => getSingleClass(params.id)
            }
            ,
            {
                path:'become-trainer',
                element: <BecomeTrainer></BecomeTrainer>
            },
            {
                path: 'trainer-details/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({params})=> getSingleTrainer(params.id) 
            },
            {
                path: 'book-package',
                element:<BookPackage></BookPackage>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'trainerPayment',
                element: <TrainerPayment></TrainerPayment>
            }
        ]
    },
    // dashboard layout 
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            // admin routes 
            {
                path: 'all-subscribers',
                element:<AllSubscribers></AllSubscribers>
            },
            {
                path: 'all-trainers',
                element: <AllTrainers></AllTrainers>
            },
            {
                path: 'applied-trainers',
                element: <AppliedTrainers></AppliedTrainers>
            },
            {
                path:'balance',
                element: <Balance></Balance>
            },
            // trainer routes 
            {
                path:"manage-slots",
                element: <ManageSlots></ManageSlots>
            },
            {
                path: "manage-members",
                element: <ManageMembers></ManageMembers>
            },
            {
                path: "add-new-forum",
                element: <AddNewForum></AddNewForum>
            },
            {
                path: "add-new-class",
                element: <AddNewClass></AddNewClass>
            },
            // member routes 
            {
                path: "activity-log",
                element: <ActivityLog></ActivityLog>
            },
            {
                path: "profile-settings",
                element: <ProfileSettings></ProfileSettings>
            },
            {
                path: "recommendation-classes",
                element: <RecommendedClasses></RecommendedClasses>
            },
        ]
    }
])