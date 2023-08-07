import React, { useEffect, useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import axios from "axios";
import toast from "toastr";
import { FaFemale, FaMale } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [employee, setEmployee] = useState("");
  const [loading, setLoading] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [mobileFilter, setMobileFilter] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const getAllEmployees = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/users/getallemployees`
      );
      if (res.status === 200) {
        setEmployee(res?.data);
        setFilteredEmployee(res?.data);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  //search emp
  const handleSearch = () => {
    if (!nameFilter && !mobileFilter) {
      toast.warning("Name or Mobile No cannot be empty ");
      return;
    }

    const filtered = employee.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      const filterName = nameFilter.toLowerCase();
      const filterMobile = mobileFilter.toString();

      const nameMatch = filterName ? fullName.includes(filterName) : true;
      const mobileMatch = filterMobile
        ? item.mobileNumber.includes(filterMobile)
        : true;

      return nameMatch && mobileMatch;
    });

    if (filtered.length === 0) {
      toast.info("No matching employees found.");
    }

    setFilteredEmployee(filtered);
    setCurrentPage(1); 
  };

  //del emp
  const handleDel = async (orderid) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `http://localhost:8000/api/users/deleteemployees/${orderid}`
      );
      if (res.status === 200) {
        const updatedEmployees = employee.filter(
          (item) => item.orderId !== orderid
        );
        setEmployee(updatedEmployees);
        toast.success("Employee deleted successfully!");
        getAllEmployees();
      } else {
        toast.error("Failed to delete employee.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the employee.");
    }
  };

  //edit emp
  const handleEdit = (employeeId) => {
    navigate(`/home/editemployee`, { state: { employeeId } });
  };
  const handlePaginationChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const ITEMS_PER_PAGE = 10;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredEmployee.length
  );

  useEffect(() => {
    getAllEmployees();
  }, []);
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-fields d-flex justify-content-between align-items-center">
                  <div>
                    <h1>Search Employee</h1>
                  </div>
                  <div>
                    <Link to="/home/createemployee">
                      <button className="btn btn-info fs-3 text-white mt-1">
                        Add Employee
                      </button>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="name" className="fs-3">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      value={nameFilter}
                      onChange={(e) => setNameFilter(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="mobile" className="fs-3">
                      Mobile No
                    </label>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      className="form-control"
                      value={mobileFilter}
                      onChange={(e) => setMobileFilter(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 d-flex align-items-center gap-5 mt-3">
                    <button
                      className="btn btn-success fs-3"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                    <button
                      className="btn btn-danger fs-3"
                      onClick={() => {
                        setNameFilter("");
                        setMobileFilter("");
                        setFilteredEmployee(employee);
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="card mt-5 mr-5">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-12">
                          {loading ? (
                            <div className="text-center">
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div
                              className="table-responsive"
                              style={{ maxWidth: "100%", cursor: "pointer" }}
                            >
                              <table className="table table-bordered table table-striped tabel table-hover table-responsive fs-4">
                                <thead>
                                  <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile No</th>
                                    <th>Email Id</th>
                                    <th>Gender</th>
                                    <th>Birth Date</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {filteredEmployee &&
                                    filteredEmployee.length > 0 &&
                                    filteredEmployee
                                      .slice(startIndex, endIndex)
                                      .map((item, ind) => {
                                        const {
                                          firstName,
                                          lastName,
                                          email,
                                          mobileNumber,
                                          dateOfBirth,
                                          gender,
                                          country,
                                          city,
                                        } = item;
                                        const dobDate = new Date(dateOfBirth);

                                        // Format the date to display only the date part (day, month, and year)
                                        const formattedDate =
                                          dobDate.toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "2-digit", // Use 2-digit to display the month as a two-digit number
                                            day: "2-digit", // Use 2-digit to display the day as a two-digit number
                                          });
                                        return (
                                          <tr
                                            className="table table-striped"
                                            key={ind}
                                          >
                                            <td>{firstName}</td>
                                            <td>{lastName}</td>
                                            <td>{mobileNumber}</td>
                                            <td>{email}</td>
                                            <td className="fs-1">
                                              {gender === "Male" ? (
                                                <FaMale />
                                              ) : gender === "Female" ? (
                                                <FaFemale />
                                              ) : (
                                                "Other"
                                              )}
                                            </td>
                                            <td>{formattedDate}</td>
                                            <td>{country}</td>
                                            <td>{city}</td>
                                            <td>
                                              <div className="col-md-4 d-flex gap-3 ">
                                                <button
                                                  className="btn btn-success fs-3"
                                                  onClick={() =>
                                                    handleEdit(item._id)
                                                  }
                                                >
                                                  Edit
                                                </button>
                                                <button
                                                  className="btn btn-danger fs-3"
                                                  onClick={() =>
                                                    handleDel(item._id)
                                                  }
                                                >
                                                  Del
                                                </button>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="row mt-3">
        <div className="col">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link fs-3"
                  onClick={() => handlePaginationChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from(
                { length: Math.ceil(filteredEmployee.length / ITEMS_PER_PAGE) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item  ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link fs-3"
                      onClick={() => handlePaginationChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
              <li
                className={`page-item ${
                  currentPage ===
                  Math.ceil(filteredEmployee.length / ITEMS_PER_PAGE)
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-link fs-3"
                  onClick={() => handlePaginationChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Search;
