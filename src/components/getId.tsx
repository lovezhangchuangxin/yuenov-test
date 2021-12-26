import * as React from 'react';

type StateType = {
    id: number | null;
    isLoaded: boolean;
};

export interface GetId {
    state: StateType;
}
export class GetId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            isLoaded: false,
        };
    }
    componentDidMount() {
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        _this.setState({
            id: Number(localStorage.getItem('id')),
            isLoaded: true,
        });
    }
    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>;
        } else {
            return (
                <div className="userId">
                    <h1>ID: {this.state.id}</h1>
                </div>
            );
        }
    }
}
