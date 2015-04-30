// 播放器预执行
            function doFirst(){
                audio = document.getElementById('audio');
                bar = document.getElementById('audioline');
                progressBar = document.getElementById('timebar');
                audioplay = document.getElementById('audioplay');
                playbtn = document.getElementById('playbtn');
                barsize = document.getElementById('audioline').offsetWidth;

                bar.addEventListener('click',clickedBar,false);
            }

            // 播放暂停
            function playOrPause(id,obj){
                if(!audio.paused && !audio.ended){
                    audio.pause();
                    obj.src='music-play.png';
                    window.clearInterval(updatedBar);
                }else{
                    audio.play();
                    obj.src='music-pause.png';
                    updatedBar=setInterval(update,500);
                }
            }
            // 进度条根据当前时间走
            function update(){
                if(!audio.ended){
                    var size=parseInt(audio.currentTime*barsize/audio.duration);
                    timebar.style.width=size+'px';
                    audioplay.style.left=(size)+'px';
                }else{
                    timebar.style.width='0px';
                    window.clearInterval(updatedBar);
                    playbtn.src='music-play.png';
                }
            }
            // 点击控制进度条
            function clickedBar(e){
                if(!audio.paused && !audio.ended){
                    var mouseX = e.pageX-bar.offsetLeft;
                    var newtime = mouseX*audio.duration/barsize;  //新的播放时间
                    audio.currentTime = newtime;
                    audioplay.style.left=(size)+'px';
                    timebar.style.width=mouseX+'px';
                    window.clearInterval(updatedBar);
                }else{
                    var mouseX = e.pageX-bar.offsetLeft;
                    var newtime = mouseX*audio.duration/barsize;  //新的播放时间
                    audio.currentTime = newtime;
                    audioplay.style.left=(mouseX)+'px';
                    timebar.style.width=mouseX+'px';
                    window.clearInterval(updatedBar);
                }
            }
            window.addEventListener('load',doFirst,false);    