import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const { _id } = useParams();
  const getDataDetail = async (_id) => {
    const data = await axios.get(`http://localhost:8080/featureds/${_id}`);
    setDatas(await data.data);
  };
  useEffect(() => {
    getDataDetail(_id);
  }, []);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/featureds/${_id}`);
    navigate("/");
  };

  return (
    <div>
      <img src={datas?.imgurl} alt="" />
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DetailPage;
