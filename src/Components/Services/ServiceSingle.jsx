import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ServiceSingle.css";

const ServiceSingle = () => {
  const { category, title } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/ServiceSingle.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCategory = data.find((cat) => cat.category === category);
        const foundService = foundCategory?.services.find(
          (srv) => srv.title === decodeURIComponent(title)
        );
        setService(foundService);
      });
  }, [category, title]);

  if (!service) return <p>Loading details...</p>;

  return (
    <div className="service-detail">
      <div className="img">
        <img src={service.imgUrl} alt="" />
      </div>
      <div className="des">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceSingle;
