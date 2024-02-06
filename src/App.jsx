import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";
import WorkBetter from "./components/workbetter.jsx";
import LastInvoices from "./layouts/lastInvoicesTable.jsx";
import LastContacts from "./layouts/lastContactsTable.jsx";
import LastCompanies from "./layouts/lastCompaniesTable.jsx";
import ContactPeople from "./layouts/contactPeople.jsx";
import InfosCompany from "./layouts/infosCompany.jsx";
import Page404 from "./pages/Page404.jsx";
import AllInvoiceTable from "./layouts/allInvoicesTable.jsx";
import AllContactsTable from "./layouts/allContactsTable.jsx";
import AllCompaniesTable from "./layouts/allCompaniesTable.jsx";
import InfosContact from "./layouts/infosContact.jsx";
import NavDashboard from "./components/nav-dashboard.jsx";
import DashboardBody from "./layouts/dashboard-body.jsx";
import FormInvoice from "./components/form-invoice.jsx";
import HeaderDashBoard from "./layouts/dashboard-header.jsx";
import FormCompany from "./components/form-company.jsx";
import FormContact from "./components/form-contact.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Page404/>,
        element: (
            <>
                <Header/>
                <LastInvoices/>
                <LastContacts/>
                <LastCompanies/>
                <WorkBetter/>
                <Footer/>
            </>
        ),
    },
    {
        errorElement: <Page404/>,
        path: '/showcompany/:id',
        element: (
            <>
                <Header/>
                <InfosCompany/>
                <ContactPeople/>
                <LastInvoices/>
                <Footer/>
            </>
        ),
    },
    {
        path: '/invoices',
        errorElement: <Page404/>,
        element: (
            <>
                <Header/>
                <AllInvoiceTable/>
                <Footer/>
            </>
        ),
    },
    {
        path: '/contact',
        errorElement: <Page404/>,
        element: (
            <>
                <Header/>
                <AllContactsTable/>
                <Footer/>
            </>
        ),
    },

    {
        path: '/companies',
        errorElement: <Page404/>,
        element: (
            <>
                <Header/>
                <AllCompaniesTable/>
                <Footer/>
            </>
        ),
    },

    {
        path: '/showcontact/:id',
        element: (
            <>
                <Header/>
                <InfosContact/>
                <Footer/>
            </>
        ),
    },
    {
        path: '/dashboard',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <DashboardBody/>
                    </div>
                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-invoice',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <FormInvoice/>
                    </div>
                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-invoice/:id',
        element: (
            <>
                <div className="bg-bg-dashboard">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <FormInvoice/>
                    </div>

                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-company',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>

                        <FormCompany/>
                    </div>
                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-company/:id',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <FormCompany/>

                    </div>
                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-contact',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <FormContact/>
                    </div>
                </div>
            </>
        ),
    },
    {
        path: 'dashboard/new-contact/:id',
        element: (
            <>
                <div className="bg-bg-dashboard flex">
                    <NavDashboard/>
                    <div className={"w-full"}>
                        <HeaderDashBoard/>
                        <FormContact/>
                    </div>
                </div>
            </>
        ),
    },
    {
        path: '*',
        element: (
            <>
                <Header/>
                <Page404/>
                <Footer/>
            </>
        ),
    },
])

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
