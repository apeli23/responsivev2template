import React from 'react'
import { HeaderContainer, HeaderToggle, Item, ItemContainer, Logo, MenuItems, Mobilebar, Wrapper } from './components';
import { useState } from "react";
import { BellIcon, Close, Menubar } from '../icons/icons';
import { SearchBar } from '../forms/form';
import { RegularButton } from '../buttons/buttons';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const [filtereddata, setFilteredData] = useState();
    // const { logout } = useAuth();

    const showSidebar = () => setSidebar(!sidebar);
    // const handleChange = (e) => {
    //     setFilteredData(e.target.value);
    // };

    return (
        <div>
            <HeaderContainer>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <HeaderToggle>
                        <Close className='fa-solid fa-xmark' onClick={() => { setSidebar(false) }} />
                    </HeaderToggle>
                    <div style={{ marginBottom: '30%' }}>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-gamepad' />
                                <p style={{ marginLeft: '30px' }}>Store</p>
                            </Item>
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-cloud-arrow-down' />
                                <p style={{ marginLeft: '30px' }}>Downloads</p>
                            </Item>
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-wallet' />
                                <p style={{ marginLeft: '30px' }}>Wallet</p>
                            </Item>
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-chart-line' />
                                <p style={{ marginLeft: '30px' }}>Statistics</p>
                            </Item>
                        </ItemContainer>
                    </div>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-gear' /> 
                                <p style={{ marginLeft: '30px' }}>Settings</p>
                            </Item>
                        </ItemContainer>
                        <ItemContainer>
                            <Item>
                                <i className='fa-solid fa-arrow-right-from-bracket' /> 
                                <p style={{ marginLeft: '30px' }}>Logout</p>
                            </Item>
                        </ItemContainer>
                </nav>
                <Wrapper>
                    <div style={{ display: 'flex', alignItems: 'center', width: '40%', justifyContent: 'space-between' }}>
                        <Logo
                            src='https://jiwe.io/static/media/logo-white.a7e18f0a.png'
                            alt='logo'
                        />
                        <form>
                            <SearchBar type='search' placeholder='Search Games' required />
                        </form>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RegularButton id="mobileremove">Upload a Game</RegularButton>
                        <BellIcon id="mobileremove" className='fa-solid fa-bell' />
                    </div>
                    <Mobilebar>
                        <Menubar className='fa-solid fa-bars' onClick={showSidebar} />
                    </Mobilebar>

                </Wrapper>
            </HeaderContainer>
        </div>
    )
}
