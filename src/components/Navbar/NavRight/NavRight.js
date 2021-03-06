import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../actions/get_user'
import { Link } from 'react-router'
import './NavRight.css'
import LanguageMenu from './RightMenus/LanguageMenu'
import SignInMenu from './RightMenus/SignInMenu'
import TryPrimeMenu from './RightMenus/TryPrimeMenu'
import './RightMenus/LanguageMenu.css'
import './RightMenus/SignInMenu.css'
import './RightMenus/TryPrimeMenu.css'

class NavRight extends Component {

    componentDidMount() {
        this.props.getUser();
    }


    render() {
        const user = this.props.user || {}

        return (
        <div>
            <div className="navRight">
                <div className='words'>
                    <div>
                        <div className='en'>EN</div>
                        <div className='globe'></div>
                    </div>
                    <div className='navArrow'></div>
                </div>
                <div className="globeBorder"></div>
                <div className='words'>
                    <div className='account' key={user}>
                        <h2>Hello. {(user.userfirstname ? user.userfirstname : ' Sign in') }</h2>
                        <h1>Account & Lists</h1>
                    </div>

                    <div className='navArrow'></div>
                    <div className='signInMenu'><SignInMenu/> </div>
                </div>
                <div className='words'>
                    <h1>Orders</h1>
                </div>
                <div className='words'>
                    <h1>Try Prime</h1>
                    <div className='navArrow'></div>
                    <div className='tryPrimeMenu'><TryPrimeMenu/> </div>
                </div>
                <div className="words">

                    <Link to='/cart'>
                    <div className='cart'>
                        <div className='cartCount'>0</div>
                    </div></Link>
                    
                </div>  
            </div>
            <div className='languageMenu'><LanguageMenu/> </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}

export default connect(mapStateToProps, { getUser })(NavRight);
