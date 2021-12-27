import React, { useState } from 'react';
import { GetId } from './getId';
import { Input } from './report';
import { Toast } from './toast';
import { GetRecords } from './getRecords';
import axios from 'axios'; // 引入axios库
import './me.less';
function Me() {
    const [text, setText] = useState('');
    const [toast, setToast] = useState(false);
    const [show, setShow] = useState(false);
    return (
        <div>
            {toast ? <Toast /> : null}
            <div className="container">
                <h1 id="title">我的</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <GetId />
                </div>
                <div className="records">
                    <h2>浏览记录</h2>
                    <GetRecords />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>意见反馈:</h1>
                    <Input text={text} setText={setText} />
                    <button
                        onClick={() => {
                            if (show) return;
                            setToast(true);
                            setTimeout(() => {
                                setToast(false);
                                setShow((v) => !v);
                            }, 1000);
                        }}
                    >
                        提交
                    </button>
                </div>
                {show ? <Submit text={text} /> : null}
            </div>
        </div>
    );
}

const Submit = function Submit(props: any) {
    const content = props.text;
    axios({
        method: 'POST',
        url: 'http://www.hexiechuangxin.com/suggest',
        params: {
            id: Number(localStorage.getItem('id')),
            msg: content,
        },
    }).catch(function (error) {
        console.log(error);
    });
    return <div></div>;
};

export { Me };
