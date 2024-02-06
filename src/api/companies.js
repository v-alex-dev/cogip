import Axios from "axios";

export function getCompany(id){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/companies/"+id)
      .then(response => {
        const company = response.data;
        return company;
      })
      .catch(error => {
        console.error("Error fetching company:", error);
        throw error;
      });
}

export function getCompanies(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/companies/")
      .then(response => {
        const companies = response.data;
        return companies;
      })
      .catch(error => {
        console.error("Error fetching companies:", error);
        throw error;
      });
}

export function getCompaniesCount(){
    return Axios.get("https://cogip-990e44950882.herokuapp.com/companies/count")
      .then(response => {
        const companiesCount = response.data;
        return companiesCount;
      })
      .catch(error => {
        console.error("Error fetching companies count:", error);
        throw error;
      });
}