import * as React from 'react';
import axios from 'axios'; // 引入axios库

type StateType = {
    records: Array<number> | null;
    isLoaded: boolean;
};

export interface GetRecords {
    state: StateType;
}

export class GetRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: null,
            isLoaded: false,
        };
    }
    componentDidMount() {
        const userId = Number(localStorage.getItem('id'));
        const _this = this;
        axios({
            method: 'GET',
            url: 'http://www.hexiechuangxin.com/getRecord',
            params: {
                id: userId,
            },
        })
            .then(function (response) {
                _this.setState({
                    records: response.data.data.bookid,
                    isLoaded: true,
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error,
                });
            });
    }
    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>;
        } else {
            return (
                <div>
                    {this.state.records?.map((item) => {
                        axios({
                            method: 'GET',
                            url: 'http://yuenov.com:15555/app/open/api/book/getDetail',
                            params: {
                                bookId: item,
                            },
                        })
                            .then(function (response) {
                                return (
                                    <div>
                                        {response.data.data.title}
                                        <img
                                            src={'http://pt.yuenov.com:15555' + response.data.data.coverImg}
                                            alt=""
                                            height="400"
                                            width="260"
                                        />
                                    </div>
                                );
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    })}
                </div>
            );
        }
    }
}
