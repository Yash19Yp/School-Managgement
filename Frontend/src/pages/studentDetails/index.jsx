import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";

import all_students from "../../constants/students";
import { calculateRange, sliceData } from "../../utils/table-pagination";

import "../styles.css";
import DoneIcon from "../../assets/icons/done.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import RefundedIcon from "../../assets/icons/refunded.svg";
import StudentModal from "../../Modals/Create_student";

function Students() {
  const [search, setSearch] = useState("");
  const [Student, setStudents] = useState(all_students);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const [isStudentModal, setStudentModal] = React.useState(false);
  function handleOpenStudentModal() {
    setStudentModal(true);
  }
  function handleCloseStudentModal() {
    setStudentModal(false);
  }

  useEffect(() => {
    setPagination(calculateRange(all_students, 5));
    setStudents(sliceData(all_students, page, 5));
  }, []);

  // Search
  const __handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = Student.filter(
        (item) =>
          item?.first_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          item?.middle_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          item?.last_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
          item?.product?.toLowerCase()?.includes(search?.toLowerCase())
      );
      setStudents(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page) => {
    setPage(new_page);
    setStudents(sliceData(all_students, new_page, 5));
  };

  return (
    <div className="dashboard-content">
      <DashboardHeader
        btnText="Create Student"
        onClick={handleOpenStudentModal}
      />

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Student List</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="dashboard-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>BIRTH DATE</th>
            <th>PARENT NAME</th>
            <th>PARENT NUMBER</th>
            <th>PARENT EMAIL</th>
            <th>FEES STATUS</th>
          </thead>

          {Student.length !== 0 ? (
            <tbody>
              {Student.map((student, index) => (
                <tr key={index}>
                  <td>
                    <span>{student.id}</span>
                  </td>
                  <td>
                    <div>
                      <img
                        src={student.avatar}
                        className="dashboard-content-avatar"
                        alt={student.first_name + " " + student.last_name}
                      />
                      <span>
                        {student.first_name} {student.last_name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span>{student.birth_date}</span>
                  </td>
                  <td>
                    <span>{student.parent_name}</span>
                  </td>
                  <td>
                    <span>{student.parent_number}</span>
                  </td>
                  <td>
                    <span>{student.parent_email}</span>
                  </td>
                  <td>
                    <div>
                      {student.fees_status === "Paid" ? (
                        <img
                          src={DoneIcon}
                          alt="paid-icon"
                          className="dashboard-content-icon"
                        />
                      ) : student.fees_status === "Canceled" ? (
                        <img
                          src={CancelIcon}
                          alt="canceled-icon"
                          className="dashboard-content-icon"
                        />
                      ) : student.fees_status === "Refunded" ? (
                        <img
                          src={RefundedIcon}
                          alt="refunded-icon"
                          className="dashboard-content-icon"
                        />
                      ) : null}
                      <span>{student.fees_status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {Student.length !== 0 ? (
          <div className="dashboard-content-footer">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
                onClick={() => __handleChangePage(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="dashboard-content-footer">
            <span className="empty-table">No data</span>
          </div>
        )}
      </div>
      {isStudentModal ? (
        <StudentModal
          isOpen={isStudentModal}
          onRequestClose={handleCloseStudentModal}
        />
      ) : null}
    </div>
  );
}

export default Students;
