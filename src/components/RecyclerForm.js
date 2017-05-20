import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

import recyclers from '../recyclers'

import './RecyclerForm.css'


const items = recyclers.reduce((_items, recycler) => {
  return new Set([..._items, ...recycler.items.map(item => item.name)])
}, new Set())

export default class RecyclerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      address: ''
    }

    this.onChangeAddress = this.onChangeAddress.bind(this)
    this.onChangeItem = this.onChangeItem.bind(this)
  }

  onChangeAddress(event) {
    this.setState({address: event.target.value})
  }

  onChangeItem(item) {
    this.setState({item})
  }

  render() {
    return (
      <div className='RecyclerForm'>
        <div className='RecyclerForm__item'>
          <Select
            className='RecyclerForm__item-input'
            name='item'
            value={this.state.item}
            options={[...items].map(i => ({value: i, label: i}))}
            onChange={this.onChangeItem}
          />
          <div className='RecyclerForm__item-not-found'>
            <a href='where-can-i-find-a-recycler'>I don't see my item</a>
          </div>
        </div>
        <div>
          <input
            className='RecyclerForm__adress'
            name='address'
            onChange={this.onChangeAddress}
            placeholder='Enter your address'
            value={this.state.address}
          />
        </div>
      </div>
    )
  }
}
