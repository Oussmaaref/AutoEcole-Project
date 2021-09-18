import React , { useEffect, useState }from 'react'
import TemplateAdmin from '../Template/TemplateAdmin'
import TemplateEmployer from '../Template/TemplateEmployer'
import TemplateCandidate from '../Template/TemplateCandidate'


export default function MainTemp() {

    const [role, setRole] = useState("");
    useEffect(() => {
        let data=localStorage.getItem("userdata")
        let dataplz = JSON.parse(data)
        setRole(dataplz.role)
       
        
      }, []);
    return (
        <div>
           {role === "candidate" &&  <TemplateCandidate/>}
           {role ==="employee" &&  <TemplateEmployer/>}
           {role === "admin" &&  <TemplateAdmin/>}
        </div>
    )
}