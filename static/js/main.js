// console.log('hi');

// var usernameInput = document.querySelector('#username');
// var btnJoin = document.querySelector('#btn-join');

// var username;
// var websocket;

// var mapPeers = {};

// function websocketOnMessage(event){
//     var parsedData = JSON.parse(event.data);
//     var peerUsername = parsedData['peer'];
//     var action = parsedData['action'];

//     if(username == peerUsername){
//         return;
//     }

//     var receiver_channel_name = parsedData['message']['receiver_channel_name'];

//     if(action == 'new-peer'){
//         createOfferer(peerUsername, receiver_channel_name);
//         return;
//     }


//     if(action == 'new-offer'){
//         var offer = parsedData['message']['sdp'];

//         createAnswerer(offer, peerUsername, receiver_channel_name);

//         return;
//     }

//     if(action == 'new-answer'){
//         var answer = parsedData['message']['sdp'];

//         var peer = mapPeers[peerUsername][0];

//         peer.setRemoteDescription(answer);

//         return;
//     }
// }

// btnJoin.addEventListener('click', () => {
//     username = usernameInput.value;

//     if(username == ""){
//         return;
//     }

//     usernameInput.value = '';
//     usernameInput.disabled = true;
//     usernameInput.style.visibility = 'hidden';

//     btnJoin.disabled = true;
//     btnJoin.style.visibility = 'hidden';


//     var labelUsername = document.querySelector('#label-username');
//     labelUsername.innerHTML=username

//     var loc = window.location; 
//     var wsStart = 'ws://'

//     if (loc.protocol == 'https:'){
//         wsStart = 'wss://'
//     }

//     var endPoint = wsStart + loc.host + loc.pathname
//     console.log('endPoint : ', endPoint)

//     websocket = new WebSocket(endPoint);

//     websocket.addEventListener('open',(e) => {
//         console.log('Connection Opened');
//         sendSignal('new-peer', {});
//     });
//     websocket.addEventListener('message', websocketOnMessage);
//     websocket.addEventListener('close',(e) => {
//         console.log('Connection Closed')
//     });
//     websocket.addEventListener('error',(e) => {
//         console.log('Error Occured')
//     });
// })

// var localstream = new MediaStream();
// // console.log(localstream);
// // var localstream

// const constraints = {
//     "video": true,
//     "audio": true,
// };

// const localvideo = document.querySelector("#local-video");

// const btnToggleAudio = document.querySelector("#btn-toggle-audio");
// const btnToggleVideo = document.querySelector("#btn-toggle-video");

// var userMedia = navigator.mediaDevices.getUserMedia(constraints)
//     .then(stream =>{
//         localstream = stream;
//         // console.log(localstream);
//         localvideo.srcObject = localstream;
//         localvideo.muted  = true;

//         var audioTracks = stream.getAudioTracks();
//         var videoTracks = stream.getVideoTracks();
//         // console.log(videoTracks)
//         audioTracks[0].enabled = true;
//         videoTracks[0].enabled = true;

//         btnToggleAudio.addEventListener('click', () => {
//             audioTracks[0].enabled = !audioTracks[0].enabled;
            
//             if (audioTracks[0].enabled){
//                 btnToggleAudio.innerHTML = "Audio Mute";
//                 return
//             }

//             btnToggleAudio.innerHTML = "Audio Unmute";
//         });

//         btnToggleVideo.addEventListener('click', () =>{
//             videoTracks[0].enabled = !videoTracks[0].enabled;
            
//             if (videoTracks[0].enabled){
//                 btnToggleVideo.innerHTML = "Video Off";

//                 return;
//             }
//             btnToggleVideo.innerHTML = "Video On";
//         });

//         videoTracks[0].enabled = !videoTracks[0].enabled;
//         localstream.onloadedmetadata = function(e){
//             localstream.play()
//         }
//     })

//     .catch(error => {
//         console.log("Error accessing media devices.", error);
//     });

//     var jsonStr = JSON.stringify({
//         'peer' : username,
//         'action': 'new-answer',
//         'message': {
            
//         },
//     });
//     console.log(websocket);
//     websocket.send(jsonStr);

// function sendSignal(action, message){
//     var jsonStr = JSON.stringify({
//         'peer' : username,
//         'action': action,
//         'message': message,
//     });

//     websocket.send(jsonStr);
// }

// function createOfferer(peerUsername, receiver_channel_name){
//     var peer = new RTCPeerConnection(null);

//     addLocalTracks(peer);

//     var dc = peer.createDataChannel('channel');
//     dc.addEventListener('open', () =>{
//         console.log("Connection opened!")
//     });
//     dc.addEventListener('message', dcOnMessage);

//     var remoteVideo = createVideo(peerUsername);
//     setOnTrack(peer, peerUsername);

//     mapPeers[peerUsername] = [peer, dc];

//     peer.addEventListener('iceconnectionstatechange', () =>{
//         var iceConnectionState = peer.iceConnectionState;

//         if(iceConnectionState === 'failed' || iceConnectionState === 'disconnected' || iceConnectionState === 'closed'){
//             delete mapPeers[peerUsername];

//             if(iceConnectionState != 'closed'){
//                 peer.close();
//             }

//             removeVideo(remoteVideo);
//         }
//     });

//     peer.addEventListener('icecandidate', (event) => {
//         if(event.candidate){
//             console.log("New ice candidate", JSON.stringify(peer.localDescription));
//             return;
//         }

//         sendSignal('new-offer', {
//             'sdp': peer.localDescription,
//             'receiver_channel_name' :receiver_channel_name
//         });
//     });

//     peer.createOffer()
//         .then( o => peer.setLocalDescription(o))
//         .then(()=> {
//             console.log('Local description set successfully');
//         });
// }

// function createAnswerer(offer, peerUsername, receiver_channel_name){
//     var peer = new RTCPeerConnection(null);

//     addLocalTracks(peer);

//     var remoteVideo = createVideo(peerUsername);
//     setOnTrack(peer, peerUsername);

//     peer.addEventListener('datachannel', e => {
//         peer.dc = e.channel;
//         peer.dc.addEventListener('open', () =>{
//             console.log("Connection opened!")
//         });
//         peer.dc.addEventListener('message', dcOnMessage);

//         mapPeers[peerUsername] = [peer, peer.dc];
//     });


//     peer.addEventListener('iceconnectionstatechange', () =>{
//         var iceconnectionstatechange = peer.iceConnectionState;

//         if(iceconnectionstatechange === 'failed' || iceconnectionstatechange === 'disconnected' || iceconnectionstatechange === 'closed'){
//             delete mapPeers[peerUsername];

//             if(iceconnectionstatechange != 'closed'){
//                 peer.close();
//             }
            
//             removeVideo(remoteVideo);
//         }
//     });

//     peer.addEventListener('icecandidate', (event)=>{
//         if(event.candidate){
//             console.log("New ice candidate", JSON.stringify(peer.localDescription));
//             return;
//         }

//         sendSignal('new-answer', {
//             'sdp': peer.localDescription,
//             'receiver_channel_name': receiver_channel_name
//         });
//     });

//     peer.setRemoteDescription(offer)
//         .then(() =>{
//             console.log('Remote description set successfully fo %s', peerUsername);
//             return peer.createAnswerer();
//         })
//         .then(a => {
//             console.log('Answer created');
//             peer.setLocalDescription(a);
//         })
// }

// function addLocalTracks(peer){
//     localstream.getTracks().forEach(track =>{
//        peer.addTrack(track, localstream) 
//     });
//     return;
// }

// var messageList = document.querySelector('#message-list');

// function dcOnMessage(event){
//     var message = event.data;

//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(message));
//     messageList.appendChild(li);
// }

// function createVideo(peerUsername){
//     var videoContainer = document.querySelector("#video-container");

//     var remoteVideo = document.createElement('video');

//     remoteVideo.id = peerUsername + '-video';
//     remoteVideo.autoplay = true;
//     remoteVideo.playsInline = true;

//     var videoWrapper = document.createElement('div');

//     videoContainer.appendChild(videoWrapper);

//     videoWrapper.appendChild(remoteVideo);

//     return remoteVideo;
// }

// function setOnTrack(peer, remoteVideo){
//     var remoteStream = new MediaStream()

//     remoteVideo.srcObject = remoteStream;

//     peer.addEventListener('track', async (event) =>{
//         remoteStream.addTrack(event.track, remoteStream);
//     });
// }

// function removeVideo(video){
//     var videoWrapper = video.parentNode;

//     videoWrapper.parentNode.removeChild(videoWrapper);
// }









