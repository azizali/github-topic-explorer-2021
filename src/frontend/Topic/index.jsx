import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { fetchTopic } from '../_main/utils';

function Topic({ fallbackTopicTerm, match }) {
  const topicTerm = match.params.topicTerm || fallbackTopicTerm
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopic(topicTerm)
      .then((data) => {
        data && setData(data);
        data && setIsLoading(false);
      });
  }, []);

  if(isLoading) return 'Loading...'
  if(!data) return 'No Data found'

  const { name, stargazerCount, relatedTopics } = data.data.topic
  return (
    <>
      <h1>Topic: {name}</h1>
      <p>Stargazers: {stargazerCount}</p>
      
      Related Topics:
      {
        !!relatedTopics.length && 
        (<ul>
          {relatedTopics.map(
            ({name: relatedTopicName})=><li><Link to={`/topics/${relatedTopicName}`}>{relatedTopicName}</Link></li> 
          )}
        </ul>)
      }
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Topic;
