import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Form/Layout/Layout";

//import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  // const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //find org records
  const getOrg = async () => {
    try {
      const { data } = await API.get(
        "/inventory/get-Organisation"
      );
      if (data?.success) {
        setData(data?.organisations);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //     if (user?.role === "donar") {
  //       const { data } = await API.get("/inventory/get-organisation"); // orgnaisation tha
  //       //   console.log(data);
  //       if (data?.success) {
  //         setData(data?.organisations);
  //       }
  //     }
  //     if (user?.role === "hospital") {
  //       const { data } = await API.get(
  //         "/inventory/get-orgnaisation-for-hospital"
  //       );
  //       //   console.log(data);
  //       if (data?.success) {
  //         setData(data?.organisations);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // dou
    getOrg();
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
              <td>{record.organisationName}</td>
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

export default OrganisationPage;
