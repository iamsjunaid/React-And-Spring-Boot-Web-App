import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>All rights reserved 2022</span><br />
                    <span className='text-muted'>Designed and developed by <a href='http://flowcv.me/junaid-ahmed-syed'>@Junaid</a> </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;