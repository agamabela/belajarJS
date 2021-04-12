import axios from 'axios';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { URL_API } from '../helper'
class ModalEditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stok: [],
            images: [],
        }
    }

    onBtAdd = () => {
        console.log(this.state.stok)
        axios.post(URL_API + '/products', {
            nama: this.inNama.value,
            deskripsi: this.inDeskripsi.value,
            brand: this.inBrand.value,
            kategori: this.inKategori.value,
            harga: parseInt(this.inHarga.value),
            srok: this.state.stok,
            images: this.state.images
        }).then(res => {
            console.log(res.data)
            alert('Add Product Success')
            this.props.getData()
        }).catch(err => {
            console.log(err)
        })
    }

    onBtAddStock = () => {
        // let tempStock = [...this.state.stock]
        this.state.stok.push({ id: null, type: null, qty: null })
        this.setState({ stok: this.state.stok })
    }

    onBtAddImages = () => {
        this.state.images.push("")
        this.setState({ images: this.state.images })
    }

    printStock = () => {
        let { stok } = this.props.detailProduk
        if (stok) {
            return stok.map((item, index) => {
                return <Row>
                    <Col>
                        <Input type="text" defaultValue={item.type} placeholder={`Type-${index + 1}`} onChange={(e) => this.handleType(e, index)} />
                    </Col>
                    <Col>
                        <Input type="number" defaultValue={item.qty} placeholder={`Stock-${index + 1}`} onChange={(e) => this.handleStock(e, index)} />
                    </Col>
                    <Col>
                        <a onClick={() => this.onBtDeleteStock(index)} style={{ cursor: 'pointer' }}>Delete</a>
                    </Col>
                </Row>
            })
        }
    }

    printImages = () => {
        let { images } = this.props.detailProduk
        if (images) {
            return images.map((item, index) => {
                return <Input type="text" defaultValue={item} placeholder={`Images-${index + 1}`} onChange={(e) => this.handleImages(e, index)} />
            })
        }
    }

    onBtDeleteStock = (index) => {
        this.props.detailProduk.stok.splice(index, 1)
        this.setState({ stok: this.state.stok })
    }

    handleImages = (e, index) => {
        this.props.detailProduk.images[index] = e.target.value
    }

    handleType = (e, index) => {
        this.props.detailProduk.stok[index].type = e.target.value
    }

    handleStock = (e, index) => {
        this.props.detailProduk.stok[index].qty = parseInt(e.target.value)
    }

    onBtCancel = () => {
        // this.setState({ stock: [], images: [] })
        // fungsi untuk close modal
        this.props.btClose()
    }

    onBtSave = () => {
        console.log(
            {
                nama: this.inNama.value,
                deskripsi: this.inDeskripsi.value,
                brand: this.inBrand.value,
                kategori: this.inKategori.value,
                harga: parseInt(this.inHarga.value),
                stok: this.props.detailProduk.stok,
                images: this.props.detailProduk.images
            }
        )
        axios.patch(URL_API + `/products/${this.props.detailProduk.id}`, {
            nama: this.inNama.value,
            deskripsi: this.inDeskripsi.value,
            brand: this.inBrand.value,
            kategori: this.inKategori.value,
            harga: parseInt(this.inHarga.value),
            stok: this.props.detailProduk.stok,
            images: this.props.detailProduk.images
        })
            .then(res => {
                console.log(res.data)
                this.props.getData()
                this.props.btClose()
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log("detailProduk", this.props.detailProduk)
        let { nama, deskripsi, brand, kategori, harga } = this.props.detailProduk
        return (
            <Modal isOpen={this.props.modalOpen} toggle={this.props.btClose} >
                <ModalHeader toggle={this.props.btClose}>Add Product</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="textNama">Nama Product</Label>
                        <Input type="text" id="textNama" defaultValue={nama} innerRef={elemen => this.inNama = elemen} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="textDes">Deskripsi</Label>
                        <Input type="text" defaultValue={deskripsi} id="textDes" innerRef={elemen => this.inDeskripsi = elemen} />
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="textBrand">Brand</Label>
                                <Input type="text" defaultValue={brand} id="textBrand" innerRef={elemen => this.inBrand = elemen} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="textKategori">Kategori</Label>
                                <Input type="text" defaultValue={kategori} id="textKategori" innerRef={elemen => this.inKategori = elemen} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="textHarga">Harga</Label>
                        <Input type="number" defaultValue={harga} id="textHarga" innerRef={elemen => this.inHarga = elemen} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Stock</Label>
                        <Button outline color="success" type="button" size="sm" style={{ float: 'right' }} onClick={this.onBtAddStock}>Add Stock</Button>
                        {this.printStock()}
                    </FormGroup>
                    <FormGroup>
                        <Label>Images</Label>
                        <Button outline color="success" type="button" size="sm" style={{ float: 'right' }} onClick={this.onBtAddImages} >Add Image</Button>
                        {this.printImages()}
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="primary" onClick={this.onBtSave}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.onBtCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalEditProduct;