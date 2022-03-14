// import { ReactMediaRecorder } from "react-media-recorder";

// const App = () => (
//   <div>
//     <ReactMediaRecorder
//       video
//       render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//         <div>
//           <p>{status}</p>
//           <button onClick={startRecording}>Start Recording</button>
//           <button onClick={stopRecording}>Stop Recording</button>
//           <video src={mediaBlobUrl} controls autoPlay loop />
//         </div>
//       )}
//     />
//   </div>
// );

// export default App


// import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";

// function App(){
//   const{ status, startRecording, stopRecording, mediaBlobUrl }=useReactMediaRecorder({video:true})

//      return(
//       <div>
//       <p>{status}</p>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <video src={mediaBlobUrl} controls autoPlay loop />
//       </div>
//      )}
// export default App

import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ screen: true });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default RecordView


