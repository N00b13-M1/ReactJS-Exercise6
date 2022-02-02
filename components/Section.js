import React, { Component } from 'react';
import '../css/Content.css'

class Section extends Component {
    render() {
        return (
            <div>
                <div className="row m-5">
                    <div className="col-4 bg-primary m-auto">
                        <p>Test1</p>
                    </div>
                    <div className="col-4 bg-danger m-auto">
                        <p>Test2</p>
                    </div>
                    <div className="col-4 bg-success m-auto">
                        <p>Test3</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;