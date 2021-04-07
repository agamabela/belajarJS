import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu
    , DropdownItem, DropdownToggle, InputGroup, Input, InputGroupAddon, Dropdown
} from 'reactstrap';
import { connect } from 'react-redux'
import { authLogout } from '../actions'
import { productReducers } from '../reducers/productReducers';
class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buka: false,
            openSearch: false,
            dataSearch: []
        }
        this.navColor = {
            backgroundColor: this.props.role == "user" ? '#FFFFFF' : "#ecf0f1",
        }
    }
    toggle = () => {
        this.setState({ buka: !this.state.buka })
    }
    handleSearch = () => {
        if (this.search.value == "") {
            this.setState({ openSearch: false, dataSearch: [] })
        } else {
            let dataSearch = this.props.products.filter(item => item.nama.includes(this.search.value))
            this.setState({ openSearch: dataSearch.length > 0 ? true : false, dataSearch })
        }

        // return this.props.product.map((item, index)=>{
        //     if(item.nama.includes(this.search.value)){
        //         return <DropdownItem>{item.nama}</DropdownItem>
        //     }
        // })
    }
    printSearch = () => {
        return this.state.dataSearch.map((item, index) => {

            return <DropdownItem>{item.nama}</DropdownItem>

        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <ul type="none" className="d-flex m-2" style={{ justifyContent: 'space-between', color: 'blue' }}>
                        <li>Indonesia</li>
                        <li><a href="#">Bahasa</a></li>
                        <li><a href="#">Informasi Toko</a></li>
                        <li><a href="#">Kebijakan Pengembalian</a></li>
                        <li><a href="#">IKEA Bisnis</a></li>
                        <li><a href="#">Lacak Pengiriman</a></li>
                        <li><a href="#">Katalog dan Brosur</a></li>
                        <li><a href="#">Program Perencanaan</a></li>
                        <li><Link to="/auth">Masuk atau Daftar</Link></li>
                    </ul>
                </div>
                <Navbar expand="md" style={this.navColor}>
                    <NavbarBrand>
                        <Link to="/">
                            <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg"
                                width="100px" />
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.buka} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/products" className="nav-link" style={{ color: 'gray', fontWeight: 'bold' }}>Products</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={{ color: 'gray', fontWeight: 'bold' }}>
                                    Category
                  </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                        <InputGroup size="sm" style={{ width: '12%' }}>
                            <Input placeholder="Cari..." onChange={this.handleSearch} innerRef={el => this.search = el} />
                            <InputGroupAddon addonType="append">
                                <Dropdown isOpen={this.state.openSearch}>
                                    <DropdownToggle className="btn btn-primary btn-sm material-icons">
                                        search
                                        </DropdownToggle>
                                    <DropdownMenu right>
                                        {this.printSearch()}
                                    </DropdownMenu>
                                </Dropdown>
                            </InputGroupAddon>
                        </InputGroup>


                        {
                            this.props.username &&
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret style={{ color: 'gray' }}>
                                    Hello, {this.props.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        this.props.role == "user" ?
                                            <>
                                                <DropdownItem>
                                                    Profile
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Cart
                                                </DropdownItem>
                                                <DropdownItem>
                                                    History
                                                </DropdownItem>
                                            </> :
                                            <>
                                                <DropdownItem>
                                                    <Link to="/product-management" style={{ textDecoration: 'none', color: 'gray' }}>
                                                        Product Management
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Transaction Management
                                                </DropdownItem>
                                            </>
                                    }
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.props.authLogout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = ({ authReducers, productReducers }) => {
    return {
        username: authReducers.username,
        role: authReducers.role,
        products: productReducers.products_list
    }
}

export default connect(mapStateToProps, { authLogout })(NavbarComp)




    //     return (
    //         <div className="container-fluid">
    //             <div>
    //                 <ul type="none" className="d-flex m-2" style={{justifyContent:'space-between', color:'blue'}}>
    //                     <li>Indonesia</li>
    //                     <li><a>Bahasa</a></li>
    //                     <li><a>Informasi Toko</a></li>
    //                     <li><a>Kebijakan Pengembalian</a></li>
    //                     <li><a>IKEA Bisnis</a></li>
    //                     <li><a>Lacak Pengiriman</a></li>
    //                     <li><a>Katalog dan Brosur</a></li>
    //                     <li><a>Program Perencanaan</a></li>
    //                     <li><a><Link className="nav-link" to="/authPage">Masuk atau daftar < span className="sr-only">(current)</span></Link></a></li>
    //                 </ul>
    //             </div>
                // <Navbar color="light" expand="md" style={{ backgroundColor: "#FFFFFF" }}>
                //     <NavbarBrand><img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg" width="100px"></img></NavbarBrand>
                //     <NavbarToggler onClick={toggle} />
                //     <Collapse isOpen={buka} navbar>
                //         <Nav className="mr-auto" navbar>
                //             <NavItem>
                //                 <NavLink href="/components/" style={{color:'gray', fontWeight:'bold'}}>Products</NavLink>
                //             </NavItem>
                //             <UncontrolledDropdown nav inNavbar>
                //                 <DropdownToggle nav caret style={{color:'gray', fontWeight:'bold'}}>
                //                     Category
                //   </DropdownToggle>
                //                 <DropdownMenu right>
                //                     <DropdownItem>
                //                         Option 1
                //     </DropdownItem>
                //                     <DropdownItem>
                //                         Option 2
                //     </DropdownItem>
                //                     <DropdownItem divider />
                //                     <DropdownItem>
                //                         Reset
                //     </DropdownItem>
                //                 </DropdownMenu>
                //             </UncontrolledDropdown>
                //         </Nav>
                //         <InputGroup size="sm" style={{ width: '20%' }}>
                //             <Input placeholder="Cari..."/>
                //             <InputGroupAddon addonType="append">
                //                 <span class="btn btn-outline-secondary material-icons">
                //                     search
                //                     </span>
                //             </InputGroupAddon>
                //         </InputGroup>
                //     </Collapse>
                // </Navbar>
    //         </div>
    //     )
    // }

    // export default NavbarComp