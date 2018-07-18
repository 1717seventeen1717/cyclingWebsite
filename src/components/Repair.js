import React,{Component} from 'react';
import '../sass/Repair.scss';
import { NavLink } from 'react-router-dom';

export default class Repair extends Component{
    render(){
        return (
            <div className="container repair">
                <div className="header col-md-12 noPadding">
                    <h2>
                        Trek小哥
                    </h2>
                    <p>很多小白总以为自行车维修保养很难，其实一些基础的技巧还是很容易掌握的。</p>
                    <p>打气、缠把带和清洗链条我们都教过了，这次要教一个更加基础的。</p>
                    <p>如果你的爱车是通过快递寄到你手上的，那么安装脚踏就是一个必不可少的步骤。</p>
                    <p>可是你知道脚踏也分左右吗？如何才能在扭螺丝的时候固定曲柄？下面请看Trek小哥的视频教学。</p>
                    <div className="topImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                        
                    </div>
                    <div className="bottomImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>                     
                    </div>
                </div>
                <div className="header col-md-12 noPadding">
                    <h2>
                        为真空胎做一次"大保健"
                    </h2>
                    <p>真空胎因为没有内胎干扰具有更大形变空间，能够有效过滤小震动。</p>
                    <p>在享受真空胎性能的同时，你是否想过真空胎也是要维护？</p>
                    <p>一般我们使用真空胎同时也会灌入适量自补液用于紧急修补用途，但是这些自补液都有一定使用寿命，根据自补液粘稠度，</p>
                    <p>它使用寿命由半年到一年不等，随着时间推移轮胎里的自补液会粘成一团或发生干滔，这时候自补液就失去它应有的作用，需要及时进行添加和更换。</p>
                    <p>下面，就让小编教大家如何更换真空胎里的自补液。</p>
                        <br/>
                    <p>第一步：扭松气门芯将轮胎里空气全部放掉</p>
                    <p>第二步：使用撬胎棒撬开外胎</p>
                    <p>第三步：增加自补液因应不同气嘴有两种添加方法，第一种，使用一体式不可拆气嘴，</p>
                    <p>就需要使用撬胎棒撬开外胎（撬开范围不需要太大，足够添加自补液即可），</p>
                    <p>第二种，使用分体式气嘴的用户，可以先将气门芯扭松并取下，然后通过Zefa自补液上自带的软管套在气嘴上进行添加。</p>
                    <p>撬开轮胎后先将里面原有粘成一团或干涸的自补液清理干净，然后就可以往里面添加新的自补液。</p>
                    <p>第四步：Zefal自补液它重量轻拥有更好附着力，有效依附在车胎内壁形成保护层。</p>
                    <p>Zefal在自补液里加入了聚氨酯胶，使整个真空系统具有更佳密封性，可以修补约3mm左右的洞口。</p>
                    <p>Zefal-瓶自补液约有125ml，按照包装上的说明，一只轮子灌约62.5ml左右。一瓶可以灌一对轮子。</p>
                    <p>第五步：灌完自补液后将轮胎重新装回去，然后转动轮子，让自补液充分依附在胎壁上</p>
                    <p>第六步：添加完自补液后就到下一个步骤，给真空胎打气，一般座地式气筒瞬间输出气量不大，很难将真空胎打起来，</p>
                    <p>如果你坚持使用普通座地式气筒就需要付出更多耐心、时间和技巧才能完成打气这步骤（不要问我为什么知道），</p>
                    <p>这时候我会使用一个专为真空胎充气的秘密武器—Zefal TUBELESS TANK增压系统。</p>
                    <p>Zefal TUBELESS TANK工作原理非常简单，说白了就是一个储气罐子。它通过座地式气筒往内部充气，Zefal TUBELESS TANK就把空气储存起来，</p>
                    <p>然后通过自带软管对真空胎进行充气。它最高可以容纳230psi气压，能足够瞬间将真空胎挥起来。</p>
                    <p>为Zefal TUBELESS TANK充一次气，充满两个轮子不成问题，而且Zefal TUBELESS TANK不需要外接电源即可运作，人体工程学手柄也方便携带，</p>
                    <p>除了家用用途外也非常适合车队技师使用。</p>
                    <div className="topImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                        
                    </div>
                    <div className="bottomImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>  
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                                           
                    </div>
                </div>
                <div className="header col-md-12 noPadding">
                    <h2>
                        保养专家Zefal专用油品
                    </h2>
                    <p>当你骑着战购风尘仆仆驰骋“沙场”，尽情享受越野带来的乐趣以后，是否发现链条在转动的时候传来沙沙的摩擦声？</p>
                    <p>链条在变速时候反应好像慢了半拍？链条表面布满尘土？当出现以上症状时就代表链条需要进行保养，再高级的变速系统也离不开日常的保养清洁，只有适当的保养才能够让变速系统寿命更长更耐用。</p>
                    <p>市面上自行车使用链条油种类繁多，大家可以根据骑行路况和天气选择合适的链油，Zefal推出了PRO LUBE（红色）、WET LUBE（蓝色）、DRYLUBE（绿色），三种链油。</p>
                    <p>PROLUBE（红色）长效耐用，适合在各种条件下使用，是追求竞争力和性能的自行车骑行者们的理想选择。</p>
                    <p>它采用合成翻类材料，为金属部件带来更长久的保护，抵御日常磨损、撕扯和腐蚀。</p>
                    <p>WET LUBE（蓝色）适合在潮湿条件下使用，采用植物油和合成酯制成。不溶于水，防水性出众，可抵御路面的溅水。</p>
                    <p>DRY LUBE（绿色）此款润滑油在干燥和多尘环境下拥有出色表现。其快干配方能形成一层洁净薄膜，提供耐久保护，抵御灰尘和污垢。</p>
                    <p>此产品对于传动链、刹车导线和变速器来说都非常理想。三款油品能够快速生物降解，减少对环境影响。</p>
                    <p>独特锥型油嘴设计，精确控制出油量</p>
                    <p>瓶身背部设有中文说明书，方便用户阅读</p>
                    <p>法国原产品质保证</p>
                    <p>除了链条之外，碗组轴承、车架转点轴承、中轴、塔基、脚踏、花鼓里的轴承也是需要定期保养维护，这些部位需要定期拆出来进行清洁保养这时候你就需要用到润滑油脂，Zefal推出这款PRO Il GREASE润滑油脂就可以大派用场。</p>
                    <p>Pro ll Grease为两号锂基润滑脂，防水耐热。它能提供出众的抗磨损保护，适合日常保养维护之用软管状使用起来十分方便，只需轻轻一捏即可挤出油脂，两号锂基润滑脂黏稠度非常适合加在轴承里面，提供良好防水性，并保持润滑安装脚踏时亦可使用，用途广泛</p>
                    <div className="topImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                        
                    </div>
                    <div className="bottomImg container" style={{marginBottom:20+'px'}}>
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>  
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                                           
                    </div>
                    <div className="bottomImg container">
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>
                        <img className="col-md-3 middleImg noPadding" src="./img/QXRM/b.jpg"/>  
                        <img className="col-md-3 noPadding" src="./img/QXRM/b.jpg"/>                                           
                    </div>
                </div>
            </div>
        )
    }
}