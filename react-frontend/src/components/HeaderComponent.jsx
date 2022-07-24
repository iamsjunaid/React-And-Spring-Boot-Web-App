import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://flowcv.me/junaid-ahmed-syed" className="navbar-brand">Employee Management System</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;