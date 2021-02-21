import React, { Component } from 'react';
import cancel from './cancel.svg';


class Rules extends Component {
    manager=(page)=>{
        setTimeout(()=>{this.props.activation(page)},15)
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
                height:'44vh',
            },
            child:{
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                paddingRight: '17px', /* Increase/decrease this value for cross-browser compatibility */
                boxSizing: 'content-box', /* So the width will be 100% + 17px */
            }
        }

        return (
            <div style={styles.screen}>
                <img src={cancel} style={{position: "absolute", width: "50px",height: "50px",left: '1vw', top:'1vh',}} onClick={()=>{this.manager('main')}}/>

                <div style={{flex:String(62/600)}}><p></p></div>
                

                <div style={styles.rowc}>
                    <div style={{flex:String(300/900)}}></div>
                    <div style={styles.option}>
                        <div style={styles.child}>
                            <p style={{color:'#8A8A8A',fontSize:25,
                fontFamily: 'Patua One',}}>
                الاسم المقصور: اسم مختوم بالف مقصورة
                            <hr/>
                            المقصور ياتي اما:
                            <ul>
                                <li>صورة ياء</li>
                                <li>صورة الف قائمة</li>
                            </ul>
                            <hr/>
                        تثنية الاسم المقصور:<br/>
                            <lu>                   
                                <li>ثلاثي:<br/>
                                    <lu style={{listStyleType:"circle"}}>
                                        <li>{'صورة ياء: تقلب ياء و يضاف (ان) مثل: فتى؛فتيان / رحى؛رحيان'    }</li><br/>
                                        <li>{'صورة الف قائمة: تقلب الواو و يضاف (ان) مثل: عصا؛عصوان '    }</li>
                                    </lu>
                                </li>
                                <br/><br/>
                                <li>اكثر من ثلاثة احرف:<br/>
                                    <lu style={{listStyleType:"circle"}}>
                                        <li>{'تقلب الالف ياء و يضاف (ان) مثل: مسعى؛مسعيان / مبنى؛مبنيان'    }</li>
                                    </lu>
                                </li>
                            
                            </lu>

                            </p>
                        </div>
                    </div>
                    <div style={{flex:String(300/900)}}></div>
                </div>


                <div style={{flex:String(80/600)}}><p></p></div>


                <div style={styles.rowc}>
                    <div style={{flex:String(62/900)}}></div>
                    <div style={styles.option}>
                        <div style={styles.child}>
                        <p style={{color:'#8A8A8A',fontSize:25,
                fontFamily: 'Patua One',}}>
                الاسم المنقوص: الاسم المختوم بياء و مكسور ما قبله مثل (القاضي, الحرامي, الراعي)
                            <hr/>
                            في الاسم المنقوص:
                            <ul>
                                <li>وجودت (ال): يحذف التنوين و يضاف ياء المنقوص</li>
                                <li>حذفت (ال): يضاف التنوين و يحذف ياء المنقوص</li>
                            </ul>
                            <hr/>
                        تثنية الاسم المنقوص:<br/>
                            
                                    <lu>
                                        <li>{' اذا وجدت (ال) و الياء: تفتح الياء و يضاف (ان) مثل: القاضي؛القاضيَان'    }</li><br/>
                                        <li>{'اذا حذفت (ال) و الياء: يحذف التنوين و يضاف ياء نفتوحة و (ان) مثل: راعٍ؛راعيَان'    }</li>
                                    </lu>

                            </p>
                        </div>
                    </div>
                    <div style={{flex:String(176/900)}}></div>

                    <div style={styles.option}>
                        <div style={styles.child}>
                        <p style={{color:'#8A8A8A',fontSize:25,
                fontFamily: 'Patua One',}}>
                الاسم الممدود: اسم مختوم بهمزة و قبلها الف زائدة مثل (حمراء, كساء)
                            <hr/>
                            لمعرفة ان كانت الهمزة من اصل الكلمة ام لا (بعد التحقق من كونها همزة تأنيث باستخدام "هذه") فنرجع الى الفعل الماضي من الكلمة
                            <ul>
                                <li>ان وجدت في الفعل الماضي فهي اصلية</li>
                                <li>ان لم توجد فهي غير اصلية</li>
                            </ul>
                            <hr/>
                        تثنية الاسم الممدود:<br/>
                            
                                    <lu>
                                        <li>{'ان كانت همزة تأنيث: تقلب الهمزة واو و يضاف (ان) مثل: حمراء؛حمراوان / حسناء؛حسناوان'    }</li><br/>
                                        <li>{'ان كانت همزة اصلية: فقط يضاف (ان) مثل: رفاء؛رفاءان / ابتداء؛ابتداءان'    }</li><br/>
                                        <li>
                                            {'ان كانت همزة غير اصلية فلها وجهان:'    } 
                                            <ul style={{listStyleType:"circle"}}>
                                                <li>{'اما يضاف (ان) فقط مثل: كساء؛كساءان'    }</li>
                                                <li>{'اما تقلب الهمزةواو يضاف (ان) مثل: بناء؛بناوان'    }</li>
                                            </ul>
                                        </li>
                                    </lu>

                            </p>
                        </div>
                    </div>

                    <div style={{flex:String(62/900)}}></div>
                </div>

                <div style={{flex:String(62/600)}}><p></p></div>
            </div>
        );
    }
}

export default Rules;
