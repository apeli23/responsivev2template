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
