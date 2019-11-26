<template>
  <div>
    <div>
			<img src="../assets/zb-0.jpg" style="display: inline-block; height: 320px;" />
		</div>
    <div class="box content" style="width: 620px;">
   			<div class="box_l">
  				<h3>最热TOP10</h3>
  					<ul>
  						<li>-瑞士军刀</li>
 						  <li>-便携净水器</li>
    					<li>-医疗急救包</li>
  						<li>-达人必备自拍臂</li>
    					<li>-多功能转换插头</li>
  						<li>-口袋沐浴包</li>
    					<li>-能“喷水”的牙刷</li>
  						<li>-Shitbox纸马桶</li>
     					<li>-酒鬼腰带</li>
  						<li>-山羊胡专修工具</li>
  					</ul>
  					<p>&nbsp;</p>
  			</div>
            <div class="box_r">
       			<h2>出行装备</h2>
  				<div class="explain">
  					<div class="explian_r">
  						<div class="img-text">
                <img src="../assets/home-2.jpg" />
  							<p><strong>外出旅行，少则一天，多则个把个月，行李是很重要的一部分</strong></p>
  						</div>
  						
  					</div>
  				</div>
   				<br />
   				<div class="new">
   					<div class="new_l">
   						<img src="../assets/zb-1.jpg" />
   					</div>
   					<div class="new_r">
   						<table width="400" border="0" cellspacing="0" cellpadding="0">
  							<tr>
    							<td width="313"><a href="">摄影神器</a></td>
  							</tr>
						</table>
						<p>好的装备可以让你事半功倍。带上棒棒的装备出发去旅行，接触大自然，是个不错的选择。</p>
   					</div>
  					<div class="clearit"></div>
   				</div>
           <mu-divider></mu-divider>
   				<div class="new">
   					<div class="new_l">
   						<img src="../assets/zb-2.jpg" />
   					</div>
   					<div class="new_r">
   						<table width="400" border="0" cellspacing="0" cellpadding="0">
  							<tr>
    							<td width="313"><a href="">摄影神器</a></td>
  							</tr>
						</table>
						<p>出去旅行，一个好的拍照设备是必不可少的，不但能记录行程的点点滴滴分享给家人朋友，还能作为一段美好的回忆便于日后的翻阅。</p>
   					</div>
  					<div class="clearit"></div>
   				</div>
           <mu-divider></mu-divider>
     			<div class="new">
   					<div class="new_l">
   						<img src="../assets/zb-3.jpg" />
   					</div>
   					<div class="new_r">
   						<table width="400" border="0" cellspacing="0" cellpadding="0">
  							<tr>
    							<td width="313"><a href="">野营必备</a></td>
 							</tr>
						</table>
						<p>城市生活节奏的加快，现在很多人也会选择在双休日或者节假日原理都市，回归山林，进行野营，享受与大自然近距离的接触。</p>
   					</div>
  				 </div>
           <mu-divider></mu-divider>
   				<div class="new">
   					<div class="new_l">
   						<img src="../assets/zb-4.jpg" />
   					</div>
   					<div class="new_r">
   						<table width="400" border="0" cellspacing="0" cellpadding="0">
 							<tr>
    							<td width="313"><a href="">穷游优选</a></td>
  							</tr>
						</table>
						<p>“虽然我没有钱，但我也想要环游世界。”穷游时现在很多没有经济基础年轻人的选择。他们坐不起飞机，可能要长时间的坐火车；他们住不起宾馆，多数住在青年旅社；他们没有大堆的行李，一个背包就可以上路。</p>
   					</div>
  				</div>
  				<div class="new">
   					<pre></pre>
   				</div>
  			</div>
  		</div>
  </div>
</template>

<style scoped lang="scss">
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    background: url(../assets/images/box_h3.jpg) no-repeat;
    width: 157px;
    height: 25px;
    display: block;
    line-height: 25px;
    margin-top: 20px;
    text-align: center;
  }

  .box {
    display: flex;
  }

  .box_l {
    margin-right: 30px;
    li {
      padding: 10px 0 10px 10px;
      transition: .3s;
      cursor: pointer;
			border-radius: 20px 0 0 20px;
      &:hover {
        background-color: #ed6c23;
        color: #fff;
      }
    }
  }

  .img-text {
    position: relative;
    img {
      height: 250px;
    }
    p {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      font-size: 26px;
      color: #Fff;
    }
  }

  .new {
    display: flex;
    margin: 10px;
    padding: 10px;
    .new_l {
      width: 120px;
      height: 120px;
      margin-right: 20px;
    }
    img {
      width: 120px;
    }
  }
</style>
