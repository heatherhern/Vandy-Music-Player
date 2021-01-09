import React from "react";
import "./style.css";
import TableHeader from "../TableHeader"

function SearchResults(props) {
    return (
        <>
            <table className="results-container">
                <thead>
                    <TableHeader />
                </thead>

                {/* <tbody> */}
                    {/* {props.employees.map((employee) => (
                        <tr key={employee.login.username}>
                            <td>
                                <img src={employee.picture.thumbnail} alt="Profile Pic" />
                            </td>
                            <td>
                                {employee.name.first} {employee.name.last}
                            </td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody> */}



            </table>
        </>
    );
}


export default SearchResults;