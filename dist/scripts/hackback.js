function letter(){this.text=Math.random()>.5?"0":"1",this.speed=3*Math.random()+3,this.y_pos=Math.random()*height,this.x_pos=Math.random()*width,this.font=15+Math.round(20*Math.random())+"pt Arial"}console.log("开始画背景！");var q=document.getElementById("canvas_back"),n=100,context=q.getContext("2d"),s=window.screen,width=q.width=s.width,height=q.height=s.height;context.fillStyle="rgba(0,0,0)",context.fillRect(0,0,width,height),letter.prototype={run:function(){this.y_pos>758+1e4*Math.random()?(this.y_pos=0,this.speed=3*Math.random()+3,this.text=Math.random()>.5?"0":"1",this.x_pos=Math.random()*width,this.font=15+Math.round(20*Math.random())+"pt Arial"):this.y_pos+=this.speed}};var letters=Array(n).join(1).split("").map(function(t,e){return new letter}),draw=function(){context.fillStyle="rgba(0,0,0,.5)",context.fillRect(0,0,width,height),context.fillStyle="#0F0",letters.map(function(t,e){context.font=t.font,context.fillText(t.text,t.x_pos,t.y_pos),t.run()}),window.requestAnimationFrame(draw)};draw();