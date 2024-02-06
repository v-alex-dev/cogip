import Axios from "axios";

export function getInvoices(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/invoices/")
        .then(response => {
            const invoices = response.data;
            return invoices;
        })
        .catch(error => {
            console.error("Error fetching contacts:", error);
            throw error;
        });
}

export function getInvoicesCount(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/invoices/count")
        .then(response => {
            const invoicesCount = response.data;
            return invoicesCount;
        })
        .catch(error => {
            console.error("Error fetching invoices count:", error);
            throw error;
        });
}

export function getInvoice(id){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/invoices/"+id.id)
      .then(response => {
        const invoice = response.data;
        return invoice;
      })
      .catch(error => {
        console.error("Error fetching invoice:", error);
        throw error;
      });
}