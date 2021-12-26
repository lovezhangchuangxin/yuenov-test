import React, { useRef, useState } from 'react';
import './report.less';

export function Input(props: any) {
    const [state, setState] = useState(false);

    const text = useRef({} as any);

    const clearInput = () => {
        (text.current as any).value = '';
        props.setText(text.current.value);
        setState(false);
    };

    return (
        <div>
            <input
                ref={text}
                placeholder="我的意见..."
                onChange={(e) => {
                    if (e.target.value.length > 0) {
                        setState(true);
                    } else {
                        setState(false);
                    }
                    props.setText(e.target.value);
                }}
            />
            {state ? <button onClick={clearInput}>清除</button> : null}
        </div>
    );
}
