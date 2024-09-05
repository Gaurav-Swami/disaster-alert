import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../utils/base.js";
import Loading from "../components/Loading.jsx";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get(base_url);
        setAlerts(response.data.articles.results); // Update state with the fetched data
        console.log(response.data);
      } catch (error) {
        setError(error); // Set error if there is an issue with the request
      } finally {
        setLoading(false); // Set loading to false after data is fetched or an error occurs
      }
    };

    fetchAlerts(); // Call the async function
  }, []);

  if (loading) return <Loading/>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="px-4 py-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Disaster Alerts</h1>
      <div className=" grid grid-cols-2 gap-8 ">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <div
              key={index}
              className="mb-2  border rounded-md bg-gray-100 w-[700px] flex gap-x-12 p-6"
            > 
              <img src={alert.image} alt=""  className="w-[300px] h-[250px] object-cover"/>
              <div className="flex flex-col gap-y-3">
                <h2 className="font-semibold">{alert.title}</h2>
                <p>{alert.description}</p>
                <p className="line-clamp-4">{alert.body}</p>
                <a
                  href={alert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No alerts available.</p>
        )}
      </div>
    </div>
  );
};

export default Alerts;
