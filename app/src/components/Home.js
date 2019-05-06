import React from 'react';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userList: props.userList
        };
        console.log("props: ",props)
    }

    render() {
        console.log(this.state.userList);
        return (
            <div>
                {this.state.userList.map((elem) => {
                    return (
                        <div>
                            {elem.name}
                            <button onClick={() => this.props.deleteUserCB(elem.id)}>DELETE</button>
                        </div>
                    )})
                }
            </div>
        );
    }

}