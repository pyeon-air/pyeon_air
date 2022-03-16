import {useEffect, useState} from 'react';
import $ from "jquery";

const App=()=>{

  const [text, setText] = useState('올해가 끝났습니다.');
  useEffect(()=>{
    $(".target").mousedown(function () {
      setText('나이 한살 추가요')
    });
    $(".target").mousedown(function () {
      alert('나이 한살 추가요')
    });
    $("button").mouseup(function () {
      setText('올해가 끝났습니다.')
    });

    console.log('changed');
  }, []);

  return (
    <div className="App">
      <button className="target">버튼</button>
      <div>{text}</div>
    </div>
  );
}

export default App;