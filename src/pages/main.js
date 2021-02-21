import React, { Component } from 'react';
import logo from './Logo.png'

class Main extends Component {
    state = {
        btnTextShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
        btnShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    manager=(page)=>{
        this.setState({btnTextShadow:'0px -4px 4px rgba(0, 0, 0, 0.25)',
        btnShadow:'0px -4px 4px rgba(0, 0, 0, 0.25)'})
        setTimeout(()=>{this.props.activation(page)},15)
    }


    render() {
        var styles = {
            container:{
                display:'flex',
                flexDirection:'column',
                minWidth: '100vw',
                minHeight: '100vh',
            },
            row:{
                flex:0.5,
                display:'flex',
            },
            brow:{
                display:'flex',
                flex:0.25,
                justifyContent:'bottom',
                alignItems:'bottom',
            },
            trow:{
                display:'flex',
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
            btn:{
                boxShadow:this.state.btnShadow,
                flex:String(300/900),
                backgroundColor:'#680B29',
                borderRadius:'1vw',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            },
            Mgap:{
                flex:String(120/900)
            },
            Sgap:{
                flex:String(90/900)
            },
            btnText:{
                margin:'0px',
                fontFamily: 'Patua One',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '10vh',
                color:'#fff',
                textShadow:this.state.btnTextShadow,
                justifyContent:'center'
            },
            logo:{
                flex:String(200/600),
                width: '5vw',
                height:'15vh'
            }
        }
        console.log(this.state)
        return (
            <div style={styles.container}>

                <div style={styles.trow}>
                    <div style={{flex:1}}></div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <p style={{color:'#8A8A8A',fontSize:'5vw',
                fontFamily: 'Patua One'}}><b>تثنية الاسم المقصور و المنقوص و الممدود</b></p>
                    </div>
                    <div style={{flex:1}}></div>
                </div>

                <div style={styles.row}>
                    <div style={styles.Sgap}></div>
                    
                    <div style={styles.btn} onClick={()=>{this.manager('practice')}}>
                        <p style={styles.btnText}>تمرينات</p>
                    </div>
                    
                    <div style={styles.Mgap}></div>
                    
                    <div style={styles.btn} onClick={()=>{this.manager('rules')}}>
                        <p style={styles.btnText}>قواعد</p>
                    </div>
                    
                    <div style={styles.Sgap}></div>
                </div>

                <div style={styles.brow}>
                    <div style={{flex:1}}></div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{flex:1}}></div>
                        <p style={{color:'#8A8A8A',fontSize:25,
                fontFamily: 'Patua One',}}><b>صنع الطالب زياد هاني تحت اشراف أ.خالد مازن</b></p>
                    </div>
                    <div style={{flex:1}}></div>
                </div>
            </div>
        );
    }
}
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
export default Main;
