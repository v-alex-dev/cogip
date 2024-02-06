import Statistics from "../components/statistics";
import LastContactsDashboard from "./lastContacts-dashboard";
import LastInvoicesDashboard from "./lastInvoices-dashboard";
import LastCompaniesDashboard from "./lastCompanies-dashboard";
import {motion} from "framer-motion";


const DashboardBody = () => {
    
    return (
        <motion.div
            initial={{ opacity: -2}}
            animate={{opacity: 1}}
            transition={{
                duration: 1.5,
                type: 'tween',
                ease: 'easeInOut'
            }}
            className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:p-8 md:mx-auto">
            <div className="w-6/12">
                <Statistics />
                <LastContactsDashboard />
            </div>
            <div className="w-6/12">
                <LastInvoicesDashboard />
                <LastCompaniesDashboard />
            </div>
        </motion.div>
    )
}

export default DashboardBody;