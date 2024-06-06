import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Form/Layout/Layout";
import API from "../../services/API";


const Hospitals = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      //   console.log(data);
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);

  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalname}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Hospitals;
