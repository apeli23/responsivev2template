import { Item, ItemContainer, SidebarContainer } from "./components";

export default function Sidebar() {

    return (
        <SidebarContainer>
            <div style={{ marginBottom: '30%' }}>
                <ItemContainer>
                    <Item>
                        {/* <Link to='/games'> */}
                        <i className='fa-solid fa-gamepad' />
                        <p style={{ marginLeft: '30px' }}>Games</p>
                        {/* </Link> */}
                    </Item>
                </ItemContainer>

                <ItemContainer>
                    <Item>
                        {/* <Link to='/store'> */}
                        <i className='fa-solid fa-gamepad' />
                        <p style={{ marginLeft: '30px' }}>Store</p>
                        {/* </Link> */}
                    </Item>
                </ItemContainer>
                <ItemContainer>
                    <Item>
                        {/* <Link to='/downloads'> */}
                        <i className='fa-solid fa-cloud-arrow-down' />
                        <p style={{ marginLeft: '30px' }}>Downloads</p>
                        {/* </Link> */}
                    </Item>
                </ItemContainer>
                <ItemContainer>
                    <Item>
                        {/* <Link to='/wallet'> */}
                        <i className='fa-solid fa-wallet' />
                        <p style={{ marginLeft: '30px' }}>Wallet</p>
                        {/* </Link> */}
                    </Item>
                </ItemContainer>
                <ItemContainer>
                    <Item>
                        {/* <Link to='/statistics'> */}
                        <i className='fa-solid fa-chart-line' />
                        <p style={{ marginLeft: '30px' }}>Statistics</p>
                        {/* </Link> */}
                    </Item>
                </ItemContainer>
            </div>
            <ItemContainer>
                <Item>
                    {/* <Link to='/statistics'> */}
                    <i className='fa-solid fa-gear' />
                    <p style={{ marginLeft: '30px' }}>Settings</p>
                    {/* </Link> */}
                </Item>
            </ItemContainer>
            <ItemContainer>
                <Item>
                    {/* <Link to='/statistics'> */}
                    <i className='fa-solid fa-arrow-right-from-bracket' />
                    <p style={{ marginLeft: '30px' }}>Logout</p>
                    {/* </Link> */}
                </Item>
            </ItemContainer>
        </SidebarContainer>
    )
}