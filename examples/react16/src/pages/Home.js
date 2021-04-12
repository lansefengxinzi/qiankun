import React from 'react';
import { useEffect } from 'react';
import { loadMicroApp } from 'qiankun'

export default function() {
  // useEffect(() => {
  //   loadMicroApp({
  //     name: 'app',
  //     // entry: 'http://localhost:7099/pandora',
  //     entry: 'http://localhost:7099/pandora/react16/apps/application/saic-src/views/reportservice',
  //     container: '#homeApp',
  //     props: {
  //       token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdOYW1lIjoi5peg57uE57uHIiwidGVuYW50TmFtZSI6IuaXoOenn-aItyIsInBob25lIjoiMTgzMTEyNzA5NTEiLCJuYW1lIjoieGlhb3l4IiwiaXNBZG1pbiI6MSwidXNlcklkIjoiMiIsImVtYWlsIjoieXVodWl0aW5nQGhhcm1vbnljbG91ZC5jbiIsInVzZXJuYW1lIjoidGltZSJ9.8Bu5wiUtGHstDAYGRBp2V-AfR3KB-m5DtS6oFOlVzG0',
  //       isFullScreen: true,
  //       hideFeedback: true,
  //       basePath: '/react16'
  //     }
  //   });
  // }, [])
  
  return (
    <div id="homeApp"></div>
  );
}
