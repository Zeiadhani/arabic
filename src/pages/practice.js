import React, { Component } from 'react';
import cancel from './cancel.svg';

class Rules extends Component {
    manager=(page)=>{
        setTimeout(()=>{this.props.activation(page)},15)
    }
    state={
        ans:[['','',''],['','',''],['','','']]
    }
    correction=(i,j)=>{
        if (document.getElementById(String(i)+','+String(j)).value == "correct"){
            var temp=this.state.ans
            document.getElementById(String(i)+','+String(j)+'t').style.color = "#0ECE00"
            temp[i][j]=' صحيح! '
            this.setState({ans:temp})
        }
        else {
            var temp=this.state.ans
            document.getElementById(String(i)+','+String(j)+'t').style.color = "#B50101"
            temp[i][j]=' خطأ! '
            this.setState({ans:temp})
        }
    }
    render() {
        var styles={
            screen:{
                display:'flex',
                flexDirection:'column',
                height:'100%'
            },
            rowc:{
                flex:String(200/600),
                display:'flex',
            },
            option:{
                flex:String(300/900),
                border:'5px solid #680B29',
                borderRadius:'15px',
                overflow:'hidden',
                height:'43vh',
            },
            child:{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                paddingRight: '17px', /* Increase/decrease this value for cross-browser compatibility */
                boxSizing: 'content-box',
                color:'#8A8A8A',fontSize:25,
                fontFamily: 'Patua One', /* So the width will be 100% + 17px */
            }
        }

        return (
            <div style={styles.screen}>
                <img src={cancel} style={{position: "absolute", width: "50px",height: "50px",left: '1vw', top:'1vh',}} onClick={()=>{this.manager('main')}}/>
                <div style={{flex:String(62/600)}}><p></p></div>
                
                

                


                <div style={styles.rowc}>
                    <div style={{flex:String(62/900)}}></div>
                    <div style={styles.option}>
                        <div style={styles.child}>
                            <p>ثني الاسماء المقصورة الاتية: (اسحب للاسف)</p>
                            <hr/>
                            <ul>
                                <li>
                                    {'مأوى:'} 
                                    <select id={'0,0'} onChange={()=>{this.correction(0,0)}}>
                                        <option value="correct">مأويان</option>
                                        <option value="wrong">مأوان</option>
                                        <option value="wrong">مأووان</option>
                                    </select>
                                    <p id={'0,0t'}>{this.state.ans[0][0]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'أولى:'} 
                                    <select id={'0,1'} onChange={()=>{this.correction(0,1)}}>
                                        <option value="wrong">أولان</option>
                                        <option value="correct">أوليان</option>
                                        <option value="wrong">أولوان</option>
                                    </select>
                                    <p id={'0,1t'}>{this.state.ans[0][1]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'قفا:'} 
                                    <select id={'0,2'} onChange={()=>{this.correction(0,2)}}>
                                        <option value="wrong">قفان</option>
                                        <option value="wrong">قفيان</option>
                                        <option value="correct">قفوان</option>
                                    </select>
                                    <p id={'0,2t'}>{this.state.ans[0][2]}</p>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div style={{flex:String(176/900)}}></div>

                    <div style={styles.option}>
                        <div style={styles.child}>
                        <p>ثني الاسماء المنقوصة الاتية:(اسحب للاسف)</p>
                            <hr/>
                            <ul>
                                <li>
                                    {'الكافي:'} 
                                    <select id={'1,0'} onChange={()=>{this.correction(1,0)}}>
                                        <option value="correct">الكافيان</option>
                                        <option value="wrong">الكافان</option>
                                        <option value="wrong">الكافوان</option>
                                    </select>
                                    <p id={'1,0t'}>{this.state.ans[1][0]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'متعالٍ:'} 
                                    <select id={'1,1'} onChange={()=>{this.correction(1,1)}}>
                                        <option value="wrong">متعالان</option>
                                        <option value="correct">متعاليان</option>
                                        <option value="wrong">متعالوان</option>
                                    </select>
                                    <p id={'1,1t'}>{this.state.ans[1][1]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'الداني:'} 
                                    <select id={'1,2'} onChange={()=>{this.correction(1,2)}}>
                                        <option value="wrong">الدانان</option>
                                        <option value="wrong">الدانون</option>
                                        <option value="correct">الدانيان</option>
                                    </select>
                                    <p id={'1,2t'}>{this.state.ans[1][2]}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{flex:String(62/900)}}></div>
                </div>












                <div style={{flex:String(80/600)}}><p></p></div>

                <div style={styles.rowc}>
                    <div style={{flex:String(300/900)}}></div>
                    <div style={styles.option}>
                        <div style={styles.child}>
                        <p>ثني الاسماء الممدودة الاتية: (اسحب للاسف)</p>
                            <hr/>
                            <ul>
                                <li>
                                    {'انشاء:'} 
                                    <select id={'2,0'} onChange={()=>{this.correction(2,0)}}>
                                        <option value="correct">انشاءان</option>
                                        <option value="wrong">انشان</option>
                                        <option value="wrong">انشاوان</option>
                                    </select>
                                    <p id={'2,0t'}>{this.state.ans[2][0]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'هيفاء:'} 
                                    <select id={'2,1'} onChange={()=>{this.correction(2,1)}}>
                                        <option value="wrong">هيفاءان</option>
                                        <option value="correct">هيفاوان</option>
                                        <option value="wrong">هيفان</option>
                                    </select>
                                    <p id={'2,1t'}>{this.state.ans[2][1]}</p>
                                </li>
                                <br/>
                                <li>
                                    {'اهداء:'} 
                                    <select id={'2,2'} onChange={()=>{this.correction(2,2)}}>
                                        <option value="wrong">اهدان</option>
                                        <option value="wrong">اهدايان</option>
                                        <option value="correct">اهداوان</option>
                                    </select>
                                    <p id={'2,2t'}>{this.state.ans[2][2]}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{flex:String(300/900)}}></div>
                </div>
                

                <div style={{flex:String(62/600)}}><p></p></div>
            </div>
        );
    }
}

export default Rules;
