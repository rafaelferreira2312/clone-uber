import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/api';
import DataTable from '../components/DataTable';

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks();
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h1>Gerenciamento de Feedbacks</h1>
      <DataTable data={feedbacks} columns={['ID', 'Avaliação', 'Comentário', 'Data']} />
    </div>
  );
};

export default FeedbacksPage;