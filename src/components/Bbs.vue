<template>
  <div>
    <div>
      <img src="../assets/bbs.jpg" style="display: inline-block; height: 320px;" />
    </div>
    <div class="box content" style="width: 620px;">
      <div class="box">
        <div class="box_l">
          <h3>论坛</h3>
            <p>想要找到一起出游的同伴，不知道去哪里联系；想到购买二手的出行装备，不知道去哪里购买；想要了解目的地的相关信息，找不到当地人解答。有问题有需求都可以来论坛版块发帖。在这里你可以畅所欲言，在这里你可以秀出你在旅行途中的精彩照片，寻找志同道合的人。 </p>
            <p>&nbsp;</p>
        </div>

          <div class="box_r">
          <h2>旅游论坛</h2>
          <div class="lt_js">
            <p>1、AA相约<br />
            如果你害怕旅途寂寞、遭遇危险不想独自去旅行，又不想报旅行团束缚自己又找不到合适的人和你一起去旅行，那么在这里你可以发帖征集一起出行的旅伴，旅行的费用各自承担自己的部分，避免应为金钱发生不愉快。
  <br />2、二手集市<br />
  有些旅行装备你出去时用过一次可能很少会再用到它，放在家里占地方又是资源的浪费。这时候你可以发帖卖闲置的物品，有利于资源的合理利用。或者你觉得某些装备米有购买全新的必要，你想要寻找二手的，你可以在这里发帖求购你想要的物品。
  <br />3、我行我秀<br />
  旅行途中拍摄的照片，你已经不满足于晒在朋友圈和QQ空间。你可以在这里发帖秀出你的照片，让全国各地的人都可以看到你在旅行途中的精彩瞬间。
  <br />4、有问必答<br />
  不知道去哪游玩，不知道要带哪些东西，不知道走哪条线路最合适，出行前或者旅行途中总会遇到各种问题。你可以在这里发帖求助，千万网友成为你的智囊团，为你答疑解惑。定期邀请旅行达人现在与你分享旅行中的小窍门。
  </p>
            </div> 
          <div class="conect">
            <h3>发表内容</h3>
            <table width="460" border="0" cellspacing="0" cellpadding="0">
              <tr>
                  <td width="168">
                    <div align="right">姓名：</div>
                  </td>
                  <td width="292">
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_in"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">性别：</div></td>
                  <td><input type="radio" name="radio" id="radio" value="radio" /> 男 <input type="radio" name="radio" id="radio" value="radio1" /> 女</td>
                </tr>
                <tr>
                  <td>
                    <div align="right">
                      旅游地点：
                    </div></td>
                  <td>
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_inA"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">旅游时间：</div></td>
                  <td>
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_inA"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">电话：</div></td>
                  <td>
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_inA"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">E-mail：</div></td>
                  <td>
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_inA"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">QQ/MSN：</div></td>
                  <td>
                    <label>
                        <input type="text" name="textfield" id="textfield" class="zhi_inA"/>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">旅游感想：</div></td>
                  <td>
                    <label>
                        <textarea name="textarea" id="textarea" cols="45" rows="5" class="zhi_inB"></textarea>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><div align="right">旅游评价：</div></td>
                  <td>
                    <label>
                        <textarea name="textarea" id="textarea" cols="45" rows="5" class="zhi_inB"></textarea>
                    </label></td>
                </tr>
                <tr>
                  <td><div align="right"></div></td>
                  <td>
                    <img src="../assets/images/tijiao.jpg" style="width: 78px; height: 25px;" />
                    <img src="../assets/images/chongxie.jpg" style="width: 78px; height: 25px;" />
                  </td>
                </tr>
            </table>
              <p>&nbsp;</p>
          </div>
          </div>
          <div class="clearit"></div>
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
      padding: 10px 0;
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
    .new_l {
      width: 120px;
      height: 120px;
      margin-right: 20px;
    }
    img {
      width: 120px;
    }
  }

  tr {
    margin-bottom: 20px;
    td {
      line-height: 24px;
      padding: 5px 0;
    }
    td:first-child div {
      margin-right: 20px;
    }
  }
</style>
