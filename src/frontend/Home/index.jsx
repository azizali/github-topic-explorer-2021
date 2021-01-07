import React, { useState, useEffect } from 'react';
import Topic from '../Topic'

function Home({topicTerm}) {
  return (
    <>
      <Topic fallbackTopicTerm={topicTerm} />
    </>
  );
}

export default Home;
