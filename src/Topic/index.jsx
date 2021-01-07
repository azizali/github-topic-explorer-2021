import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { fetchTopic } from '../_main/utils';

function Topic({ fallbackTopicTerm, match }) {
  const topicTerm = match && match.params.topicTerm || fallbackTopicTerm
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopic(topicTerm)
      .then((data) => {
        setIsLoading(false);
        data && setData(data);
      });
      return ()=>{
        setData({});
        setIsLoading(true);
      }
  }, [topicTerm]);

  if(isLoading) return 'Loading...'
  if(!data.topic) return 'No Data found'

  const { name, stargazerCount, relatedTopics } = data.topic
  return (
    <>
      <h1>Topic: {name} ({stargazerCount} Stargazers)</h1>
      <h2>Related Topics:</h2>
      {
        !!relatedTopics.length &&
        (<ul>
          {relatedTopics.map(
            ({name: relatedName, stargazerCount: relatedStargazerCount})=><li key={relatedName}>
              <Link role="link" to={`/topics/${relatedName}`}>{relatedName} ({relatedStargazerCount} Stargazers)</Link>
            </li>)
          }
        </ul>)
      }
    </>
  );
}

export default Topic;
